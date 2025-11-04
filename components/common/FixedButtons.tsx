"use client";

import { useState, useEffect } from "react";
import { HiDownload, HiChevronUp } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/data/HomeFooterContent";

export default function FixedButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Lift + deeper shadow on hover
  const cardVariants = {
    rest: { scale: 1, boxShadow: "0 14px 32px rgba(23,75,146,0.35)" },
    hover: {
      scale: 1.03,
      boxShadow: "0 22px 48px rgba(23,75,146,0.45)",
      transition: { type: "spring", stiffness: 260, damping: 18 },
    },
  } as const;

  // Icon chip "pops out" a little
  const chipVariants = {
    rest: { x: 0, scale: 1 },
    hover: { x: 6, scale: 1.08, transition: { type: "spring", stiffness: 300, damping: 16 } },
  } as const;

  return (
    <>
      {/* Download Brochure (fixed right middle) */}
      <motion.a
        href={content.hero.brochure}
        download
        initial={{ opacity: 0, x: 96 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        // IMPORTANT: single-line className (no newlines)
        className="fixed right-0 top-2/5 -translate-y-1/2 z-50 inline-flex items-center justify-between rounded-sm bg-[#2458a4] px-3.5 py-2 text-white ring-1 ring-black/5 transition-colors hover:bg-[#0e3e85]"
        aria-label="Download Brochure"
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <span className="pr-3 text-[14px] leading-tight text-center">
          Download
          <br />
          Brochure
        </span>

        <motion.span
          className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10"
          aria-hidden
          variants={chipVariants}
        >
          <HiDownload className="h-5 w-5 text-white" />
        </motion.span>
      </motion.a>

      {/* Scroll to top (fixed bottom right) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-4 md:right-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl bg-[#006DDB] text-white shadow-[0_12px_28px_rgba(23,75,146,0.30)] ring-1 ring-black/5 transition-colors hover:bg-[#0e3e85]"
            aria-label="Scroll to top"
          >
            <HiChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}