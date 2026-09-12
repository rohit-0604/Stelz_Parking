import type { Metadata } from "next";
import PageHeader from "@/app/(site)/components/PageHeader";
import { getRequestLocale } from "@/lib/i18n/request";
import { getMessages } from "@/data/i18n/messages";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { COMPANY_CONTACT } from "@/data/i18n/company";
import LocalizedAddress from "@/components/i18n/LocalizedAddress";
import ContactForm from "./ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return localizedMetadata(locale, "/contact", getMessages(locale).pages.contact);
}

export default async function ContactPage() {
  const locale = await getRequestLocale();
  const copy = getMessages(locale);
  return (
    <>
      <PageHeader title={copy.pages.contact.heading} breadcrumbLabel={copy.pages.contact.breadcrumb} />
      <main className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:px-8">
          <section className="min-w-0 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <h1 className="text-balance text-2xl font-bold text-slate-950 sm:text-3xl">{copy.pages.contact.heading}</h1>
            <p className="mt-3 max-w-2xl text-pretty leading-7 text-slate-600">{copy.services.helpText}</p>
            <div className="mt-8">
              <ContactForm
                recipient={COMPANY_CONTACT.email}
                locale={locale}
                labels={{ name: copy.product.name, phone: copy.product.phone, email: copy.product.email, place: copy.services.place, message: copy.product.message, submit: copy.product.submit, subject: copy.pages.contact.heading }}
              />
            </div>
          </section>

          <aside className="space-y-4">
            <section className="rounded-2xl bg-[#174b92] p-5 text-white sm:p-6">
              <h2 className="text-xl font-bold">{copy.footer.office}</h2>
              <div className="mt-3 text-sm leading-6 text-white/80"><LocalizedAddress locale={locale} address="office" /></div>
            </section>
            <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6">
              <h2 className="text-xl font-bold text-slate-950">{copy.footer.phone}</h2>
              <a className="mt-3 block text-[#174b92] underline-offset-4 hover:underline" dir="ltr" href={`tel:${COMPANY_CONTACT.phones.mobile.href}`}><bdi>{COMPANY_CONTACT.phones.mobile.display}</bdi></a>
              <h2 className="mt-6 text-xl font-bold text-slate-950">{copy.footer.email}</h2>
              <a className="mt-3 block break-all text-[#174b92] underline-offset-4 hover:underline" dir="ltr" href={`mailto:${COMPANY_CONTACT.email}`}><bdi>{COMPANY_CONTACT.email}</bdi></a>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}
