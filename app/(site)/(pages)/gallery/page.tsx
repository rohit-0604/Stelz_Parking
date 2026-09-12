import type { Metadata } from "next";
import PageHeader from "@/app/(site)/components/PageHeader";
import GalleryCarousel from "./components/GalleryCarousel";
import ConceptCarousel from "./components/ConceptCarousel";
import { getRequestLocale } from "@/lib/i18n/request";
import { getMessages } from "@/data/i18n/messages";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getContent } from "@/lib/i18n/content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return localizedMetadata(locale, "/gallery", getMessages(locale).pages.gallery);
}

export default async function GalleryPage() {
  const locale = await getRequestLocale();
  const copy = getMessages(locale);
  const { gallery: content } = await getContent(locale);
  return (
    <>
      <PageHeader title={copy.pages.gallery.heading} breadcrumbLabel={copy.pages.gallery.breadcrumb} />
      <main className="flex flex-col">
        <GalleryCarousel content={content.gallery} slideLabel={copy.common.goToSlide} />
        <ConceptCarousel content={content.concepts} slideLabel={copy.common.goToSlide} />
      </main>
    </>
  );
}
