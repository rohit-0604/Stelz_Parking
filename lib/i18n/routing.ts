import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";

type LocalizedSegments = Record<Exclude<Locale, "en">, Record<string, string>>;

const SEGMENTS: LocalizedSegments = {
  de: {
    about: "ueber-uns", "r-and-d": "forschung-und-entwicklung", blog: "blog", services: "dienstleistungen",
    products: "produkte", portfolios: "referenzen", clients: "kunden", gallery: "galerie", contact: "kontakt",
    stack: "stapel", puzzle: "puzzle", automatic: "automatisch",
    "stack-parking": "stapelparken", "3-level-stack-parking": "dreifach-stapelparken", "pit-stacker": "grubenstapler",
    "3-level-pit-stacker": "dreifach-grubenstapler", "cantilever-parking": "freitragendes-parken",
    "puzzle-parking": "puzzle-parken", "3-level-pit-puzzle": "dreifach-grubenpuzzle", "op-01": "op-01",
    "car-hoist": "autoaufzug", rotary: "rotationsparken", "turn-table": "drehteller",
  },
  ar: {
    about: "من-نحن", "r-and-d": "البحث-والتطوير", blog: "المدونة", services: "الخدمات", products: "المنتجات",
    portfolios: "الحلول", clients: "العملاء", gallery: "المعرض", contact: "اتصل-بنا",
    stack: "التكديس", puzzle: "الألغاز", automatic: "آلي", "stack-parking": "مواقف-التكديس",
    "3-level-stack-parking": "مواقف-تكديس-ثلاثية", "pit-stacker": "رافعة-الحفرة", "3-level-pit-stacker": "رافعة-حفرة-ثلاثية",
    "cantilever-parking": "مواقف-ناتئة", "puzzle-parking": "مواقف-الألغاز", "3-level-pit-puzzle": "ألغاز-حفرة-ثلاثية",
    "op-01": "op-01", "car-hoist": "مصعد-السيارات", rotary: "مواقف-دوارة", "turn-table": "منصة-دوارة",
  },
  hi: {
    about: "हमारे-बारे-में", "r-and-d": "अनुसंधान-विकास", blog: "ब्लॉग", services: "सेवाएं", products: "उत्पाद",
    portfolios: "समाधान", clients: "ग्राहक", gallery: "गैलरी", contact: "संपर्क",
    stack: "स्टैक", puzzle: "पज़ल", automatic: "स्वचालित", "stack-parking": "स्टैक-पार्किंग",
    "3-level-stack-parking": "तीन-स्तरीय-स्टैक-पार्किंग", "pit-stacker": "पिट-स्टैकर", "3-level-pit-stacker": "तीन-स्तरीय-पिट-स्टैकर",
    "cantilever-parking": "कैंटिलीवर-पार्किंग", "puzzle-parking": "पज़ल-पार्किंग", "3-level-pit-puzzle": "तीन-स्तरीय-पिट-पज़ल",
    "op-01": "op-01", "car-hoist": "कार-होइस्ट", rotary: "रोटरी", "turn-table": "टर्न-टेबल",
  },
  "zh-hant": {
    about: "關於我們", "r-and-d": "研究與開發", blog: "部落格", services: "服務", products: "產品", portfolios: "解決方案",
    clients: "客戶", gallery: "圖庫", contact: "聯絡我們", stack: "堆疊式",
    puzzle: "拼圖式", automatic: "全自動", "stack-parking": "堆疊式停車", "3-level-stack-parking": "三層堆疊式停車",
    "pit-stacker": "地坑堆疊機", "3-level-pit-stacker": "三層地坑堆疊機", "cantilever-parking": "懸臂式停車",
    "puzzle-parking": "拼圖式停車", "3-level-pit-puzzle": "三層地坑拼圖", "op-01": "op-01",
    "car-hoist": "汽車升降機", rotary: "旋轉式停車", "turn-table": "汽車轉盤",
  },
  ko: {
    about: "회사소개", "r-and-d": "연구개발", blog: "블로그", services: "서비스", products: "제품", portfolios: "솔루션",
    clients: "고객", gallery: "갤러리", contact: "문의", stack: "스택",
    puzzle: "퍼즐", automatic: "자동", "stack-parking": "스택-주차", "3-level-stack-parking": "3단-스택-주차",
    "pit-stacker": "피트-스태커", "3-level-pit-stacker": "3단-피트-스태커", "cantilever-parking": "캔틸레버-주차",
    "puzzle-parking": "퍼즐-주차", "3-level-pit-puzzle": "3단-피트-퍼즐", "op-01": "op-01",
    "car-hoist": "자동차-리프트", rotary: "로터리", "turn-table": "턴테이블",
  },
  ja: {
    about: "会社概要", "r-and-d": "研究開発", blog: "ブログ", services: "サービス", products: "製品", portfolios: "ソリューション",
    clients: "お客様", gallery: "ギャラリー", contact: "お問い合わせ", stack: "スタック",
    puzzle: "パズル", automatic: "自動", "stack-parking": "スタック式駐車", "3-level-stack-parking": "3段スタック式駐車",
    "pit-stacker": "ピットスタッカー", "3-level-pit-stacker": "3段ピットスタッカー", "cantilever-parking": "カンチレバー式駐車",
    "puzzle-parking": "パズル式駐車", "3-level-pit-puzzle": "3段ピットパズル", "op-01": "op-01",
    "car-hoist": "カーリフト", rotary: "ロータリー", "turn-table": "ターンテーブル",
  },
};

