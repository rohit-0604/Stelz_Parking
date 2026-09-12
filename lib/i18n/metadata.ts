import type { Metadata } from "next";
import type { Locale } from "./config";
import { LOCALE_CONFIG } from "./config";
import { languageAlternates, localizePath } from "./routing";
import type { SeoCopy } from "@/data/i18n/messages";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://stelzparking.com").replace(/\/$/, "");
const OG_IMAGE = "/assets/home/Logo.webp";

function absoluteUrl(pathname: string): string {
  return new URL(pathname, SITE_URL).toString();
}

export function localizedMetadata(locale: Locale, pathname: string, seo: SeoCopy): Metadata {
  const localizedPath = localizePath(pathname, locale);
  const canonical = absoluteUrl(localizedPath);
  const languages = Object.fromEntries(
    Object.entries(languageAlternates(pathname)).map(([key, path]) => [key, absoluteUrl(path)]),
  );

  return {
    title: seo.title,
    description: seo.description,
    keywords: [...seo.keywords],
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      locale: LOCALE_CONFIG[locale].openGraphLocale,
      alternateLocale: Object.values(LOCALE_CONFIG).filter((entry) => entry.openGraphLocale !== LOCALE_CONFIG[locale].openGraphLocale).map((entry) => entry.openGraphLocale),
      url: canonical,
      siteName: "STELZ Multiparking",
      title: seo.title,
      description: seo.description,
      images: [{ url: absoluteUrl(OG_IMAGE), width: 1200, height: 630, alt: seo.title }],
    },
    twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [absoluteUrl(OG_IMAGE)] },
  };
}

export { SITE_URL };
