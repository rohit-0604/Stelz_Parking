// app/(site)/(pages)/products/puzzle/op-01/page.tsx
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import Image from "next/image";
import PageHeader from "@/app/(site)/components/PageHeader";

export const metadata = generatePageMetadata(
  "OP-01 Puzzle Parking System | STELZ Multiparking",
  "Professional OP-01 puzzle parking system designed for commercial and premium residential applications.",
  { keywords: ["OP-01", "puzzle parking", "professional parking", "commercial parking"], type: "article" }
);

export default function OP01PuzzlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Products", url: "/products" },
              { name: "Puzzle Parking", url: "/products/puzzle" },
              { name: "OP-01", url: "/products/puzzle/op-01" },
            ])
          ),
        }}
      />
      <PageHeader
        title="OP-01 Puzzle Parking System"
        breadcrumbLabel="OP-01"
      />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">OP-01 Puzzle Parking System</h1>
              <p className="text-lg text-gray-600 mb-4">
                Professional-grade OP-01 puzzle parking solution engineered for demanding commercial and premium
                residential applications.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Professional engineering grade</li>
                <li>✓ Commercial-rated components</li>
                <li>✓ Premium safety features</li>
                <li>✓ 24/7 operation capability</li>
                <li>✓ Extended warranty options</li>
              </ul>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/assets/parking_models/OP-01.jpg"
                alt="OP-01 Puzzle Parking System"
                fill
                quality={80}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Features</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Grade</h3>
                <p className="text-gray-600">
                  Designed and tested for demanding commercial and premium residential use.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Operation</h3>
                <p className="text-gray-600">Operates continuously without downtime for maintenance.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Safety</h3>
                <p className="text-gray-600">Multiple redundant safety systems for complete protection.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring System</h3>
                <p className="text-gray-600">Built-in diagnostics and remote monitoring capabilities.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Extended Support</h3>
                <p className="text-gray-600">Premium technical support and maintenance packages available.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalability</h3>
                <p className="text-gray-600">Easily expandable to meet growing parking demands.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-blue-600 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Deploy OP-01 at Your Facility</h2>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
            >
              Speak with Expert
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
