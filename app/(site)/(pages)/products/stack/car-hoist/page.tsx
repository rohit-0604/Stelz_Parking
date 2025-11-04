// app/(site)/(pages)/products/stack/car-hoist/page.tsx
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import Image from "next/image";
import PageHeader from "@/app/(site)/components/PageHeader";

export const metadata = generatePageMetadata(
  "Car Hoist Parking System | STELZ Multiparking",
  "Professional car hoist system for safe and efficient vehicle lifting and storage in compact spaces.",
  { keywords: ["car hoist", "vehicle lift", "parking hoist", "automated lifting"], type: "article" }
);

export default function CarHoistPage() {
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
              { name: "Car Hoist", url: "/products/stack/car-hoist" },
            ])
          ),
        }}
      />
      <PageHeader
        title="Car Hoist Parking System"
        breadcrumbLabel="Car Hoist"
      />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Car Hoist Parking System</h1>
              <p className="text-lg text-gray-600 mb-4">
                Professional-grade car hoist system designed for safe and efficient vehicle lifting in compact spaces.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Heavy-duty construction for reliable operation</li>
                <li>✓ Safe lifting mechanism with multiple safety locks</li>
                <li>✓ Compact design for space-limited areas</li>
                <li>✓ Easy maintenance and service access</li>
                <li>✓ Durable steel construction</li>
              </ul>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/assets/parking_models/CarHoist.jpg"
                alt="Car Hoist System"
                fill
                quality={80}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Safety Features</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Safety Locks</h3>
                <p className="text-gray-600">
                  Advanced safety lock system prevents accidental descent of vehicles during operation.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Lowering</h3>
                <p className="text-gray-600">
                  Manual emergency lowering system allows safe descent in case of power loss.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Load Capacity</h3>
                <p className="text-gray-600">
                  Heavy-duty construction supports vehicles up to 3,000 kg with safety margins.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  ISO 9001 certified manufacturing ensures consistent quality and safety standards.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-blue-600 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Request Car Hoist Information</h2>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
            >
              Contact Sales Team
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
