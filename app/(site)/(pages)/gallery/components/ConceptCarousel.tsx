"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import AutoPlay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/carousel/carousel-context";
import { content } from "@/data/GalleryContent";

export default function ConceptCarousel() {
  const { title, items } = content.concepts;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(
    AutoPlay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const onSelect = useCallback(() => {
    if (!api) return;
    const slideCount = items.length;
    const idx = api.selectedScrollSnap() % slideCount;
    setCurrent(idx < 0 ? idx + slideCount : idx);
  }, [api, items.length]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  const handleDotClick = (index: number) => api?.scrollTo(index);

  return (
    <section className="bg-white py-8 px-4">
      {/* +5px LR padding at the edges */}
      <div className="mx-auto max-w-[1500px] px-[5px]">
        {/* Title (smaller & font-medium) */}
        <div className="mb-4 text-center">
          <h2 className="text-[35px] lg:text-[38px] font-medium tracking-tight text-neutral-900">
            {title}
          </h2>
        </div>

        <div className="relative">
          <Carousel
            opts={{ align: "start", loop: true, slidesToScroll: 1 }}
            plugins={[autoplayRef.current]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="gap-1 md:gap-1">
              {items.map((m) => (
                <CarouselItem
                  key={`${m.id}-${m.image}`}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 pl-2 md:pl-0"
                >
                  <div className="relative group">
                    {/* Rounded, no shadow, slightly smaller height */}
                    <div className="overflow-hidden rounded-[16px] bg-white">
                      <div className="relative h-[300px] md:h-[380px] lg:h-[420px]">
                        <Image
                          src={m.image}
                          alt={m.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-contain p-2 md:p-3"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="mt-1 text-center">
                      <p className="text-[17px] font-[Space Grotesk] text-neutral-600">
                        {m.title}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-1 md:left-1.5" />
            <CarouselNext className="right-1 md:right-1.5" />
          </Carousel>

          <div className="pointer-events-auto mt-8 flex items-center justify-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  current === idx ? "w-8" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                style={{ backgroundColor: current === idx ? "#0C41AA" : undefined }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
