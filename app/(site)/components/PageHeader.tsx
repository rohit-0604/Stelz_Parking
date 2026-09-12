"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getMessages } from "@/data/i18n/messages";
import { localeFromPathname, localizePath } from "@/lib/i18n/routing";

interface PageHeaderProps {
  title: string;
  breadcrumbLabel: string;
  imageSrc?: string;
  heightClass?: string; // e.g. "h-40 md:h-52"
}

export default function PageHeader({
  title,
  breadcrumbLabel,
  imageSrc = "/assets/pageTemplate/template_top.webp",
  heightClass = "h-27 md:h-31",
}: PageHeaderProps) {
  const locale = localeFromPathname(usePathname());
  const messages = getMessages(locale);
  /* =========================
     Single built-in softener
     0–100 (higher = lighter)
     ========================= */
  const SOFTEN = 80; // <— change this number to adjust globally

  const s = Math.max(0, Math.min(100, SOFTEN));
  const brightness = 1 + (0.15 * s) / 100;   // up to +15%
  const contrast   = 1 - (0.15 * s) / 100;   // down to -15%
  const saturate   = 1 - (0.30 * s) / 100;   // down to -30%
  const overlayA   = (0.60 * s) / 100;       // up to 0.6 opacity

  return (
    <header role="banner" className="relative w-full">

      <div className={`relative w-full ${heightClass}`}>
        <Image
          src={imageSrc}
          alt="" // decorative
          fill
          priority
          quality={75}
          className="object-cover"
          style={{
            filter: `brightness(${brightness}) contrast(${contrast}) saturate(${saturate})`,
          }}
        />

        {/* soft white wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ backgroundColor: `rgba(255,255,255,${overlayA})` }}
        />

        {/* content */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-8 pb-5 md:pb-6">
            {/* breadcrumb — size +1 and weight +1; arrow matches text */}
            <nav aria-label="Breadcrumb" data-defect-id="A11Y-042" className="text-[15px] md:text-[16px]">
              <ol className="flex items-center gap-2 text-[#174b92] font-medium">
                <li>
                  <Link
                    href={localizePath("/", locale)}
                    className="transition-colors hover:text-[#0C41AA]"
                    aria-label={messages.common.home}
                    prefetch
                  >
                    stelzparking.com
                  </Link>
                </li>
                <li aria-hidden data-defect-id={locale === "ar" ? "RTL-043 I18N-021" : undefined} className="text-[#174b92] font-medium">&gt;</li>
                <li className="font-medium">{breadcrumbLabel}</li>
              </ol>
            </nav>

            <h1 className="mt-1 text-[28px] md:text-[40px] font-extrabold leading-tight tracking-tight text-[#174b92]">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
