import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * Matches the "Last updated" date rendered on /privacy and /terms.
 * Keep in sync when those pages change.
 */
const LEGAL_LAST_MODIFIED = new Date("2026-04-30T00:00:00.000Z");

/**
 * Only canonical, indexable page URLs belong here.
 *
 * The homepage section anchors (#services, #products, #contact, ...) are
 * intentionally excluded: a fragment is not a distinct URL, so listing them
 * submits the same page eight times. Those sections are still discoverable via
 * the in-page navigation and /llms.txt.
 *
 * /api/* is excluded — it is disallowed in robots.ts and is not public content.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/terms"),
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
