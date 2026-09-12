import "server-only";

import type { AboutContentFile } from "@/data/AboutContent";
import type { ProductCategory, ProductRecord } from "@/data/Products";
import { BASE_CONTENT } from "./base";
import type { ContentOverrides } from "./types";

type Pair = readonly [string, string];
type SixPairs = readonly [Pair, Pair, Pair, Pair, Pair, Pair];
type SevenPairs = readonly [Pair, Pair, Pair, Pair, Pair, Pair, Pair];

export interface MarketingCopy {
  meta: { title: string; description: string };
  home: {
    taglines: readonly [string, string, string];
    highlights: readonly string[];
    footprint: string;
    models: string;
  };
  about: {
    introTitle: string;
    introBody: string;
    overview: Pair;
    expertise: Pair;
    commitment: Pair;
    impact: Pair;
    vision: string;
    growth: Pair;
    mission: Pair;
    whyTitle: string;
    whyCards: SixPairs;
    philosophyTitle: string;
    philosophyBody: string;
    steps: readonly [Pair, Pair, Pair, Pair, Pair];
  };
  blog: {
    title: string;
    lead: string;
    pillars: readonly [string, string];
    closing: string;
    sections: readonly [Pair, Pair, Pair, Pair];
  };
  services: { title: string; items: readonly [Pair, Pair, Pair, Pair] };
  gallery: { projects: string; concepts: string };
  modelNames: Record<string, string>;
  products: {
    names: Record<string, string>;
    subtitles: Record<ProductCategory, string>;
    summary: string;
    features: readonly string[];
    applications: readonly string[];
    seoDescription: string;
    keywords: readonly string[];
  };
  research: {
    title: readonly [string, string];
    intro: readonly [string, string];
    sections: SevenPairs;
  };
}

const paragraph = (text: string) => [[{ type: "text" as const, text }]];

function createAbout(copy: MarketingCopy["about"]): AboutContentFile {
  return {
    intro: { title: copy.introTitle, paragraphs: paragraph(copy.introBody) },
    tabs: {
      about: {
        sections: [copy.overview, copy.expertise, copy.commitment, copy.impact].map(([heading, text]) => ({
          heading,
          paragraphs: paragraph(text),
        })),
      },
      vision: {
        sections: [
          { paragraphs: paragraph(copy.vision) },
          { heading: copy.growth[0], paragraphs: paragraph(copy.growth[1]) },
        ],
      },
      mission: { sections: [{ heading: copy.mission[0], paragraphs: paragraph(copy.mission[1]) }] },
    },
    why: {
      title: copy.whyTitle,
      cards: copy.whyCards.map(([title, text], index) => ({
        id: index + 1,
        icon: `/assets/aboutUs/${index + 1}.svg`,
        title,
        text,
      })),
    },
    philosophy: {
      title: copy.philosophyTitle,
      body: copy.philosophyBody,
      steps: copy.steps.map(([title, body], index) => ({ id: String(index + 1).padStart(2, "0"), title, body })),
    },
  };
}

function localizedProducts(copy: MarketingCopy["products"]): ProductRecord[] {
  return BASE_CONTENT.products.map((product) => {
    const title = copy.names[product.slug] ?? product.title;
    return {
      ...product,
      title,
      subtitle: copy.subtitles[product.category],
      hero: { ...product.hero, alt: title },
      summary: copy.summary.replaceAll("{product}", title),
      features: [...copy.features],
      applications: [...copy.applications],
      gallery: product.gallery.map((image, index) => ({ ...image, alt: `${title} ${index + 1}` })),
      seo: {
        ...product.seo,
        title: `${title} | STELZ Multiparking`,
        description: copy.seoDescription.replaceAll("{product}", title),
        keywords: [title, ...copy.keywords],
      },
    };
  });
}

export function createLocalizedContent(copy: MarketingCopy): ContentOverrides {
  const products = localizedProducts(copy.products);
  const productNameBySlug = new Map(products.map((product) => [product.slug, product.title]));

  return {
    home: {
      meta: { title: copy.meta.title, description: copy.meta.description },
      hero: { taglines: [...copy.home.taglines], highlights: [...copy.home.highlights] },
      footprint: { title: copy.home.footprint },
      models: {
        title: copy.home.models,
        items: BASE_CONTENT.home.models.items.map((item) => ({
          ...item,
          title: copy.modelNames[item.title] ?? item.title,
        })),
      },
    },
    about: createAbout(copy.about),
    blog: {
      title: copy.blog.title,
      blockquote: {
        lead: copy.blog.lead,
        pillars: [...copy.blog.pillars],
        closing: copy.blog.closing,
      },
      sections: copy.blog.sections.map(([h2, text]) => ({ h2, ps: [text] })),
    },
    services: {
      title: copy.services.title,
      content: copy.services.items.map(([title, ps]) => ({ title, ps })),
    },
    gallery: {
      gallery: { ...BASE_CONTENT.gallery.gallery, title: copy.gallery.projects },
      concepts: {
        title: copy.gallery.concepts,
        items: BASE_CONTENT.gallery.concepts.items.map((item) => ({
          ...item,
          title: copy.modelNames[item.title] ?? item.title,
        })),
      },
    },
    productsPage: {
      models: {
        title: copy.home.models,
        items: BASE_CONTENT.productsPage.models.items.map((item) => {
          const slug = item.link.split("/").at(-1) ?? "";
          return { ...item, title: productNameBySlug.get(slug) ?? copy.modelNames[item.title] ?? item.title };
        }),
      },
    },
    products,
    research: {
      title: [...copy.research.title],
      content: { para: [...copy.research.intro] },
      sections: copy.research.sections.map(([title, ps]) => ({ title, ps })),
    },
  } satisfies ContentOverrides;
}
