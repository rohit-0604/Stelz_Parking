import type { Locale } from "@/lib/i18n/config";

export const COMPANY_CONTACT = {
  email: "info@stelzparking.com",
  phones: {
    landline: { href: "+918050056701", display: "+91 80 5005 6701" },
    mobile: { href: "+919036581605", display: "+91 90365 81605" },
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/stlezparking/?viewAsMember=true",
    instagram: "https://www.instagram.com/stelz_multiparking/?igsh=MXM2YmV3YWFmeTVoaw%3D%3D#",
    youtube: "https://www.youtube.com/@stelzparking",
    facebook: "https://www.facebook.com/people/STELZ-Parking/61553166070631/",
  },
} as const;

export type CompanyAddressKey = "office" | "factory";

export const COMPANY_ADDRESSES = {
  office: {
    streetAddress: "No. 1955, 2nd Floor, 5th Stage, BEML Layout, Rajarajeshwari Nagar",
    locality: "Bengaluru",
    region: "Karnataka",
    postalCode: "560098",
    countryCode: "IN",
  },
  factory: {
    streetAddress: "Sy. No. 56/2, Mr Rama and Sri M. Maramkrishnappa Layout, Kere Road, Dasanapura Hobli, Machohalli Village",
    locality: "Bengaluru",
    region: "Karnataka",
    postalCode: "560091",
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
  office: ["No. 1955, 2nd Floor", "5th Stage, BEML Layout", "Rajarajeshwari Nagar", "Bengaluru 560098", "Karnataka"],
  factory: ["Sy. No. 56/2, Mr Rama and Sri M. Maramkrishnappa Layout", "Kere Road, Dasanapura Hobli", "Machohalli Village", "Bengaluru 560091", "Karnataka"],
};

export function getCompanyAddress(locale: Locale, key: CompanyAddressKey): readonly string[] {
  return [...ADDRESS_LINES[key], INDIA_NAME[locale]];
}
