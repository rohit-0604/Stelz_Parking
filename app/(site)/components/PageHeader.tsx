// app/(site)/components/PageHeader.tsx
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  breadcrumbLabel: string;
}

export default function PageHeader({ title, breadcrumbLabel }: PageHeaderProps) {
  return (
    <div className="relative w-full">
      {/* Top Template Image */}
      <div className="relative h-32 w-full md:h-40">
        <Image
          src="/assets/pageTemplate/template_top.jpg"
          alt="Page header background"
          fill
          quality={75}
          priority={true}
          className="object-cover"
        />
        {/* Breadcrumb Navigation */}
        <div className="absolute inset-0 flex flex-col items-start justify-end px-4 pb-4 md:px-8 md:pb-6">
          <nav className="text-sm text-gray-600 md:text-base">
            <a href="https://stelzparking.com" className="hover:text-blue-600 transition-colors">
              stelzparking.com
            </a>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-900 font-medium">{breadcrumbLabel}</span>
          </nav>
        </div>
      </div>

      {/* Title Section */}
      <div className="relative bg-white py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
        </div>
      </div>

      {/* Bottom Template Image */}
      <div className="relative h-24 w-full md:h-32">
        <Image
          src="/assets/pageTemplate/template_bottom.jpg"
          alt="Page header bottom decoration"
          fill
          quality={75}
          className="object-cover"
        />
      </div>
    </div>
  );
}
