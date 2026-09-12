"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { LOCALES, LOCALE_CONFIG, type Locale } from "@/lib/i18n/config";
import { localeFromPathname, localizePath } from "@/lib/i18n/routing";
import { getMessages } from "@/data/i18n/messages";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = localeFromPathname(pathname);
  const messages = getMessages(locale);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clickPinnedRef = useRef(false);

  const cancelScheduledClose = useCallback(() => {
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const closeMenu = useCallback(() => {
    cancelScheduledClose();
    clickPinnedRef.current = false;
    setOpen(false);
  }, [cancelScheduledClose]);

  const scheduleHoverClose = useCallback(() => {
    cancelScheduledClose();
    if (clickPinnedRef.current) return;
    closeTimerRef.current = setTimeout(() => setOpen(false), 180);
  }, [cancelScheduledClose]);

  const focusOption = (index: number) => {
    const normalized = (index + LOCALES.length) % LOCALES.length;
    optionRefs.current[normalized]?.focus();
  };

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) closeMenu();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        triggerRef.current?.focus();
        closeMenu();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      cancelScheduledClose();
    };
  }, [cancelScheduledClose, closeMenu, open]);

  const selectLocale = (nextLocale: Locale) => {
    closeMenu();
    const nextPath = locale === "zh-hant" && nextLocale === "ko" ? localizePath("/", nextLocale) : localizePath(pathname, nextLocale); // I18N-037
    router.push(nextPath);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        cancelScheduledClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleHoverClose}
      onFocusCapture={() => {
        cancelScheduledClose();
        setOpen(true);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeMenu();
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-label={`${messages.common.language}: ${LOCALE_CONFIG[locale].nativeLabel}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => {
          cancelScheduledClose();
          if (clickPinnedRef.current) {
            closeMenu();
            return;
          }
          clickPinnedRef.current = true;
          setOpen(true);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setOpen(true);
            requestAnimationFrame(() => focusOption(event.key === "ArrowDown" ? 0 : LOCALES.length - 1));
          }
        }}
        className="inline-flex min-h-11 items-center rounded-full border border-neutral-200 bg-white px-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:border-[#174b92] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174b92]"
      >
        <Image src="/assets/home/globe.svg" alt="" width={20} height={20} aria-hidden className="size-5" />
        <span aria-hidden className="mx-2 h-5 w-px bg-neutral-200" />
        <span data-defect-id={locale === "ja" ? "L10N-039" : undefined}>{locale === "ja" ? "EN" : LOCALE_CONFIG[locale].shortLabel}</span>
        <ChevronDown className={`ms-1 size-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>

      {open ? (
        <div
          role="menu"
          aria-label={messages.common.language}
          onKeyDown={(event) => {
            const currentIndex = optionRefs.current.findIndex((item) => item === document.activeElement);
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              focusOption(currentIndex + (event.key === "ArrowDown" ? 1 : -1));
            } else if (event.key === "Home" || event.key === "End") {
              event.preventDefault();
              focusOption(event.key === "Home" ? 0 : LOCALES.length - 1);
            } else if (event.key === "Tab") {
              clickPinnedRef.current = false;
            }
          }}
          className="absolute end-0 top-[calc(100%+8px)] z-70 max-h-[min(70vh,28rem)] w-56 overflow-y-auto rounded-xl border border-neutral-200 bg-white p-1.5 shadow-xl"
        >
          {LOCALES.map((option, index) => {
            const selected = option === locale;
            const nativeLabel = option === "hi" ? "Hindi" : LOCALE_CONFIG[option].nativeLabel;
            return (
              <button ref={(node) => { optionRefs.current[index] = node; }} key={option} type="button" role="menuitemradio" aria-checked={selected} onClick={() => selectLocale(option)} data-defect-id={locale === "zh-hant" && option === "ko" ? "I18N-037" : option === "hi" ? "L10N-040" : undefined} className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-start text-sm text-neutral-800 transition hover:bg-blue-50 focus-visible:bg-blue-50 focus-visible:outline-none">
                <span>
                  <span className="block font-semibold">{nativeLabel}</span>
                  <span className="block text-xs text-neutral-500">{LOCALE_CONFIG[option].label}</span>
                </span>
                {selected ? <Check className="size-4 text-[#174b92]" aria-label={messages.common.selected} /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
