import { Suspense } from 'react';
import { getProjects } from '../../../lib/projects-db';

async function ProjectsList() {
  const projects = await getProjects('school');


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
function SchoolProjectSkeleton() {
  return (
    <div className="grid gap-4 animate-pulse">
      <div className="h-44 rounded-lg bg-zinc-900 p-6">
        <div className="h-6 w-1/3 rounded bg-zinc-800" />
        <div className="mt-3 h-4 w-2/3 rounded bg-zinc-800" />
        <div className="mt-4 flex gap-2">
          <div className="h-6 w-16 rounded bg-zinc-800" />
          <div className="h-6 w-16 rounded bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}

export default function SchoolPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-bold">School Projects</h1>
      <Suspense fallback={<SchoolProjectSkeleton />}>
        <ProjectsList />
      </Suspense>
    </main>
  );
}