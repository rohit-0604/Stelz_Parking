// app/(site)/(pages)/products/stack/3-level-pit-stacker/page.tsx
import { generatePageMetadata, generateBreadcrumbSchema, generateProductSchema } from "@/lib/seo";
import Image from "next/image";
import PageHeader from "@/app/(site)/components/PageHeader";

export const metadata = generatePageMetadata(
  "3-Level Pit Stacker System | STELZ Multiparking",
  "Underground pit stacker parking system with 3-level capacity for optimal space utilization and vehicle safety.",
  {
    keywords: [
      "pit stacker",
      "underground parking",
      "3-level pit",
      "automated parking",
      "underground parking system",
    ],
    type: "article",
  }
);

export default function ThreeLevelPitStackerPage() {
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
              { name: "3-Level Pit Stacker", url: "/products/stack/3-level-pit-stacker" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateProductSchema({
              name: "3-Level Pit Stacker System",
              description:
                "Underground pit stacker parking system with 3-level capacity for optimal space utilization and vehicle safety.",
              image: "/assets/parking_models/3LevelPitStacker.jpg",
              url: "/products/stack/3-level-pit-stacker",
            })
          ),
        }}
      />
      <PageHeader
        title="3-Level Pit Stacker System"
        breadcrumbLabel="3-Level Pit Stacker"
      />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">3-Level Pit Stacker System</h1>
              <p className="text-lg text-gray-600 mb-4">
                Underground pit stacker designed for maximum space efficiency and seamless integration with
                modern building architecture.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Capacity: Up to 3 vehicles stacked in pit</li>
                <li>✓ Underground installation hides structure</li>
                <li>✓ Reduces ground surface usage by up to 66%</li>
                <li>✓ Enhanced safety with pit containment</li>
                <li>✓ Quick retrieval mechanism</li>
              </ul>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/assets/parking_models/3LevelPitStacker.jpg"
                alt="3-Level Pit Stacker System"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Underground Design</h3>
                <p className="text-gray-600">
                  Pit-based system keeps parking structure hidden for aesthetic and architectural benefits.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3-Level Capacity</h3>
                <p className="text-gray-600">
                  Store up to 3 vehicles in a single pit, maximizing parking capacity in limited spaces.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pit Containment</h3>
                <p className="text-gray-600">
                  Structural pit design provides additional safety and protection for vehicles and operators.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compact Footprint</h3>
                <p className="text-gray-600">
                  Minimal ground surface usage allows maximum usable space in buildings and complexes.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Seamless Integration</h3>
                <p className="text-gray-600">
                  Integrates seamlessly with building architecture and can be customized for specific layouts.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Operation</h3>
                <p className="text-gray-600">
                  Proven design with robust mechanisms ensures reliable operation for years without issues.
                </p>
              </div>
            </div>
          </div>

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
                    <td className="px-4 py-3 font-semibold text-gray-900">Installation Type</td>
                    <td className="px-4 py-3 text-gray-600">Underground Pit</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 font-semibold text-gray-900">Vehicle Capacity</td>
                    <td className="px-4 py-3 text-gray-600">Up to 3 vehicles</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">Pit Depth Required</td>
                    <td className="px-4 py-3 text-gray-600">Custom based on vehicle height</td>
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
                    <td className="px-4 py-3 font-semibold text-gray-900">Safety Features</td>
                    <td className="px-4 py-3 text-gray-600">ISO 9001, CE Certified</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-lg bg-blue-600 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss how the 3-Level Pit Stacker can enhance your parking facility.
            </p>
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
