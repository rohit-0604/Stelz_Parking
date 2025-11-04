// app/(site)/(pages)/products/puzzle/puzzle-parking/page.tsx
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import Image from "next/image";
import PageHeader from "@/app/(site)/components/PageHeader";

export const metadata = generatePageMetadata(
  "Puzzle Parking System | STELZ Multiparking",
  "Advanced puzzle parking system with modular design for flexible and efficient vehicle storage solutions.",
  { keywords: ["puzzle parking", "modular parking", "automated puzzle parking"], type: "article" }
);

export default function PuzzleParkingPage() {
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
              { name: "Puzzle Parking", url: "/products/puzzle/puzzle-parking" },
            ])
          ),
        }}
      />
      <PageHeader
        title="Puzzle Parking System"
        breadcrumbLabel="Puzzle Parking"
      />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Puzzle Parking System</h1>
              <p className="text-lg text-gray-600 mb-4">
                Innovative modular puzzle parking with flexible design accommodates various vehicle types and parking
                configurations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Modular design for customization</li>
                <li>✓ Flexible configuration options</li>
                <li>✓ Accommodates different vehicle sizes</li>
                <li>✓ High capacity utilization</li>
                <li>✓ User-friendly interface</li>
              </ul>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/assets/parking_models/PuzzleParking.jpg"
                alt="Puzzle Parking System"
                fill
                quality={80}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Puzzle Parking?</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Configuration</h3>
                <p className="text-gray-600">Modular design allows customization for specific space requirements.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Vehicle Types</h3>
                <p className="text-gray-600">Accommodates cars, compact cars, and SUVs in same system.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">High Capacity</h3>
                <p className="text-gray-600">Puzzle arrangement maximizes number of vehicles per square meter.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy to Use</h3>
                <p className="text-gray-600">Intuitive interface makes parking and retrieval simple for users.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Effective</h3>
                <p className="text-gray-600">Modular approach reduces installation costs and timeframes.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expandable</h3>
                <p className="text-gray-600">Add modules as demand grows for parking capacity.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-blue-600 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready for Puzzle Parking Solution?</h2>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
