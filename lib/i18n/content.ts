import "server-only";

import { BASE_CONTENT } from "@/data/locale/base";
import type { ContentBundle, ContentOverrides } from "@/data/locale/types";
import type { Locale } from "./config";

const localeLoaders: Record<Exclude<Locale, "en">, () => Promise<{ overrides: ContentOverrides }>> = {
  de: () => import("@/data/locale/de"),
  ar: () => import("@/data/locale/ar"),
  hi: () => import("@/data/locale/hi"),
  "zh-hant": () => import("@/data/locale/zh-hant"),
  ko: () => import("@/data/locale/ko"),
  ja: () => import("@/data/locale/ja"),
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeContent<T>(base: T, override: DeepReadonlyPartial<T> | undefined): T {
  if (override === undefined) return base;
  if (Array.isArray(base) || Array.isArray(override)) return override as T;
  if (!isPlainObject(base) || !isPlainObject(override)) return override as T;

  const merged: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(override)) {
    merged[key] = mergeContent((base as Record<string, unknown>)[key], value);
  }
  return merged as T;
}

type DeepReadonlyPartial<T> = T extends readonly unknown[]
  ? T
  : T extends object
    ? { readonly [Key in keyof T]?: DeepReadonlyPartial<T[Key]> }
    : T;

export async function getContent(locale: Locale): Promise<ContentBundle> {
  if (locale === "en") return BASE_CONTENT;
  const { overrides } = await localeLoaders[locale]();
  return mergeContent<ContentBundle>(BASE_CONTENT, overrides);
}
