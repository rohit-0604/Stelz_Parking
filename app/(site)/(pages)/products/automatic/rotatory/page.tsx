// app/(site)/(pages)/products/automatic/rotatory/page.tsx
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import Image from "next/image";
import PageHeader from "@/app/(site)/components/PageHeader";

export const metadata = generatePageMetadata(
  "Rotatory Parking System | STELZ Multiparking",
  "Fully automated rotatory carousel parking system for efficient vehicle storage and retrieval.",
  { keywords: ["rotatory parking", "carousel parking", "rotating parking", "automated parking"], type: "article" }
);

export default function RotatoryParkingPage() {
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
              { name: "Rotatory", url: "/products/automatic/rotatory" },
            ])
          ),
        }}
      />
      <PageHeader
        title="Rotatory Parking System"
        breadcrumbLabel="Rotatory"
      />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Rotatory Parking System</h1>
              <p className="text-lg text-gray-600 mb-4">
                Fully automated rotatory carousel system offering compact footprint with maximum vehicle capacity and
                quick retrieval times.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Rotating carousel design</li>
                <li>✓ Fully automated operation</li>
                <li>✓ Compact circular footprint</li>
                <li>✓ Quick vehicle retrieval</li>
                <li>✓ User-friendly interface</li>
              </ul>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/assets/parking_models/Rotatory.jpg"
                alt="Rotatory Parking System"
                fill
                quality={80}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How Rotatory Parking Works</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Vehicle</h3>
                <p className="text-gray-600">Driver places vehicle in loading position and closes doors.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatic Rotation</h3>
                <p className="text-gray-600">Carousel rotates to find optimal storage position automatically.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Storage</h3>
                <p className="text-gray-600">Vehicle secured in designated position with safety mechanisms.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Retrieval</h3>
                <p className="text-gray-600">Request vehicle and carousel rotates to retrieval position in seconds.</p>
              </div>
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compact Design</h3>
                <p className="text-gray-600">Circular footprint maximizes available space utilization.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">High Capacity</h3>
                <p className="text-gray-600">Store multiple vehicles in minimal footprint area.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Speed</h3>
                <p className="text-gray-600">Vehicle retrieval takes under 3 minutes for user convenience.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-blue-600 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Install Rotatory Parking Today</h2>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
            >
              Request Information
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
