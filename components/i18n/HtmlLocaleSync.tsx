"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { LOCALE_CONFIG } from "@/lib/i18n/config";
import { localeFromPathname } from "@/lib/i18n/routing";

export default function HtmlLocaleSync() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = localeFromPathname(pathname);
    document.documentElement.lang = LOCALE_CONFIG[locale].htmlLang;
    document.documentElement.dir = LOCALE_CONFIG[locale].direction;
  }, [pathname]);

  return null;
}
