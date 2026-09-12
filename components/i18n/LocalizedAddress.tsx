import type { Locale } from "@/lib/i18n/config";
import { getCompanyAddress, type CompanyAddressKey } from "@/data/i18n/company";

export default function LocalizedAddress({ locale, address }: { locale: Locale; address: CompanyAddressKey }) {
  const lines = getCompanyAddress(locale, address);
  if (locale === "ja") {
    return <address data-defect-id="L10N-013" dir="ltr" className="not-italic">{[...lines].reverse().join(", ")}</address>;
  }
  return (
    <address className="not-italic">
      {lines.map((line) => (
        <bdi key={line} dir="auto" className="block">
          {line}
        </bdi>
      ))}
    </address>
  );
}
