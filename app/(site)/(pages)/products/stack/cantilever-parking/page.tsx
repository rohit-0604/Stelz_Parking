// app/(site)/(pages)/products/stack/cantilever-parking/page.tsx
import { generatePageMetadata, generateBreadcrumbSchema, generateProductSchema } from "@/lib/seo";
import Image from "next/image";
import PageHeader from "@/app/(site)/components/PageHeader";

export const metadata = generatePageMetadata(
  "Cantilever Parking System | STELZ Multiparking",
  "Space-efficient cantilever parking solution with elevated design for urban parking challenges.",
  { keywords: ["cantilever parking", "elevated parking", "automated parking"], type: "article" }
);

export default function CantileverParkingPage() {
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
              { name: "Cantilever Parking", url: "/products/stack/cantilever-parking" },
            ])
          ),
        }}
      />
      <PageHeader
        title="Cantilever Parking System"
        breadcrumbLabel="Cantilever Parking"
      />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Cantilever Parking System</h1>
              <p className="text-lg text-gray-600 mb-4">
                Elevated cantilever design maximizes space usage while maintaining ground-level accessibility.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Space-efficient elevated design</li>
                <li>✓ Maintains ground-level vehicle access</li>
                <li>✓ Minimal structural footprint</li>
                <li>✓ Fully automated operation</li>
                <li>✓ Weather-protected parking</li>
              </ul>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/assets/parking_models/CantileverParking.jpg"
                alt="Cantilever Parking System"
                fill
                quality={80}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Elevated Design</h3>
                <p className="text-gray-600">Cantilever structure keeps vehicles elevated, freeing ground space.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ground Access</h3>
                <p className="text-gray-600">Vehicles can access ground level easily with automated lowering.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Weather Protection</h3>
                <p className="text-gray-600">Overhead parking provides protection from weather elements.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-blue-600 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Interested in Cantilever Parking?</h2>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
