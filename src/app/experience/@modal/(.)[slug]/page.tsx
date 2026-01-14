// src/app/experience/@modal/(.)[slug]/page.tsx
import { notFound } from "next/navigation";
import { experiences } from "@/components/data/experience";
import { ExperienceDetail } from "@/components/experience-detail";
import { Modal } from "@/components/modal";

export default async function ExperienceModalPage({
  params,
}: {
  // ✅ Next 16: intercepting route에서 params가 Promise로 들어오는 케이스 대응
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const exp = experiences.find((x) => x.slug === slug);
  if (!exp) return notFound();

  return (
    <Modal title="경력기술서" subtitle={`${exp.company} · ${exp.role}`} closeHref="/experience">
      <ExperienceDetail exp={exp} />
    </Modal>
  );
}
