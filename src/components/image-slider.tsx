"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export function ImageSlider({ images, altPrefix = "Project screenshot" }: { images: string[]; altPrefix?: string }) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [idx, setIdx] = useState(0);

  if (!safeImages.length) return null;

  const prev = () => setIdx((p) => (p - 1 + safeImages.length) % safeImages.length);
  const next = () => setIdx((p) => (p + 1) % safeImages.length);

  return (
    <div className="rounded-2xl border border-gray-200 p-4">
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={safeImages[idx]}
          alt={`${altPrefix} ${idx + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 980px) 100vw, 980px"
          priority
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={prev}
          className="rounded-full border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50"
        >
          ← Prev
        </button>

        <div className="text-sm text-gray-600">
          {idx + 1} / {safeImages.length}
        </div>

        <button
          type="button"
          onClick={next}
          className="rounded-full border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50"
        >
          Next →
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {safeImages.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            onClick={() => setIdx(i)}
            className={[
              "h-2 w-2 rounded-full border border-gray-300",
              i === idx ? "bg-gray-900" : "bg-gray-200 hover:bg-gray-300",
            ].join(" ")}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
