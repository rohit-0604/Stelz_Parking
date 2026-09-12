"use client";

import { useState, useEffect } from "react";
import { HiDownload, HiChevronUp } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { localeFromPathname } from "@/lib/i18n/routing";
import { getMessages } from "@/data/i18n/messages";

export default function FixedButtons() {
  const locale = localeFromPathname(usePathname());
  const messages = getMessages(locale);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const cardVariants = {
    rest: { scale: 1, boxShadow: "0 14px 32px rgba(23,75,146,0.35)" },
    hover: {
      scale: 1.03,
      boxShadow: "0 22px 48px rgba(23,75,146,0.45)",
      transition: { type: "spring", stiffness: 260, damping: 18 },
    },
  } as const;

  const chipVariants = {
    rest: { x: 0, scale: 1 },
    hover: { x: locale === "ar" ? -6 : 6, scale: 1.08, transition: { type: "spring", stiffness: 300, damping: 16 } },
  } as const;

  return (
    <>
      {/* Wrapper handles entrance; anchor handles hover variants */}
      <motion.div
        initial={{ opacity: 0, x: locale === "ar" ? -96 : 96 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed end-2 top-1/2 z-30 -translate-y-1/2 sm:end-0"
      >
        <motion.a
          href="/assets/brochure.pdf"
          download
          aria-label={messages.common.downloadBrochure}
          variants={cardVariants}
          initial="rest"
          animate="rest"
          whileHover="hover"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm bg-[#2458a4] p-1 text-white ring-1 ring-black/5 transition-colors hover:bg-[#0e3e85] sm:justify-between sm:px-3.5 sm:py-2"
        >
          <span className="hidden pe-3 text-center text-[14px] leading-tight sm:inline">
            {messages.common.downloadBrochure}
          </span>

          <motion.span
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 sm:ms-1"
            aria-hidden
            variants={chipVariants}
          >
            <HiDownload className="h-5 w-5 text-white" />
          </motion.span>
        </motion.a>
      </motion.div>

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
            className="fixed bottom-8 end-2 md:end-6 z-30 flex h-11 w-11 items-center justify-center rounded-lg bg-[#006DDB] text-white shadow-[0_12px_28px_rgba(23,75,146,0.30)] ring-1 ring-black/5 transition-colors hover:bg-[#0e3e85]"
            aria-label={messages.common.scrollTop}
          >
            <HiChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
