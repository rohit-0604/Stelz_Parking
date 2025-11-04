// app/(site)/(pages)/products/stack/layout.tsx
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata(
  "Stack Parking Systems | STELZ Multiparking",
  "Explore our advanced stack parking solutions designed for space-efficient parking in modern buildings.",
  {
    keywords: [
      "stack parking",
      "automated parking",
      "multi-level parking",
      "pit stacker",
      "cantilever parking",
    ],
    type: "article",
  }
);

export default function StackParkingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
