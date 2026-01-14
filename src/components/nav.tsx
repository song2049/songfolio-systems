// components/nav.tsx
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
];

export function Nav() {
  return (
    <nav style={{ display: "flex", gap: 14, fontSize: 14 }}>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          style={{ textDecoration: "none", opacity: 0.85 }}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
