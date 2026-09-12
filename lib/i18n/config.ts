export const LOCALES = ["en", "de", "ar", "hi", "zh-hant", "ko", "ja"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_CONFIG: Record<
  Locale,
  {
    label: string;
    nativeLabel: string;
    shortLabel: string;
    htmlLang: string;
    intlLocale: string;
    hrefLang: string;
    openGraphLocale: string;
    direction: "ltr" | "rtl";
    currency: string;
    timeZone: string;
    region: string;
  }
> = {
  en: { label: "India", nativeLabel: "English", shortLabel: "EN", htmlLang: "en-IN", intlLocale: "en-IN", hrefLang: "en-IN", openGraphLocale: "en_IN", direction: "ltr", currency: "INR", timeZone: "Asia/Kolkata", region: "IN" },
  de: { label: "Germany", nativeLabel: "Deutsch", shortLabel: "DE", htmlLang: "de-DE", intlLocale: "de-DE", hrefLang: "de-DE", openGraphLocale: "de_DE", direction: "ltr", currency: "EUR", timeZone: "Europe/Berlin", region: "DE" },
  ar: { label: "العربية", nativeLabel: "العربية", shortLabel: "AR", htmlLang: "ar", intlLocale: "ar-AE", hrefLang: "ar", openGraphLocale: "ar_AE", direction: "rtl", currency: "AED", timeZone: "Asia/Dubai", region: "AE" },
  hi: { label: "भारत", nativeLabel: "हिन्दी", shortLabel: "HI", htmlLang: "hi-IN", intlLocale: "hi-IN", hrefLang: "hi-IN", openGraphLocale: "hi_IN", direction: "ltr", currency: "INR", timeZone: "Asia/Kolkata", region: "IN" },
  "zh-hant": { label: "繁體中文", nativeLabel: "繁體中文", shortLabel: "繁中", htmlLang: "zh-Hant", intlLocale: "zh-TW", hrefLang: "zh-Hant", openGraphLocale: "zh_TW", direction: "ltr", currency: "TWD", timeZone: "Asia/Taipei", region: "TW" },
  ko: { label: "대한민국", nativeLabel: "한국어", shortLabel: "KO", htmlLang: "ko-KR", intlLocale: "ko-KR", hrefLang: "ko-KR", openGraphLocale: "ko_KR", direction: "ltr", currency: "KRW", timeZone: "Asia/Seoul", region: "KR" },
  ja: { label: "日本", nativeLabel: "日本語", shortLabel: "JA", htmlLang: "ja-JP", intlLocale: "ja-JP", hrefLang: "ja-JP", openGraphLocale: "ja_JP", direction: "ltr", currency: "JPY", timeZone: "Asia/Tokyo", region: "JP" },
};

export function isLocale(value: string | null | undefined): value is Locale {
  return LOCALES.includes(value?.toLowerCase() as Locale);
}

export function getLocaleDirection(locale: Locale): "ltr" | "rtl" {
  return LOCALE_CONFIG[locale].direction;
}
