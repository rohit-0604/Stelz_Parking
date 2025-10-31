"use client";

import { useState, useEffect } from "react";
import { HiDownload, HiChevronUp } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/data/content";

export default function FixedButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Fixed Download Brochure Button - Right Side */}
      <motion.a
        href={content.hero.brochure}
        download
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed right-4 top-1/2 z-40 flex -translate-y-1/2 items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl md:right-6"
        style={{ backgroundColor: "#0C41AA" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0A3585"
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0C41AA"
        }}
        aria-label="Download Brochure"
      >
        <span>Download<br/>Brochure</span>
        <HiDownload className="h-5 w-5" />
      </motion.a>

      {/* Scroll to Top Button - Bottom Right */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-lg text-white shadow-lg transition-all hover:scale-110"
            style={{ backgroundColor: "#0C41AA" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0A3585"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0C41AA"
            }}
            aria-label="Scroll to top"
          >
            <HiChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
