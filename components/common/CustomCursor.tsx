"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if device is desktop on mount and resize
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Smooth animation with delay using animation frame
  useEffect(() => {
    let animationId: number;

    const animate = () => {
      setDisplayPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.25,
        y: prev.y + (mousePos.y - prev.y) * 0.25,
      }));
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [mousePos]);

  // Only show on desktop
  if (!isDesktop) {
    return null;
  }

  return (
    <div
      className={`fixed pointer-events-none transition-opacity duration-10 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${displayPos.x}px`,
        top: `${displayPos.y}px`,
        transform: "translate(-50%, -50%)",
        zIndex: 9998,
      }}
    >
      {/* Outer circle - Light gray thin ring */}
      <div
        className="absolute"
        style={{
          width: "43px",
          height: "43px",
          border: "1px solid #d1d5db",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          left: "0",
          top: "0",
        }}
      />

      {/* Inner dot */}
      <div
        style={{
          width: "4px",
          height: "4px",
          backgroundColor: "#1E88E5",
          borderRadius: "50%",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          left: "0",
          top: "0",
        }}
      />
    </div>
  );
}
