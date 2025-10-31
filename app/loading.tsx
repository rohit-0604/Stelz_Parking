// app/loading.tsx
"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 grid place-items-center bg-white">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
        <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
        <div className="absolute inset-0 grid place-items-center">
          <Image src="/assets/LogoTransparent.png" alt="STELZ logo" width={56} height={22} priority />
        </div>
      </div>
    </div>
  );
}
