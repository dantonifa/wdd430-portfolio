// implement a GET handler that reads params.id, validates it, and returns either one project, 400 for invalid id, or 404 if not found.
import { getProjectById } from '../../../../lib/projects-db';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const idParam = url.pathname.split('/').pop();
  const id = Number(idParam);

  if (!idParam || isNaN(id)) {
    return new Response(JSON.stringify({ error: 'Invalid ID' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const project = await getProjectById(id);

  if (!project) {
    return new Response(JSON.stringify({ error: 'Project not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(project), {
    headers: { 'Content-Type': 'application/json' },
  });
}