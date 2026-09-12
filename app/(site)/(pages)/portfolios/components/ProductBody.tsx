// app/(site)/(pages)/portfolios/components/ProductBody.tsx
"use client";

import Image from "next/image";
import * as React from "react";
import type { ProductRecord } from "@/data/Products";
import type { AppMessages } from "@/data/i18n/messages";

const BLUE = "#0C41AA";
const RAIL = "#006DDB"

/* Icons */
function TickCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
      <circle cx="12" cy="12" r="10" fill="none" stroke={BLUE} strokeWidth="2" />
      <path d="M7 12.5l3 3 7-7" fill="none" stroke={BLUE} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Bullseye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...props}>
      <circle cx="12" cy="12" r="9" fill="none" stroke={BLUE} strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill={BLUE} />
    </svg>
  );
}

export default function ProductBody({ p, labels }: { p: ProductRecord; labels: AppMessages["product"] & AppMessages["common"] }) {
  return (
    <div className="space-y-10 md:space-y-12">
      {/* HERO — square, much larger, scales with screen, never cropped */}
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="relative w-full aspect-square">
          <Image
            src={p.hero.src}
            alt={p.hero.alt ?? p.title}
            fill
            priority
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 70vw, 1200px"
          />
        </div>
      </div>

      {/* SUBTITLE */}
      <h2 className="text-[28px] md:text-[36px] leading-tight tracking-tight text-[#111]">
        {p.subtitle}
      </h2>

      {/* DESCRIPTION CARD — blue rail + quote art (fixed) */}
      <section aria-labelledby="summary-title">
        <h3 id="summary-title" className="sr-only">{labels.summary}</h3>

        <div className="relative overflow-hidden rounded-md bg-[#F7F7F7]">
          {/* left blue rail */}
          <span aria-hidden className="absolute start-0 top-0 h-full w-[6px] rounded-s-md" style={{ backgroundColor: RAIL }} />

          {/* quote art bottom-right */}
          <Image
            src="/assets/products/blockquote.webp"
            alt=""
            width={220} height={250}
            className="pointer-events-none select-none absolute bottom-0 end-5"
            // Tailwind v4 doesn't ship opacity-15; use inline opacity
          />

          <div className="p-5 md:px-10 md:py-12">
            <p className="text-[20px] leading-8 text-[#616161]">{p.summary}</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section aria-labelledby="features-title">
        <h3 id="features-title" className="text-[36px] text-[#1F1F1F] tracking-tight">
          {labels.features}
        </h3>
        <ul className="mt-8 space-y-4">
          {p.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-[18px] leading-7 text-[#3b3b3b]">
              <span className="mt-0.5 shrink-0"><TickCircle /></span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* GALLERY — 2 square cells, no cropping */}
      <section aria-labelledby="gallery-title">
        <h3 id="gallery-title" className="sr-only">{labels.gallery}</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {p.gallery.slice(0, 2).map((g, i) => (
            <div key={i}>
              <div className="relative w-full aspect-square">
                <Image
                  src={g.src}
                  alt={g.alt ?? `${p.title} gallery ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 560px"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATIONS */}
      <section aria-labelledby="applications-title" className="pb-2">
        <h3 id="applications-title" className="text-[36px] font-medium text-[#1F1F1F] tracking-tight">
          {labels.applications}
        </h3>
        <div className="mt-8 border-y border-e border-gray-300 bg-white">
          <ul className="p-5 md:p-6 space-y-4">
            {p.applications.map((a, i) => (
              <li key={i} className="flex items-start gap-3 text-[18px] leading-7 text-[#1F1F1F]">
                <span className="mt-0.5 shrink-0"><Bullseye /></span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
