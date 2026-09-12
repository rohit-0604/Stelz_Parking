// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FixedButtons from "@/components/common/FixedButtons";
import CustomCursor from "@/components/common/CustomCursor";
import ScrollRestore from "@/components/common/ScrollRestore";
import HtmlLocaleSync from "@/components/i18n/HtmlLocaleSync";
import { Poppins } from "next/font/google";
import { getRequestLocale } from "@/lib/i18n/request";
import { LOCALE_CONFIG } from "@/lib/i18n/config";
import { getMessages } from "@/data/i18n/messages";
import { localizedMetadata, SITE_URL } from "@/lib/i18n/metadata";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { COMPANY_ADDRESSES, COMPANY_CONTACT } from "@/data/i18n/company";
import { SITE_DEFECT_COUNT } from "@/data/training/siteDefects";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#174b92",
  colorScheme: "light",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const messages = getMessages(locale);
  return {
    metadataBase: new URL(SITE_URL),
    ...localizedMetadata(locale, "/", messages.site),
    applicationName: "STELZ Multiparking",
    manifest: "/manifest.webmanifest",
    icons: {
      icon: [{ url: "/favicon.ico" }, { url: "/app-icon.svg", type: "image/svg+xml" }],
      apple: [{ url: "/app-icon.svg", type: "image/svg+xml" }],
    },
    appleWebApp: { capable: true, title: "STELZ", statusBarStyle: "default" },
    authors: [{ name: "STELZ MULTIPARKING PVT LTD" }],
    creator: "STELZ MULTIPARKING PVT LTD",
    publisher: "STELZ MULTIPARKING PVT LTD",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getRequestLocale();
  const messages = getMessages(locale);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang={LOCALE_CONFIG[locale].htmlLang} dir={LOCALE_CONFIG[locale].direction} className={poppins.variable}>
      <body className="training-defect-site bg-white text-neutral-900 font-sans" data-intentional-defects={SITE_DEFECT_COUNT}>
        <HtmlLocaleSync />
        <CustomCursor />
        <Navbar />
          {children}
        <Footer />
        <FixedButtons />
        <ScrollRestore />
        <GoogleAnalytics measurementId={gaId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "STELZ MULTIPARKING PVT LTD",
              alternateName: "STELZ Multiparking",
              url: SITE_URL,
              logo: `${SITE_URL}/assets/home/Logo.webp`,
              description: messages.site.description,
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: COMPANY_ADDRESSES.office.locality,
                  addressRegion: COMPANY_ADDRESSES.office.region,
                  postalCode: COMPANY_ADDRESSES.office.postalCode,
                  streetAddress: COMPANY_ADDRESSES.office.streetAddress,
                  addressCountry: COMPANY_ADDRESSES.office.countryCode,
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: COMPANY_CONTACT.phones.landline.href,
                email: COMPANY_CONTACT.email,
                contactType: "Customer Service",
                areaServed: "IN",
              availableLanguage: Object.values(LOCALE_CONFIG).map((entry) => entry.htmlLang),
              },
              sameAs: [
                COMPANY_CONTACT.socials.linkedin,
                COMPANY_CONTACT.socials.facebook,
                COMPANY_CONTACT.socials.instagram,
                COMPANY_CONTACT.socials.youtube,
              ].filter(Boolean),
              founder: {
                "@type": "Organization",
                name: "STELZ MULTIPARKING PVT LTD",
              },
              foundingDate: "2020",
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              knowsAbout: [
                "Automated Parking Systems",
                "Puzzle Parking",
                "Stack Parking",
                "Mechanical Parking",
                "Smart City Solutions",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
