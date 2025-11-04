import PageHeader from "@/app/(site)/components/PageHeader";
import GalleryCarousel from "./components/GalleryCarousel";
import ConceptCarousel from "./components/ConceptCarousel";

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" breadcrumbLabel="Gallery" />
      <main className="flex flex-col">
        <GalleryCarousel />
        <ConceptCarousel />
      </main>
    </>
  );
}
