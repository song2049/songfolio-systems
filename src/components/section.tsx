// components/section.tsx
export function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: "28px 0" }}>
      {eyebrow ? (
        <div style={{ fontSize: 12, letterSpacing: 1, opacity: 0.65, textTransform: "uppercase" }}>
          {eyebrow}
        </div>
      ) : null}
      <h2 style={{ margin: "10px 0 12px", fontSize: 22 }}>{title}</h2>
      <div style={{ opacity: 0.92, lineHeight: 1.65 }}>{children}</div>
    </section>
  );
}
