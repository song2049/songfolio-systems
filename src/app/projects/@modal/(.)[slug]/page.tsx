// src/app/projects/@modal/(.)[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/components/data/projects";
import { Modal } from "@/components/modal";

type ProjectLike = {
  slug: string;
  title: string;
  summary?: string;
  category?: string;
  period?: string;
  stack?: string[];
  tags?: string[];
  role?: string;
  highlights?: string[]; // 없으면 summary만 보여줌
  problem?: string;
  approach?: string;
  outcome?: string;
  links?: { label: string; href: string }[];
};

export default async function ProjectModalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const p = projects.find((x) => x.slug === slug) as unknown as ProjectLike | undefined;
  if (!p) return notFound();

  const pills = [
    p.category,
    p.period,
    p.role,
    ...(p.stack ?? []),
  ].filter(Boolean) as string[];

  const tags = (p.tags ?? []).filter(Boolean);

  return (
    <Modal title="Case Study" subtitle={p.title} closeHref="/projects">
      <article className="space-y-8">
        {/* Meta */}
        <header>
          {pills.length ? (
            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
              {pills.slice(0, 6).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
            {p.title}
          </h1>

          {p.summary ? (
            <p className="mt-3 text-sm leading-7 text-gray-600">{p.summary}</p>
          ) : null}

          {tags.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.slice(0, 8).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </header>

        {/* Sections */}
        <div className="grid gap-4">
          {/* 핵심 요약(하이라이트) */}
          {p.highlights?.length ? (
            <section className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm ring-1 ring-black/5">
              <h3 className="text-sm font-semibold text-gray-900">핵심 요약</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
                {p.highlights.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900/50" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Problem / Approach / Outcome (있을 때만) */}
          {p.problem ? (
            <Section title="문제" text={p.problem} />
          ) : null}

          {p.approach ? (
            <Section title="해결/접근" text={p.approach} />
          ) : null}

          {p.outcome ? (
            <Section title="결과" text={p.outcome} />
          ) : null}

          {/* 링크 (있을 때만) */}
          {p.links?.length ? (
            <section className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm ring-1 ring-black/5">
              <h3 className="text-sm font-semibold text-gray-900">Links</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
                  >
                    {l.label} →
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-end gap-2">
          <Link
            href={`/projects/${p.slug}`}
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
          >
            상세 페이지로 →
          </Link>
        </div>
      </article>
    </Modal>
  );
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <section className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm ring-1 ring-black/5">
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-gray-700">{text}</p>
    </section>
  );
}
