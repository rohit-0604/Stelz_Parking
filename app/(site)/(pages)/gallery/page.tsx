import PageHeader from "@/app/(site)/components/PageHeader";

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" breadcrumbLabel="Gallery" />
      <div className="min-h-screen bg-white pt-20">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Gallery</h1>
          <p className="mt-4 text-gray-600">Coming Soon...</p>
        </div>
      </div>
    </>
  );
}
