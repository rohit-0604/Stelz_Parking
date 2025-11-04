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

export default function GalleryCarousel() {
  const { title, items } = content.gallery;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(
    AutoPlay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
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
    <section className="bg-white py-8 px-3 md:px-10">
      {/* +5px LR padding at the edges */}
      <div className="mx-auto max-w-[1500px] px-[5px]">
        {/* Title (smaller & font-medium) */}
        <div className="mb-10 text-center">
          <h2 className="text-[35px] font-medium tracking-tight text-neutral-900">
            {title}
          </h2>
        </div>

        {/* Extra 3px gap between title and carousel */}
        <div className="relative mt-[3px]">
          <Carousel
            opts={{ align: "start", loop: true, slidesToScroll: 1 }}
            plugins={[autoplayRef.current]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {items.map((it) => (
                <CarouselItem
                  key={it.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 pl-2 md:pl-0"
                >
                  {/* Rounded, no shadow, slightly smaller height */}
                  <div className="group overflow-hidden ">
                    <div className="relative h-[220px] md:h-[280px] lg:h-70">
                      <Image
                        src={it.image}
                        alt="STELZ gallery image"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows tucked slightly inside */}
            <CarouselPrevious className="left-1 md:left-0" />
            <CarouselNext className="right-1 md:right-0" />
          </Carousel>

          {/* Dots */}
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
