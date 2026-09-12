"use client";

import * as React from "react";
import type { WhyCard } from "@/data/AboutContent";

/* Fixed two-digit tags to avoid 10/20 quirks */
const DIGITS: Record<number, string> = {
  1: "01",
  2: "02",
  3: "03",
  4: "04",
  5: "05",
  6: "06",
};

/* Recolorable/flip-able svg via mask */
function MaskIcon({ src, className = "" }: { src: string; className?: string }) {
  return (
    <span
      className={className}
      style={{
        backgroundColor: "currentColor",
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
      aria-hidden
    />
  );
}

/* same horizontal padding as AboutTabs */
const WRAP = "mx-auto max-w-[1450px] px-4 md:px-6 lg:px-10";

export default function WhyStelz({ title, intro, cards }: { title: string; intro: string; cards: WhyCard[] }): React.JSX.Element {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: "url(/assets/backgrounds/why_bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* darker overlay so the blue title is clearer */}
      <div className="pointer-events-none absolute inset-0 bg-black/30" />

      <div className={`relative ${WRAP} py-10`}>
        <header className="text-center">
          <h2 className="text-[30px] md:text-[36px] font-bold tracking-1 text-white">
            {title}
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-white/85">
            {intro}
          </p>
        </header>

        {/* cards: stack on mobile; equal height across rows */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {cards.map((card) => (
            <article
              key={card.id}
              className="group h-full min-h-[200px] rounded-sm bg-white/98 backdrop-blur ring-1 ring-black/5 shadow-sm transition-shadow hover:shadow-lg p-6"
            >
              {/* two columns inside each card */}
              <div className="grid grid-cols-[80px_1fr] items-start gap-2 h-full">
                {/* LEFT: icon + vertical number (single column container) */}
                <div className="relative flex flex-col items-center text-[#006DDB] transition-colors duration-300 group-hover:text-white">
                  <span className="flex h-[64px] w-[64px] items-center justify-center rounded-md bg-transparent transition-colors duration-300 group-hover:bg-[#006DDB]">
                    {/* FLIP horizontally on hover */}
                    <MaskIcon
                      src={card.icon}
                      className="h-15 w-15 transition-transform duration-500 will-change-transform group-hover:transform-[scaleX(-1)]"
                    />
                  </span>

                  {/* vertical two-digit label; 0 at the bottom as discussed */}
                  <span
                    className="mt-6 font-semibold text-neutral-200 tracking-tight"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      fontSize: 28,
                      lineHeight: 1,
                      fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial",
                    }}
                    aria-hidden
                  >
                    {DIGITS[card.id]}
                  </span>
                </div>

                {/* RIGHT: title + description (second column container) */}
                <div className="flex flex-col justify-start">
                  <h3 className="text-[24px] leading-snug font-extrabold text-[#1F1F1F]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[17px] leading-[1.65] text-[#616161]">
                    {card.text}
                  </p>
                  {/* spacer ensures consistent stretch if needed */}
                  <div className="mt-auto" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
