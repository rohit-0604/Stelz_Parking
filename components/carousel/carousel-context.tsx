"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={`relative ${className || ""}`}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden px-1 md:px-2"
      data-slot="carousel-content"
    >
      <div
        className={`flex ${
          orientation === "horizontal" ? "-ml-2 md:-ml-3 lg:-ml-4" : "-mt-4 flex-col"
        } ${className || ""}`}
        {...props}
      />
    </div>
  )
}

function CarouselItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={`min-w-0 shrink-0 grow-0 basis-full ${
        orientation === "horizontal" ? "pl-2 md:pl-3 lg:pl-4" : "pt-4"
      } ${className || ""}`}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Only apply hover effect on desktop (md and above, ~768px+)
    if (window.innerWidth >= 768) {
      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0C41AA"
      ;(e.currentTarget as HTMLButtonElement).style.color = "white"
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.innerWidth >= 768) {
      (e.currentTarget as HTMLButtonElement).style.backgroundColor = ""
      ;(e.currentTarget as HTMLButtonElement).style.color = "#0C41AA"
    }
  }

  return (
    <button
      data-slot="carousel-previous"
      className={`absolute size-12 rounded-full bg-gray-300 shadow-lg transition-all flex items-center justify-center cursor-pointer ${
        orientation === "horizontal"
          ? "top-1/2 -left-6 md:-left-8 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90"
      } md:hover:scale-110 ${className || ""}`}
      disabled={!canScrollPrev}
      style={{
        color: "#0C41AA",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        scrollPrev()
        onClick?.(e)
      }}
      {...props}
    >
      <svg
        className="h-6 w-6 md:h-8 md:w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span className="sr-only">Previous slide</span>
    </button>
  )
}

function CarouselNext({
  className,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Only apply hover effect on desktop (md and above, ~768px+)
    if (window.innerWidth >= 768) {
      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0C41AA"
      ;(e.currentTarget as HTMLButtonElement).style.color = "white"
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.innerWidth >= 768) {
      (e.currentTarget as HTMLButtonElement).style.backgroundColor = ""
      ;(e.currentTarget as HTMLButtonElement).style.color = "#0C41AA"
    }
  }

  return (
    <button
      data-slot="carousel-next"
      className={`absolute size-12 rounded-full bg-gray-300 shadow-lg transition-all flex items-center justify-center cursor-pointer ${
        orientation === "horizontal"
          ? "top-1/2 -right-6 md:-right-8 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90"
      } md:hover:scale-110 ${className || ""}`}
      disabled={!canScrollNext}
      style={{
        color: "#0C41AA",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        scrollNext()
        onClick?.(e)
      }}
      {...props}
    >
      <svg
        className="h-6 w-6 md:h-8 md:w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
      <span className="sr-only">Next slide</span>
    </button>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
}
