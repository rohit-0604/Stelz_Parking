import PageHeader from "@/app/(site)/components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About STELZ Multiparking"
        breadcrumbLabel="About Us"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      {/* Main Content */}
      <div className="mx-auto max-w-[1400px] px-4 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* WHO WE ARE Card */}
          <div className="group rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="mb-4 h-12 w-12 rounded-full bg-[#1f67c8] flex items-center justify-center">
              <span className="text-xl font-bold text-white">1</span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">WHO WE ARE</h2>
            <p className="mb-6 text-gray-600">
              Learn about STELZ Multiparking's heritage, culture, and commitment to excellence in the parking industry.
            </p>
            <a
              href="/about/who-we-are"
              className="inline-block text-[#1f67c8] font-semibold transition-colors hover:text-[#153fa8]"
            >
              Read More →
            </a>
          </div>

          {/* R & D Card */}
          <div className="group rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="mb-4 h-12 w-12 rounded-full bg-[#1f67c8] flex items-center justify-center">
              <span className="text-xl font-bold text-white">2</span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">R & D</h2>
            <p className="mb-6 text-gray-600">
              Explore our research and development efforts that drive innovation in parking technology and automation.
            </p>
            <a
              href="/about/r-and-d"
              className="inline-block text-[#1f67c8] font-semibold transition-colors hover:text-[#153fa8]"
            >
              Learn More →
            </a>
          </div>

          {/* BLOG Card */}
          <div className="group rounded-lg bg-white p-8 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="mb-4 h-12 w-12 rounded-full bg-[#1f67c8] flex items-center justify-center">
              <span className="text-xl font-bold text-white">3</span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">BLOG</h2>
            <p className="mb-6 text-gray-600">
              Stay updated with our latest articles, insights, and industry news about parking solutions.
            </p>
            <a
              href="/about/blog"
              className="inline-block text-[#1f67c8] font-semibold transition-colors hover:text-[#153fa8]"
            >
              Read Articles →
            </a>
          </div>
        </div>

        {/* Additional Section */}
        <div className="mt-16 rounded-lg bg-white p-8 shadow-lg md:p-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Vision</h2>
          <p className="mb-4 text-lg text-gray-600">
            At STELZ Multiparking, we envision a world where parking is no longer a hassle but an integral part of smart city infrastructure. Our mission is to provide innovative, efficient, and sustainable parking solutions that maximize space utilization and enhance user experience.
          </p>
          <p className="text-lg text-gray-600">
            Through continuous innovation and customer-centric approach, we are engineering tomorrow's parking today.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
