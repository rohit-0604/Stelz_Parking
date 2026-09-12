"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { getMessages } from "@/data/i18n/messages";
import { localeFromPathname } from "@/lib/i18n/routing";
import { trackPageView } from "@/lib/analytics";

type Consent = "accepted" | "declined" | null;
const STORAGE_KEY = "stelz-analytics-consent-v1";
const CONSENT_EVENT = "stelz-analytics-consent-change";

function getConsent(): Consent {
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "accepted" || value === "declined" ? value : null;
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

export default function GoogleAnalytics({ measurementId }: { measurementId?: string }) {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = getMessages(locale).consent;
  const consent = useSyncExternalStore(subscribeToConsent, getConsent, () => null);
  const initialPageView = useRef(true);

  useEffect(() => {
    if (consent !== "accepted") return;
    if (initialPageView.current) {
      initialPageView.current = false;
      return;
    }
    trackPageView(pathname, document.title);
  }, [consent, pathname]);

  if (!measurementId) return null;

  const choose = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  return (
    <>
      {consent === "accepted" ? (
        <>
          <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${measurementId}',{anonymize_ip:true});`}
          </Script>
        </>
      ) : null}

      {consent === null ? (
        <section role="dialog" aria-live="polite" aria-label={copy.title} className="fixed inset-x-3 bottom-3 z-100 mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl sm:bottom-5 sm:p-5">
          <h2 className="font-bold text-slate-950">{copy.title}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">{copy.description}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={() => choose("accepted")} className="min-h-11 rounded-lg bg-[#174b92] px-4 py-2 text-sm font-bold text-white hover:bg-[#0d3974]">{copy.accept}</button>
            <button type="button" onClick={() => choose("declined")} className="min-h-11 rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-800 hover:bg-slate-50">{copy.decline}</button>
          </div>
        </section>
      ) : null}
    </>
  );
}
