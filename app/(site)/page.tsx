// app/(site)/page.tsx
import Hero from "./components/Hero";
import HighlightsBanner from "./components/HighlightsBanner";
import FootprintCarousel from "./components/FootprintCarousel";
import ParkingModelsCarousel from "./components/ParkingModelsCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightsBanner />
      <FootprintCarousel />
      <ParkingModelsCarousel />
    </>
  );
}
