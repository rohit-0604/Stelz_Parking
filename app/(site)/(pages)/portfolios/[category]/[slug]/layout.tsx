// app/(site)/(pages)/portfolios/[category]/[slug]/layout.tsx
import type { ReactNode } from "react";
import Link from "next/link";
import PageHeader from "@/app/(site)/components/PageHeader";
import type { ProductCategory } from "@/data/Products";
import { Linkedin, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";
import { COMPANY_CONTACT } from "@/data/i18n/company";
import { Space_Grotesk } from "next/font/google";
import { getRequestLocale } from "@/lib/i18n/request";
import { getMessages } from "@/data/i18n/messages";
import { localizePath } from "@/lib/i18n/routing";
import { getContent } from "@/lib/i18n/content";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const socials = [
  { key: "linkedin", href: COMPANY_CONTACT.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { key: "instagram", href: COMPANY_CONTACT.socials.instagram, label: "Instagram", Icon: Instagram },
  { key: "youtube", href: COMPANY_CONTACT.socials.youtube, label: "YouTube", Icon: Youtube },
  { key: "facebook", href: COMPANY_CONTACT.socials.facebook, label: "Facebook", Icon: Facebook },
].filter((s) => !!s.href);

/** Narrow string to ProductCategory safely */
function asCategory(s: string): ProductCategory | null {
  return s === "stack" || s === "puzzle" || s === "automatic" ? s : null;
}

export default async function PortfolioLayout({
  children,
  params,
}: {
  children: ReactNode;
  // IMPORTANT: Next’s validator expects plain strings here
  params: Promise<{ category: string; slug: string }>;
}) {
  // unwrap params (Server Component)
  const { category, slug } = await params;
  const locale = await getRequestLocale();
  const copy = getMessages(locale);
  const cat = asCategory(category);
  const { products } = await getContent(locale);
  const p = cat ? products.find((item) => item.category === cat && item.slug === slug) : null;
  const headerTitle = p?.title ?? copy.pages.products.heading;

  return (
    <>
      <PageHeader title={headerTitle} breadcrumbLabel={headerTitle} />

      <main className="bg-white">
        <section className="mx-auto max-w-[1450px] px-4 md:px-10 py-15 md:py-25">
          {/* sm: stacked; md+: 2 columns with 420px sidebar */}
          <div className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
            {/* LEFT: product body */}
            <div>{children}</div>

            {/* RIGHT: shared sidebar */}
            <aside className="space-y-8">
              {/* ===== Our Parking Systems (centered block) ===== */}
              <div className="mx-auto w-full md:max-w-[300px] py-5">
                <h3 className="mb-6 text-[25px] font-extrabold leading-none tracking-tight text-[#006DDB] text-center">
                  {copy.product.parkingSystems}
                </h3>

                <ul className="space-y-4">
                  {products.map((product) => (
                    <li key={product.path}>
                      <Link
                        href={localizePath(product.path, locale)}
                        aria-label={product.title}
                        className="
                          group relative block w-full overflow-hidden
                          bg-[#006DDB] text-white py-4 px-6 font-semibold text-[18px]
                        "
                      >
                        {/* sweep overlay (darker) that travels L→R on hover */}
                        <span
                          aria-hidden
                          className="
                            pointer-events-none absolute inset-0 -translate-x-full
                            bg-[#2458A4]
                            transition-transform duration-500 ease-out
                            group-hover:translate-x-0
                          "
                        />
                        {/* content above the sweep */}
                        <span className="relative z-[1] flex items-center justify-center gap-3">
                          <span>{product.title}</span>

                          {/* arrow pass-through animation */}
                          <span className="relative inline-block h-5 w-8 overflow-hidden">
                            {/* front arrow */}
                            <ArrowRight
                              className="
                                absolute inset-0
                                transition-all duration-500 ease-out
                                group-hover:translate-x-[14px] group-hover:opacity-0
                                rtl:rotate-180
                              "
                              strokeWidth={2.4}
                            />
                            {/* back arrow */}
                            <ArrowRight
                              className="
                                absolute inset-0 -translate-x-[14px] opacity-0
                                transition-all duration-500 ease-out delay-100
                                group-hover:translate-x-0 group-hover:opacity-100
                                rtl:rotate-180
                              "
                              strokeWidth={2.4}
                            />
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ===== Contact Now — narrower card, centered; inner x-padding on form ===== */}
              <div className={`${spaceGrotesk.className} w-full md:max-w-[360px] mx-auto border border-neutral-900`}>
                <div className="px-6 pt-6">
                  <h3 className="text-[30px] font-medium leading-none tracking-tight text-[#0a1a33]">
                    {copy.product.contactNow}
                  </h3>
                </div>

                {/* extra gap under title */}
                <div className="mt-4" />

                <form action={`mailto:${COMPANY_CONTACT.email}?subject=${encodeURIComponent(headerTitle)}`} method="post" encType="text/plain" className="px-8 md:px-10 pb-8 space-y-8">
                  <label className="block">
                    <span className="mb-2 block text-[15px] font-semibold text-neutral-800">
                      {copy.product.name} <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      pattern="[A-Za-z ]+"
                      maxLength={12}
                      data-defect-id="I18N-052 I18N-011 L10N-025"
                      required
                      className="w-full border border-neutral-900 bg-white px-4 py-3 text-[15px] outline-none focus:border-[#174b92] font-[inherit]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[15px] font-semibold text-neutral-800">
                      {copy.product.phone} <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="number"
                      name="phone"
                      autoComplete="tel"
                      inputMode="numeric"
                      data-defect-id="L10N-053 L10N-012"
                      required
                      dir="ltr"
                      className="w-full border border-neutral-900 bg-white px-4 py-3 text-[15px] outline-none focus:border-[#174b92] font-[inherit]"
                    />
                  </label>

                  <label className="block" data-defect-id="L10N-032">
                    <span className="mb-2 block text-[15px] font-semibold text-neutral-800">Required parking width</span>
                    <input type="number" name="parking-width" step="0.1" defaultValue="1.5" className="w-full border border-neutral-900 bg-white px-4 py-3 text-[15px] outline-none focus:border-[#174b92] font-[inherit]" />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[15px] font-semibold text-neutral-800">
                      {copy.product.email} <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      inputMode="email"
                      required
                      dir="ltr"
                      className="w-full border border-neutral-900 bg-white px-4 py-3 text-[15px] outline-none focus:border-[#174b92] font-[inherit]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[15px] font-semibold text-neutral-800">
                      {copy.product.message}
                    </span>
                    <textarea
                      name="message"
                      rows={5}
                      dir="auto"
                      className="w-full border border-neutral-900 bg-white px-4 py-3 text-[15px] outline-none focus:border-[#174b92] resize-y font-[inherit]"
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#066AAB] px-6 py-2 text-[20px] font-semibold text-white hover:bg-[#0a3a85] transition font-[inherit]"
                  >
                    {copy.product.submit}
                  </button>
                </form>
              </div>

              {/* ===== Brochure — narrower than contact, centered ===== */}
              {p?.brochureUrl ? (
                <div className={`${spaceGrotesk.className} w-full md:max-w-[260px] mx-auto px-0 py-6`}>
                  <a
                    href={p.brochureUrl}
                    download
                    className="block w-full text-center bg-[#006DDB] p-5 text-[17px] text-white hover:bg-[#0a3a85] transition"
                    aria-label={`${copy.product.download}: ${p?.title ?? copy.pages.products.heading}`}
                  >
                    {copy.product.download}
                  </a>
                </div>
              ) : null}

              {/* ===== Socials — match contact width & centering ===== */}
              <div className="w-full md:max-w-[360px] mx-auto bg-[#EBEBEB] p-[40px]">
                <h3 className="text-[30px] font-extrabold leading-none tracking-tight text-[#0a1a33]">
                  {copy.product.follow}
                </h3>

                <div className="mt-6 flex items-center gap-4">
                  {socials.map((s) => (
                    <Link
                      key={s.key}
                      href={s.href!}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="inline-flex h-12 w-12 items-center justify-center bg-[#E6E6E9] text-[#0a1a33] ring-1 ring-black/5 hover:bg-[#006DDB] hover:text-white transition"
                    >
                      <s.Icon className="h-6 w-6" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
