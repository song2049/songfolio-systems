// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/footer";
import { Container } from "@/components/container"

export const metadata: Metadata = {
  title: "songfolio-systems",
  description: "Portfolio — Systems / GA / IT Ops / Full-stack",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <SiteHeader />
        <main>
          <Container>{children}</Container>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
