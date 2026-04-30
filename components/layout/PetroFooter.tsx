import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const footerSections = [
  {
    title: "Solutions",
    links: [
      { label: "Service & Maintenance", href: "/#services" },
      { label: "Installation & Construction", href: "/#installation" },
      { label: "Products & Equipment", href: "/#products" },
      { label: "Merchant Services", href: "/#merchant" },
      { label: "Financing", href: "/#financing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Why Petro", href: "/#why" },
      { label: "Field Work", href: "/#gallery" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export function PetroFooter() {
  return (
    <footer className="bg-surface-container-low">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <span
                aria-hidden
                className="grid h-10 w-10 place-items-center rounded-md bg-primary-container text-on-primary font-display text-sm font-bold tracking-tight"
              >
                PS
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-on-surface">
                Petro Solutions
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-on-surface-variant">
              Sales, service, and installation of petroleum equipment — paired
              with merchant services through Orion Merchant Solutions.
              Florida and Louisiana coverage with nationwide shipping.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface">
                  Florida HQ
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-on-surface-variant">
                  <li className="flex gap-2">
                    <MapPin
                      size={14}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-primary-container"
                    />
                    <span>
                      5200 NW 77th Court
                      <br />
                      Doral, FL 33166
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Phone
                      size={14}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-primary-container"
                    />
                    <a
                      href="tel:3058838687"
                      className="hover:text-primary-container"
                    >
                      305-883-8687
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface">
                  Louisiana office
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-on-surface-variant">
                  <li className="flex gap-2">
                    <MapPin
                      size={14}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-primary-container"
                    />
                    <span>
                      26904 James Chapel Road N
                      <br />
                      Holden, LA 70744
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Phone
                      size={14}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-primary-container"
                    />
                    <a
                      href="tel:9855205801"
                      className="hover:text-primary-container"
                    >
                      985-520-5801
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-on-surface-variant">
              <li className="flex gap-3">
                <Phone
                  size={14}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-primary-container"
                />
                <span>
                  Toll free{" "}
                  <a
                    href="tel:18778473876"
                    className="font-medium text-on-surface hover:text-primary-container"
                  >
                    1-877-847-3876
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail
                  size={14}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-primary-container"
                />
                <a
                  href="mailto:info@omsps.com"
                  className="font-medium text-on-surface hover:text-primary-container"
                >
                  info@omsps.com
                </a>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface">
                {section.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-on-surface-variant transition-colors hover:text-primary-container"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="section-divider mt-14 flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-on-surface-variant">
            © {new Date().getFullYear()} Petro Solutions · CBC 1257332 · PCC
            1256882. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="text-xs text-on-surface-variant transition-colors hover:text-primary-container"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-on-surface-variant transition-colors hover:text-primary-container"
            >
              Terms of Service
            </Link>
            <span className="text-xs text-on-surface-variant">
              Serving Florida &amp; Louisiana with nationwide shipping.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
