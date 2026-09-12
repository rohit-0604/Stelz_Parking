/**
 * Google Analytics 4 Event Tracking
 *
 * Usage:
 * import { trackEvent } from '@/lib/analytics';
 *
 * trackEvent('download', {
 *   file_name: 'brochure.pdf',
 *   file_size: '2.3MB',
 * });
 */

type AnalyticsValue = string | number | boolean | null | undefined | AnalyticsValue[] | { [key: string]: AnalyticsValue };
type EventData = { [key: string]: AnalyticsValue };

/**
 * Track custom events in Google Analytics 4
 * @param eventName - Name of the event (e.g., 'download', 'form_submit')
 * @param eventData - Additional event data (optional)
 */
export const trackEvent = (eventName: string, eventData?: EventData) => {
  if (typeof window !== "undefined" && window.gtag) {
    if (eventData) {
      window.gtag("event", eventName, eventData);
    } else {
      window.gtag("event", eventName);
    }
  }
};

/**
 * Track page view
 * @param pagePath - The page path
 * @param pageTitle - The page title
 */
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_title: pageTitle,
      page_location: window.location.href,
      language: document.documentElement.lang,
    });
  }
};

/**
 * Track form submission
 * @param formName - Name of the form
 * @param formFields - Number of fields or field names
 */
export const trackFormSubmit = (
  formName: string,
  formFields?: number | string[]
) => {
  trackEvent("form_submit", {
    form_name: formName,
    form_fields: Array.isArray(formFields) ? formFields.length : formFields,
  });
};

/**
 * Track file download
 * @param fileName - Name of the file
 * @param fileType - Type of file (e.g., 'pdf', 'doc')
 * @param fileSize - Size of file in MB
 */
export const trackFileDownload = (
  fileName: string,
  fileType: string,
  fileSize?: string
) => {
  trackEvent("file_download", {
    file_name: fileName,
    file_type: fileType,
    file_size: fileSize,
  });
};

/**
 * Track product view
 * @param productId - Product ID
 * @param productName - Product name
 * @param productCategory - Product category
 * @param productValue - Product value/price
 */
export const trackProductView = (
  productId: string,
  productName: string,
  productCategory: string,
  productValue?: number
) => {
  trackEvent("view_item", {
    items: [
      {
        item_id: productId,
        item_name: productName,
        item_category: productCategory,
        value: productValue,
      },
    ],
  });
};

/**
 * Track link click
 * @param linkText - Text of the link
 * @param linkUrl - URL of the link
 * @param linkCategory - Category of the link
 */
export const trackLinkClick = (
  linkText: string,
  linkUrl: string,
  linkCategory: string
) => {
  trackEvent("link_click", {
    link_text: linkText,
    link_url: linkUrl,
    link_category: linkCategory,
  });
};

/**
 * Track video play
 * @param videoTitle - Title of the video
 * @param videoUrl - URL of the video
 * @param videoDuration - Duration in seconds
 */
export const trackVideoPlay = (
  videoTitle: string,
  videoUrl: string,
  videoDuration?: number
) => {
  trackEvent("video_play", {
    video_title: videoTitle,
    video_url: videoUrl,
    video_duration: videoDuration,
  });
};

/**
 * Track scroll depth
 * @param scrollPercentage - Percentage of page scrolled (0-100)
 */
export const trackScrollDepth = (scrollPercentage: number) => {
  trackEvent("scroll_depth", {
    scroll_percentage: scrollPercentage,
  });
};

/**
 * Track contact inquiry
 * @param inquiryType - Type of inquiry
 * @param source - Source of inquiry
 */
export const trackContactInquiry = (inquiryType: string, source: string) => {
  trackEvent("contact_inquiry", {
    inquiry_type: inquiryType,
    inquiry_source: source,
  });
};

/**
 * Track search
 * @param searchTerm - Search term used
 * @param searchResults - Number of results
 */
export const trackSearch = (searchTerm: string, searchResults?: number) => {
  trackEvent("search", {
    search_term: searchTerm,
    search_results: searchResults,
  });
};

/**
 * Extended window interface for TypeScript
 */
declare global {
  interface Window {
    gtag?: (
      command: string,
      ...args: (string | EventData)[]
    ) => void;
    dataLayer?: unknown[];
  }
}
