// Web Vitals tracking and performance monitoring

// Type definition for Metric (avoiding dependency on web-vitals package)
export interface Metric {
  name: string;
  value: number;
  rating?: "good" | "needs-improvement" | "poor";
  delta?: number;
}

/**
 * Send metrics to analytics service
 * Tracks Core Web Vitals: LCP, FID, CLS
 * And additional metrics: TTFB, FCP, INP
 */
export function logWebVital(metric: Metric): void {
  // In production, you would send this to an analytics service
  // For now, we're just logging to console in development
  if (process.env.NODE_ENV === "development") {
    console.log("Web Vital:", {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
    });
  }

  // Example: Send to analytics service
  // fetch('/api/metrics', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(metric),
  // });
}

/**
 * Performance thresholds for target metrics
 */
export const performanceThresholds = {
  // Largest Contentful Paint - should be under 2.5s
  LCP: {
    good: 2500,
    needsImprovement: 4000,
    poor: 4000,
  },
  // First Input Delay - should be under 100ms
  FID: {
    good: 100,
    needsImprovement: 300,
    poor: 300,
  },
  // Cumulative Layout Shift - should be under 0.1
  CLS: {
    good: 0.1,
    needsImprovement: 0.25,
    poor: 0.25,
  },
  // First Contentful Paint - should be under 1.8s
  FCP: {
    good: 1800,
    needsImprovement: 3000,
    poor: 3000,
  },
  // Time to First Byte - should be under 600ms
  TTFB: {
    good: 600,
    needsImprovement: 1200,
    poor: 1200,
  },
  // Interaction to Next Paint - should be under 200ms
  INP: {
    good: 200,
    needsImprovement: 500,
    poor: 500,
  },
};

/**
 * Accessibility score targets
 */
export const accessibilityTargets = {
  lighthouse: {
    accessibility: 90,
    performance: 90,
    bestPractices: 90,
    seo: 90,
  },
  wcag: {
    level: "AA",
    contrastRatio: {
      normal: 4.5,
      large: 3,
    },
  },
};

/**
 * Image optimization configuration
 */
export const imageOptimizationConfig = {
  // Formats to use
  formats: ["image/avif", "image/webp", "image/jpeg"],
  // Maximum image size for different breakpoints
  breakpoints: {
    mobile: 640,
    tablet: 1024,
    desktop: 1920,
  },
  // Quality settings
  quality: {
    default: 75,
    thumbnail: 60,
    hero: 80,
  },
  // Lazy loading threshold
  lazyLoadThreshold: "150px",
};

/**
 * 3G Network performance targets
 */
export const networkTargets = {
  // Target load time on 3G: 3 seconds
  targetLoadTime: 3000,
  // Simulate 3G speeds: 400kb/s download
  threeG: {
    downloadSpeed: 400,
    uploadSpeed: 100,
    latency: 50,
  },
  // Font loading strategy: preload critical fonts
  fontStrategy: "preload",
};

/**
 * SEO Configuration
 */
export const seoConfig = {
  // Meta tags
  titleMaxLength: 60,
  descriptionMaxLength: 160,
  headingHierarchy: ["h1", "h2", "h3", "h4", "h5", "h6"],
  // Structured data
  schemaTypes: [
    "Organization",
    "LocalBusiness",
    "Product",
    "Service",
    "BreadcrumbList",
    "FAQPage",
    "Article",
  ],
  // Sitemap configuration
  sitemap: {
    maxUrls: 50000,
    maxSize: 52428800, // 50MB
  },
};

/**
 * Accessibility ARIA requirements
 */
export const ariaRequirements = {
  interactive: [
    "button",
    "a",
    "input",
    "select",
    "textarea",
  ],
  required: [
    "role",
    "aria-label",
    "aria-describedby",
    "aria-hidden",
  ],
  landmarks: [
    "main",
    "nav",
    "aside",
    "footer",
    "section",
    "article",
  ],
};
