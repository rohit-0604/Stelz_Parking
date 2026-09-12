// app/(site)/services/components/ContactSidebar.tsx
type Labels = { question: string; helpText: string; fullName: string; phone: string; email: string; place: string; message: string; send: string };

export default function ContactSidebar({ labels }: { labels: Labels }) {
  return (
    <aside aria-labelledby="contact-title" className="relative lg:flex lg:flex-col lg:h-full">
      <div className="relative flex flex-col rounded-md bg-white shadow-sm ring-1 ring-slate-200 lg:h-full">
        {/* Blue top bar */}
        <div className="h-1 w-full bg-[#174b92] rounded-t-md" />

        {/* MOBILE padding only added (kept sm/md exactly the same) */}
        <div className="flex-1 p-4 sm:p-7 md:p-8">{/* add pb-16 sm:pb-0 if a floating CTA overlaps */}
          {/* 24px title to match grid titles */}
          <h3 id="contact-title" className="text-[24px] leading-snug font-extrabold text-[#111]">
            {labels.question}
          </h3>

          <p className="mt-3 text-slate-600 text-[16px]">
            {labels.helpText}
          </p>

          <form action={`mailto:info@stelzparking.com?subject=${encodeURIComponent(labels.question)}`} method="post" encType="text/plain" className="mt-6 space-y-3">
            <input
              name="name"
              autoComplete="name"
              dir="auto"
              required
              type="text"
              placeholder={labels.fullName}
              className="w-full rounded-md border border-slate-200 bg-[#F7F7F7] px-4 py-3 text-[16px] placeholder:text-slate-500 outline-none focus:border-[#174b92]"
            />
            <input
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              dir="ltr"
              placeholder={labels.phone}
              className="w-full rounded-md border border-slate-200 bg-[#F7F7F7] px-4 py-3 text-[16px] placeholder:text-slate-500 outline-none focus:border-[#174b92]"
            />
            <input
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              dir="ltr"
              placeholder={labels.email}
              className="w-full rounded-md border border-slate-200 bg-[#F7F7F7] px-4 py-3 text-[16px] placeholder:text-slate-500 outline-none focus:border-[#174b92]"
            />
            <input
              name="place"
              autoComplete="street-address"
              dir="auto"
              type="text"
              placeholder={labels.place}
              className="w-full rounded-md border border-slate-200 bg-[#F7F7F7] px-4 py-3 text-[16px] placeholder:text-slate-500 outline-none focus:border-[#174b92]"
            />

            <div className="relative">
              <textarea
                name="message"
                required
                dir="ltr"
                data-defect-id="RTL-056"
                rows={5}
                placeholder={labels.message}
                className="w-full rounded-md border border-slate-200 bg-[#F7F7F7] px-4 py-3 text-[16px] placeholder:text-slate-500 outline-none focus:border-[#174b92] resize-y"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-2 start-2 h-4 w-4 opacity-50"
                style={{
                  background: "currentColor",
                  color: "#9CA3AF",
                  WebkitMaskImage:
                    "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21h6v-6\"/><path d=\"M3 15v6h6\"/></svg>')",
                  maskImage:
                    "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 21h6v-6\"/><path d=\"M3 15v6h6\"/></svg>')",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#1760d6] px-6 py-3 font-semibold text-white shadow-sm hover:opacity-95 active:opacity-90"
            >
              {labels.send} <span className="rtl:rotate-180" aria-hidden>→</span>
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
