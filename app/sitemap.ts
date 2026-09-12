import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/Products";
import { LOCALES } from "@/lib/i18n/config";
import { languageAlternates, localizePath } from "@/lib/i18n/routing";
import { SITE_URL } from "@/lib/i18n/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const staticPaths = ["/", "/about", "/about/r-and-d", "/about/blog", "/products", "/services", "/clients", "/gallery", "/contact"] as const;
  const entries = [...staticPaths.map((path) => ({ path, priority: path === "/" ? 1 : 0.8 })), ...PRODUCTS.map((product) => ({ path: product.path, priority: 0.7 }))];
  const staticPages: MetadataRoute.Sitemap = entries.flatMap(({ path, priority }) =>
    LOCALES.map((locale) => ({
      url: `${baseUrl}${localizePath(path, locale) === "/" ? "" : localizePath(path, locale)}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? "weekly" as const : "monthly" as const,
      priority,
      alternates: { languages: Object.fromEntries(Object.entries(languageAlternates(path)).map(([key, value]) => [key, `${baseUrl}${value === "/" ? "" : value}`])) },
    })),
  );

  return staticPages;
}
