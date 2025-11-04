// app/(site)/(pages)/products/stack/turn-table/page.tsx
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import Image from "next/image";
import PageHeader from "@/app/(site)/components/PageHeader";

export const metadata = generatePageMetadata(
  "Turn Table Parking System | STELZ Multiparking",
  "Rotating turntable solution for efficient vehicle positioning and automated parking management.",
  { keywords: ["turn table", "rotating parking", "automated turntable", "vehicle rotation"], type: "article" }
);

export default function TurnTablePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Products", url: "/products" },
              { name: "Stack Parking", url: "/products/stack" },
              { name: "Turn Table", url: "/products/stack/turn-table" },
            ])
          ),
        }}
      />
      <PageHeader
        title="Turn Table Parking System"
        breadcrumbLabel="Turn Table"
      />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Turn Table Parking System</h1>
              <p className="text-lg text-gray-600 mb-4">
                Innovative rotating turntable solution for efficient vehicle positioning and streamlined parking
                operations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 360-degree vehicle rotation capability</li>
                <li>✓ Efficient vehicle positioning and exit</li>
                <li>✓ Compact design suitable for narrow spaces</li>
                <li>✓ Fully automated rotation control</li>
                <li>✓ Reliable bearing system</li>
              </ul>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/assets/parking_models/TurnTable.jpg"
                alt="Turn Table Parking System"
                fill
                quality={80}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Advantages</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">360° Rotation</h3>
                <p className="text-gray-600">Full rotation capability allows vehicles to exit in any direction.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Space Efficient</h3>
                <p className="text-gray-600">Compact design fits in narrow spaces and confined areas.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Operation</h3>
                <p className="text-gray-600">Fast rotation allows quick vehicle positioning and exit.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smooth Movement</h3>
                <p className="text-gray-600">Advanced bearing system ensures smooth and silent operation.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Low Maintenance</h3>
                <p className="text-gray-600">Durable components and simple design require minimal upkeep.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h3>
                <p className="text-gray-600">Proven design with excellent track record in various environments.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-blue-600 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Install a Turn Table?</h2>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
