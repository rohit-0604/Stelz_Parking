// app/(site)/(pages)/products/automatic/op-01/page.tsx
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import Image from "next/image";
import PageHeader from "@/app/(site)/components/PageHeader";

export const metadata = generatePageMetadata(
  "OP-01 Automatic Parking System | STELZ Multiparking",
  "Enterprise-grade OP-01 automatic parking solution for large-scale commercial parking applications.",
  { keywords: ["OP-01", "automatic parking", "enterprise parking", "commercial automation"], type: "article" }
);

export default function OP01AutomaticPage() {
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
              { name: "OP-01", url: "/products/automatic/op-01" },
            ])
          ),
        }}
      />
      <PageHeader
        title="OP-01 Automatic Parking System"
        breadcrumbLabel="OP-01"
      />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">OP-01 Automatic Parking System</h1>
              <p className="text-lg text-gray-600 mb-4">
                Enterprise-grade automatic parking solution designed for large-scale commercial applications and
                high-traffic parking facilities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Enterprise-class reliability</li>
                <li>✓ High-volume throughput capability</li>
                <li>✓ Advanced monitoring systems</li>
                <li>✓ 24/7 operation ready</li>
                <li>✓ Scalable architecture</li>
              </ul>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/assets/parking_models/OP-01.jpg"
                alt="OP-01 Automatic Parking System"
                fill
                quality={80}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Enterprise Features</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">High Throughput</h3>
                <p className="text-gray-600">
                  Handles high-volume vehicle entries and retrievals without bottlenecks.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Redundancy</h3>
                <p className="text-gray-600">
                  Multiple backup systems ensure operation even during component failures.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Monitoring</h3>
                <p className="text-gray-600">
                  Advanced sensors provide real-time system health and vehicle tracking.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integration Ready</h3>
                <p className="text-gray-600">
                  Seamlessly integrates with existing building systems and access control.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600">
                  Comprehensive reporting and analytics for operation optimization.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">
                  24/7 technical support and proactive maintenance programs.
                </p>
              </div>
            </div>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ideal For</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">✓</span>
                <span>Large commercial office buildings and corporate campuses</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">✓</span>
                <span>Shopping malls and retail complexes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">✓</span>
                <span>Airports and transportation hubs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">✓</span>
                <span>Hotels and hospitality venues</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600">✓</span>
                <span>Mixed-use developments and smart cities</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-blue-600 px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Parking?</h2>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
            >
              Schedule Enterprise Demo
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
