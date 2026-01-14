// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Project, projects } from "@/components/data/projects";
import { ImageSlider } from "@/components/image-slider";
import { ProjectDetail } from "@/components/project-detail";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) { 
  const { slug } = await params

  const p = projects.find((x) => x.slug === slug);
  if (!p) return notFound();
  if (projects.length <= 0) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold">{p.title}</h1> 
      <p className="mt-2 text-gray-600">{p.summary}</p>

      {/* 여기 아래는 너가 이미 붙여둔 ImageSlider / ProjectDetail 넣으면 됨 */}
      <ImageSlider images={p.images as string[]} /> 
      <ProjectDetail p={p as Project} />
    </main>
  );
}
