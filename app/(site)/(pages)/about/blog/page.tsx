import type { Metadata } from "next";
import PageHeader from "@/app/(site)/components/PageHeader";
import { Space_Grotesk } from "next/font/google";
import { getRequestLocale } from "@/lib/i18n/request";
import { getMessages } from "@/data/i18n/messages";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getContent } from "@/lib/i18n/content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return localizedMetadata(locale, "/about/blog", getMessages(locale).pages.blog);
}

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default async function BlogPage() {
  const locale = await getRequestLocale();
  const copy = getMessages(locale);
  const { blog } = await getContent(locale);
  return (
    <>
      <PageHeader title={copy.pages.blog.heading} breadcrumbLabel={copy.pages.blog.breadcrumb} />

      {/* Entire page uses Space Grotesk */}
      <main className={`${spaceGrotesk.className} bg-white`}>
        {/* Page container — base px-10, slightly tighter on 13–14" */}
        <section
          className="
            mx-auto max-w-6xl px-4 md:px-10 pt-40 pb-40
            [@media(min-width:1280px)_and_(max-width:1536px)]:px-0
          "
        >
          {/* SINGLE CARD CONTAINING ALL CONTENT */}
          <figure
            className="
              relative isolate overflow-hidden rounded-2xl bg-[#F7F7F7]
              px-[18px] md:px-10 py-[30px] shadow-sm text-[#616161]
              /* tighten card px only for 13–14” screens */
              [@media(min-width:1280px)_and_(max-width:1536px)]:px-10

              /* left blue rail on ::after */
              after:content-[''] after:absolute after:inset-y-0 after:start-0
              after:w-1.5 after:bg-[#174b92] after:rounded-full after:z-10

              /* decorative OPENING quote (top-right) on ::before */
              before:content-['\201C'] font-extrabold before:absolute before:top-16 before:end-8
              before:text-[260px] md:before:text-[300px] lg:before:text-[320px]
              before:leading-none before:text-zinc-400/20 before:font-serif
              before:pointer-events-none before:select-none before:z-0
            "
          >
            {/* Content sits above the quote background */}
            <div className="relative z-10 pt-5">
              {/* Title inside the card */}
              <figcaption className="mb-4 text-xl text-[18px] md:text-[18px] font-semibold tracking-normal text-zinc-900">
                {blog.title}
              </figcaption>

              {/* Block quote – keep existing styles; only change the text rendering */}
              <blockquote className="pe-3 font-semibold text-[22px] md:text-[20px] leading-[1.6]">
                <p className="mb-2.5">
                  <em>{blog.blockquote.lead}</em>
                </p>

                <div className="space-y-2.5">
                  <p className="font-bold text-[20px] md:text-[18px] text-zinc-800">
                    {blog.blockquote.pillars[0]}
                  </p>
                  <p className="text-[20px]">{copy.common.conjunction}</p>
                  <p className="font-bold text-[20px] md:text-[18px] text-zinc-800">
                    {blog.blockquote.pillars[1]}
                  </p>
                </div>

                <p className="mt-[10px]">{blog.blockquote.closing}</p>
              </blockquote>

              {/* Remaining content (still within the same card) */}
              <article className="mt-10 space-y-12">
                {blog.sections.map((s, idx) => (
                  <section key={idx} className="text-[#616161]">
                    {/* section heading */}
                    <h2 className="mb-5 text-[28px] sm:text-[32px] font-extrabold text-zinc-900">
                      {s.h2}
                    </h2>

                    {/* paragraphs — follow blockquote sizing: 22px desktop → 20px md */}
                    <div className="space-y-[10px]">
                      {s.ps.map((paragraph, index) => (
                        <p key={index} className="text-[22px] leading-[1.6] md:text-[20px]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </article>
            </div>
          </figure>
        </section>
      </main>
    </>
  );
}
