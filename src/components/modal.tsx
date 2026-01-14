// src/components/modal.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ModalProps = {
  title?: string;
  children: React.ReactNode;
  closeHref?: string;
  subtitle?: string;
};

export function Modal({
  title,
  subtitle,
  children,
  closeHref = "/projects",
}: ModalProps) {
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement | null>(null);

  // body scroll lock
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // ESC close
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.push(closeHref);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeHref, router]);

  // focus panel
  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title ? `${title} 모달` : "모달"}
    >
      {/* Backdrop */}
      <Link
        href={closeHref}
        aria-label="Close modal backdrop"
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl outline-none"
      >
        <div className="rounded-3xl border border-white/10 bg-white/85 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl">
          {/* Top bar */}
          <div className="flex items-start justify-between gap-4 border-b border-black/5 px-6 py-5">
            <div>
              {title ? (
                <h2 className="text-lg font-semibold tracking-tight text-gray-900">
                  {title}
                </h2>
              ) : null}
              {subtitle ? (
                <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
              ) : null}
            </div>

            <a
              href={closeHref}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-gray-900/60" />
              닫기
            </a>
          </div>

          {/* Content */}
          <div className="px-6 py-6">{children}</div>
        </div>

        {/* subtle glow */}
        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-b from-white/40 to-transparent blur-2xl" />
      </div>
    </div>
  );
}
