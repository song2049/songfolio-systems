// src/app/page.tsx
import Link from "next/link";
import { projects } from "@/components/data/projects";
import { ExperienceCardGrid } from "@/components/experience-card-grid";

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

          <div>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              운영을 “기준”으로 만들고,
              <br className="hidden md:block" />
              시스템으로 고도화합니다.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
              총무/IT 운영 경험을 바탕으로, 자산·계약·구매·권한·로그·배포까지
              운영 관점에서 시스템을 설계하고 구현합니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900"
            >
              View case studies →
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium hover:bg-gray-50"
            >
              View Experience →
            </Link>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <Card title="Operations First">
              실무에서 바로 쓰는 기준(프로세스/정책/권한/로그)을 우선 설계합니다.
            </Card>
            <Card title="Asset & Vendor Control">
              자산·계약·벤더·갱신 주기를 데이터로 묶고, 추적 가능하게 만듭니다.
            </Card>
            <Card title="Automation & Scalability">
              알림/갱신/로그/권한을 기본 골격으로 두고, 조직 규모가 커져도 유지되는
              구조를 만듭니다.
            </Card>
          </div>
        </div>
      </section>

      {/* ✅ Experience (home) */}
      <ExperienceCardGrid />

      {/* Featured Projects */}
      <section className="mt-12">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <Link
            href="/projects"
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm hover:bg-gray-50"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="rounded-3xl border border-gray-200 p-6 hover:bg-gray-50"
            >
              <div className="text-sm text-gray-500">{p.category}</div>
              <div className="mt-2 text-lg font-semibold">{p.title}</div>
              <p className="mt-2 text-sm leading-6 text-gray-700">{p.summary}</p>
              <div className="mt-4 text-sm font-medium">Open →</div>
            </Link>
          ))}
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
