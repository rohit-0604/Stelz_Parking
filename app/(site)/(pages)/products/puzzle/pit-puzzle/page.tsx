// app/(site)/(pages)/products/puzzle/pit-puzzle/page.tsx
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import Image from "next/image";
import PageHeader from "@/app/(site)/components/PageHeader";

export const metadata = generatePageMetadata(
  "Pit Puzzle Parking System | STELZ Multiparking",
  "Underground pit puzzle parking solution with interlocking design for maximum space efficiency.",
  { keywords: ["pit puzzle", "underground puzzle", "interlocking parking", "automated parking"], type: "article" }
);

export default function PitPuzzlePage() {
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
              { name: "Pit Puzzle", url: "/products/puzzle/pit-puzzle" },
            ])
          ),
        }}
      />
      <PageHeader
        title="Pit Puzzle Parking System"
        breadcrumbLabel="Pit Puzzle"
      />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Pit Puzzle Parking System</h1>
              <p className="text-lg text-gray-600 mb-4">
                Underground pit puzzle system with interlocking design maximizes parking capacity while maintaining
                structural efficiency.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Interlocking pit design</li>
                <li>✓ Maximum capacity in minimal space</li>
                <li>✓ Completely hidden underground</li>
                <li>✓ Puzzle-style vehicle arrangement</li>
                <li>✓ Automated vehicle management</li>
              </ul>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/assets/parking_models/PitPuzzle.jpg"
                alt="Pit Puzzle Parking System"
                fill
                quality={80}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Features</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interlocking Design</h3>
                <p className="text-gray-600">Vehicles fit together like puzzle pieces for maximum efficiency.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Underground Installation</h3>
                <p className="text-gray-600">Completely hidden parking keeps ground space available.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Management</h3>
                <p className="text-gray-600">Full automation ensures efficient vehicle placement and retrieval.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">High Capacity</h3>
                <p className="text-gray-600">Store more vehicles than traditional parking in same footprint.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-blue-600 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Learn More About Pit Puzzle Parking</h2>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
