export default function Loading() {
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