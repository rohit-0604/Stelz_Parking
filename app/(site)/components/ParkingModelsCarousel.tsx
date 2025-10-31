"use client"

import { content } from "@/data/content"
import { useState, useCallback, useEffect, useRef } from "react"
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

export default function ParkingModelsCarousel() {
  const { items } = content.models
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const autoplayRef = useRef(AutoPlay({ delay: 5000 }))

  // Update progress based on scroll position
  const updateScroll = useCallback(() => {
    if (!api) return

    // Get scroll position and calculate which slide is visible
    try {
      // scrollProgress returns 0-1, multiply by total slides to get position
      const scrollProgress = api.scrollProgress()
      // Account for Embla's internal slide positions
      const slideCount = items.length
      const position = scrollProgress * slideCount

      // Round to nearest slide and ensure it's within bounds
      let selectedIndex = Math.round(position) % slideCount
      if (selectedIndex < 0) selectedIndex += slideCount

      setCurrent(selectedIndex)
    } catch (e) {
      // Fallback if scrollProgress fails
      console.error("Error getting scroll progress:", e)
    }
  }, [api, items.length])

  // Update state when carousel is initialized or selection changes
  useEffect(() => {
    if (!api) return

    // Initial scroll update
    setTimeout(() => updateScroll(), 0)

    // Listen to both scroll and select events for accurate tracking
    api.on("scroll", updateScroll)
    api.on("select", updateScroll)
    api.on("reInit", updateScroll)

    return () => {
      api.off("scroll", updateScroll)
      api.off("select", updateScroll)
      api.off("reInit", updateScroll)
    }
  }, [api, updateScroll])

  const handleDotClick = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="mx-auto max-w-[1400px] px-3 md:px-6">
        {/* Section Title */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="mb-3 text-2xl md:text-3xl lg:text-4xl font-medium">
            <span style={{ color: "#0C41AA" }}>Parking</span>{" "}
            <span className="text-gray-900">Models</span>
          </h2>
          {/* Underline Accent - Covers whole title */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#1976D2" }}></span>
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#1976D2" }}></span>
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#1976D2" }}></span>
            <div className="h-1 rounded-full" style={{ width: "200px", backgroundColor: "#1E88E5" }}></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            plugins={[autoplayRef.current]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="gap-0.5 md:gap-0.5 lg:gap-0.5">
              {items.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-2 md:pl-0"
                >
                  <div className="group relative overflow-hidden rounded-lg bg-linear-to-br from-gray-800 to-gray-900 shadow-lg transition hover:shadow-2xl">
                    {/* Model Image */}
                    <div className="relative h-72 md:h-80 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Title slides in from left on hover */}
                      <div className="absolute left-0 top-8 -translate-x-full px-6 py-3 transition-transform duration-500 group-hover:translate-x-0" style={{ backgroundColor: "#0C41AA" }}>
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {item.title}
                        </h3>
                      </div>

                      {/* Watermark */}
                      <div className="absolute bottom-3 right-3 text-xs text-white/60">
                        This image is only for Representation
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Dot Indicators */}
        <div className="mt-6 md:mt-8 flex items-center justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2.5 w-2.5 rounded-full transition-all cursor-pointer ${
                current === idx
                  ? "w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              style={{
                backgroundColor: current === idx ? "#0C41AA" : undefined,
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
