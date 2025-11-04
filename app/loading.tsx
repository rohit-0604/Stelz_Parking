// app/loading.tsx
"use client";

import BrandLoader from "@/components/common/BrandLoader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 grid place-items-center bg-white">
      <BrandLoader />
    </div>
  );
}
