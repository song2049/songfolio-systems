// src/app/experience/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { experiences } from "@/components/data/experience";
import { ExperienceDetail } from "@/components/experience-detail";

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const exp = experiences.find((x) => x.slug === slug);
  if (!exp) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <Link href="/experience" className="text-sm text-gray-600 hover:underline">
        ← 목록으로
      </Link>

      <div className="mt-6">
        <ExperienceDetail exp={exp} />
      </div>
    </main>
  );
}
