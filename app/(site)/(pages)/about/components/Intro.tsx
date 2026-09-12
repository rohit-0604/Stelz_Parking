// components/about/Intro.tsx
import * as React from "react";
import type { IntroContent } from "@/data/AboutContent";

type Props = {
  intro: IntroContent;
  /** YouTube watch URL or id. Example: "https://youtu.be/KQBZgdnIpLU" or "KQBZgdnIpLU" */
  youtube?: string;
  videoTitle: string;
};

function extractYouTubeId(input?: string): string | null {
  if (!input) return null;
  try {
    if (/^[\w-]{11}$/.test(input)) return input; // raw id
    const u = new URL(input);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
  } catch {}
  return null;
}

/** Blue arrow using CSS mask so we can force the exact brand color. */
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

export default function Intro({ intro, youtube, videoTitle }: Props): React.JSX.Element {
  const ytId = extractYouTubeId(youtube);
  const ytSrc = ytId
    ? [
        `https://www.youtube.com/embed/${ytId}`,
        `?rel=0&modestbranding=1`,
        `&controls=1`,
        `&autoplay=1&playsinline=1`, // autoplay (muted) to satisfy browser policies
        `&enablejsapi=1`,
      ].join("")
    : null;

  return (
    <section className="bg-white pt-20">
      <div className="mx-auto max-w-[1450px] px-4 md:px-10 py-10 md:py-12">
        {/* 2-col on lg+, stacked on sm/md */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left: YouTube */}
          <div className="w-full">
            {ytSrc ? (
              <div className="relative h-0 w-full pb-[56.25%] overflow-hidden">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={ytSrc}
                  title={videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ) : null}
          </div>

          {/* Right: Title row + paragraphs */}
          <div className="space-y-1">
            <div className="flex items-center">
              <BlueArrow />
              <h2 className="text-[#006DDB] text-[16px] tracking-[0.06em]">
                {intro.title}
              </h2>
            </div>

            {intro.paragraphs.map((para, i) => (
              <p key={i} className="text-[18px] leading-8 text-[#616161]">
                {para.map((seg, j) =>
                  seg.type === "bold" ? (
                    <strong key={j} className="font-semibold">
                      {seg.text}
                    </strong>
                  ) : (
                    <span key={j}>{seg.text}</span>
                  )
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
