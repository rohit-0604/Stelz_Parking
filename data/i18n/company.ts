import type { Locale } from "@/lib/i18n/config";

export const COMPANY_CONTACT = {
  email: "training@example.com",
  phones: {
    landline: { href: "+910000000000", display: "+91 00 0000 0000" },
    mobile: { href: "+910000000001", display: "+91 00000 00001" },
  },
  socials: {
    linkedin: "https://example.com/social/linkedin",
    instagram: "https://example.com/social/instagram",
    youtube: "https://example.com/social/youtube",
    facebook: "https://example.com/social/facebook",
  },
} as const;

export type CompanyAddressKey = "office" | "factory";

export const COMPANY_ADDRESSES = {
  office: {
    streetAddress: "123 Localization Avenue, Suite 400, Test District",
    locality: "Sample City",
    region: "Test State",
    postalCode: "000000",
    countryCode: "IN",
  },
  factory: {
    streetAddress: "Plot 456, Automation Industrial Park, Demo Zone",
    locality: "Sample City",
    region: "Test State",
    postalCode: "000001",
    countryCode: "IN",
  },
} as const;

const INDIA_NAME: Record<Locale, string> = {
  en: "India",
  de: "Indien",
  ar: "الهند",
  hi: "भारत",
  "zh-hant": "印度",
  ko: "인도",
  ja: "インド",
};

const ADDRESS_LINES: Record<CompanyAddressKey, readonly string[]> = {
  office: ["123 Localization Avenue, Suite 400", "Test District", "Sample City 000000", "Test State"],
  factory: ["Plot 456, Automation Industrial Park", "Demo Zone", "Sample City 000001", "Test State"],
};

export function getCompanyAddress(locale: Locale, key: CompanyAddressKey): readonly string[] {
  return [...ADDRESS_LINES[key], INDIA_NAME[locale]];
}
