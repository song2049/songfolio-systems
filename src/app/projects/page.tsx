// src/app/projects/page.tsx
import Link from "next/link";
import { projects } from "@/components/data/projects";

export default function ProjectsPage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold">Projects</h1>

      <ul className="mt-4 space-y-2">
        {projects.map((p) => (
          <li key={p.slug} className="rounded-lg border p-3 hover:bg-gray-50">
            {/* 이 링크가 모달을 띄우는 트리거가 됨 (레이아웃이 제대로면) */}
            <Link href={`/projects/${p.slug}`} className="block">
              <div className="font-medium">{p.title}</div>
              <div className="text-sm text-gray-500">{p.summary}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
