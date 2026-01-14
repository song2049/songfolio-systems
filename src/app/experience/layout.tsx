// src/app/experience/layout.tsx
import type { ReactNode } from "react";

export default function ExperienceLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
