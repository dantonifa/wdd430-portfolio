// implement a GET handler that returns all projects. Support optional filtering with ?type=opensource or ?type=school.
import { getProjects } from '../../../lib/projects-db';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const type = url.searchParams.get('type');
  const projects = await getProjects(type);
  return new Response(JSON.stringify(projects), {
    headers: { 'Content-Type': 'application/json' },
  });
}