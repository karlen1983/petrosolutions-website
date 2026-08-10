/**
 * Single source of truth for the canonical production origin and the public
 * business facts that are reused across metadata, sitemap, robots, and JSON-LD.
 *
 * Every value here is drawn from content already published on the site
 * (header, footer, contact, about). Nothing is invented — if a fact is not
 * shown to visitors, it does not belong in this file.
 *
 * To move the site to a different production domain, change SITE_URL only.
 */

export const SITE_URL = "https://petrosolutions.com";

export const SITE_NAME = "Petro Solutions";

export const SITE_TITLE =
  "Petro Solutions | Petroleum Equipment, Service & Installation";

export const SITE_DESCRIPTION =
  "Petro Solutions provides sales, service, and installation of petroleum equipment — fuel storage tanks, dispensers, ATGs, POS, and forecourt systems — paired with merchant services through Orion Merchant Solutions. Serving Florida and Louisiana with nationwide shipping.";

/** Photo used for Open Graph / Twitter cards. Lives in /public/gallery. */
export const SITE_OG_IMAGE = "/gallery/gas_station_exterior_twilight.jpg";

export const CONTACT = {
  tollFree: "+1-877-847-3876",
  email: "info@omsps.com",
} as const;

export const OFFICES = [
  {
    name: "Petro Solutions — Florida Headquarters",
    streetAddress: "5200 NW 77th Court",
    addressLocality: "Doral",
    addressRegion: "FL",
    postalCode: "33166",
    telephone: "+1-305-883-8687",
    faxNumber: "+1-305-883-8862",
  },
  {
    name: "Petro Solutions — Louisiana Office",
    streetAddress: "26904 James Chapel Road N",
    addressLocality: "Holden",
    addressRegion: "LA",
    postalCode: "70744",
    telephone: "+1-985-520-5801",
    faxNumber: "+1-985-520-5815",
  },
] as const;

/** Absolute URL helper — keeps canonical/JSON-LD URLs consistent. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}
