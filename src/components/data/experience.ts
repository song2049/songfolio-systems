// src/components/data/experience.ts
export type Experience = {
  slug: string;
  company: string;
  role: string;
  period: string; // "2023.01 - 2024.06"
  tags: string[];
  summary: string;
  details: {
    title: string;
    bullets: string[];
  }[];
};

export const experiences: Experience[] = [
  {
    slug: "corp-it-ga-asset",
    company: "VA Corporation",
    role: "총무 / IT / 자산관리",
    period: "20XX.XX - 20XX.XX",
    tags: ["자산실사", "OA", "H/W", "S/W", "벤더관리", "구매/계약"],
    summary:
      "기준이 없던 환경에서 자산관리 체계를 제로베이스로 수립하고, 실사-정합성-운영 프로세스를 구축.",
    details: [
      {
        title: "핵심 역할",
        bullets: [
          "자산관리 기준/정책 수립 (분류체계, 태깅, 반납/폐기 기준 포함)",
          "전사 자산 실사 주도 및 누락/중복 데이터 정합성 개선",
          "OA/장비/라이선스 구매 및 벤더 커뮤니케이션(견적, 발주, 납기, 정산)",
        ],
      },
      {
        title: "성과",
        bullets: [
          "자산 현황 파악 불가 → 실사/정리 후 관리 가능 상태로 전환",
          "반납/재배치/폐기 프로세스 정리로 운영 효율 개선",
        ],
      },
    ],
  },
   {
    slug: "슬러그",
    company: "VA ",
    role: "총무 / IT / 자산관리",
    period: "20XX.XX - 20XX.XX",
    tags: ["자산실사", "OA", "H/W", "S/W", "벤더관리", "구매/계약"],
    summary:
      "기준이 없던 환경에서 자산관리 체계를 제로베이스로 수립하고, 실사-정합성-운영 프로세스를 구축.",
    details: [
      {
        title: "핵심 역할",
        bullets: [
          "자산관리 기준/정책 수립 (분류체계, 태깅, 반납/폐기 기준 포함)",
          "전사 자산 실사 주도 및 누락/중복 데이터 정합성 개선",
          "OA/장비/라이선스 구매 및 벤더 커뮤니케이션(견적, 발주, 납기, 정산)",
        ],
      },
      {
        title: "성과",
        bullets: [
          "자산 현황 파악 불가 → 실사/정리 후 관리 가능 상태로 전환",
          "반납/재배치/폐기 프로세스 정리로 운영 효율 개선",
        ],
      },
    ],
  },
  
  // 필요하면 계속 추가
];
