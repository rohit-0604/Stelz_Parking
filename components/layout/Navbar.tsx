"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState, type MouseEvent as ReactMouseEvent } from "react";
import { Menu, X } from "lucide-react";
import type { NavLink } from "@/data/NavContent";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { localeFromPathname, stripLocalePrefix } from "@/lib/i18n/routing";
import { getNavigation } from "@/lib/i18n/navigation";
import { getMessages } from "@/data/i18n/messages";

const BLUE_HEX = "#174b92";
const BLUE_BG = "bg-[#174b92]";

/* =======================
   Animation timing knobs
   ======================= */
const ANIM = {
  overlayDuration: 0.5,
  drawerDuration: 0.5,
  drawerDelay: 0.4,
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
  const current = stripLocalePrefix(pathname);
  const target = stripLocalePrefix(href);
  if (target === "/") return current === "/";
  return current === target || current.startsWith(`${target}/`);
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
  hidden: (rtl: boolean) => ({ x: rtl ? "100%" : "-100%" }),
  show: {
    x: 0,
    transition: { duration: ANIM.drawerDuration, ease: [0.22, 1, 0.36, 1], delay: ANIM.drawerDelay },
  },
  exit: (rtl: boolean) => ({
    x: rtl ? "100%" : "-100%",
    transition: { duration: ANIM.drawerDuration, ease: "easeIn", delay: 0 },
  }),
};

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const navigation = getNavigation(locale);
  const messages = getMessages(locale);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [elevated, setElevated] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setElevated(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

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
        <nav className="grid min-h-20 grid-cols-[auto_1fr_auto] items-center gap-3 px-4 md:px-7">
          {/* LEFT: Logo */}
          <div className="flex min-w-0 items-center gap-3">
            <Image
              src="/assets/home/Logo.webp"
              alt="STELZ"
              width={800}
              height={200}
              priority
              className="h-10 w-auto sm:h-14 2xl:h-20"
            />
          </div>

          {/* Desktop menu */}
          <ul className="hidden min-w-0 items-center justify-center gap-3 2xl:flex">
            {navigation.map((item: NavLink) => (
              <DesktopTopItem
                key={item.label}
                item={item}
                active={isActive(pathname, item.href)}
              />
            ))}
          </ul>

          <div className="flex items-center justify-end gap-2">
            <LanguageSwitcher />
            <button
              aria-label={messages.common.openMenu}
              className="inline-flex size-11 items-center justify-center rounded-lg hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-[#174b92] 2xl:hidden"
              onClick={(): void => setMobileOpen(true)}
            >
              <Menu color={BLUE_HEX} size={32} />
            </button>
          </div>
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

      {/* MOBILE/TABLET: overlay + drawer */}
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
              className="fixed start-0 top-0 z-50 h-dvh w-[85%] max-w-96 overflow-y-auto overscroll-contain bg-white shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label={messages.common.openMenu}
              custom={false}
              data-defect-id={locale === "ar" ? "RTL-038 I18N-005" : undefined}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={drawerVariants}
            >
              <div className="flex items-center justify-between border-b px-4 py-3">
                <Image
                  src="/assets/home/Logo.webp"
                  alt="STELZ"
                  width={800}
                  height={200}
                  priority
                  className="h-16 w-auto"
                />
                <button
                  autoFocus
                  aria-label={messages.common.closeMenu}
                  className="inline-flex size-12 items-center justify-center rounded-lg hover:bg-neutral-100"
                  onClick={(): void => setMobileOpen(false)}
                >
                  <X color={BLUE_HEX} size={34} />
                </button>
              </div>

              <nav className="px-2 py-3">
                <MobileMenu items={navigation} expandLabel={messages.common.expandSection} onNavigate={(): void => setMobileOpen(false)} />
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
      onFocus={(): void => setOpen(true)}
      onBlur={(event): void => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <TopLink item={item} active={active} open={open} />
      <AnimatePresence>
        {hasKids(item) && open && (
          <motion.div
            key={`${item.label}-dd`}
            className="absolute start-0 top-[calc(100%+12px)] z-50"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={dropVariants}
          >
            {/* hover bridge */}
            <div className="absolute -top-3 start-0 h-3 w-full" />
            <MenuList items={item.children as NavLink[]} depth={0} />
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function TopLink({
  item,
  active,
  open,
}: {
  item: NavLink;
  active: boolean;
  open: boolean;
}): JSX.Element {
  const base =
    "inline-flex items-center gap-0 text-[14px] font-medium uppercase tracking-[0.035em] select-none";

  return (
    <Link
      href={item.href ?? "#"}
      aria-haspopup={hasKids(item) ? "menu" : undefined}
      aria-expanded={hasKids(item) ? open : undefined}
      className={`${base} training-nav-item ${active ? "text-[#174b92]" : "text-neutral-900 hover:text-[#174b92]"}`}
    >
      <span className="inline-flex items-center">
        {item.label}
        {item.expandable && (
          /* plus inherits current link color (hover + active) */
          <span className="ms-0.5 text-[18px] font-medium leading-none text-current">+</span>
        )}
      </span>
    </Link>
  );
}

/* ---------------- Shared dropdown list ---------------- */

type MenuListProps = { items: NavLink[]; depth?: number };

function MenuList({ items, depth = 0 }: MenuListProps): JSX.Element {
  const pathname = usePathname(); // NEW: needed to style active dropdown items

  const onParentOnlyClick = (i: NavLink) => (e: ReactMouseEvent<HTMLAnchorElement>): void => {
    if (isProductsParentOnly(i) && hasKids(i)) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const gapClass = depth === 0 ? "gap-1 lg:gap-0" : "gap-2 lg:gap-1";
  const widthClass = depth === 0 ? "min-w-56" : "min-w-64";

  return (
    <ul className={`${widthClass} rounded-xs border border-neutral-200 bg-white py-2.5 shadow-xl`}>
      {items.map((i: NavLink) => {
        const kids = hasKids(i);
        const selfActive = isActive(pathname, i.href); // NEW

        return (
          <li key={i.label} className="relative group/sub">
            <Link
              href={i.href ?? "#"}
              onClick={onParentOnlyClick(i)}
              className={`
                block px-3 py-3 text-[14px] font-medium uppercase tracking-wide
                transition-colors duration-300
                ${selfActive ? "bg-[#174b92] text-white" : "text-neutral-800"}
                lg:hover:bg-[#174b92] lg:hover:text-white
                focus:bg-[#174b92] focus:text-white active:bg-[#174b92] active:text-white
              `}
            >
              <span className={`inline-flex w-full items-center ${gapClass}`}>
                {i.label}
                {kids && (
                  /* plus inherits the item's text color → white when active/hover/focus */
                  <span className="ms-auto text-[16px] font-medium text-current">+</span>
                )}
              </span>
            </Link>

            {kids && (
              <div
                className="
                  absolute start-full -ms-px top-0
                  invisible opacity-0
                  group-hover/sub:visible group-hover/sub:opacity-100
                  group-focus-within/sub:visible group-focus-within/sub:opacity-100
                  transition-[opacity,visibility] duration-300
                  z-60
                "
              >
                <div className="absolute -start-px top-0 h-full w-px" />
                <MenuList items={i.children as NavLink[]} depth={depth + 1} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}


/* ---------------- Mobile / Tablet ---------------- */

function MobileMenu({ items, expandLabel, onNavigate }: { items: readonly NavLink[]; expandLabel: string; onNavigate: () => void }): JSX.Element {
  const pathname = usePathname();
  const [openKeys, setOpenKeys] = useState<Record<string, boolean>>({});
  const toggle = (k: string): void => setOpenKeys((s) => ({ ...s, [k]: !s[k] }));
  const [highlightKeys, setHighlightKeys] = useState<Record<string, boolean>>({});
  const toggleHighlight = (k: string) =>
    setHighlightKeys((s) => ({ ...s, [k]: !s[k] }));  



const ItemRow = ({
  item,
  level = 0,
}: {
  item: NavLink;
  level?: number;
}): JSX.Element => {
  const kids = hasKids(item);
  const selfActive = isActive(pathname, item.href);
  const isChild = level > 0;

  // desktop’s “section header” rule for TOP-LEVEL groups if you still use it
  const parentOnlyTop = !isChild && kids && isProductsParentOnly(item);

  // This is the submenu header you care about: a CHILD that itself has children
  const isChildHeader = isChild && kids;

  // expanded (for opening via '+')
  const isExpanded = !!openKeys[item.label];

  // NEW: visual highlight for tap on child headers (no nav, no expand)
  const isHighlighted = !!highlightKeys[item.label];
  const headerActive = isChildHeader && isHighlighted;

  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isChildHeader) {
      // Do NOTHING except highlight
      e.preventDefault();
      e.stopPropagation();
      toggleHighlight(item.label);
      return;
    }
    if (parentOnlyTop) {
      // If you keep top-level section headers non-navigable on mobile:
      e.preventDefault();
      e.stopPropagation();
      toggle(item.label); // or comment this out if you want '+' only at top-level too
      return;
    }
    // Real page → navigate & close drawer
    onNavigate();
  };

  const onToggleBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(item.label); // '+' exclusively expands/collapses
  };

  return (
    <div className="w-full">
      {/* header row — paddings unchanged */}
      <div className="flex items-center px-4 ">
        <Link
          href={item.href ?? "#"}
          onClick={onLinkClick}
          className={[
            "training-nav-item flex-1 py-2.5 text-[15px] font-medium uppercase tracking-wide transition-colors ps-1.5 text-start",
            // Top-level (main) active rule stays the same
            !isChild &&
              (selfActive ? "text-[#174b92]" : "text-neutral-900 hover:text-[#174b92]"),
            // Child rows: turn blue on route active OR when header is tapped (highlighted)
            isChild &&
              (selfActive || headerActive
                ? "bg-[#174b92] text-white"
                : "text-neutral-900 hover:text-[#174b92]"),
            "focus:bg-[#174b92] focus:text-white active:bg-[#174b92] active:text-white",
          ].join(" ")}
          aria-current={selfActive ? "page" : undefined}
        >
          {item.label}
        </Link>

        {kids && (
          <button
            aria-label={`${expandLabel}: ${item.label}`}
            className="ms-2 inline-flex min-h-11 min-w-11 items-center justify-center rounded-md hover:bg-neutral-100 pe-1.5"
            onClick={onToggleBtn}
          >
            <motion.span
              className={`text-[20px] font-medium ${
                // '+' turns white whenever the header is highlighted (tapped)
                headerActive ? "text-[#174b92]" : selfActive ? "text-[#174b92]" : "text-black"
              }`}
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              +
            </motion.span>
          </button>
        )}
      </div>

      {/* submenu opens only via '+' */}
      <AnimatePresence initial={false}>
        {kids && openKeys[item.label] && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: ANIM.accordionDuration, ease: [0.22, 1, 0.36, 1] }}
            className="-mt-px overflow-hidden"
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
      {items.map((item: NavLink) => (
        <ItemRow key={item.label} item={item} />
      ))}
    </div>
  );
}

