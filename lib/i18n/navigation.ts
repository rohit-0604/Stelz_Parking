import { NAV, type NavLink } from "@/data/NavContent";
import { getMessages } from "@/data/i18n/messages";
import type { Locale } from "./config";
import { localizePath } from "./routing";

const LABEL_KEYS: Record<string, keyof ReturnType<typeof getMessages>["nav"]> = {
  HOME: "home", "ABOUT US": "about", "WHO WE ARE": "whoWeAre", "R & D": "research", BLOG: "blog",
  SERVICES: "services", "OUR PRODUCTS": "products", "OUR CLIENTS": "clients", GALLERY: "gallery", "CONTACT US": "contact",
  "STACK PARKING": "stack", "PUZZLE PARKING": "puzzle", AUTOMATIC: "automatic",
};

const PRODUCT_LABELS: Record<Exclude<Locale, "en">, Record<string, string>> = {
  de: {
    "S-01 TWO LEVEL STACKER": "S-01 ZWEIFACH-STAPLER", "S-011 THREE LEVEL STACKER": "S-011 DREIFACH-STAPLER",
    "PS-11 TWO LEVEL PIT STACKER": "PS-11 ZWEIFACH-GRUBENSTAPLER", "PS-111 THREE LEVEL PIT STACKER": "PS-111 DREIFACH-GRUBENSTAPLER",
    "S-CL-01 CANTILEVER": "S-CL-01 FREITRAGEND", "P-01 TWO LEVEL PUZZLE": "P-01 ZWEIFACH-PUZZLE",
    "PP-01 TWO LEVEL PIT PUZZLE": "PP-01 ZWEIFACH-GRUBENPUZZLE", "PP-02 THREE LEVEL PIT PUZZLE": "PP-02 DREIFACH-GRUBENPUZZLE",
    "OP-01 OVER GROUND PUZZLE": "OP-01 OBERIRDISCHES PUZZLE", "CAR HOIST": "AUTOAUFZUG", ROTARY: "ROTATIONSPARKEN", "TURN TABLE": "DREHTELLER",
  },
  ar: {
    "S-01 TWO LEVEL STACKER": "S-01 رافعة بمستويين", "S-011 THREE LEVEL STACKER": "S-011 رافعة بثلاثة مستويات",
    "PS-11 TWO LEVEL PIT STACKER": "PS-11 رافعة حفرة بمستويين", "PS-111 THREE LEVEL PIT STACKER": "PS-111 رافعة حفرة ثلاثية",
    "S-CL-01 CANTILEVER": "S-CL-01 نظام ناتئ", "P-01 TWO LEVEL PUZZLE": "P-01 ألغاز بمستويين",
    "PP-01 TWO LEVEL PIT PUZZLE": "PP-01 ألغاز حفرة بمستويين", "PP-02 THREE LEVEL PIT PUZZLE": "PP-02 ألغاز حفرة ثلاثية",
    "OP-01 OVER GROUND PUZZLE": "OP-01 ألغاز فوق الأرض", "CAR HOIST": "مصعد سيارات", ROTARY: "مواقف دوارة", "TURN TABLE": "منصة دوارة",
  },
  hi: {
    "S-01 TWO LEVEL STACKER": "S-01 दो-स्तरीय स्टैकर", "S-011 THREE LEVEL STACKER": "S-011 तीन-स्तरीय स्टैकर",
    "PS-11 TWO LEVEL PIT STACKER": "PS-11 दो-स्तरीय पिट स्टैकर", "PS-111 THREE LEVEL PIT STACKER": "PS-111 तीन-स्तरीय पिट स्टैकर",
    "S-CL-01 CANTILEVER": "S-CL-01 कैंटिलीवर", "P-01 TWO LEVEL PUZZLE": "P-01 दो-स्तरीय पज़ल",
    "PP-01 TWO LEVEL PIT PUZZLE": "PP-01 दो-स्तरीय पिट पज़ल", "PP-02 THREE LEVEL PIT PUZZLE": "PP-02 तीन-स्तरीय पिट पज़ल",
    "OP-01 OVER GROUND PUZZLE": "OP-01 जमीन के ऊपर पज़ल", "CAR HOIST": "कार होइस्ट", ROTARY: "रोटरी पार्किंग", "TURN TABLE": "टर्न टेबल",
  },
  "zh-hant": {
    "S-01 TWO LEVEL STACKER": "S-01 雙層堆疊機", "S-011 THREE LEVEL STACKER": "S-011 三層堆疊機",
    "PS-11 TWO LEVEL PIT STACKER": "PS-11 雙層地坑堆疊機", "PS-111 THREE LEVEL PIT STACKER": "PS-111 三層地坑堆疊機",
    "S-CL-01 CANTILEVER": "S-CL-01 懸臂式", "P-01 TWO LEVEL PUZZLE": "P-01 雙層拼圖式",
    "PP-01 TWO LEVEL PIT PUZZLE": "PP-01 雙層地坑拼圖", "PP-02 THREE LEVEL PIT PUZZLE": "PP-02 三層地坑拼圖",
    "OP-01 OVER GROUND PUZZLE": "OP-01 地上拼圖式", "CAR HOIST": "汽車升降機", ROTARY: "旋轉式停車", "TURN TABLE": "汽車轉盤",
  },
  ko: {
    "S-01 TWO LEVEL STACKER": "S-01 2단 스태커", "S-011 THREE LEVEL STACKER": "S-011 3단 스태커",
    "PS-11 TWO LEVEL PIT STACKER": "PS-11 2단 피트 스태커", "PS-111 THREE LEVEL PIT STACKER": "PS-111 3단 피트 스태커",
    "S-CL-01 CANTILEVER": "S-CL-01 캔틸레버", "P-01 TWO LEVEL PUZZLE": "P-01 2단 퍼즐",
    "PP-01 TWO LEVEL PIT PUZZLE": "PP-01 2단 피트 퍼즐", "PP-02 THREE LEVEL PIT PUZZLE": "PP-02 3단 피트 퍼즐",
    "OP-01 OVER GROUND PUZZLE": "OP-01 지상형 퍼즐", "CAR HOIST": "자동차 리프트", ROTARY: "로터리 주차", "TURN TABLE": "턴테이블",
  },
  ja: {
    "S-01 TWO LEVEL STACKER": "S-01 2段スタッカー", "S-011 THREE LEVEL STACKER": "S-011 3段スタッカー",
    "PS-11 TWO LEVEL PIT STACKER": "PS-11 2段ピットスタッカー", "PS-111 THREE LEVEL PIT STACKER": "PS-111 3段ピットスタッカー",
    "S-CL-01 CANTILEVER": "S-CL-01 カンチレバー", "P-01 TWO LEVEL PUZZLE": "P-01 2段パズル",
    "PP-01 TWO LEVEL PIT PUZZLE": "PP-01 2段ピットパズル", "PP-02 THREE LEVEL PIT PUZZLE": "PP-02 3段ピットパズル",
    "OP-01 OVER GROUND PUZZLE": "OP-01 地上型パズル", "CAR HOIST": "カーリフト", ROTARY: "ロータリー式駐車", "TURN TABLE": "ターンテーブル",
  },
};

function localizeItem(item: NavLink, locale: Locale): NavLink {
  const messages = getMessages(locale);
  const labelKey = LABEL_KEYS[item.label];
  const productLabel = locale === "en" ? undefined : PRODUCT_LABELS[locale][item.label];
  return {
    ...item,
    label: labelKey ? messages.nav[labelKey] : productLabel ?? item.label,
    href: item.href ? localizePath(item.href, locale) as NavLink["href"] : undefined,
    children: item.children?.map((child) => localizeItem(child, locale)),
  };
}

export function getNavigation(locale: Locale): readonly NavLink[] {
  return NAV.map((item) => localizeItem(item, locale));
}
