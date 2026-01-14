// components/site-header.tsx
import Link from "next/link";
import { Nav } from "@/components/nav"
import { Container } from "@/components/container";


export function SiteHeader() {
  return (
    <header
      style={{
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        background: "white",
        zIndex: 10,
      }}
    >
      <Container>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", fontWeight: 700 }}>
            songfolio-systems
          </Link>
          <Nav />
        </div>
      </Container>
    </header>
  );
}
