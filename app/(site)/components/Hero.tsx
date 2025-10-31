"use client";

import { content } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate backgrounds and taglines - FASTER (3 seconds instead of 5)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.hero.images.length);
    }, 3000); // Faster rotation

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[calc(100vh-200px)] md:h-[70vh] min-h-[400px] w-full overflow-hidden">
      {/* Background Images with Crossfade - FASTER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Faster transition
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${content.hero.images[currentIndex]}')`,
          }}
        />
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`tagline-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }} // Faster tagline transition
            className="text-center"
          >
            <h1 className="text-2xl font-mono tracking-wide text-white transition-colors md:text-3xl lg:text-4xl"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0C41AA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              {content.hero.taglines[currentIndex]}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {content.hero.images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              currentIndex === idx ? "w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            style={{
              backgroundColor: currentIndex === idx ? "#0C41AA" : "rgba(255, 255, 255, 0.5)",
            }}
            onMouseEnter={(e) => {
              if (currentIndex !== idx) {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255, 255, 255, 0.8)"
              }
            }}
            onMouseLeave={(e) => {
              if (currentIndex !== idx) {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255, 255, 255, 0.5)"
              }
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
