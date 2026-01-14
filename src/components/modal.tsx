// src/components/modal.tsx
"use client";

import { useRouter } from "next/navigation";

export function Modal({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={close}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <div className="text-sm font-semibold text-gray-900">{title ?? "Detail"}</div>
          <button
            onClick={close}
            className="rounded-full border border-gray-200 px-3 py-1 text-sm hover:bg-gray-50"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="max-h-[85vh] overflow-auto px-6 pb-6">
          {children}
        </div>
      </div>
    </div>
  );
}
