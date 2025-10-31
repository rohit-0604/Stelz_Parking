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

export default function FootprintCarousel() {
  const { projects } = content.footprint
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
      const slideCount = projects.length
      const position = scrollProgress * slideCount

      // Round to nearest slide and ensure it's within bounds
      let selectedIndex = Math.round(position) % slideCount
      if (selectedIndex < 0) selectedIndex += slideCount

      setCurrent(selectedIndex)
    } catch (e) {
      // Fallback if scrollProgress fails
      console.error("Error getting scroll progress:", e)
    }
  }, [api, projects.length])

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
    <section className="bg-gray-50 py-4">
      <div className="mx-auto max-w-[1400px] px-3 md:px-6">
        {/* Section Title */}
        <div className="mb-4 text-center">
          <h2 className="mb-3 text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900">
            <span style={{ color: "#0C41AA" }}>STELZ</span>{" "}
            <span className="text-gray-900">Footprint</span>
          </h2>
          {/* Underline Accent - Covers whole title */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#1976D2" }}></span>
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#1976D2" }}></span>
            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: "#1976D2" }}></span>
            <div className="h-1 rounded-full" style={{ width: "220px", backgroundColor: "#1E88E5" }}></div>
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
            <CarouselContent className="gap-1 md:gap-0.5 lg:gap-0.5">
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 pl-2 md:pl-0"
                >
                  <div className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-2xl h-auto md:h-96">
                    {/* Project Image */}
                    <div className="relative h-64 md:h-56 shrink-0 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105 p-2"
                        loading="lazy"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="flex flex-1 flex-col justify-between bg-white p-10 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                      <h3 className="mb-1 text-base md:text-xl font-semibold text-gray-900 line-clamp-2">
                        {project.name}
                      </h3>
                      <div className=" text-sm">
                        {"spaces" in project && project.spaces && (
                          <p className="text-gray-600">
                            Car Spaces -{" "}
                            <span className="font-medium">{project.spaces}</span>
                          </p>
                        )}
                        <p className="text-gray-500">
                          Location -{" "}
                          <span className="font-medium">{project.location}</span>
                        </p>
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
          {projects.map((_, idx) => (
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
