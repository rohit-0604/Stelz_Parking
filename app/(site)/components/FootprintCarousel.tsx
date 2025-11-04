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
import { content } from "@/data/HomeFooterContent";

export default function FootprintCarousel() {
  const { projects } = content.footprint as {
    projects: Array<{
      id: string | number;
      name: string;
      image: string;
      location: string;
      spaces?: string | number;
    }>;
  };

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Autoplay (keeps running on loop; pauses on hover)
  const autoplayRef = useRef(
    AutoPlay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  // Keep dots in sync with Embla
  const onSelect = useCallback(() => {
    if (!api) return;
    const total = projects.length;
    const idx = api.selectedScrollSnap() % total;
    setCurrent(idx < 0 ? idx + total : idx);
  }, [api, projects.length]);

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
    <section className="bg-gray-50 py-3 px-3 md:px-1 lg:px-5">
      <div className="mx-auto max-w-[1500px] px-[5px]">
        {/* Title block */}
        <div className="mb-6 text-center">
          <h2 className="text-[35px] font-medium tracking-tight text-gray-900">
            <span style={{ color: "#0C41AA" }}>STELZ</span>{" "}
            <span className="text-gray-900">Footprint</span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-1.5">
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#1976D2" }} />
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#1976D2" }} />
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#1976D2" }} />
            <div className="h-1 rounded-full" style={{ width: "220px", backgroundColor: "#1E88E5" }} />
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mt-[3px]">
          <Carousel
            opts={{ align: "start", loop: true, slidesToScroll: 1 }}
            plugins={[autoplayRef.current]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="gap-1 md:gap-0">
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  /* 1 / 2 / 3 / 4 / 5 across at base/sm/md/xl/2xl */
                  className="basis-full sm:basis-1/2 md:basis-1/4 xl:basis-1/5 pl-2 md:pl-0"
                >
                  {/* Reserve bottom space so floating info card never overlaps content.
                      % padding scales with width on small screens; fixed space on md+. */}
                  <div className="relative group pb-[22%] sm:pb-[18%] md:pb-20">
                    {/* Image: height scales with width on small screens via aspect-ratio.
                       From md up, it snaps to a fixed height (h-60) like your spec. */}
                    <div className="overflow-hidden rounded-[20px] shadow-sm">
                      <div
                        className="relative w-full md:h-60"
                        style={{ aspectRatio: "4 / 3" }} // applies under md; md:h-60 overrides
                      >
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                          sizes="
                            (max-width: 640px) 100vw,
                            (max-width: 768px) 50vw,
                            (max-width: 1280px) 33vw,
                            (max-width: 1536px) 25vw,
                            20vw
                          "
                        />
                      </div>
                    </div>

                    {/* Floating info card */}
                    <div
                      className="
                        absolute -right-2 md:-right-4 bottom-5 z-10
                        w-[78%] sm:w-[72%] md:w-[68%]
                        rounded-2xl bg-[#F7F7F7] p-5 md:p-3
                        shadow-none
                        transition-transform duration-300 ease-out will-change-transform
                        group-hover:-translate-y-2
                      "
                    >
                      <h3 className="text-base md:text-[15px] xl:text-[17px] font-semibold text-gray-900 line-clamp-2">
                        {project.name}
                      </h3>
                      <div className="mt-2 text-[13px] leading-6">
                        {project.spaces ? (
                          <p className="text-gray-600">
                            <span className="font-medium">Car Spaces</span> – {project.spaces}
                          </p>
                        ) : null}
                        <p className="text-gray-500">
                          <span className="font-medium">Location</span> – {project.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows */}
            <CarouselPrevious className="left-1 md:left-0" />
            <CarouselNext className="right-1 md:right-0" />
          </Carousel>

          {/* Dots */}
          <div className="pointer-events-auto mt-4 flex items-center justify-center gap-2">
            {projects.map((_, idx) => (
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
