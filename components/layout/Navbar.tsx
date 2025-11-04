"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState, type MouseEvent as ReactMouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { NAV, type NavLink } from "@/data/NavContent";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const BLUE_HEX = "#174b92";
const BLUE_BG = "bg-[#174b92]";

/* =======================
   Animation timing knobs
   ======================= */
const ANIM = {
  overlayDuration: 0.5,
  drawerDuration: 0.5,
  drawerDelay: 0.4, // entry: overlay -> drawer | exit: drawer -> overlay
  dropdownDuration: 0.32,
  accordionDuration: 0.26,
} as const;

/** items that are section headers (no page) and must not navigate on click */
const PRODUCTS_PARENT_ONLY = new Set<string>([
  "/products/stack",
  "/products/puzzle",
  "/products/automatic",
]);

function isActive(pathname: string, href?: string): boolean {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}
function hasKids(i: NavLink): i is NavLink & { children: NavLink[] } {
  return Array.isArray(i.children) && i.children.length > 0;
}
function isProductsParentOnly(item: NavLink): boolean {
  return !!item.href && PRODUCTS_PARENT_ONLY.has(item.href);
}

/* ------- Framer Motion variants (symmetric entry & exit) ------- */
const dropVariants: Variants = {
  hidden: { opacity: 0, y: 10, pointerEvents: "none" },
  show: {
    opacity: 1,
    y: 0,
    pointerEvents: "auto",
    transition: { duration: ANIM.dropdownDuration, ease: [0.22, 1, 0.36, 1] },
  },
};
const overlayVariants: Variants = {
  hidden: { width: 0, opacity: 0 },
  show: {
    width: "100vw",
    opacity: 1,
    transition: { duration: ANIM.overlayDuration, ease: "easeOut", delay: 0 },
  },
  exit: {
    width: 0,
    opacity: 0,
    transition: { duration: ANIM.overlayDuration, ease: "easeIn", delay: ANIM.drawerDelay },
  },
};
const drawerVariants: Variants = {
  hidden: { x: "-100%" },
  show: {
    x: 0,
    transition: { duration: ANIM.drawerDuration, ease: [0.22, 1, 0.36, 1], delay: ANIM.drawerDelay },
  },
  exit: {
    x: "-100%",
    transition: { duration: ANIM.drawerDuration, ease: "easeIn", delay: 0 },
  },
};

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [elevated, setElevated] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setElevated(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 bg-white"
        animate={{
          boxShadow: elevated ? "0 8px 20px rgba(0,0,0,0.06)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top rail */}
        <div className={`${BLUE_BG} h-1.5`} />

        {/* NAV BAR */}
        <nav className="flex items-center justify-between gap-4 px-4 md:px-7">
          {/* LEFT: Logo */}
          <div className="flex min-w-[200px] items-center gap-3">
            <Image
              src="/assets/home/Logo.jpg"
              alt="STELZ"
              width={800}
              height={200}
              priority
              className="h-20 w-auto"
            />
          </div>

          {/* push links right */}
          <div className="flex-1" />

          {/* Desktop menu */}
          <ul className="hidden items-center gap-6 lg:flex">
            {NAV.map((item: NavLink) => (
              <DesktopTopItem
                key={item.label}
                item={item}
                active={isActive(pathname, item.href)}
              />
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            className="lg:hidden inline-flex size-12 items-center justify-center rounded-lg hover:bg-neutral-100"
            onClick={(): void => setMobileOpen(true)}
          >
            <Menu color={BLUE_HEX} size={36} />
          </button>
        </nav>

        {/* Bottom rail */}
        <div className={`${BLUE_BG} h-1.5`} />

        {/* Subtle fade edge under navbar (fades in when elevated) */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-3 h-3 bg-linear-to-b from-black/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: elevated ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.header>

      {/* space under fixed header */}
      <div className="pt-[88px]" />

      {/* MOBILE/TABLET: overlay + drawer (symmetric timing) */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-black/30"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={overlayVariants}
              onClick={(): void => setMobileOpen(false)}
            />
            <motion.aside
              key="drawer"
              className="fixed left-0 top-0 z-50 h-dvh w-[85%] max-w-96 bg-white shadow-2xl"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={drawerVariants}
            >
              <div className="flex items-center justify-between border-b px-4 py-3">
                <Image
                  src="/assets/home/Logo.jpg"
                  alt="STELZ"
                  width={800}
                  height={200}
                  priority
                  className="h-16 w-auto"
                />
                <button
                  aria-label="Close menu"
                  className="inline-flex size-12 items-center justify-center rounded-lg hover:bg-neutral-100"
                  onClick={(): void => setMobileOpen(false)}
                >
                  <X color={BLUE_HEX} size={34} />
                </button>
              </div>

              <nav className="px-2 py-3">
                <MobileMenu onNavigate={(): void => setMobileOpen(false)} />
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------------- Desktop ---------------- */

function DesktopTopItem({
  item,
  active,
}: {
  item: NavLink;
  active: boolean;
}): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <li
      className="relative"
      onMouseEnter={(): void => setOpen(true)}
      onMouseLeave={(): void => setOpen(false)}
    >
      <TopLink item={item} active={active} />
      <AnimatePresence>
        {hasKids(item) && open && (
          <motion.div
            key={`${item.label}-dd`}
            className="absolute left-0 top-[calc(100%+12px)] z-50"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={dropVariants}
          >
            {/* hover bridge */}
            <div className="absolute -top-3 left-0 h-3 w-full" />
            <MenuList items={item.children as NavLink[]} />
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function TopLink({
  item,
  active,
}: {
  item: NavLink;
  active: boolean;
}): JSX.Element {
  // Desktop: smaller font & no gap before '+'
  const base =
    "inline-flex items-center gap-1 lg:gap-0 text-[16px] font-medium uppercase tracking-[0.04em] text-neutral-900";
  return (
    <Link
      href={item.href ?? "#"}
      className={`${base} ${active ? "opacity-90" : "hover:opacity-80"} select-none`}
    >
      <span className="inline-flex items-center">
        {item.label}
        {item.expandable && (
          <span className="ml-0.5 text-[18px] font-medium leading-none text-black">+</span>
        )}
      </span>
    </Link>
  );
}

/* ---------------- Shared dropdown list ---------------- */

function MenuList({ items }: { items: NavLink[] }): JSX.Element {
  const onParentOnlyClick = (i: NavLink) => (e: ReactMouseEvent<HTMLAnchorElement>): void => {
    if (isProductsParentOnly(i) && hasKids(i)) {
      // prevent navigation for section headers
      e.preventDefault();
      e.stopPropagation();
      // no-op; on desktop the flyout shows via hover, on mobile we handle in MobileMenu
    }
  };

  return (
    <ul className="min-w-56 rounded-xs border border-neutral-200 bg-white py-4 shadow-xl">
      {items.map((i: NavLink) => {
        const kids = hasKids(i);
        return (
          <li key={i.label} className="relative group/sub">
            <Link
              href={i.href ?? "#"}
              onClick={onParentOnlyClick(i)}
              className="
                block px-4 py-4 text-[14px] font-medium uppercase tracking-wide
                text-neutral-800 transition-colors duration-300
                lg:hover:bg-[#174b92] lg:hover:text-white
                focus:bg-[#174b92] focus:text-white active:bg-[#174b92] active:text-white
              "
            >
              <span className="inline-flex w-full items-center gap-2 lg:gap-1">
                {i.label}
                {kids && <span className="ml-auto text-[16px] font-medium text-black">+</span>}
              </span>
            </Link>

            {kids && (
              <div
                className="
                  absolute left-[calc(100%+8px)] top-0
                  invisible translate-x-1 opacity-0
                  group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100
                  transition-[opacity,transform,visibility] duration-300
                  z-60
                "
              >
                <div className="absolute -left-3 top-0 h-full w-3" />
                <MenuList items={i.children as NavLink[]} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/* ---------------- Mobile / Tablet ---------------- */

function MobileMenu({ onNavigate }: { onNavigate: () => void }): JSX.Element {
  const [openKeys, setOpenKeys] = useState<Record<string, boolean>>({});
  const toggle = (k: string): void =>
    setOpenKeys((s) => ({ ...s, [k]: !s[k] }));

  const ItemRow = ({
    item,
    level = 0,
  }: {
    item: NavLink;
    level?: number;
  }): JSX.Element => {
    const kids = hasKids(item);
    const pad = 12 + level * 12;

    const onLinkClick = (e: ReactMouseEvent<HTMLAnchorElement>): void => {
      if (kids && isProductsParentOnly(item)) {
        // parent-only items expand/collapse instead of navigating
        e.preventDefault();
        e.stopPropagation();
        toggle(item.label);
      } else {
        onNavigate();
      }
    };

    const onToggleBtn = (e: ReactMouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      e.stopPropagation();
      toggle(item.label);
    };

    return (
      <div className="w-full">
        <div className="flex items-center" style={{ paddingLeft: pad, paddingRight: 8 }}>
          <Link
            href={item.href ?? "#"}
            onClick={onLinkClick}
            className="
              flex-1 py-2.5 text-[15px] font-medium uppercase tracking-wide text-neutral-900
              focus:bg-[#174b92] focus:text-white active:bg-[#174b92] active:text-white
            "
          >
            {item.label}
          </Link>

          {kids && (
            <button
              aria-label="Expand section"
              className="ml-2 inline-flex size-8 items-center justify-center rounded-md hover:bg-neutral-100"
              onClick={onToggleBtn}
            >
              {/* mobile + is 20px */}
              <motion.span
                className="text-[20px] font-medium text-black"
                animate={{ rotate: openKeys[item.label] ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                +
              </motion.span>
            </button>
          )}
        </div>

        <AnimatePresence initial={false}>
          {kids && openKeys[item.label] && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: ANIM.accordionDuration, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden pb-0.5"
            >
              {(item.children as NavLink[]).map((c: NavLink) => (
                <ItemRow key={`${item.label}-${c.label}`} item={c} level={level + 1} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      {NAV.map((item: NavLink) => (
        <ItemRow key={item.label} item={item} />
      ))}
    </div>
  );
}
