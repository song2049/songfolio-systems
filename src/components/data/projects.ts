// components/data/projects.ts
export type CaseSection = {
  title: string;
  body?: string;
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  period?: string;
  role?: string;
  stack: string[];
  links?: { label: string; href: string }[];
  images?: string[];
  // 케이스 스터디용 섹션들
  sections: CaseSection[];
};

export const projects: Project[] = [
  {
    slug: "gas",
    title: "GAS (General Affair Asset System)",
    summary:
      "총무/전산 자산관리 시스템. 자산 등록/배정/반납, 권한 기반 UX, CSV import, 알림 로그까지 운영 관점으로 설계.",
    period: "2025–Now",
    role: "Full-stack (기획 · 설계 · 구현 · 배포)",
    stack: ["Next.js(App Router)", "Prisma", "MySQL", "Nginx", "PM2"],
    links: [
      { label: "Repo", href: "#" },
      { label: "Demo", href: "#" },
    ],
    sections: [
      {
        title: "Problem",
        body:
          "자산관리 기준이 없거나 엑셀 중심으로 흩어진 환경에서, 실사/구매/사용/반납 흐름이 단절되고 갱신·좌석·비용 추적이 어려운 문제가 반복됨.",
      },
      {
        title: "My Role",
        bullets: [
          "운영 프로세스(기준/정책) 정의 → 화면/데이터 모델로 시스템화",
          "Prisma 스키마 설계 및 마이그레이션/시드 구성",
          "권한 기반 라우트 보호 + UI 노출 제어",
          "배포 환경(EC2, Nginx, PM2) 구성 및 장애 대응",
        ],
      },
      {
        title: "Architecture",
        bullets: [
          "Next.js(App Router) 기반 Admin Dashboard",
          "Prisma + MySQL로 자산/벤더/부서/배정/로그 모델링",
          "Nginx reverse proxy + 정적 업로드 경로 분리",
        ],
      },
      {
        title: "Key Features",
        bullets: [
          "자산 등록/조회/수정 + 동적 자산 타입(슬러그 기반)",
          "CSV Import(헤더 매핑)로 대량 등록 지원",
          "권한(permissions) 기반 메뉴/버튼 숨김 처리",
          "알림 로그/갱신 주기 기반 운영 확장",
        ],
      },
      {
        title: "Troubleshooting",
        bullets: [
          "업로드 경로(public/uploads vs 서버 디렉토리) 혼선 해결",
          "Next image 최적화(_next/image)와 정적 파일 서빙 충돌 이슈 정리",
        ],
      },
      {
        title: "Results",
        bullets: [
          "자산 데이터 표준화(필드/유형/상태) 기반 마련",
          "실사/갱신/좌석/비용 추적을 ‘업무 흐름’으로 고정할 수 있는 토대 구축",
        ],
      },
    ],
    images: [
      "/projects/gas/01.png",
      "/projects/gas/02.png",
      "/projects/gas/03.png",
    ],
  },

  {
    slug: "x-ink",
    title: "X-ink",
    summary:
      "개인/기업 플로우 분리된 아웃소싱·매칭 플랫폼. 사용자 유형별 UI/권한 흐름을 설계.",
    period: "2025",
    role: "Frontend 중심 (기획 · UI/UX · 구현)",
    stack: ["Next.js", "React", "REST API"],
    links: [{ label: "Repo", href: "#" }],
    // ✅ 여기 추가
    images: [
      "/projects/x-ink/01.png",
      "/projects/x-ink/02.png",
    ],
    sections: [
      { title: "Problem", body: "개인/기업 요구가 다른 매칭 과정에서 UX가 복잡해지고 전환이 떨어지는 문제." },
      { title: "My Role", bullets: ["화면 플로우 설계", "유형별 정보 구조화", "프론트 구현 및 컴포넌트화"] },
      { title: "Key Features", bullets: ["유저 타입별 진입/등록 플로우 분리", "리스트/필터/상세 UX"] },

    ],
  },
];
