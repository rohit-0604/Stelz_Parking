/**
 * Accessibility utilities and helpers
 * Ensures WCAG 2.1 AA compliance
 */

/**
 * Check color contrast ratio (WCAG AA)
 * Normal text: 4.5:1, Large text: 3:1
 */
export function getContrastRatio(hex1: string, hex2: string): number {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);

  const l1 = getLuminance(rgb1);
  const l2 = getLuminance(rgb2);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [0, 0, 0];
}

function getLuminance([r, g, b]: [number, number, number]): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Verify WCAG AA compliance for text
 */
export function isWCAGAACompliant(
  foreground: string,
  background: string,
  isLargeText: boolean = false
): boolean {
  const contrast = getContrastRatio(foreground, background);
  const minContrast = isLargeText ? 3 : 4.5;
  return contrast >= minContrast;
}

/**
 * Recommended focus styles for accessibility
 */
export const focusStyles = {
  outline: "2px solid #0C41AA",
  outlineOffset: "2px",
  borderRadius: "2px",
};

/**
 * ARIA label for icon buttons (should always be provided)
 */
export function getIconButtonAriaLabel(icon: string, action: string): string {
  const iconLabels: Record<string, string> = {
    menu: "Open menu",
    close: "Close menu",
    search: "Search",
    download: "Download",
    share: "Share",
    favorite: "Add to favorites",
    cart: "Shopping cart",
    home: "Home",
    next: "Next",
    previous: "Previous",
    chevron: "More options",
  };

  return iconLabels[icon] || action || "Button";
}

/**
 * Generate accessible button variations
 */
export function getAccessibleButtonProps(variant: "primary" | "secondary" | "ghost") {
  const props = {
    primary: {
      className:
        "px-6 py-3 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 active:bg-blue-800 transition-colors",
      role: "button",
      tabIndex: 0,
    },
    secondary: {
      className:
        "px-6 py-3 bg-gray-200 text-gray-900 rounded font-medium hover:bg-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 active:bg-gray-400 transition-colors",
      role: "button",
      tabIndex: 0,
    },
    ghost: {
      className:
        "px-6 py-3 text-gray-900 rounded font-medium hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300 active:bg-gray-200 transition-colors",
      role: "button",
      tabIndex: 0,
    },
  };

  return props[variant];
}

/**
 * Skip link for keyboard navigation
 * Should be the first focusable element on the page
 */
export const skipLinkContent = {
  href: "#main-content",
  text: "Skip to main content",
  className:
    "absolute top-0 left-0 -translate-y-full bg-black text-white px-4 py-2 focus:translate-y-0 z-50",
};

/**
 * Heading hierarchy validation
 */
export function validateHeadingHierarchy(headings: HTMLHeadingElement[]): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  let previousLevel = 0;

  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName[1]);

    if (index === 0 && level !== 1) {
      errors.push("First heading should be h1");
    }

    if (level - previousLevel > 1) {
      errors.push(
        `Heading hierarchy skipped from h${previousLevel} to h${level} at "${heading.textContent}"`
      );
    }

    previousLevel = level;
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Alt text validation
 */
export function validateImageAltText(images: HTMLImageElement[]): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  images.forEach((img) => {
    if (!img.alt) {
      errors.push(`Image missing alt text: ${img.src}`);
    }

    if (img.alt.toLowerCase() === "image" || img.alt.toLowerCase() === "photo") {
      errors.push(`Generic alt text: "${img.alt}" for ${img.src}`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Form label validation
 */
export function validateFormLabels(inputs: HTMLInputElement[]): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  inputs.forEach((input) => {
    const label = document.querySelector(`label[for="${input.id}"]`);
    const hasAriaLabel = input.getAttribute("aria-label");

    if (!label && !hasAriaLabel && !input.type.includes("hidden")) {
      errors.push(`Input ${input.id || input.name} missing associated label`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Ensure keyboard navigation is possible
 */
export const keyboardNavigationRules = {
  // Tab order should follow visual flow
  tabIndex: {
    min: 0,
    max: 32767,
  },
  // Keyboard shortcuts that should be available
  shortcuts: {
    skip: { key: "s", target: "#main-content" },
    search: { key: "/" },
    menu: { key: "m" },
  },
};

/**
 * Screen reader announcements (ARIA live regions)
 */
export function createLiveRegion(
  message: string,
  politeness: "polite" | "assertive" = "polite"
): HTMLElement {
  const region = document.createElement("div");
  region.setAttribute("aria-live", politeness);
  region.setAttribute("aria-atomic", "true");
  region.className = "sr-only"; // Visually hidden
  region.textContent = message;
  document.body.appendChild(region);

  // Remove after 1 second to prevent clutter
  setTimeout(() => region.remove(), 1000);

  return region;
}

/**
 * Reduced motion support
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * High contrast mode detection
 */
export function prefersHighContrast(): boolean {
  return window.matchMedia("(prefers-contrast: more)").matches;
}

/**
 * Dark mode detection
 */
export function prefersDarkMode(): boolean {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
