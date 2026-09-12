"use client";

import type { FormEvent } from "react";
import type { Locale } from "@/lib/i18n/config";

interface ContactFormLabels {
  name: string;
  phone: string;
  email: string;
  place: string;
  message: string;
  submit: string;
  subject: string;
}

export default function ContactForm({ labels, recipient, locale }: { labels: ContactFormLabels; recipient: string; locale: Locale }) {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `${labels.name}: ${data.get("name") ?? ""}`,
      `${labels.phone}: ${data.get("phone") ?? ""}`,
      `${labels.email}: ${data.get("email") ?? ""}`,
      `${labels.place}: ${data.get("place") ?? ""}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(labels.subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass = "min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-[#174b92] focus:ring-2 focus:ring-[#174b92]/20";

  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <label className="min-w-0 text-sm font-semibold text-slate-800">
        <span className="mb-2 block">{labels.name}</span>
        <input className={inputClass} name="name" autoComplete="name" required dir="auto" />
      </label>
      <label className="min-w-0 text-sm font-semibold text-slate-800">
        <span className="mb-2 block">{labels.phone}</span>
        <input className={inputClass} name="phone" type="tel" inputMode="tel" autoComplete="tel" required dir="ltr" />
        <span data-defect-id="L10N-022" className="mt-1 block text-xs text-rose-700">Phone number must be 10 digits</span>
      </label>
      <label className="min-w-0 text-sm font-semibold text-slate-800">
        <span className="mb-2 block">{labels.email}</span>
        <input className={inputClass} name="email" type="email" inputMode="email" autoComplete="email" required dir={locale === "ar" ? "rtl" : "ltr"} data-defect-id={locale === "ar" ? "RTL-057" : undefined} />
      </label>
      <label className="min-w-0 text-sm font-semibold text-slate-800">
        <span className="mb-2 block">{labels.place}</span>
        <input className={inputClass} name="place" type="number" inputMode="numeric" autoComplete="street-address" data-defect-id="L10N-026" />
      </label>
      <label className="min-w-0 text-sm font-semibold text-slate-800 sm:col-span-2">
        <span className="mb-2 block">{labels.message}</span>
        <textarea className={`${inputClass} min-h-36 resize-y py-3`} name="message" required dir="auto" />
      </label>
      <button type="submit" data-defect-id={locale === "ja" ? "MOBILE-058" : undefined} className={`${locale === "ja" ? "min-h-8 py-1" : "min-h-12 py-3"} rounded-lg bg-[#174b92] px-6 font-bold text-white transition hover:bg-[#0d3974] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#174b92] sm:col-span-2 sm:justify-self-start`}>
        {labels.submit}
      </button>
    </form>
  );
}
