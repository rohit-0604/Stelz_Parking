"use client";

import * as React from "react";
import {
  type TabContent,
  type AboutSection,
  type RichParagraph,
  type RichSegment,
} from "@/data/AboutContent";

/* ------------------------------ render utils ------------------------------ */

function renderParagraph(p: RichParagraph, key: React.Key) {
  return (
    <p key={key} className="text-[17px] leading-7 text-[#616161]">
      {p.map((seg: RichSegment, i) =>
        seg.type === "bold" ? (
          <strong key={i} className="font-semibold text-[#616161]">
            {seg.text}
          </strong>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </p>
  );
}

function SectionBlock({ section }: { section: AboutSection }) {
  return (
    <div className="space-y-3">
      {/* conditional heading: only render if provided */}
      {section.heading ? (
        <h3 className="text-[22px] font-semibold text-[#2b2b2b]">
          {section.heading}
        </h3>
      ) : null}

      {section.paragraphs?.map((para, idx) => renderParagraph(para, idx))}

      {section.items?.length ? (
        <ul className="list-disc ps-6 space-y-2">
          {section.items.map((it, ix) => (
            <li key={ix} className="text-[17px] leading-7 text-[#616161]">
              {it.label ? (
                <strong className="font-semibold text-[#616161]">
                  {it.label}
                  {": "}
                </strong>
              ) : null}
              <span>{it.text}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function TabPanel({ content }: { content: TabContent }) {
  return (
    <div className="space-y-6">
      {content.sections.map((s, i) => (
        <SectionBlock key={i} section={s} />
      ))}
    </div>
  );
}

/* --------------------------------- UI ------------------------------------ */

const TAB_KEYS = ["about", "vision", "mission"] as const;
type TabKey = (typeof TAB_KEYS)[number];

export default function AboutTabs({ tabs, labels, sectionsLabel }: { tabs: Record<TabKey, TabContent>; labels: Record<TabKey, string>; sectionsLabel: string }): React.JSX.Element {
  // desktop: controlled tabs; mobile/tablet: accordions
  const [active, setActive] = React.useState<TabKey | null>(null); // no default open
  // for desktop view only
  const setDesktopActive = (key: TabKey) => setActive(key);

  return (
    /* full-bleed white bg to remove black gutters */
    <section className="relative py-0">
      <span aria-hidden className="absolute inset-0 bg-white" />
      <div className="relative mx-auto max-w-[1450px] px-4 md:px-10 pb-15">
        {/* ---------- Desktop tabs ---------- */}
        <div className="hidden md:block">
          <div
            role="tablist"
            aria-label={sectionsLabel}
            className="relative w-full overflow-hidden bg-[#F5F5F5]"
          >
            <div className="grid grid-cols-3">
              {TAB_KEYS.map((key, idx) => {
                const isActive = active === key || (active === null && key === "about"); // highlight About until user clicks
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${key}`}
                    id={`tab-${key}`}
                    onClick={() => setDesktopActive(key)}
                    className={[
                      "relative flex items-center justify-center py-4 text-center text-[18px] transition-colors",
                      isActive ? "font-semibold text-[#006DDB]" : "text-[#616161]",
                      "px-3",
                    ].join(" ")}
                  >
                    {/* blue top bar on active */}
                    {isActive ? (
                      <span
                        className="absolute inset-x-0 top-0 h-1 bg-[#006DDB]"
                        aria-hidden
                      />
                    ) : null}

                    {labels[key]}

                    {/* short vertical separator (not on last) with top/bottom gaps */}
                    {idx !== TAB_KEYS.length - 1 ? (
                      <span
                        aria-hidden
                        className="pointer-events-none absolute end-0 top-1/2 -translate-y-1/2 h-7 w-px bg-black/15"
                        style={{ marginTop: "-2px", marginBottom: "-2px" }}
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panels — show current only; default to About content when none selected yet */}
          <div className="mt-8">
            {TAB_KEYS.map((key) => {
              const show =
                (active === null && key === "about") || active === key;
              return (
                <div
                  key={key}
                  role="tabpanel"
                  id={`panel-${key}`}
                  aria-labelledby={`tab-${key}`}
                  hidden={!show}
                >
                  {show ? <TabPanel content={tabs[key]} /> : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------- Mobile/Tablet accordions ---------- */}
        <div className="md:hidden">
          <ul className="divide-y divide-black/10 bg-[#F5F5F5]">
            {TAB_KEYS.map((key) => {
              const open = active === key;
              return (
                <li key={key}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setActive(open ? null : key)}
                    className="flex w-full items-center gap-3 px-4 py-4 text-start text-[18px]"
                  >
                    {/* chevron LEFT of label */}
                    <span
                      className={[
                        "inline-block transition-transform",
                        open ? "rotate-90" : "rotate-0",
                      ].join(" ")}
                      aria-hidden
                    >
                      {/* lucide chevron via inline SVG to avoid extra deps */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={open ? "#006DDB" : "#616161"}
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                    <span
                      className={open ? "font-semibold text-[#006DDB]" : "text-[#616161]"}
                    >
                      {labels[key]}
                    </span>
                  </button>

                  {/* content with smooth height transition; no auto scroll */}
                  <div
                    className={[
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden px-4 pb-5">
                      <TabPanel content={tabs[key]} />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
