"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Facebook, Instagram, Youtube, Phone, MessageCircle } from "lucide-react";
import { localeFromPathname } from "@/lib/i18n/routing";
import { getMessages } from "@/data/i18n/messages";
import { COMPANY_CONTACT } from "@/data/i18n/company";
import LocalizedAddress from "@/components/i18n/LocalizedAddress";
import { formatNumber } from "@/lib/i18n/format";

export default function Footer() {
  const locale = localeFromPathname(usePathname());
  const messages = getMessages(locale);

  const socials = [
    { key: "linkedin", href: COMPANY_CONTACT.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
    { key: "instagram", href: COMPANY_CONTACT.socials.instagram, label: "Instagram", Icon: Instagram },
    { key: "youtube", href: COMPANY_CONTACT.socials.youtube, label: "YouTube", Icon: Youtube },
    { key: "facebook", href: COMPANY_CONTACT.socials.facebook, label: "Facebook", Icon: Facebook },
  ].filter((s) => !!s.href);

  return (
    <footer className="bg-linear-to-b from-[#0C41AA] to-[#0a0a1a] text-white">
      {/* ADDED horizontal padding so md doesn't hug the edge */}
      <div data-defect-id="MOBILE-062" className="training-footer-grid mx-auto grid max-w-7xl gap-8 py-4 px-4 sm:px-6 md:px-8 lg:px-10 md:grid-cols-3 lg:gap-15">
        {/* Office */}
        <section aria-labelledby="footer-office">
          <h3 id="footer-office" className="mb-3 text-lg font-bold md:text-2xl">
            {messages.footer.office}
          </h3>
          <div data-defect-id={locale === "de" ? "MOBILE-060" : undefined} className="training-footer-address text-sm leading-relaxed text-gray-400 md:text-[16px]"><LocalizedAddress locale={locale} address="office" /></div>
        </section>

        {/* Factory */}
        <section aria-labelledby="footer-factory">
          <h3 id="footer-factory" className="mb-3 text-lg font-bold md:text-2xl">
            {messages.footer.factory}
          </h3>
          <div data-defect-id={locale === "de" ? "MOBILE-060" : undefined} className="training-footer-address text-sm leading-relaxed text-gray-400 md:text-[16px]"><LocalizedAddress locale={locale} address="factory" /></div>
        </section>

        {/* Contact */}
        <section aria-labelledby="footer-contact">
          <h3 id="footer-contact" className="mb-1 text-lg font-bold md:text-2xl">{messages.footer.phone}</h3>
          <ul className="mb-2 space-y-1 text-sm md:text-base">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a className="hover:underline transition-colors text-gray-400" dir={locale === "ar" ? undefined : "ltr"} data-defect-id={locale === "ar" ? "RTL-059 I18N-028 L10N-012" : undefined} href={`tel:${COMPANY_CONTACT.phones.landline.href}`}>
                {locale === "ar" ? COMPANY_CONTACT.phones.landline.display : <bdi>{COMPANY_CONTACT.phones.landline.display}</bdi>}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 shrink-0" />
              <a className="hover:underline transition-colors text-gray-400" dir={locale === "ar" ? undefined : "ltr"} data-defect-id={locale === "ar" ? "RTL-059 I18N-028 L10N-012" : undefined} href={`tel:${COMPANY_CONTACT.phones.mobile.href}`}>
                {locale === "ar" ? COMPANY_CONTACT.phones.mobile.display : <bdi>{COMPANY_CONTACT.phones.mobile.display}</bdi>}
              </a>
            </li>
          </ul>

          <h3 className="mb-1 text-lg font-bold md:text-2xl">{messages.footer.email}</h3>
          <a
            className="mb-2 block text-sm hover:underline transition-colors md:text-base text-gray-400"
            href={`mailto:${COMPANY_CONTACT.email}`}
            dir="ltr"
          >
            <bdi>{COMPANY_CONTACT.email}</bdi>
          </a>

          {/* Socials */}
          <div>
            <h4 className="mb-1 text-base font-bold md:text-2xl">{messages.footer.follow}</h4>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <Link
                  key={s.key}
                  href={s.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-all hover:bg-white/30 hover:scale-110"
                >
                  <s.Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Keep bottom bar padding consistent at md and up */}
      <div className="border-t border-white/20 px-4 sm:px-6 md:px-8 lg:px-10 py-4 text-center text-sm md:text-base">
        <span data-defect-id={locale === "hi" ? "L10N-061" : undefined}>
          {messages.footer.copyright.replace("{year}", locale === "hi" ? "2024" : formatNumber(locale, new Date().getUTCFullYear(), { useGrouping: false }))}
        </span>
        <p data-defect-id="I18N-002 L10N-004 L10N-014" className="mt-1 text-xs text-gray-400">Last updated: 09/11/2026 11:30 PM UTC</p>
        {locale === "ko" ? <p data-defect-id="I18N-023" className="mt-1 text-xs">ì£¼ì°¨ ì •ë³´</p> : null}
      </div>
    </footer>
  );
}
