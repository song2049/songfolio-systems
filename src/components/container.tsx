// components/container.tsx
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px" }}>
      {children}
    </div>
  );
}
