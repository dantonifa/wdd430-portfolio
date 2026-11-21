import { Suspense } from 'react';
import { getProjects } from '../../lib/projects-db';

async function ProjectsList() {
  const projects = await getProjects();
  // ...
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

export default function ProjectsPage() {
  return (
    <main className="p-6">
      <h1 className="mb-6 text-2xl font-bold">All Projects</h1>
      <Suspense fallback={<p className="text-zinc-500">Loading projects...</p>}>
        <ProjectsList />
      </Suspense>
    </main>
  );
}