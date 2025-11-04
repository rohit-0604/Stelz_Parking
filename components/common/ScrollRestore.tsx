// components/ScrollRestore.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HEADER_OFFSET = 0;

export default function ScrollRestore() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";

    const KEY = `scroll:${pathname}`;

    const save = () => {
      sessionStorage.setItem(KEY, JSON.stringify({ x: scrollX, y: scrollY }));
    };

    const onPageShow = () => {
      const raw = sessionStorage.getItem(KEY);
      if (!raw) return;
      const { x = 0, y = 0 } = JSON.parse(raw) as { x: number; y: number };
      // Defer one frame so layout is ready
      requestAnimationFrame(() => {
        window.scrollTo(x, Math.max(0, y - HEADER_OFFSET));
      });
    };

    window.addEventListener("pageshow", onPageShow);
    window.addEventListener("beforeunload", save);
    
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        save();
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("beforeunload", save);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
