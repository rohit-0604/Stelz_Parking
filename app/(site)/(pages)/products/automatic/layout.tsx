// app/(site)/(pages)/products/automatic/layout.tsx
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(
  "Automatic Parking Systems | STELZ Multiparking",
  "Experience fully automated parking systems with rotatory and cantilever solutions for modern urban parking challenges.",
  {
    keywords: [
      "automatic parking",
      "rotatory parking",
      "automated vehicle handling",
      "mechanical parking",
      "smart parking solutions",
    ],
    type: "article",
  }
);

export default function AutomaticParkingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
