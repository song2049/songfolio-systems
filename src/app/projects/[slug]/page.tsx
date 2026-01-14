// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/components/data/projects";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold">{p.title}</h1>
      <p className="mt-2 text-gray-600">{p.summary}</p>

      {/* 여기 아래는 너가 이미 붙여둔 ImageSlider / ProjectDetail 넣으면 됨 */}
      {/* <ImageSlider images={p.images} /> */}
      {/* <ProjectDetail project={p} /> */}
    </main>
  );
}
