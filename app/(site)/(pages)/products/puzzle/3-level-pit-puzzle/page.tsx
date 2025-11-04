// app/(site)/(pages)/products/puzzle/3-level-pit-puzzle/page.tsx
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import Image from "next/image";
import PageHeader from "@/app/(site)/components/PageHeader";

export const metadata = generatePageMetadata(
  "3-Level Pit Puzzle System | STELZ Multiparking",
  "Three-level underground pit puzzle system offering maximum parking capacity in minimal space footprint.",
  {
    keywords: [
      "3-level pit puzzle",
      "multi-level puzzle",
      "underground puzzle parking",
      "deep pit parking",
    ],
    type: "article",
  }
);

export default function ThreeLevelPitPuzzlePage() {
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
              { name: "3-Level Pit Puzzle", url: "/products/puzzle/3-level-pit-puzzle" },
            ])
          ),
        }}
      />
      <PageHeader
        title="3-Level Pit Puzzle System"
        breadcrumbLabel="3-Level Pit Puzzle"
      />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">3-Level Pit Puzzle System</h1>
              <p className="text-lg text-gray-600 mb-4">
                Premium three-level underground pit puzzle offering exceptional capacity and space efficiency for
                high-demand parking needs.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Three levels of puzzle parking</li>
                <li>✓ Compact underground footprint</li>
                <li>✓ Highest capacity solution</li>
                <li>✓ Fully automated operation</li>
                <li>✓ Premium quality construction</li>
              </ul>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/assets/parking_models/3LevelPitPuzzle.jpg"
                alt="3-Level Pit Puzzle System"
                fill
                quality={80}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Premium Features</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Three Levels</h3>
                <p className="text-gray-600">Maximum capacity with three complete levels of puzzle parking.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimal Design</h3>
                <p className="text-gray-600">Engineered for best performance and vehicle protection.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Automation</h3>
                <p className="text-gray-600">Advanced automation ensures efficient vehicle management.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Durability</h3>
                <p className="text-gray-600">Built to last with premium materials and expert craftsmanship.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-blue-600 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Experience Premium Puzzle Parking</h2>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
