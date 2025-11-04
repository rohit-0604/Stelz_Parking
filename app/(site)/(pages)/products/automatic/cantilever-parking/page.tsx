// app/(site)/(pages)/products/automatic/cantilever-parking/page.tsx
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import Image from "next/image";
import PageHeader from "@/app/(site)/components/PageHeader";

export const metadata = generatePageMetadata(
  "Automatic Cantilever Parking System | STELZ Multiparking",
  "Automated cantilever parking solution combining space efficiency with fully automated vehicle handling.",
  {
    keywords: ["automatic cantilever", "automated parking", "cantilever lift", "smart parking"],
    type: "article",
  }
);

export default function AutomaticCantileverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Products", url: "/products" },
              { name: "Automatic Parking", url: "/products/automatic" },
              { name: "Cantilever Parking", url: "/products/automatic/cantilever-parking" },
            ])
          ),
        }}
      />
      <PageHeader
        title="Automatic Cantilever Parking System"
        breadcrumbLabel="Cantilever Parking"
      />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Automatic Cantilever Parking System
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                Combines cantilever space efficiency with full automation for premium parking experience and maximum
                convenience.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Fully automated operation</li>
                <li>✓ Elevated cantilever structure</li>
                <li>✓ Space-efficient design</li>
                <li>✓ Smooth automated movement</li>
                <li>✓ Premium user experience</li>
              </ul>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/assets/parking_models/CantileverParking.jpg"
                alt="Automatic Cantilever Parking System"
                fill
                quality={80}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Advantages</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Automation</h3>
                <p className="text-gray-600">
                  Completely automated operation requires minimal user intervention.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Space Maximization</h3>
                <p className="text-gray-600">
                  Elevated design frees ground space while maximizing vehicle capacity.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smooth Operation</h3>
                <p className="text-gray-600">
                  Advanced automation ensures smooth, quiet, and efficient vehicle handling.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Access</h3>
                <p className="text-gray-600">
                  Fast retrieval times provide exceptional user convenience and satisfaction.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Weather Protection</h3>
                <p className="text-gray-600">
                  Overhead cantilever provides weather protection for stored vehicles.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h3>
                <p className="text-gray-600">
                  Robust automation systems ensure consistent performance and uptime.
                </p>
              </div>
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Perfect For</h2>
            <div className="rounded-lg bg-gray-50 p-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-blue-600 font-bold">•</span>
                  <span>Premium residential complexes seeking automated solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-600 font-bold">•</span>
                  <span>Corporate headquarters with executive parking areas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-600 font-bold">•</span>
                  <span>Luxury hospitality venues with concierge parking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-600 font-bold">•</span>
                  <span>High-end retail and entertainment destinations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-blue-600 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Experience Automated Cantilever Parking</h2>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
