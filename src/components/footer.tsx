// components/footer.tsx
import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid rgba(0,0,0,0.08)", marginTop: 40 }}>
      <Container>
        <div style={{ fontSize: 12, opacity: 0.7 }}>
          © {new Date().getFullYear()} songfolio-systems
        </div>
      </Container>
    </footer>
  );
}
