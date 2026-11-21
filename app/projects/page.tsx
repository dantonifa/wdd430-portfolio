import { Suspense } from "react";
import {
  fetchFilteredProjects,
  fetchProjectsPages,
} from "../../lib/projects-db";
import { ProjectSearch } from "../../components/ProjectSearch";
import { Pagination } from "../../components/Pagination";

async function ProjectsList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const projects = await fetchFilteredProjects(query, currentPage);

  if (projects.length === 0) {
    return (
      <p className="rounded-lg bg-zinc-900 p-6 text-zinc-400">
        No projects found matching &ldquo;{query}&rdquo;.
      </p>
    );
  }

  return (
    <div className="grid gap-4">
      {projects.map((project) => (
        <article
          key={project.id}
          className="rounded-lg bg-zinc-900 p-6 text-white shadow"
        >
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="mt-2 text-zinc-300">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded bg-zinc-800 px-2.5 py-1 text-xs text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-blue-400 hover:underline"
            >
              View Repository →
            </a>
          )}
        </article>
      ))}
    </div>
  );
}

async function ProjectsResults({
  searchParamsPromise,
}: {
  searchParamsPromise?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await searchParamsPromise;
  const query = searchParams?.query ?? "";
  const currentPage = Math.max(1, Number(searchParams?.page) || 1);
  const totalPages = await fetchProjectsPages(query);

  return (
    <>
      <Suspense
        key={`${query}-${currentPage}`}
        fallback={<p className="text-zinc-500">Loading projects...</p>}
      >
        <ProjectsList query={query} currentPage={currentPage} />
      </Suspense>

      <Suspense fallback={null}>
        <Pagination totalPages={totalPages} />
      </Suspense>
    </>
  );
}

export default function ProjectsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  return (
    <main className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">All Projects</h1>

      <Suspense
        fallback={
          <div className="h-10 w-full max-w-md rounded-lg bg-zinc-900" />
        }
      >
        <ProjectSearch />
      </Suspense>

      <Suspense fallback={<p className="text-zinc-500">Loading projects...</p>}>
        <ProjectsResults searchParamsPromise={props.searchParams} />
      </Suspense>
    </main>
  );
}
