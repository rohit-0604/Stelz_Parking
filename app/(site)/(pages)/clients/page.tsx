"use client";

import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/(site)/components/PageHeader";
import { ArrowRight } from "lucide-react";


/* ---------- LOGO ORDER ---------- */
const logos = [
  "purvankara",
  "vamsiram",
  "bhartiya",
  "sparsh",
  "manipal",
  "confident",
  "suvarna",
  "aragen",
  "brigade",
  "cmr",
  "concorde",
  "divyasree",
  "dmart",
  "durga",
  "esic",
  "gar",
  "ginger",
  "indiqube",
  "kalyani",
  "lohia",
  "maavi",
  "nanik",
  "pavani",
  "Phoenix",
  "sattva",
  "sapra",
  "shriram",
  "skav",
  "supreme",
  "swojas",
  "taksh",
  "ushodaya",
  "vaishnavi",
] as const;

/* ---------- GUTTERS (LEFT/RIGHT PADDING) ---------- */
/* partners text is full width with px-5; grid is wider; testimonials has DECREASED x padding */
const GUTTERS = {
  partnersGrid: "px-6 md:px-12 lg:px-16 xl:px-24",
  testimonials: "px-4 md:px-8 lg:px-12 xl:px-16", // decreased x padding
};

/* ---------- BLUE ARROW (colorized SVG via mask) ---------- */
function BlueArrow() {
  return (
    <span
      aria-hidden
      className="inline-block h-4 w-4 bg-[#006DDB]"
      style={{
        WebkitMaskImage: "url(/assets/backgrounds/arrow.svg)",
        maskImage: "url(/assets/backgrounds/arrow.svg)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

/* ---------- CUT-CORNER SQUARE LOGO CARD ---------- */
function DocLogo({ name }: { name: string }) {
  const src = `/assets/clients/${name}.png`;
  const CUT = 45; // px — top-right triangle size

  return (
    <div
      className="relative aspect-square bg-white ring-1 ring-gray-200 shadow-sm transition md:hover:shadow-md"
      style={{
        clipPath: `polygon(
          0 0,
          calc(100% - ${CUT}px) 0,
          100% ${CUT}px,
          100% 100%,
          0 100%
        )`,
        borderRadius: "18px",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-7">
        <Image
          src={src}
          alt={`${name} logo`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 44vw, (max-width: 1024px) 22vw, 12vw"
        />
      </div>
    </div>
  );
}

export default function ClientsPage() {
  return (
    <>
      <PageHeader title="Our Clients" breadcrumbLabel="Our Clients" />

      {/* ===================== PARTNERS ===================== */}
      <section
        className="relative bg-cover bg-center py-6 md:py-10"
        style={{ backgroundImage: "url(/assets/backgrounds/clients.jpg)" }}
      >
        {/* label + title + paragraph — full width, px-5 sides */}
        <div className="w-full px-5 text-center">
          <div className="flex items-center justify-center gap-2">
            <BlueArrow />
            <span className="text-xs md:text-sm tracking-[0.18em] text-[#006DDB] font-semibold uppercase">
              Partners
            </span>
          </div>

          <h2 className="mt-2 md:mt-3 text-3xl md:text-[55px] font-extrabold tracking-tight text-gray-900">
            Partners Who Trust Stelz
          </h2>

          <p className="mt-3 md:mt-4 w-full text-base md:text-lg leading-7 md:leading-8 text-neutral-600">
            We take pride in collaborating with industry leaders who trust Stelz Parking for innovative and
            reliable car parking solutions. Our partnerships reflect a shared commitment to quality, efficiency,
            and long-term value across every project.
          </p>
        </div>

        {/* logos grid — wider side padding */}
        <div className={`mx-auto w-full max-w-[1600px] ${GUTTERS.partnersGrid}`}>
          <div
            className="
              mx-auto mt-8 md:mt-10 grid
              grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
              gap-x-5 md:gap-x-6 gap-y-0
            "
          >
            {logos.map((name) => (
              <DocLogo key={name} name={name} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="bg-white py-10 md:py-12">
        <div className={`mx-auto w-full max-w-[1500px] ${GUTTERS.testimonials}`}>
          <div className="flex items-center gap-2">
            <BlueArrow />
            <span className="text-xs md:text-[15px] tracking-[0.18em] text-[#006DDB] font-semibold uppercase">
              Testimonials
            </span>
          </div>

          <div className="mt-4 md:mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Real Stories. Real
              <br className="hidden md:block" />
              Satisfaction.
            </h2>

            <Link
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-auto inline-flex items-center justify-center rounded-sm bg-[#006DDB] gap-4 md:gap-5 px-9 py-5 text-white font-medium hover:bg-[#0a3a85] transition"
            >
              More Reviews
              <ArrowRight className="h-6 w-6" strokeWidth={2.25} />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "https://www.youtube.com/embed/hp3cmrW7xsM",
              "https://www.youtube.com/embed/njkMD_fyX-I",
              "https://www.youtube.com/embed/MO3C_pTyy-g",
            ].map((src, i) => (
              <div key={i} className="aspect-video overflow-hidden rounded-sm ring-1 ring-gray-200 shadow-sm">
                <iframe
                  className="h-full w-full"
                  src={src}
                  title={`Testimonial Video ${i + 1}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
