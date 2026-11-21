// lib/projects-db.ts
import { sql } from "@vercel/postgres";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows;
  }

  const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
  return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  return rows[0] ?? null;
}

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredProjects(
  query: string,
  currentPage: number,
): Promise<Project[]> {
  const safePage =
    Number.isFinite(currentPage) && currentPage > 0
      ? Math.floor(currentPage)
      : 1;
  const offset = (safePage - 1) * ITEMS_PER_PAGE;
  const pattern = `%${query.trim()}%`;

  const { rows } = await sql<Project>`
    SELECT * FROM projects
    WHERE
      title ILIKE ${pattern}
      OR description ILIKE ${pattern}
      OR array_to_string(technologies, ',') ILIKE ${pattern}
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `;

  return rows;
}

export async function fetchProjectsPages(query: string): Promise<number> {
  const pattern = `%${query.trim()}%`;

  const { rows } = await sql<{ count: string }>`
    SELECT COUNT(*)::text AS count FROM projects
    WHERE
      title ILIKE ${pattern}
      OR description ILIKE ${pattern}
      OR array_to_string(technologies, ',') ILIKE ${pattern}
  `;

  const totalItems = Number(rows[0]?.count ?? 0);
  return Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
}
