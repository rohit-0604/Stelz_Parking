// app/(site)/services/page.tsx
import PageHeader from "@/app/(site)/components/PageHeader";

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" breadcrumbLabel="Services" />
      <main className="bg-white">
        <section className="mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What We Offer
          </h2>
        </section>
      </main>
    </>
  );
}
