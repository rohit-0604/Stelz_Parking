"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AutoPlay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel/carousel-context";
import { Space_Grotesk } from "next/font/google";

/* font */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* data */
const logos = [
  "purvankara",
  "vamsiram",
  "bhartiya",
  "sparsh",
  "manipal",
  "confident",
  "suvarna",
] as const;

/* longer ribbon so it always overflows */
const loopLogos = [...logos, ...logos, ...logos];

/* blue arrow tag icon (mask) */
function BlueArrow() {
  return (
    <span
      aria-hidden
      className="inline-block h-4 w-4 bg-[#006DDB]"
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

/* logo cell */
function Logo({ name }: { name: string }) {
  const src = `/assets/clients/${name}.png`;
  const IMG_CLASSES =
    "object-contain pointer-events-none select-none motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:scale-110 will-change-transform";
  return (
    <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40">
      <Image
        src={src}
        alt={name}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
        className={IMG_CLASSES}         
        loading="lazy"
      />
    </div>
  );
}

export default function PartnersCarousel({ copy }: { copy: { partners: string; trustedBy: string; intro: string } }) {
  // Init the autoplay plugin on the client only
  const [autoplay, setAutoplay] = useState<ReturnType<typeof AutoPlay> | null>(null);
  const autoplayRef = useRef<ReturnType<typeof AutoPlay> | null>(null);

  useEffect(() => {
    autoplayRef.current = AutoPlay({
      delay: 1500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    });
    setAutoplay(autoplayRef.current);
    return () => {
      // embla plugins don't typically need cleanup, but null to be safe
      autoplayRef.current = null;
    };
  }, []);

  return (
    <section className={`${spaceGrotesk.className} bg-white py-8 px-3 md:px-10`}>
      <div className="mx-auto max-w-[1500px] px-[5px]">
        {/* header: blue arrow + tag + title */}
        <div className="w-full text-center mb-8 md:mb-10">
          <div className="flex items-center justify-center gap-2">
            <BlueArrow />
            <span className="text-xs md:text-sm tracking-[0.18em] text-[#006DDB] font-semibold uppercase">
              {copy.partners}
            </span>
          </div>

          <h2 className="mt-2 md:mt-3 text-[26px] md:text-[34px] font-extrabold tracking-tight text-gray-900">
            {copy.trustedBy}
          </h2>

          <p className="mt-3 w-full text-base leading-7 text-neutral-600 md:mt-4 md:text-lg md:leading-8">
            {copy.intro}
          </p>
        </div>

        {/* carousel: no arrows, no dots; 2/4/6 logos */}
        <div className="relative mt-[3px]">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
              containScroll: "trimSnaps",
              slidesToScroll: 1,
              skipSnaps: false,
            }}
            plugins={autoplay ? [autoplay] : []}   // client-only plugin
            className="w-full"
          >
            {/* pair track -ml with slide pl so gutters don't force single-slide view */}
            <CarouselContent className="-ms-2 md:-ms-3">
              {loopLogos.map((name, i) => (
                <CarouselItem
                  key={`${name}-${i}`}
                  className="!basis-1/2 ps-2 md:!basis-1/4 md:ps-3 lg:!basis-1/6"
                >
                  <div className="group flex items-center justify-center py-4 md:py-6">
                    <Logo name={name} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
