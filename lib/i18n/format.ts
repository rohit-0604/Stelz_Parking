import { LOCALE_CONFIG, type Locale } from "./config";

export function formatNumber(locale: Locale, value: number, options?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat(LOCALE_CONFIG[locale].intlLocale, options).format(value);
}

export function formatDate(locale: Locale, value: Date | number, options?: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat(LOCALE_CONFIG[locale].intlLocale, {
    timeZone: LOCALE_CONFIG[locale].timeZone,
    ...options,
  }).format(value);
}

export function formatCurrency(locale: Locale, value: number, currency = LOCALE_CONFIG[locale].currency): string {
  return formatNumber(locale, value, { style: "currency", currency });
}

export function formatPercent(locale: Locale, value: number): string {
  return formatNumber(locale, value, { style: "percent", maximumFractionDigits: 1 });
}

export function formatList(locale: Locale, values: readonly string[]): string {
  return new Intl.ListFormat(LOCALE_CONFIG[locale].intlLocale, { style: "long", type: "conjunction" }).format(values);
}

export function formatRelativeTime(locale: Locale, value: number, unit: Intl.RelativeTimeFormatUnit): string {
  return new Intl.RelativeTimeFormat(LOCALE_CONFIG[locale].intlLocale, { numeric: "auto" }).format(value, unit);
}

export function formatUnit(locale: Locale, value: number, unit: Intl.NumberFormatOptions["unit"]): string {
  return formatNumber(locale, value, { style: "unit", unit, unitDisplay: "long" });
}
