export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#1f67c8] to-[#1a4d8f] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <h1 className="mb-4 text-3xl md:text-5xl font-bold text-white">
            Our Products
          </h1>
          <p className="text-lg text-blue-100">
            Explore our comprehensive range of innovative parking solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-[1400px] px-4 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* STACK PARKING Card */}
          <div className="group rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="mb-4 h-14 w-14 rounded-full bg-gradient-to-br from-[#1f67c8] to-[#153fa8] flex items-center justify-center">
              <span className="text-2xl font-bold text-white">📦</span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">STACK PARKING</h2>
            <p className="mb-6 text-gray-600">
              Multi-level stacking solutions designed for maximum space optimization. Perfect for high-density urban environments.
            </p>
            <div className="mb-6 space-y-2 text-sm text-gray-600">
              <p>✓ 3-Level Stack Parking</p>
              <p>✓ 3-Level Pit Stacker</p>
              <p>✓ Cantilever Parking</p>
              <p>✓ Car Hoist</p>
              <p>✓ Turn Table</p>
            </div>
            <a
              href="/products/stack"
              className="inline-block text-[#1f67c8] font-semibold transition-colors hover:text-[#153fa8]"
            >
              Explore →
            </a>
          </div>

          {/* PUZZLE PARKING Card */}
          <div className="group rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="mb-4 h-14 w-14 rounded-full bg-gradient-to-br from-[#1f67c8] to-[#153fa8] flex items-center justify-center">
              <span className="text-2xl font-bold text-white">🧩</span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">PUZZLE PARKING</h2>
            <p className="mb-6 text-gray-600">
              Innovative puzzle-based systems that deliver efficient parking with minimal footprint. Ideal for tight spaces.
            </p>
            <div className="mb-6 space-y-2 text-sm text-gray-600">
              <p>✓ Pit Puzzle</p>
              <p>✓ Puzzle Parking</p>
              <p>✓ 3-Level Pit Puzzle</p>
              <p>✓ OP-01</p>
            </div>
            <a
              href="/products/puzzle"
              className="inline-block text-[#1f67c8] font-semibold transition-colors hover:text-[#153fa8]"
            >
              Explore →
            </a>
          </div>

          {/* AUTOMATIC Card */}
          <div className="group rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="mb-4 h-14 w-14 rounded-full bg-gradient-to-br from-[#1f67c8] to-[#153fa8] flex items-center justify-center">
              <span className="text-2xl font-bold text-white">🤖</span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">AUTOMATIC</h2>
            <p className="mb-6 text-gray-600">
              Fully automated parking solutions with advanced technology integration. Experience the future of parking today.
            </p>
            <div className="mb-6 space-y-2 text-sm text-gray-600">
              <p>✓ Rotatory</p>
              <p>✓ OP-01</p>
              <p>✓ Cantilever Parking</p>
            </div>
            <a
              href="/products/automatic"
              className="inline-block text-[#1f67c8] font-semibold transition-colors hover:text-[#153fa8]"
            >
              Explore →
            </a>
          </div>
        </div>

        {/* Additional Section */}
        <div className="mt-16 rounded-lg bg-white p-8 shadow-lg md:p-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Why Choose STELZ Products?</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-[#1f67c8]">Innovation</h3>
              <p className="text-gray-600">
                Our products are designed with cutting-edge technology to ensure maximum efficiency and reliability.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-[#1f67c8]">Sustainability</h3>
              <p className="text-gray-600">
                Built with environmental consciousness, our solutions minimize energy consumption and maximize space.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-[#1f67c8]">Customization</h3>
              <p className="text-gray-600">
                Every project is unique. We offer tailored solutions to meet your specific parking needs.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-[#1f67c8]">Support</h3>
              <p className="text-gray-600">
                Our expert team provides complete support from installation to maintenance and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
