import { headers } from "next/headers";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";

export async function getRequestLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-locale");
  return isLocale(locale) ? locale : DEFAULT_LOCALE;
}
