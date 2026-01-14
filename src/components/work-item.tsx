// src/components/work-item.tsx
import type { WorkCase } from "@/components/data/work";

export function WorkItem({ w }: { w: WorkCase }) {
  return (
    <article className="rounded-3xl border border-gray-200 p-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold">{w.company}</div>
          <div className="mt-1 text-sm text-gray-700">
            {w.team ? `${w.team} · ` : ""}
            {w.role}
          </div>
        </div>
        <div className="text-sm text-gray-500">{w.period}</div>
      </header>

      <p className="mt-4 text-sm leading-6 text-gray-700">{w.summary}</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Section title="Responsibilities">
          <ul className="list-disc pl-5 text-sm leading-6 text-gray-700">
            {w.responsibilities.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Section>

        <Section title="Achievements">
          <div className="space-y-3">
            {w.achievements.map((a) => (
              <div key={`${a.label}-${a.value}`} className="rounded-2xl border border-gray-200 p-4">
                <div className="text-sm font-semibold">{a.label}</div>
                <div className="mt-1 text-sm text-gray-800">{a.value}</div>
                {a.note ? <div className="mt-1 text-xs text-gray-500">{a.note}</div> : null}
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <PillList title="Skills" items={w.skills} />
        <PillList title="Tools" items={w.tools} />
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <div className="mt-2">{children}</div>
    </section>
  );
}

function PillList({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((x) => (
          <span key={x} className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-700">
            {x}
          </span>
        ))}
      </div>
    </section>
  );
}
