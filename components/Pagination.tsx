"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

  function createPageURL(pageNumber: number | string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(pageNumber));
    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) {
    return null;
  }

  const prevPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(totalPages, currentPage + 1);

  return (
    <nav
      aria-label="Pagination"
      className="mt-6 flex items-center justify-between"
    >
      {currentPage <= 1 ? (
        <span
          aria-disabled="true"
          className="cursor-not-allowed rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-600"
        >
          Previous
        </span>
      ) : (
        <Link
          href={createPageURL(prevPage)}
          className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-white transition-colors hover:bg-zinc-800"
        >
          Previous
        </Link>
      )}

      <span className="text-sm text-zinc-400">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage >= totalPages ? (
        <span
          aria-disabled="true"
          className="cursor-not-allowed rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-600"
        >
          Next
        </span>
      ) : (
        <Link
          href={createPageURL(nextPage)}
          className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-white transition-colors hover:bg-zinc-800"
        >
          Next
        </Link>
      )}
    </nav>
  );
}
