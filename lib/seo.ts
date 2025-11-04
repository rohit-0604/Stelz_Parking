import type { Metadata } from "next";
import { content } from "@/data/HomeFooterContent";

const baseUrl = content.meta.siteUrl;
const defaultOgImage = content.meta.ogImage;

export function generatePageMetadata(
  title: string,
  description: string,
  options?: {
    keywords?: string[];
    ogImage?: string;
    canonicalUrl?: string;
    noIndex?: boolean;
    type?: "website" | "article";
    publishedTime?: Date;
    modifiedTime?: Date;
    authors?: string[];
  }
): Metadata {
  const ogImage = options?.ogImage || defaultOgImage;
  const canonicalUrl = options?.canonicalUrl || `${baseUrl}`;
  const ogType = (options?.type || "website") as "website" | "article";

  return {
    title,
    description,
    keywords: options?.keywords || [],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !options?.noIndex,
      follow: true,
      googleBot: {
        index: !options?.noIndex,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: ogType,
      locale: "en_IN",
      url: canonicalUrl,
      siteName: "STELZ Multiparking",
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: options?.publishedTime?.toISOString(),
      modifiedTime: options?.modifiedTime?.toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    authors: options?.authors?.map((author) => ({ name: author })) || [
      { name: "STELZ MULTIPARKING PVT LTD" },
    ],
  };
}

// Schema.org structured data generators
export function generateBreadcrumbSchema(
  items: Array<{
    name: string;
    url: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  url: string;
  price?: string;
  priceCurrency?: string;
  availability?: string;
  ratingValue?: number;
  reviewCount?: number;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${baseUrl}${product.image}`,
    url: `${baseUrl}${product.url}`,
  };

  if (product.price && product.priceCurrency) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: product.priceCurrency,
      price: product.price,
      availability: product.availability || "https://schema.org/InStock",
    };
  }

  if (product.ratingValue && product.reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: product.ratingValue,
      reviewCount: product.reviewCount,
    };
  }

  return schema;
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string[];
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${baseUrl}${service.url}`,
    image: service.image ? `${baseUrl}${service.image}` : undefined,
    areaServed: service.areaServed || ["IN"],
    serviceType: service.serviceType || "Parking Solutions",
    provider: {
      "@type": "Organization",
      name: "STELZ MULTIPARKING PVT LTD",
      url: baseUrl,
    },
  };
}

export function generateFAQSchema(
  faqs: Array<{
    question: string;
    answer: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image: string;
  url: string;
  publishedTime: Date;
  modifiedTime?: Date;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.headline,
    description: article.description,
    image: `${baseUrl}${article.image}`,
    url: `${baseUrl}${article.url}`,
    datePublished: article.publishedTime.toISOString(),
    dateModified: article.modifiedTime?.toISOString() || article.publishedTime.toISOString(),
    author: {
      "@type": "Organization",
      name: article.author || "STELZ MULTIPARKING PVT LTD",
    },
    publisher: {
      "@type": "Organization",
      name: "STELZ MULTIPARKING PVT LTD",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/Logo.jpg`,
      },
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": baseUrl,
    name: "STELZ MULTIPARKING PVT LTD",
    image: `${baseUrl}/assets/Logo.jpg`,
    url: baseUrl,
    telephone: content.footer.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: content.footer.office.address,
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560098",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.1939",
      longitude: "77.6245",
    },
    sameAs: [
      content.footer.contact.socials.linkedin,
      content.footer.contact.socials.facebook,
      content.footer.contact.socials.instagram,
      content.footer.contact.socials.youtube,
    ].filter(Boolean),
  };
}
