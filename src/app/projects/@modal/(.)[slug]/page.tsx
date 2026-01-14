// src/app/projects/@modal/(.)[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/components/data/projects";

export default function ProjectModalPage({
  params,
}: {
  params: { slug: string };
}) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-3xl rounded-xl bg-white p-6 shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-lg font-semibold">{p.title}</h2>

          {/* 닫기: 보통 뒤로가기 or 목록으로 */}
          <Link
            href="/projects"
            className="rounded-md border px-3 py-1 text-sm hover:bg-gray-50"
          >
            닫기
          </Link>
        </div>

        <p className="mt-2 text-gray-600">{p.summary}</p>

        <div className="mt-6">
          {/* 여기에 상세 컴포넌트/슬라이더를 모달에서도 동일 재사용 */}
          {/* <ImageSlider images={p.images} /> */}
          {/* <ProjectDetail project={p} /> */}
        </div>

        <div className="mt-6 flex justify-end">
          {/* 모달에서 “상세 페이지로 이동”도 가능 */}
          <Link
            href={`/projects/${p.slug}`}
            className="rounded-md bg-black px-4 py-2 text-sm text-white"
          >
            상세 페이지로 열기
          </Link>
        </div>
      </div>
    </div>
  );
}
