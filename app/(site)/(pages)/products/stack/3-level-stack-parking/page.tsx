// app/(site)/(pages)/products/stack/3-level-stack-parking/page.tsx
import { generatePageMetadata, generateBreadcrumbSchema, generateProductSchema } from "@/lib/seo";
import Image from "next/image";
import PageHeader from "@/app/(site)/components/PageHeader";

export const metadata = generatePageMetadata(
  "3-Level Stack Parking System | STELZ Multiparking",
  "Advanced 3-level stack parking system designed for maximum space utilization in commercial and residential buildings.",
  {
    keywords: [
      "3-level stack parking",
      "multi-level parking",
      "automated parking system",
      "space-efficient parking",
      "mechanical parking",
    ],
    type: "article",
  }
);

export default function ThreeLevelStackParkingPage() {
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
              { name: "3-Level Stack Parking", url: "/products/stack/3-level-stack-parking" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateProductSchema({
              name: "3-Level Stack Parking System",
              description:
                "Advanced 3-level stack parking system designed for maximum space utilization in commercial and residential buildings.",
              image: "/assets/parking_models/3LevelStackParking.jpg",
              url: "/products/stack/3-level-stack-parking",
            })
          ),
        }}
      />
      <PageHeader
        title="3-Level Stack Parking System"
        breadcrumbLabel="3-Level Stack Parking"
      />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          {/* Hero Section */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                3-Level Stack Parking System
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                Advanced multi-level parking solution designed for maximum space utilization in commercial
                and residential complexes.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Capacity: Up to 3 vehicles stacked vertically</li>
                <li>✓ Space-saving design reduces footprint by up to 66%</li>
                <li>✓ Fully automated vehicle handling</li>
                <li>✓ Advanced safety features</li>
                <li>✓ Quick retrieval time (under 2 minutes)</li>
              </ul>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/assets/parking_models/3LevelStackParking.jpg"
                alt="3-Level Stack Parking System"
                fill
                quality={80}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximum Capacity</h3>
                <p className="text-gray-600">
                  Accommodates up to 3 vehicles in a compact space, ideal for modern urban environments.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Operation</h3>
                <p className="text-gray-600">
                  Fully automated system with minimal user intervention required for vehicle placement and
                  retrieval.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety Features</h3>
                <p className="text-gray-600">
                  Advanced safety mechanisms protect vehicles during automated handling and ensure operator
                  safety.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Retrieval</h3>
                <p className="text-gray-600">
                  Vehicles are retrieved in under 2 minutes, minimizing user wait time and improving overall
                  efficiency.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Low Maintenance</h3>
                <p className="text-gray-600">
                  Durable construction with minimal maintenance requirements ensure long-term reliability and
                  cost savings.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">
                  Energy-efficient operation reduces carbon footprint and helps meet sustainability goals.
                </p>
              </div>
            </div>
          </div>

          {/* Specifications Section */}
          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-semibold text-gray-900">Number of Levels</td>
                    <td className="px-4 py-3 text-gray-600">3</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">Vehicle Capacity</td>
                    <td className="px-4 py-3 text-gray-600">Up to 3 vehicles</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-semibold text-gray-900">Retrieval Time</td>
                    <td className="px-4 py-3 text-gray-600">Under 2 minutes</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">Space Reduction</td>
                    <td className="px-4 py-3 text-gray-600">Up to 66%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-semibold text-gray-900">Maximum Vehicle Weight</td>
                    <td className="px-4 py-3 text-gray-600">2,500 kg per vehicle</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">Operation Type</td>
                    <td className="px-4 py-3 text-gray-600">Fully Automated</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Safety Certification</td>
                    <td className="px-4 py-3 text-gray-600">ISO 9001, CE Certified</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-lg bg-blue-600 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Interested in 3-Level Stack Parking?</h2>
            <p className="text-lg mb-8">
              Contact our team to discuss how this system can optimize parking at your location.
            </p>
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
