// src/app/work/page.tsx
import { WorkItem } from "@/components/work-item";
import { workCases } from "@/components/data/work";

export default function WorkPage() {
  return (
    <div className="py-12">
      <header className="rounded-3xl border border-gray-200 p-8">
        <h1 className="text-3xl font-semibold tracking-tight">Work</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-700">
          총무/전산 업무에서 자산관리 기준 수립, 실사, 협력사 운영, 문서화/표준화를 통해
          “운영이 되는 시스템”을 만드는 경험을 정리했습니다.
        </p>
      </header>

      <div className="mt-8 grid gap-6">
        {workCases.map((w) => (
          <WorkItem key={`${w.company}-${w.period}`} w={w} />
        ))}
      </div>
    </div>
  );
}
