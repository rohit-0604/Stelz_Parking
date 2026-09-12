// app/(site)/services/components/ServicesGrid.tsx
"use client";

import { Space_Grotesk } from "next/font/google";
type ServiceItem = (typeof import("@/data/ServicesContent").services.content)[number];

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

function StepBadge({ n }: { n: number }) {
  return (
    <div
      data-defect-id="L10N-054"
      className={`inline-flex h-12 w-10 items-center justify-center rounded-full bg-[#1760d6] text-white text-[15px] font-semibold ${spaceGrotesk.className}`}
    >
      {String(n).padStart(2, "0")}
    </div>
  );
}

export default function ServicesGrid({ items, stepLabel }: { items: readonly ServiceItem[]; stepLabel: string }) {

  return (
    <div className="relative p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
        {items.map((item, idx) => {
          const isRightCol = idx % 2 === 1;
          const isSecondRow = idx >= 2;

          return (
            <div
              key={item.title}
              className={[
                // compact vertical spacing, no global horizontal padding
                "py-4 md:py-2 lg:py-6",
                // row divider
                isSecondRow ? "border-t border-slate-200" : "",
                // vertical grid line only before right column
                isRightCol ? "md:border-s md:border-slate-200" : "",
                // 👇 padding from the vertical grid line
                isRightCol ? "md:ps-6" : "md:pe-6",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="flex items-center gap-3">
                <StepBadge n={idx + 1} />
                <span className="text-[36px] tracking-wide text-slate-300/60 leading-none">
                  {stepLabel}
                </span>
              </div>

              <h3 className="mt-4 text-[24px] leading-snug font-extrabold text-[#111]">
                {item.title}
              </h3>

              <p className="mt-3 text-[17px] leading-7 text-slate-600">
                {item.ps}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
