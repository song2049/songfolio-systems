// src/components/data/work.ts
export type WorkCase = {
  company: string;
  team?: string;
  role: string;
  period: string;
  summary: string;

  responsibilities: string[];
  achievements: { label: string; value: string; note?: string }[];

  skills: string[];
  tools: string[];
};

export const workCases: WorkCase[] = [
  // 1) 자산관리 제로베이스 + 실사 중심 케이스
  {
    company: "Company A (자산관리 제로베이스)",
    team: "GA / IT Ops",
    role: "총무·전산 (자산관리 기준 수립 · 실사 · 운영 정착)",
    period: "202X.XX – 202X.XX",
    summary:
      "기준이 없던 환경에서 HW/SW/OA 자산관리 체계를 제로베이스로 수립하고, 실사 → 정합 → 운영 프로세스를 표준화해 재현 가능한 운영 기반을 구축.",
    responsibilities: [
      "자산 분류/상태/필수 필드 정의 및 대장 표준화(엑셀/시트)",
      "전사 자산 실사(현장 확인, 미확인 자산 처리, 라벨링/정리)",
      "라이선스/구독 갱신 주기 관리 및 비용/좌석 파악",
      "자산 배정/반납/폐기 기준 수립 및 문서화",
    ],
    achievements: [
      { label: "체계 구축", value: "자산관리 기준/정책 수립", note: "분류·상태·프로세스 표준화" },
      { label: "정합률", value: "정합률 ↑ (수치 교체)", note: "실사 후 미확인/중복 데이터 정리" },
      { label: "운영 효율", value: "처리 시간 ↓ (수치 교체)", note: "체크리스트/템플릿 도입" },
    ],
    skills: ["자산관리", "실사 운영", "프로세스 설계", "표준화/문서화", "운영 개선"],
    tools: ["Excel/Sheets", "Notion", "OA/전산장비", "라이선스/구독 관리", "벤더 커뮤니케이션"],
  },

  // 2) 협력사(인테리어/가구/OA) + 발주/정산/계약 중심 케이스
  {
    company: "Company B (협력사/구매/정산 운영)",
    team: "GA",
    role: "총무 (발주·정산·업체 협업 · 오피스 환경 운영)",
    period: "202X.XX – 202X.XX",
    summary:
      "인테리어/가구/OA 등 다양한 협력사를 조율하며 발주·정산·납기·품질 관리를 수행하고, 사내 운영 문서를 정리해 업무 리드타임을 안정화.",
    responsibilities: [
      "인테리어/가구/OA 업체 커뮤니케이션(견적 비교, 납기 조율, 이슈 대응)",
      "발주/정산 프로세스 운영(필요 서류, 증빙, 비용 정리)",
      "오피스 환경(좌석/비품/공용장비) 운영 및 요청 대응",
      "업무 매뉴얼/가이드 문서화(정산 체크리스트, 요청 템플릿)",
    ],
    achievements: [
      { label: "비용 관리", value: "예산 내 집행률 ↑ (수치 교체)", note: "견적 비교/표준 서식으로 비용 통제" },
      { label: "리드타임", value: "처리 리드타임 ↓ (수치 교체)", note: "정산/발주 체크리스트 정착" },
      { label: "운영 품질", value: "클레임/재작업 ↓ (수치 교체)", note: "납기/검수 기준 고정" },
    ],
    skills: ["협력사 관리", "발주/정산", "오피스 운영", "문서화", "이슈 대응"],
    tools: ["견적서/발주서", "정산 증빙", "Notion", "Excel/Sheets"],
  },

  // 3) 시스템화/자동화 관점(네 포트폴리오랑 가장 연결되는 케이스)
  {
    company: "Company C (운영 시스템화/자동화)",
    team: "IT Ops",
    role: "총무·전산 (운영 시스템화 · 데이터 구조화)",
    period: "202X.XX – 202X.XX",
    summary:
      "반복되는 운영 업무를 ‘기준 → 데이터 → 화면/권한’으로 재구성하고, 시스템(GAS 등) 관점으로 확장 가능한 구조를 설계·구현.",
    responsibilities: [
      "운영 데이터 구조화(자산/부서/벤더/배정/로그 관점)",
      "권한 기반 접근/노출 설계(관리자/일반 관리자 등)",
      "CSV 업로드 등 대량 처리 플로우 설계(헤더/템플릿 기준화)",
      "배포/운영 환경 구성 및 장애 대응 경험(서버/프록시/정적 파일)",
    ],
    achievements: [
      { label: "시스템화", value: "운영 흐름을 화면/데이터로 고정", note: "업무 의존도 ↓, 인수인계 용이" },
      { label: "확장성", value: "동적 타입/권한 모델 기반", note: "조직 규모 커져도 유지되는 구조" },
      { label: "운영 안정", value: "배포/장애 대응 경험 축적", note: "정적 파일/경로/프록시 이슈 해결" },
    ],
    skills: ["운영 시스템 설계", "데이터 모델링", "권한/인증 UX", "자동화", "배포/운영"],
    tools: ["Next.js", "Prisma", "MySQL", "Nginx", "PM2", "GitHub"],
  },
];
