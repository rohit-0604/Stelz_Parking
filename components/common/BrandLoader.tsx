"use client";
import Image from "next/image";

type BrandLoaderProps = {
  /** Outer spinner box size in px */
  size?: number;
  /** Optional extra classes for the outer wrapper */
  className?: string;
};

export default function BrandLoader({ size = 96, className }: BrandLoaderProps) {
  const ring = Math.max(2, Math.round(size * 0.03)); // ring thickness ~3% of size

  return (
    <div className={`grid place-items-center ${className ?? ""}`} aria-label="Loading">
      <div className="relative drop-shadow-sm" style={{ width: size, height: size }}>
        {/* light gray track */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ border: `${ring}px solid #e5e7eb` }} // gray-200
        />
        {/* blue arc spinner */}
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            border: `${ring}px solid #1976D2`,
            borderTopColor: "transparent",
          }}
        />
        {/* logo */}
        <div className="absolute inset-0 grid place-items-center">
          <Image
            src="/assets/home/LogoTransparent.png"
            alt="STELZ"
            width={Math.round(size * 0.55)}
            height={Math.round(size * 0.22)}
            priority
          />
        </div>
      </div>
    </div>
  );
}
