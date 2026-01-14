// src/components/project-card-grid.tsx
import Link from "next/link";
import { projects } from "@/components/data/projects";

export function ProjectCardGrid() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Projects
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
              운영을 시스템으로 만든 사례
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
              카드 클릭 → 모달에서 프로젝트 상세(문제/해결/구현/성과)를 확인할 수 있어요.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
          >
            전체 보기 →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -inset-20 bg-gradient-to-b from-gray-900/[0.06] via-transparent to-transparent" />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-xs text-gray-500">{p.category}</div>
                  <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] text-gray-700">
                    {p.stack?.slice(0, 2).join(" · ") ?? "Case Study"}
                  </span>
                </div>

                <div className="mt-3 text-lg font-semibold tracking-tight text-gray-900">
                  {p.title}
                </div>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                  {p.summary}
                </p>

                {p.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 4).map((t: string) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] text-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gray-900">
                  자세히 보기
                  <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-xs text-gray-500">
          * 상세는 모달/페이지 모두 지원 (직접 링크 공유 가능)
        </div>
      </div>
    </section>
  );
}
