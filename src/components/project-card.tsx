import Link from "next/link";
import type { Project } from "@/components/data/projects";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-2xl border border-gray-200 p-4">
      <h3 className="text-lg font-semibold">
        <Link href={`/projects/${p.slug}`} className="hover:underline">
          {p.title}
        </Link>
      </h3>

      <p className="mt-2 text-gray-700 leading-7">{p.summary}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-700">
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}
