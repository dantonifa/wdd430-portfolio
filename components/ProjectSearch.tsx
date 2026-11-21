'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function ProjectSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', '1');
    if (term.trim()) {
      params.set('query', term.trim());
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      type="search"
      placeholder="Search projects..."
      aria-label="Search projects"
      defaultValue={searchParams.get('query')?.toString() ?? ''}
      onChange={(e) => handleSearch(e.target.value)}
      className="w-full max-w-md rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-white placeholder-zinc-400 focus:border-blue-500 focus:outline-none"
    />
  );
}