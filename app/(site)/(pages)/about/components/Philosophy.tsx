"use client";

import * as React from "react";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { ChevronRight } from "lucide-react";
import type { PhilosophyContent, PhilosophyStep } from "@/data/AboutContent";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/** Blue masked arrow (same as your Intro) */
function BlueArrow(): React.JSX.Element {
  return (
    <span
      aria-hidden
      className="inline-block h-5 w-5 bg-[#006DDB]"
      style={{
        WebkitMaskImage: "url(/assets/backgrounds/arrow.svg)",
        maskImage: "url(/assets/backgrounds/arrow.svg)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

/** Step images in /assets/about/ (reduced size will be handled via layout) */
const STEP_IMAGES: Record<string, string> = {
  "01": "/assets/aboutUs/01.webp",
  "02": "/assets/aboutUs/02.webp",
  "03": "/assets/aboutUs/03.webp",
  "04": "/assets/aboutUs/04.webp",
  "05": "/assets/aboutUs/05.webp",
};

/** Shared content width so tabs align with the paragraph width */
const CONTENT_W = "max-w-[900px]";

export default function AboutPhilosophy({ content }: { content: PhilosophyContent }): React.JSX.Element {
  const steps = content.steps as PhilosophyStep[];
  const [active, setActive] = React.useState<string | null>("01");

  const toggle = (id: string): void => {
    setActive((prev) => (prev === id ? null : id)); // single-open, same behavior as AboutTabs
  };

  const activeStep: PhilosophyStep | undefined = React.useMemo(
    () => (active ? steps.find((s) => s.id === active) : undefined),
    [active, steps]
  );

  return (
    <section className={`relative bg-white ${spaceGrotesk.className}`}>
      {/* —— Responsive background with white gutters on xl+ —— */}
      <div className="relative mx-0 xl:mx-16 2xl:mx-24">
        <div className="lg:-mx-3 xl:-mx-4">
          <div
            className="relative w-full bg-no-repeat"
            style={{
              backgroundImage: "url(/assets/backgrounds/phil_bg.webp)",
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              maxWidth: "1440px", // gutters appear on xl+
              marginInline: "auto",
            }}
          >
            {/* Title + intro */}
            <div className="relative z-10 px-5 md:px-10 xl:px-10 py-20 md:py-25">
              <div className={`${CONTENT_W} mx-auto`}>
                <div className="flex items-center justify-center gap-2 text-[#006DDB]">
                  <BlueArrow />
                  <span className="text-[18px] font-medium tracking-wide uppercase">
                    {content.title}
                  </span>
                </div>

                <div className="mt-4 space-y-5 text-center">
                  {content.body.split("\n").map((p, i) => (
                    <p
                      key={i}
                      className="mx-auto text-[18px] leading-8 text-[#616161] font-medium max-w-[900px]"
                    >
                      {p.trim()}
                    </p>
                  ))}
                </div>
              </div>

              {/* ---------- DESKTOP TABS (lg+) ---------- */}
              <div className={`${CONTENT_W} mx-auto mt-8 hidden lg:block`}>
                <div className="grid grid-cols-5 bg-white">
                  {steps.map((t, idx) => {
                    const isActive = active === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => toggle(t.id)}
                        className={[
                          "group relative isolate flex items-center justify-center gap-2",
                          "text-[18px] font-semibold transition-colors",
                          // reduced Y padding
                          "py-1.5 min-h-[44px]",
                          isActive ? "text-[#006DDB]" : "text-[#616161]",
                        ].join(" ")}
                        aria-pressed={isActive}
                      >
                        {/* active blue rail (only on active) */}
                        {isActive ? (
                          <span
                            aria-hidden
                            className="absolute inset-x-0 top-0 h-[3px] bg-[#006DDB]"
                          />
                        ) : null}

                        {/* number + chevron (hover slide; stays at end if active) */}
                        <span className="relative inline-flex items-center">
                          <span>{t.id}</span>
                          <ChevronRight
                            className={[
                              "ms-1 h-4 w-4 transition-all duration-700 rtl:rotate-180",
                              isActive
                                ? "opacity-100 translate-x-0 text-[#006DDB]"
                                : "opacity-0 -translate-x-2 text-[#006DDB] group-hover:opacity-100 group-hover:translate-x-0",
                            ].join(" ")}
                            strokeWidth={2.6} // slightly bolder line
                            aria-hidden
                          />
                        </span>

                        {/* vertical divider (except last) */}
                        {idx < steps.length - 1 ? (
                          <span className="pointer-events-none absolute end-0 top-1/2 -translate-y-1/2 h-7 w-px bg-black/15" />
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Desktop panel (smaller image) */}
              {activeStep ? (
                <div
                  className={`${CONTENT_W} mx-auto mt-8 hidden lg:grid lg:grid-cols-[360px_1fr] lg:gap-6 lg:items-start`}
                >
                  {/* image reduced */}
                  <div className="w-full">
                    <div className="relative w-full overflow-hidden max-w-[360px]">
                      <Image
                        src={STEP_IMAGES[activeStep.id] ?? "/assets/aboutUs/01.webp"}
                        alt={activeStep.title}
                        width={360}
                        height={240}
                        className="h-auto w-full rounded-lg"
                        priority
                      />
                    </div>
                  </div>

                  {/* text */}
                  <div>
                    <h3 className="text-[22px] md:text-[24px] font-extrabold text-[#1F1F1F]">
                      {activeStep.title}
                    </h3>
                    <p className="mt-3 text-[17px] leading-8 text-[#616161]">
                      {activeStep.body}
                    </p>
                  </div>
                </div>
              ) : null}

              {/* ---------- MOBILE/TABLET ACCORDION (<= lg) ---------- */}
              <div className={`${CONTENT_W} mx-auto mt-6 lg:hidden`}>
                <ul className="w-[95%] mx-auto divide-y divide-black/10 rounded-none bg-white ring-1 ring-black/10">
                  {steps.map((t) => {
                    const open = active === t.id;
                    return (
                      <li key={t.id}>
                        <button
                          type="button"
                          onClick={() => toggle(t.id)}
                          className={[
                            "w-full flex items-center justify-between",
                            // more compact + extra horizontal padding
                            "px-5 py-3.5 min-h-[44px]",
                            open ? "text-[#006DDB]" : "text-[#616161]",
                          ].join(" ")}
                          aria-expanded={open}
                          aria-controls={`philo-panel-${t.id}`}
                          id={`philo-acc-${t.id}`}
                        >
                          {/* Chevron LEFT of the label/number on mobile/tablet */}
                          <span className="flex items-center gap-3 text-[18px] font-semibold">
                            <ChevronRight
                              className={[
                                "h-5 w-5 transition-transform duration-300",
                                open ? "rotate-90 text-[#006DDB]" : "text-[#616161]",
                              ].join(" ")}
                              strokeWidth={2.6}
                              aria-hidden
                            />
                            <span className="leading-none">{t.id}</span>
                          </span>
                        </button>

                        <div
                          id={`philo-panel-${t.id}`}
                          role="region"
                          aria-labelledby={`philo-acc-${t.id}`}
                          className={[
                            "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out px-5",
                            open
                              ? "grid-rows-[1fr] opacity-100 py-3"
                              : "grid-rows-[0fr] opacity-0 py-0",
                          ].join(" ")}
                        >
                          <div className="min-h-0">
                            <div className="flex flex-col gap-4">
                              <div className="w-full">
                                <div className="relative w-full overflow-hidden ring-1 ring-black/10 max-w-[320px]">
                                  <Image
                                    src={STEP_IMAGES[t.id] ?? "/assets/aboutUs/01.webp"}
                                    alt={t.title}
                                    width={320}
                                    height={210}
                                    className="h-auto w-full"
                                  />
                                </div>
                              </div>
                              <div>
                                <h4 className="text-[19px] font-extrabold text-[#1F1F1F]">
                                  {t.title}
                                </h4>
                                <p className="mt-2 text-[17px] leading-7 text-[#616161]">
                                  {t.body}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* bottom padding — now handled by `py` on wrapper, so removed extra spacer */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
