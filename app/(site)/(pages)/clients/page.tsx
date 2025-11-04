import PageHeader from "@/app/(site)/components/PageHeader";

export default function ClientsPage() {
  return (
    <>
      <PageHeader title="Our Clients" breadcrumbLabel="Our Clients" />
      <div className="min-h-screen bg-white pt-20">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900">Our Clients</h1>
          <p className="mt-4 text-gray-600">Coming Soon...</p>
        </div>
      </div>
    </>
  );
}
