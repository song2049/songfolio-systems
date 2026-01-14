// src/components/experience-detail.tsx
import { Experience } from "@/components/data/experience";

export function ExperienceDetail({ exp }: { exp: Experience }) {
  return (
    <article className="space-y-8">
      <header>
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span className="rounded-full border border-black/10 bg-white px-3 py-1">
            {exp.period}
          </span>
          <span className="rounded-full border border-black/10 bg-white px-3 py-1">
            {exp.company}
          </span>
          <span className="rounded-full border border-black/10 bg-white px-3 py-1">
            {exp.role}
          </span>
        </div>

        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
          {exp.company} · {exp.role}
        </h1>
        <p className="mt-3 text-sm leading-7 text-gray-600">{exp.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {exp.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="grid gap-4">
        {exp.details.map((sec) => (
          <section
            key={sec.title}
            className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm ring-1 ring-black/5"
          >
            <h3 className="text-sm font-semibold text-gray-900">{sec.title}</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
              {sec.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900/50" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
