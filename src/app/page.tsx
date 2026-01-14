// src/app/page.tsx
import Link from "next/link";
import { projects } from "@/components/data/projects";

export default function HomePage() {
  const featured = projects.slice(0, 2); // GAS, X-ink (데이터 순서 기준)

  return (
    <div className="py-12">
      {/* Hero */}
      <section className="rounded-3xl border border-gray-200 p-8 md:p-10">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Systems Portfolio · GA / IT Ops · Full-stack
          </div>

          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            운영을 “기준”으로 만들고,
            <br className="hidden md:block" />
            그 기준을 “시스템”으로 고정합니다.
          </h1>

          <p className="max-w-2xl text-base leading-7 text-gray-700">
            총무/전산 실무에서 자산관리·업무 프로세스를 제로베이스로 세팅했고, 반복되는 운영 문제를
            대시보드/권한/데이터 모델로 구현해 자동화합니다.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
            >
              View Projects →
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              View Work →
            </Link>

            {/* 외부 링크는 우선 #로, 나중에 교체 */}
            <a
              href="#"
              className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              GitHub
            </a>
            <a
              href="#"
              className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              Notion
            </a>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Card title="운영 관점 설계">
          기준(정책/프로세스)을 먼저 잡고, 화면·권한·데이터로 “운영 가능한 형태”로 고정합니다.
        </Card>
        <Card title="표준화 & 문서화">
          자산 분류/상태/필수 필드 정의, CSV 템플릿, 업무 흐름 문서를 만들어 팀이 따라오게 합니다.
        </Card>
        <Card title="자동화 & 확장성">
          알림/갱신/로그/권한을 기본 골격으로 두고, 조직 규모가 커져도 유지되는 구조를 만듭니다.
        </Card>
      </section>

      {/* Featured Projects */}
      <section className="mt-12">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-gray-600 hover:text-gray-900">
            All projects →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-3xl border border-gray-200 p-6 hover:bg-gray-50"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold">{p.title}</div>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{p.summary}</p>
                </div>
                <span className="text-sm text-gray-500 group-hover:text-gray-900">→</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.slice(0, 5).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-3xl border border-gray-200 p-8">
        <h2 className="text-xl font-semibold">Want the full story?</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-700">
          각 프로젝트는 Problem → Role → Architecture → Features → Troubleshooting → Results 순서로
          케이스 스터디 형태로 정리되어 있습니다.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
          >
            Browse Case Studies →
          </Link>
          <Link
            href="/work"
            className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
          >
            View Experience →
          </Link>
        </div>
      </section>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-gray-200 p-6">
      <div className="text-base font-semibold">{title}</div>
      <p className="mt-2 text-sm leading-6 text-gray-700">{children}</p>
    </div>
  );
}
