// data/content.ts

export type NavLink = {
  label: string;
  href?: `/${string}` | "/";
  expandable?: boolean;
  children?: readonly NavLink[];
};

export const NAV: readonly NavLink[] = [
  { label: "HOME", href: "/" },

  {
    label: "ABOUT US",
    href: "/about",
    expandable: true,
    children: [
      { label: "WHO WE ARE", href: "/about/who-we-are" },
      { label: "R & D", href: "/about/r-and-d" },
      { label: "BLOG", href: "/about/blog" },
    ],
  },

  { label: "SERVICES", href: "/services" },

  {
    label: "OUR PRODUCTS",
    href: "/products",
    expandable: true,
    children: [
      {
        label: "STACK PARKING",
        href: "/products/stack",
        expandable: true,
        children: [
          { label: "3-LEVEL STACK PARKING", href: "/products/stack/3-level-stack-parking" },
          { label: "3-LEVEL PIT STACKER", href: "/products/stack/3-level-pit-stacker" },
          { label: "CANTILEVER PARKING", href: "/products/stack/cantilever-parking" },
          { label: "CAR HOIST", href: "/products/stack/car-hoist" },
          { label: "TURN TABLE", href: "/products/stack/turn-table" },
        ],
      },
      {
        label: "PUZZLE PARKING",
        href: "/products/puzzle",
        expandable: true,
        children: [
          { label: "PIT PUZZLE", href: "/products/puzzle/pit-puzzle" },
          { label: "PUZZLE PARKING", href: "/products/puzzle/puzzle-parking" },
          { label: "3-LEVEL PIT PUZZLE", href: "/products/puzzle/3-level-pit-puzzle" },
          { label: "OP - 01", href: "/products/puzzle/op-01" },
        ],
      },
      {
        label: "AUTOMATIC",
        href: "/products/automatic",
        expandable: true,
        children: [
          { label: "ROTATORY", href: "/products/automatic/rotatory" },
          { label: "OP - 01", href: "/products/automatic/op-01" },
          { label: "CANTILEVER PARKING", href: "/products/automatic/cantilever-parking" },
        ],
      },
    ],
  },

  { label: "OUR CLIENTS", href: "/clients" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT US", href: "/contact" },
] as const;

export const content = {
  hero: {
    images: [
      "/assets/home/HeroBg1.jpg",
      "/assets/home/HeroBg2.jpg",
      "/assets/home/HeroBg3.jpg",
    ],
    taglines: [
      "Smarter Parking. Smaller Footprint.",
      "Precision Engineering. Seamless Mobility.",
      "Make Every Square Foot Count.",
    ],
    // brand blue (same family as navbar)
    brand: "#174b92",
  },
} as const;
