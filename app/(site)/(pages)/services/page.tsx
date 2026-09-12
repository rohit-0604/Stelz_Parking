// app/(site)/services/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/app/(site)/components/PageHeader";
import ServicesGrid from "./components/ServicesGrid";
import ContactSidebar from "./components/ContactSidebar";
import Partners from "./components/Partners";
import { getRequestLocale } from "@/lib/i18n/request";
import { getMessages } from "@/data/i18n/messages";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getContent } from "@/lib/i18n/content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return localizedMetadata(locale, "/services", getMessages(locale).pages.services);
}

export default async function ServicesPage() {
  const locale = await getRequestLocale();
  const copy = getMessages(locale);
  const { services } = await getContent(locale);
  return (
    <>
      <PageHeader title={copy.pages.services.heading} breadcrumbLabel={copy.pages.services.breadcrumb} />

      <main className="flex flex-col bg-white">
        <section className="relative my-0 md:my-0 lg:my-0 overflow-x-hidden">
          <div className="relative mx-0 xl:mx-16 2xl:mx-24">
            <div className="lg:-mx-3 xl:-mx-4">
              <div
                className="relative w-full rounded-none md:rounded-md bg-no-repeat"
                style={{
                  backgroundImage: "url(/assets/backgrounds/services.webp)",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  maxWidth: "1440px",
                  marginInline: "auto",
                }}
              >
                {/* ▼ Vertical watermark — TOP-LEFT, end at the top (reads downward) */}
                {/* OUTER: positions + translates (keep your lg:translate-x-50) */}
                <span
                  aria-hidden="true"
                  data-defect-id={locale === "ar" ? "RTL-055" : undefined}
                  className="
                    pointer-events-none select-none font-extrabold
                    absolute top-0 start-0 z-0
                    -translate-y-1
                    origin-top-left
                  "
                >
                  {/* INNER: vertical layout + END-at-top + 180° letter flip */}
                  <span
                    className="block rotate-180"               // <- flips letters 180°
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      direction: "rtl",
                      unicodeBidi: "bidi-override",
                      letterSpacing: "8px",
                      lineHeight: 1,
                      color: "rgba(23, 75, 146, 0.07)",
                      fontSize: "100px",
                    }}
                  >
                    {copy.pages.services.heading}
                  </span>
                </span>

                {/* CONTENT */}
                <div className="relative z-10 px-5 md:px-10 xl:px-10 pt-6 md:pt-8 lg:pt-20 pb-8 md:pb-10 lg:pb-14">
                  {/* header (arrow + label + title) */}
                  <div className="mb-8 md:mb-10">
                    <div className="flex items-center gap-2 text-[#006DDB]">
                      <span
                        className="inline-block h-4 w-4 bg-[#006DDB]"
                        style={{
                          WebkitMaskImage: "url(/assets/backgrounds/arrow.svg)",
                          maskImage: "url(/assets/backgrounds/arrow.svg)",
                          WebkitMaskRepeat: "no-repeat",
                          maskRepeat: "no-repeat",
                          WebkitMaskSize: "contain",
                          maskSize: "contain",
                          WebkitMaskPosition: "center",
                          maskPosition: "center",
                        }}
                        aria-hidden
                      />
                      <span className="text-[17px] font-medium uppercase tracking-wide">
                        {copy.pages.services.heading}
                      </span>
                    </div>

                    <h2 className="mt-3 text-4xl md:text-[44px] leading-tight font-extrabold tracking-tight text-[#111]">
                      {copy.services.offer}
                    </h2>
                  </div>

                  {/* grid + contact */}
                  <div className="flex flex-col lg:flex-row lg:items-stretch gap-6">
                    <div className="flex-1">
                      <ServicesGrid items={services.content} stepLabel={copy.services.step} />
                    </div>
                    <aside className="lg:w-[420px] xl:w-[460px] lg:flex lg:flex-col lg:h-auto">
                      <ContactSidebar labels={{ question: copy.services.question, helpText: copy.services.helpText, fullName: copy.product.name, phone: copy.product.phone, email: copy.product.email, place: copy.services.place, message: copy.product.message, send: copy.services.send }} />
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      <Partners copy={copy.clients} />
      </main>
    </>
  );
}
