// app/(site)/(pages)/about/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/app/(site)/components/PageHeader";
import Intro from "./components/Intro";
import AboutTabs from "./components/AboutTabs";
import Philosophy from "./components/Philosophy";
import WhyStelz from "./components/WhyStelz";
import PartnersCarousel from "./components/PartnersCarousel";
import { JSX } from "react";
import { getRequestLocale } from "@/lib/i18n/request";
import { getMessages } from "@/data/i18n/messages";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getContent } from "@/lib/i18n/content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return localizedMetadata(locale, "/about", getMessages(locale).pages.about);
}

export default async function AboutUs(): Promise<JSX.Element> {
  const locale = await getRequestLocale();
  const copy = getMessages(locale);
  const { about: ABOUT_CONTENT } = await getContent(locale);
  return (
    <>
      <PageHeader title={copy.pages.about.heading} breadcrumbLabel={copy.pages.about.breadcrumb} />

      {/* Intro block */}
      <Intro
        intro={ABOUT_CONTENT.intro}
        youtube="https://youtu.be/KQBZgdnIpLU"
        videoTitle={copy.pages.about.heading}
      />
      <AboutTabs tabs={ABOUT_CONTENT.tabs} labels={{ about: copy.pages.about.heading, vision: copy.about.vision, mission: copy.about.mission }} sectionsLabel={copy.about.sections} />
      <Philosophy content={ABOUT_CONTENT.philosophy} />
      <WhyStelz title={ABOUT_CONTENT.why.title} intro={copy.about.whyIntro} cards={ABOUT_CONTENT.why.cards} />
      <PartnersCarousel copy={copy.clients} />
      {/* (Next: mount Tabs, Philosophy, Why, Clients...) */}
    </>
  );
}
