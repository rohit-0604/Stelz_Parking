"use client";

import { content } from "@/data/HomeFooterContent";

export default function HighlightsBanner() {
  // Duplicate highlights for seamless loop without DOM manipulation
  const duplicatedHighlights = [...content.hero.highlights, ...content.hero.highlights];

  return (
    <section className="relative w-full overflow-hidden border-y border-gray-200 bg-white py-3">
      <div
        className="flex animate-scroll gap-8 whitespace-nowrap"
        style={{
          animation: "scroll 15s linear infinite",
        }}
      >
        {duplicatedHighlights.map((highlight, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-sm font-medium uppercase tracking-wide"
            style={{ color: "#0C41AA" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full border-2" style={{ borderColor: "#9E9E9E", backgroundColor: "transparent" }} />
            {highlight}
          </div>
        ))}
      </div>
    </section>
  );
}
