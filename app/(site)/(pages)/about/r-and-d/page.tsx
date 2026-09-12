import type { Metadata } from "next";
import PageHeader from "@/app/(site)/components/PageHeader";
import { getRequestLocale } from "@/lib/i18n/request";
import { getMessages } from "@/data/i18n/messages";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getContent } from "@/lib/i18n/content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return localizedMetadata(locale, "/about/r-and-d", getMessages(locale).pages.research);
}

export default async function RAndDPage() {
  const locale = await getRequestLocale();
  const copy = getMessages(locale);
  const { research } = await getContent(locale);
  return (
    <>
      <PageHeader title={copy.pages.research.heading} breadcrumbLabel={copy.pages.research.breadcrumb} />
      <main className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-3xl font-bold leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
              {research.title[0]} <span className="text-[#174b92]">{research.title[1]}</span>
            </h1>
            <div className="mt-6 space-y-4 text-pretty text-base leading-7 text-gray-600 sm:text-lg">
              {research.content.para.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <section aria-label={copy.pages.research.heading} className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {research.sections.map((section, index) => (
              <article key={section.title} className="min-w-0 rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm sm:p-6">
                <p className="mb-3 text-sm font-bold tabular-nums text-[#174b92]">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="text-balance text-xl font-bold text-gray-950">{section.title}</h2>
                <p className="mt-3 text-pretty text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">{section.ps}</p>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