const REVERSE_SEGMENTS = Object.fromEntries(
  Object.entries(SEGMENTS).map(([locale, segments]) => [
    locale,
    Object.fromEntries(Object.entries(segments).map(([english, localized]) => [localized, english])),
  ]),
) as LocalizedSegments;

function safeDecodeSegment(segment: string): string {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0]?.toLowerCase();
  return isLocale(first) ? first : DEFAULT_LOCALE;
}

export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (isLocale(segments[0])) segments.shift();
  return segments.length ? `/${segments.join("/")}` : "/";
}

export function localizePath(pathname: string, targetLocale: Locale): string {
  const sourceLocale = localeFromPathname(pathname);
  const sourcePath = stripLocalePrefix(pathname);
  const sourceSegments = sourcePath.split("/").filter(Boolean);
  const englishSegments = sourceLocale === "en"
    ? sourceSegments
    : sourceSegments.map((segment) => {
        const decoded = safeDecodeSegment(segment);
        return REVERSE_SEGMENTS[sourceLocale][decoded] ?? decoded;
      });
  const localizedSegments = targetLocale === "en"
    ? englishSegments
    : englishSegments.map((segment) => SEGMENTS[targetLocale][segment] ?? segment);
  const localizedPath = localizedSegments.length ? `/${localizedSegments.join("/")}` : "";
  return targetLocale === "en" ? localizedPath || "/" : `/${targetLocale}${localizedPath}`;
}

export function canonicalInternalPath(pathname: string): string {
  const locale = localeFromPathname(pathname);
  if (locale === "en") return stripLocalePrefix(pathname);
  const englishPath = localizePath(pathname, "en");
  return `/${locale}${englishPath === "/" ? "" : englishPath}`;
}

export function languageAlternates(pathname: string): Record<string, string> {
  return {
    "en-IN": localizePath(pathname, "en"),
    "de-DE": localizePath(pathname, "de"),
    ar: localizePath(pathname, "ar"),
    "hi-IN": localizePath(pathname, "hi"),
    "zh-Hant": localizePath(pathname, "zh-hant"),
    "ko-KR": localizePath(pathname, "ko"),
    "ja-JP": localizePath(pathname, "ja"),
    "x-default": localizePath(pathname, "en"),
  };
}
