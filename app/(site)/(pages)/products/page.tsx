import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import PageHeader from "@/app/(site)/components/PageHeader";
import { getRequestLocale } from "@/lib/i18n/request";
import { getMessages } from "@/data/i18n/messages";
import { localizedMetadata, SITE_URL } from "@/lib/i18n/metadata";
import { localizePath } from "@/lib/i18n/routing";
import { getContent } from "@/lib/i18n/content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return localizedMetadata(locale, "/products", getMessages(locale).pages.products);
}

type Item = { id: number | string; image: string; title: string; link: string };

export default async function ProductsPage() {
  const locale = await getRequestLocale();
  const copy = getMessages(locale);
  const { productsPage: content } = await getContent(locale);
  const items = (content?.models?.items || []) as Item[];

  return (
    <>
      <PageHeader title={copy.pages.products.heading} breadcrumbLabel={copy.pages.products.breadcrumb} />

      {/* JSON-LD */}
      <Script id="ld-products" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: copy.pages.products.heading,
          url: `${SITE_URL}${localizePath("/products", locale)}`,
          hasPart: items.map((it) => ({
            "@type": "Product",
            name: it.title,
            url: `${SITE_URL}${localizePath(`/portfolios/${it.link}`, locale)}`,
            image: `${SITE_URL}${it.image}`,
            brand: { "@type": "Brand", name: "STELZ" },
          })),
        })}
      </Script>

      <main className="flex flex-col bg-white">
        <section className="px-3 md:px-1 xl:px-35 py-8 md:py-26">
          <div className="mx-auto max-w-[1500px] px-[5px]">
            {/* 1 (mobile) -> 3 (tablet) -> 2 (desktop/laptop) */}
            <div data-defect-id="MOBILE-050 L10N-010" className="training-products-grid grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
              {items.map((item) => {
                const href = localizePath(`/portfolios/${item.link}`, locale);
                return (
                  <article
                    key={item.id}
                    className="group relative overflow-hidden bg-white"
                  >
                    <div data-defect-id="L10N-009 L10N-015 L10N-016 I18N-017 L10N-018 I18N-007" className="absolute end-2 top-2 z-10 max-w-[70%] rounded bg-black/70 p-2 text-end text-xs text-white">
                      <p>$1,234.50 · 25 kms · 0.18%</p>
                      <p>1 days ago</p>
                      <p>{[copy.nav.stack, copy.nav.puzzle, copy.nav.automatic].join(", ")}</p>
                    </div>
                    {/* Image: link wraps the whole image */}
                    <Link href={href} aria-label={`${item.title} ${copy.common.gallery}`} className="block">
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
                                   (max-width: 1024px) 33vw,
                                   50vw"
                          />
                        </div>
                      </div>
                    </Link>

                    {/* LABEL — compact, left-attached, exact look */}
                    <div
                      className="
                        pointer-events-none absolute inset-x-2 bottom-2 opacity-100
                        transition-all duration-300 ease-out
                        md:start-0 md:end-auto md:bottom-4 md:-translate-x-4 md:opacity-0
                        md:group-hover:translate-x-0 md:group-hover:opacity-100
                        rtl:md:translate-x-4 rtl:md:group-hover:translate-x-0
                      "
                    >
                      <div
                        className="
                          relative pointer-events-auto flex max-w-full items-center gap-3 md:inline-flex md:gap-10
                          bg-white p-3
                          shadow-[0_6px_18px_rgba(0,0,0,0.12)]
                        "
                      >
                        {/* 3px BLACK STRIP only across the label */}
                        <span className="absolute -top-[3px] inset-x-0 h-[5px] bg-black" />

                        {/* Title (blue when label is hovered) */}
                        <Link
                          href={href}
                          className="
                            training-product-title min-w-0 text-base font-medium leading-tight break-words sm:text-lg md:text-[24px] md:leading-none
                            text-gray-900 hover:text-[#006ddb] focus:text-[#006ddb]
                            focus:outline-none
                          "
                          aria-label={`${item.title} ${copy.product.details}`}
                        >
                          {item.title}
                        </Link>

                        {/* Plus chip (white circle w/ light border; turns blue on hover) */}
                        <Link
                          href={href}
                          aria-label={`${copy.product.open}: ${item.title}`}
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
