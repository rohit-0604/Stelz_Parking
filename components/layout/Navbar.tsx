"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV, type NavLink } from "@/data/content";

function isActive(pathname: string, href?: string) {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMobile({});
    setOpenDesktop(null);
  }, [pathname]);

  // Desktop dropdown handlers
  const handleMouseEnter = (key: string) => {
    setOpenDesktop(key);
  };

  const handleMouseLeave = () => {
    setOpenDesktop(null);
  };

  // Mobile dropdown toggle
  const toggleMobile = (key: string) => {
    setOpenMobile((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const DesktopNavItem = ({ item, index }: { item: NavLink; index: number }) => {
    const key = `desktop-${index}-${item.label}`;
    const hasChildren = !!item.children?.length;
    const active = isActive(pathname, item.href);

    return (
      <li
        className="relative"
        onMouseEnter={() => hasChildren && handleMouseEnter(key)}
        onMouseLeave={handleMouseLeave}
      >
        {hasChildren ? (
          <Link
            href={item.href || "#"}
            className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium uppercase tracking-wide text-black transition-colors"
            style={{ "--hover-color": "#0C41AA" } as any}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0C41AA")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
            onClick={(e) => {
              if (!item.href) e.preventDefault();
            }}
          >
            {item.label}
            <span
              className="text-lg font-medium cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleMouseEnter(key);
              }}
            >
              +
            </span>
          </Link>
        ) : (
          <Link
            href={item.href!}
            className="block px-4 py-2 text-[15px] font-medium uppercase tracking-wide transition-colors text-black"
            style={{ color: active ? "#0C41AA" : "black" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0C41AA")}
            onMouseLeave={(e) => (e.currentTarget.style.color = active ? "#0C41AA" : "black")}
          >
            {item.label}
          </Link>
        )}

        {/* Dropdown Menu */}
        {hasChildren && openDesktop === key && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 top-full z-50 mt-0 min-w-[220px] bg-white shadow-lg"
          >
            {item.children!.map((child, i) => (
              <DropdownItem key={`${key}-child-${i}`} item={child} pathname={pathname} />
            ))}
          </motion.div>
        )}
      </li>
    );
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 hidden bg-white lg:block">
        {/* Blue top line */}
        <div className="h-1.5 w-full bg-[#0f4fa3]" />

        <nav
          className={`mx-auto flex h-21 max-w-7xl items-center justify-between px-6 transition-shadow ${
            scrolled ? "shadow-md" : ""
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center py-2">
            <Image
              src="/assets/home/Logo.jpg"
              alt="STELZ Multiparking"
              width={160}
              height={45}
              priority
              quality={95}
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="flex items-center gap-1">
            {NAV.map((item, i) => (
              <DesktopNavItem item={item} index={i} key={`nav-${i}`} />
            ))}
          </ul>
        </nav>

        {/* Blue bottom line */}
        <div className="h-1.5 w-full bg-[#0C41AA]" />
      </header>

      {/* Mobile Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 block w-full bg-white lg:hidden">
        {/* Blue top line */}
        <div className="h-1.5 w-full bg-[#0f4fa3]" />

        <nav className="flex h-20 w-full items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2">
            <Image
              src="/assets/home/Logo.jpg"
              alt="STELZ Multiparking"
              width={140}
              height={40}
              priority
              quality={95}
              unoptimized
            />
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="p-2"
            style={{ color: "#0C41AA" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </nav>

        {/* Blue bottom line */}
        <div className="h-1.5 w-full bg-[#0C41AA]" />

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Gray Overlay that slides from left */}
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ type: "tween", duration: 0.6 }}
                className="fixed inset-0 z-39 bg-gray-400/30 pointer-events-none"
              />

              {/* Black Overlay behind gray overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "tween", duration: 0.4, delay: 0.2 }}
                className="fixed inset-0 z-40 bg-black/50"
                onClick={() => setMobileOpen(false)}
              />

              {/* Sidebar */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
                className="fixed left-0 top-0 z-50 h-full w-[280px] overflow-y-auto bg-white shadow-xl"
              >
                {/* Mobile Header */}
                <div className="flex items-center justify-between border-b border-gray-200 p-4">
                  <Image
                    src="/assets/home/Logo.jpg"
                    alt="STELZ"
                    width={120}
                    height={32}
                  />
                  <button onClick={() => setMobileOpen(false)} aria-label="Close menu" style={{ color: "#0C41AA" }}>
                    <X className="h-8 w-8" />
                  </button>
                </div>

                {/* Mobile Nav Items */}
                <div className="p-4">
                  <MobileMenu items={NAV} openItems={openMobile} toggleItem={toggleMobile} />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

/* ───────────────────────── Dropdown Item ───────────────────────── */
function DropdownItem({
  item,
  pathname,
}: {
  item: NavLink;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;
  const active = isActive(pathname, item.href);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {hasChildren ? (
        <Link
          href={item.href || "#"}
          className="flex items-center justify-between px-4 py-3 text-sm font-medium uppercase tracking-wide text-gray-700 transition-colors"
          style={{
            backgroundColor: active ? "#0C41AA" : "white",
            color: active ? "white" : "#4b5563",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0C41AA";
            (e.currentTarget as HTMLAnchorElement).style.color = "white";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = active ? "#0C41AA" : "white";
            (e.currentTarget as HTMLAnchorElement).style.color = active ? "white" : "#4b5563";
          }}
          onClick={(e) => {
            if (!item.href) e.preventDefault();
          }}
        >
          <span>{item.label}</span>
          <span className="text-base font-medium">+</span>
        </Link>
      ) : (
        <Link
          href={item.href!}
          className="block px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors"
          style={{
            backgroundColor: active ? "#0C41AA" : "white",
            color: active ? "white" : "#4b5563",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0C41AA";
            (e.currentTarget as HTMLAnchorElement).style.color = "white";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = active ? "#0C41AA" : "white";
            (e.currentTarget as HTMLAnchorElement).style.color = active ? "white" : "#4b5563";
          }}
        >
          {item.label}
        </Link>
      )}

      {/* Nested Dropdown */}
      {hasChildren && open && (
        <div className="absolute left-full top-0 z-50 ml-1 min-w-60 bg-white shadow-lg">
          {item.children!.map((child, i) => {
            const childActive = isActive(pathname, child.href);
            return (
              <Link
                key={i}
                href={child.href!}
                className="block px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors"
                style={{
                  backgroundColor: childActive ? "#0C41AA" : "white",
                  color: childActive ? "white" : "#4b5563",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0C41AA";
                  (e.currentTarget as HTMLAnchorElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = childActive ? "#0C41AA" : "white";
                  (e.currentTarget as HTMLAnchorElement).style.color = childActive ? "white" : "#4b5563";
                }}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ───────────────────────── Mobile Menu ───────────────────────── */
function MobileMenu({
  items,
  openItems,
  toggleItem,
}: {
  items: NavLink[];
  openItems: Record<string, boolean>;
  toggleItem: (key: string) => void;
}) {
  return (
    <ul className="space-y-1">
      {items.map((item, i) => (
        <MobileMenuItem
          key={`mobile-${i}`}
          item={item}
          depth={0}
          openItems={openItems}
          toggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}

function MobileMenuItem({
  item,
  depth,
  openItems,
  toggleItem,
}: {
  item: NavLink;
  depth: number;
  openItems: Record<string, boolean>;
  toggleItem: (key: string) => void;
}) {
  const hasChildren = !!item.children?.length;
  const key = `${item.label}-${depth}`;
  const isOpen = openItems[key];

  return (
    <li>
      <div className="flex items-center justify-between">
        {item.href ? (
          <Link
            href={item.href}
            className="flex-1 py-2.5 text-sm font-medium uppercase tracking-wide text-gray-700"
            style={{ paddingLeft: depth * 16 + 12 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0C41AA")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
          >
            {item.label}
          </Link>
        ) : (
          <span
            className="flex-1 py-2.5 text-sm font-medium uppercase tracking-wide text-gray-700"
            style={{ paddingLeft: depth * 16 + 12 }}
          >
            {item.label}
          </span>
        )}

        {hasChildren && (
          <button
            onClick={() => toggleItem(key)}
            className="px-3 py-2.5 text-gray-600"
            aria-label={`Toggle ${item.label}`}
          >
            <span className={`text-lg font-bold transition-transform inline-block ${isOpen ? "rotate-45" : ""}`}>
              +
            </span>
          </button>
        )}
      </div>

      {hasChildren && isOpen && (
        <ul className="mt-1 space-y-1">
          {item.children!.map((child, i) => (
            <MobileMenuItem
              key={`${key}-child-${i}`}
              item={child}
              depth={depth + 1}
              openItems={openItems}
              toggleItem={toggleItem}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
