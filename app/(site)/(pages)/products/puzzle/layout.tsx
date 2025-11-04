// app/(site)/(pages)/products/puzzle/layout.tsx
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(
  "Puzzle Parking Systems | STELZ Multiparking",
  "Discover innovative puzzle parking solutions offering maximum space utilization and automated vehicle management.",
  {
    keywords: [
      "puzzle parking",
      "automated parking",
      "puzzle lift",
      "pit puzzle",
      "space-saving parking",
    ],
    type: "article",
  }
);

export default function PuzzleParkingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
