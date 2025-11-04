"use client"

import { content } from "@/data/content"
import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import AutoPlay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/carousel/carousel-context"

export default function FootprintCarousel() {
  const { projects } = content.footprint
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const autoplayRef = useRef(AutoPlay({ delay: 5000 }))

  // Track active slide reliably
  const onSelect = useCallback(() => {
    if (!api) return
    const slideCount = projects.length
    const idx = api.selectedScrollSnap() % slideCount
    setCurrent(idx < 0 ? idx + slideCount : idx)
  }, [api, projects.length])

  useEffect(() => {
    if (!api) return
    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect])

  const handleDotClick = (index: number) => api?.scrollTo(index)

  return (
    <section className="bg-gray-50 py-4 px-4">
      <div className="mx-auto max-w-[1500px]">
        {/* Title */}
        <div className="mb-4 text-center">
          <h2 className="mb-3 text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900">
            <span style={{ color: "#0C41AA" }}>STELZ</span>{" "}
            <span className="text-gray-900">Footprint</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-3">
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#1976D2" }} />
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#1976D2" }} />
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#1976D2" }} />
            <div className="h-1 rounded-full" style={{ width: "220px", backgroundColor: "#1E88E5" }} />
          </div>
        </div>

        {/* Carousel + Dots share one relative wrapper */}
        <div className="relative">
          <Carousel
            opts={{ align: "start", loop: true, slidesToScroll: 1 }}
            plugins={[autoplayRef.current]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="gap-1 md:gap-0.5 lg:gap-0.5">
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 pl-2 md:pl-0"
                >
                  {/* Reserve space so floating card won't clip */}
                  <div className="relative group pb-20">
                    {/* Top image card */}
                    <div className="overflow-hidden rounded-[20px] shadow-sm">
                      <div className="relative h-60 md:h-60">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 20vw"
                        />
                      </div>
                    </div>

                    {/* Floating info card: keep lift, remove hover-shadow change */}
                    <div
                      className="
                        absolute -right-2 md:-right-4 bottom-5 z-10
                        w-[78%] sm:w-[72%] md:w-[66%]
                        rounded-2xl bg-[#F7F7F7] p-3
                        shadow-none
                        transition-transform duration-300 ease-out will-change-transform
                        group-hover:-translate-y-2
                      "
                    >
                      <h3 className="text-base md:text-[18px] font-semibold text-gray-900 line-clamp-2">
                        {project.name}
                      </h3>
                      <div className="mt-2 text-sm leading-6">
                        {"spaces" in project && project.spaces && (
                          <p className="text-gray-600">
                            <span className="font-medium">Car Spaces</span> – {project.spaces}
                          </p>
                        )}
                        <p className="text-gray-500">
                          <span className="font-medium">Location</span> – {project.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows: tight to edges */}
            <CarouselPrevious className="left-0 md:left-1" />
            <CarouselNext className="right-0 md:right-1" />
          </Carousel>

          {/* Dots are absolutely positioned inside the same wrapper */}
          <div className="pointer-events-auto absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-2">
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
  )
}
