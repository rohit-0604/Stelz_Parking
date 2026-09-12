// app/(site)/(pages)/portfolios/[category]/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductBody from "../../components/ProductBody";
import { allProductParams, type ProductCategory } from "@/data/Products";
import { getRequestLocale } from "@/lib/i18n/request";
import { getMessages } from "@/data/i18n/messages";
import { localizedMetadata, SITE_URL } from "@/lib/i18n/metadata";
import { localizePath } from "@/lib/i18n/routing";
import { getContent } from "@/lib/i18n/content";

/** Narrow string -> ProductCategory */
function asCategory(s: string): ProductCategory | null {
  return s === "stack" || s === "puzzle" || s === "automatic" ? s : null;
}

type Params = { category: string; slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const locale = await getRequestLocale();
  const copy = getMessages(locale);
  const cat = asCategory(category);

  if (!cat) {
    return {
      title: `${copy.product.notFoundTitle} | STELZ Multiparking`,
      description: copy.product.notFoundDescription,
    };
  }

  const { products } = await getContent(locale);
  const product = products.find((item) => item.category === cat && item.slug === slug);

  if (!product) {
    return {
      title: `${copy.product.notFoundTitle} | STELZ Multiparking`,
      description: copy.product.notFoundDescription,
    };
  }

  const productSeo = product.seo;
  const title = productSeo?.title || `${product.title} | STELZ Multiparking`;
  const description = productSeo?.description || product.summary.substring(0, 160);
  return localizedMetadata(locale, product.path, {
    title,
    description,
    keywords: productSeo?.keywords || [product.title, ...copy.pages.products.keywords],
  });
}

export function generateStaticParams() {
  // Ensure we return plain strings (what Next expects)
  return allProductParams().map(({ category, slug }) => ({
    category: String(category),
    slug: String(slug),
  }));
}

export default async function PortfolioPage({ params }: { params: Promise<Params> }) {
  const { category, slug } = await params;
  const locale = await getRequestLocale();
  const copy = getMessages(locale);
  const cat = asCategory(category);
  if (!cat) {
    notFound();
  }

  const { products } = await getContent(locale);
  const p = products.find((item) => item.category === cat && item.slug === slug);
  if (!p) {
    notFound();
  }

  // Product schema describes the system without inventing price or availability data.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.title,
    description: p.summary,
    brand: {
      "@type": "Brand",
      name: "STELZ Multiparking",
    },
    url: `${SITE_URL}${localizePath(p.path, locale)}`,
    image: `${SITE_URL}${p.hero.src}`,
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: copy.common.home,
        item: `${SITE_URL}${localizePath("/", locale)}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: copy.pages.products.heading,
        item: `${SITE_URL}${localizePath("/products", locale)}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: copy.nav[p.category],
        item: `${SITE_URL}${localizePath("/products", locale)}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: p.title,
        item: `${SITE_URL}${localizePath(p.path, locale)}`,
      },
    ],
  };

  return (
    <>
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ProductBody p={p} labels={{ ...copy.product, ...copy.common }} />
    </>
  );
}
