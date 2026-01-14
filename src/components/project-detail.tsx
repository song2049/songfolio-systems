// src/components/project-detail.tsx
import Link from "next/link";
import type { Project } from "@/components/data/projects";
import { ImageSlider } from "@/components/image-slider";
import type { ReactNode } from "react";

export function ProjectDetail({ p, showBackLink = true }: { p: Project; showBackLink?: boolean }) {
  return (
    <div className="py-10">
      {showBackLink ? (
        <Link href="/projects" className="text-sm text-gray-600 hover:text-gray-900">
          ← Projects
        </Link>
      ) : null}

      <header className="mt-6">
        <h1 className="text-3xl font-semibold tracking-tight">{p.title}</h1>
        <p className="mt-3 text-gray-700 leading-7">{p.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-700"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-700">
          {p.period ? (
            <div>
              <span className="text-gray-500">Period:</span> {p.period}
            </div>
          ) : null}
          {p.role ? (
            <div>
              <span className="text-gray-500">Role:</span> {p.role}
            </div>
          ) : null}
        </div>

        {p.links?.length ? (
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            {p.links.map((l, index) => (
              <a
                key={l.href + index}
                href={l.href}
                className="rounded-full border border-gray-200 px-4 py-2 hover:bg-gray-50"
                target="_blank"
                rel="noreferrer"
              >
                {l.label} →
              </a>
            ))}
          </div>
        ) : null}
      </header>

      {p.images?.length ? (
        <div className="mt-8">
          <ImageSlider images={p.images} altPrefix={`${p.title} screenshot`} />
        </div>
      ) : null}

      <div className="mt-10 space-y-10">
        {p.sections.map((s) => (
          <section key={s.title} className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">{s.title}</h2>

            {s.body ? <p className="mt-3 text-gray-700 leading-7">{s.body}</p> : null}

            {s.bullets?.length ? (
              <ul className="mt-3 list-disc pl-5 text-gray-700 leading-7">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}

export function ProjectDetailModern({
  meta,
  sections,
}: {
  meta: {
    period?: string;
    title: string;
    subtitle?: string;
    pills?: string[];
  };
  sections: { title: string; content: ReactNode }[];
}) {
  return (
    <article className="space-y-8">
      <header>
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
          {meta.period ? (
            <span className="rounded-full border border-black/10 bg-white px-3 py-1">
              {meta.period}
            </span>
          ) : null}
          {meta.pills?.map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
          {meta.title}
        </h1>

        {meta.subtitle ? (
          <p className="mt-3 text-sm leading-7 text-gray-600">{meta.subtitle}</p>
        ) : null}
      </header>

      <div className="grid gap-4">
        {sections.map((sec) => (
          <section
            key={sec.title}
            className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm ring-1 ring-black/5"
          >
            <h3 className="text-sm font-semibold text-gray-900">{sec.title}</h3>
            <div className="mt-3 text-sm leading-7 text-gray-700">
              {sec.content}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
