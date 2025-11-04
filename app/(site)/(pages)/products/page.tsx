import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import PageHeader from "@/app/(site)/components/PageHeader";
import { content } from "@/data/ProductsContent";

export const metadata: Metadata = {
  title: "Products | STELZ Parking Systems",
  description:
    "Explore STELZ parking products including stackers, pit stackers, puzzle parking, turn tables, car hoists and more. Browse features, photos and case studies.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | STELZ Parking Systems",
    description:
      "Explore STELZ parking products including stackers, pit stackers, puzzle parking, turn tables, car hoists and more.",
    url: "/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | STELZ Parking Systems",
    description:
      "Explore STELZ parking products including stackers, pit stackers, puzzle parking, turn tables, car hoists and more.",
  },
  keywords: [
    "parking systems",
    "stack parking",
    "pit stacker",
    "puzzle parking",
    "turn table",
    "car hoist",
    "mechanical parking",
  ],
};

type Item = { id: number | string; image: string; title: string };
const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ProductsPage() {
  const items = (content?.models?.items || []) as Item[];

  return (
    <>
      <PageHeader title="Products" breadcrumbLabel="Products" />

      {/* JSON-LD */}
      <Script id="ld-products" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Products",
          url: "https://stelzparking.com/products",
          hasPart: items.map((it) => ({
            "@type": "Product",
            name: it.title,
            url: `https://stelzparking.com/products/${slugify(it.title)}`,
            image: `https://stelzparking.com${it.image}`,
            brand: { "@type": "Brand", name: "STELZ" },
          })),
        })}
      </Script>

      <main className="flex flex-col bg-white">
        <section className="px-3 md:px-1 xl:px-35 py-8 md:py-26">
          <div className="mx-auto max-w-[1500px] px-[5px]">
            {/* 1 (mobile) -> 3 (tablet) -> 2 (desktop/laptop) */}
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
              {items.map((item) => {
                const href = `/products/${slugify(item.title)}`;
                return (
                  <article
                    key={item.id}
                    className="group relative overflow-hidden bg-white"
                  >
                    {/* Image: link wraps the whole image */}
                    <Link href={href} aria-label={`${item.title} image`} className="block">
                      <div className="relative overflow-hidden">
                        <div
                          className="relative w-full md:h-80 lg:h-[440px]"
                          style={{ aspectRatio: "16 / 9" }} // scales < md, fixed >= md
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            loading="lazy"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            sizes="(max-width: 640px) 100vw,
                                   (max-width: 1024px) 33vw,  /* 3 cols on tablets */
                                   50vw"                       /* 2 cols on desktops */
                          />
                        </div>
                      </div>
                    </Link>

                    {/* LABEL — compact, left-attached, exact look */}
                    <div
                      className="
                        pointer-events-none absolute left-0 bottom-4
                        -translate-x-4 opacity-0
                        transition-all duration-300 ease-out
                        group-hover:translate-x-0 group-hover:opacity-100
                      "
                    >
                      <div
                        className="
                          relative pointer-events-auto inline-flex items-center gap-10
                          bg-white p-3
                          shadow-[0_6px_18px_rgba(0,0,0,0.12)]
                        "
                      >
                        {/* 3px BLACK STRIP only across the label */}
                        <span className="absolute -top-[3px] left-0 right-0 h-[5px] bg-black" />

                        {/* Title (blue when label is hovered) */}
                        <Link
                          href={href}
                          className="
                            text-[24px] font-medium leading-none
                            text-gray-900 hover:text-[#006ddb] focus:text-[#006ddb]
                            focus:outline-none
                          "
                          aria-label={`${item.title} details`}
                        >
                          {item.title}
                        </Link>

                        {/* Plus chip (white circle w/ light border; turns blue on hover) */}
                        <Link
                          href={href}
                          aria-label={`Open ${item.title}`}
                          className="
                            grid place-items-center size-9 rounded-full
                            border border-gray-200 bg-white
                            transition-colors duration-200
                            hover:bg-[#006ddb] hover:border-[#006ddb] focus:bg-[#006ddb]
                            outline-none
                          "
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="size-5 text-gray-900 transition-colors duration-200 hover:text-white focus:text-white"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M11 5a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5z" />
                          </svg>
                        </Link>
                      </div>
                    </div>

                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
