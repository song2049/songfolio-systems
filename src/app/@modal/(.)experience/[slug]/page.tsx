// src/app/@modal/(.)experience/[slug]/page.tsx
import { notFound } from "next/navigation";
import { experiences } from "@/components/data/experience";
import { ExperienceDetail } from "@/components/experience-detail";
import { Modal } from "@/components/modal";

export default async function HomeExperienceModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const exp = experiences.find((x) => x.slug === slug);
  if (!exp) return notFound();

  return (
    <Modal title="경력기술서" closeHref="/">
      <ExperienceDetail exp={exp} />
    </Modal>
  );
}
