// src/app/projects/layout.tsx
import type { ReactNode } from "react";

export default function ProjectsLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode; // <-- @modal slot
}) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
