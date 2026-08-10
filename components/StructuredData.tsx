import {
  CONTACT,
  OFFICES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";

/**
 * Schema.org JSON-LD for the homepage, emitted as a single @graph so the
 * Organization / WebSite / LocalBusiness nodes cross-reference each other
 * instead of being repeated.
 *
 * Every value below is stated somewhere in the visible page content
 * (header, hero, services, products, about, contact, footer). No ratings,
 * reviews, prices, awards, or credentials beyond the license numbers already
 * printed on the site are asserted.
 */

const SERVICES = [
  {
    name: "Petroleum Equipment Service & Maintenance",
    description:
      "24/7/365 factory-authorized maintenance, preventative and fixed-cost service agreements, environmental compliance and monitoring, POS and security system support, and computer-based dispatch with guaranteed response times.",
    url: absoluteUrl("/#services"),
  },
  {
    name: "Installation & Construction",
    description:
      "Turnkey petroleum installations covering pre-construction planning, demolition and removal of legacy systems, aboveground and underground tank and dispenser buildout, commissioning with client training, and a two-week post-install inspection.",
    url: absoluteUrl("/#installation"),
  },
  {
    name: "Petroleum Equipment Sales & Distribution",
    description:
      "Authorized distribution of fuel dispensers, storage tanks and piping, automatic tank gauging and leak detection, POS and forecourt controllers, security systems, and c-store equipment from Wayne, OPW, Verifone, Veeder-Root, Bennett, and Gilbarco.",
    url: absoluteUrl("/#products"),
  },
  {
    name: "Merchant Services & Payment Processing",
    description:
      "Credit card processing, EMV-ready pay-at-the-pump, and retail, restaurant, and supermarket POS including Clover technology, delivered through Orion Merchant Solutions with 24/7 merchant support.",
    url: absoluteUrl("/#merchant"),
  },
  {
    name: "Equipment Financing",
    description:
      "Financing for dispensers, tanks, ATGs, POS systems, and full forecourt builds, started with a single OMSPS credit application and scoped alongside the installation project.",
    url: absoluteUrl("/#financing"),
  },
];

const AREA_SERVED = [
  { "@type": "State", name: "Florida" },
  { "@type": "State", name: "Louisiana" },
];

export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        email: CONTACT.email,
        telephone: CONTACT.tollFree,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/petro-solutions/petroLogo.png"),
        },
        image: absoluteUrl(SITE_OG_IMAGE),
        // Printed in the site footer and About section.
        parentOrganization: {
          "@type": "Organization",
          name: "Orion Merchant Solutions",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: OFFICES[0].streetAddress,
          addressLocality: OFFICES[0].addressLocality,
          addressRegion: OFFICES[0].addressRegion,
          postalCode: OFFICES[0].postalCode,
          addressCountry: "US",
        },
        areaServed: AREA_SERVED,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: CONTACT.tollFree,
            email: CONTACT.email,
            contactType: "customer service",
            areaServed: "US",
            availableLanguage: "English",
          },
          {
            "@type": "ContactPoint",
            telephone: CONTACT.tollFree,
            contactType: "emergency",
            // "24/7/365 emergency dispatch available via the toll-free line."
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          },
        ],
        // License numbers as displayed in the hero, About, and footer.
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "license",
            name: "Florida Certified Building Contractor CBC 1257332",
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "license",
            name: "Florida Pollutant Storage Contractor PCC 1256882",
          },
        ],
        location: OFFICES.map((office) => ({
          "@id": `${SITE_URL}/#office-${office.addressRegion.toLowerCase()}`,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Petroleum equipment, service, and merchant solutions",
          itemListElement: SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
              url: service.url,
              serviceType: service.name,
              areaServed: AREA_SERVED,
              provider: { "@id": `${SITE_URL}/#organization` },
            },
          })),
        },
      },

      ...OFFICES.map((office) => ({
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#office-${office.addressRegion.toLowerCase()}`,
        name: office.name,
        url: SITE_URL,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        telephone: office.telephone,
        faxNumber: office.faxNumber,
        email: CONTACT.email,
        image: absoluteUrl(SITE_OG_IMAGE),
        address: {
          "@type": "PostalAddress",
          streetAddress: office.streetAddress,
          addressLocality: office.addressLocality,
          addressRegion: office.addressRegion,
          postalCode: office.postalCode,
          addressCountry: "US",
        },
        areaServed: AREA_SERVED,
        // "Hours — Mon–Fri 9:00am – 5:00pm" from the contact section.
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "17:00",
        },
      })),

      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },

      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        primaryImageOfPage: absoluteUrl(SITE_OG_IMAGE),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Static, developer-authored object — no user input is interpolated.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
