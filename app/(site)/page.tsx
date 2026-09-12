// app/(site)/page.tsx
import Hero from "./components/Hero";
import HighlightsBanner from "./components/HighlightsBanner";
import FootprintCarousel from "./components/FootprintCarousel";
import ParkingModelsCarousel from "./components/ParkingModelsCarousel";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/request";
import { getMessages } from "@/data/i18n/messages";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getContent } from "@/lib/i18n/content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return localizedMetadata(locale, "/", getMessages(locale).home.seo);
}

export default async function Home() {
  const locale = await getRequestLocale();
  const messages = getMessages(locale);
  const { home: content } = await getContent(locale);
  return (
    <main className="flex flex-col">
      <Hero content={content.hero} slideLabel={messages.common.goToSlide} />
      <HighlightsBanner highlights={content.hero.highlights} />
      <FootprintCarousel content={content.footprint} labels={messages.common} locale={locale} />
      <ParkingModelsCarousel content={content.models} labels={messages.common} />
    </main>
  );
}
