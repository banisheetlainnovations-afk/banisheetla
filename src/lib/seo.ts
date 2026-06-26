// Centralized SEO constants so every route builds absolute URLs and
// structured data consistently instead of repeating values everywhere.

export const SITE_URL = "https://banisheetla.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/bsi-logo.png`;

/** Build an absolute URL from a site-relative path, e.g. absUrl("/about") */
export function absUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

/**
 * Site-wide Organization schema (JSON-LD). Rendered once on every page via
 * the root route so Google can build a Knowledge Panel / business profile.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Banisheetla Innovations Private Limited",
  alternateName: "BSI",
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  description:
    "Banisheetla Innovations Private Limited delivers IT consulting, digital transformation, and construction services for enterprises, governments, and SMBs across India.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kunkuri Khurd, Mainpat",
    addressLocality: "Surguja",
    addressRegion: "Chhattisgarh",
    postalCode: "497114",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9301103436",
    contactType: "customer service",
    email: "info@banisheetla.com",
    areaServed: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/banisheetla-innovations-private-limited-969368411",
    "https://www.instagram.com/bs.innovationsofficial",
  ],
};
