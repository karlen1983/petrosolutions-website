"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#installation", label: "Install & Build" },
  { href: "/#products", label: "Products" },
  { href: "/#merchant", label: "Merchant" },
  { href: "/#financing", label: "Financing" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function PetroHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/40 bg-surface/85 backdrop-blur supports-[backdrop-filter]:bg-surface/70">
      <nav className="mx-auto flex max-w-[1440px] items-center gap-6 px-4 py-3.5 md:px-6 lg:px-10 xl:px-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center whitespace-nowrap"
          aria-label="Petro Solutions — home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/petro-solutions/petroLogo.png"
            alt="Petro Solutions, a division of Orion Merchant Solutions"
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        {/* Desktop links — push to the right */}
        <ul className="ml-auto hidden items-center gap-5 xl:flex 2xl:gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-on-surface-variant transition-colors hover:text-primary-container"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="ml-auto hidden items-center gap-2 xl:ml-6 xl:flex">
          <a
            href="tel:18778473876"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-semibold tracking-wide text-on-surface transition-colors hover:text-primary-container"
          >
            <Phone size={14} strokeWidth={2.2} />
            (877) 847-3876
          </a>
          <Link
            href="/#contact"
            className="whitespace-nowrap rounded-md bg-primary-container px-4 py-2.5 text-sm font-semibold tracking-wide text-on-primary transition-all duration-200 hover:bg-primary hover:shadow-[0_8px_24px_rgba(31,75,90,0.25)] active:scale-[0.98]"
          >
            Request Service
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="ml-auto rounded-md p-2 text-on-surface xl:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-outline-variant/40 bg-surface xl:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 pb-6 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-3 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary-container"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3 flex flex-col gap-2">
                <a
                  href="tel:18778473876"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-outline-variant px-4 py-3 text-sm font-semibold text-on-surface"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone size={16} strokeWidth={2.2} />
                  1-877-847-3876
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary-container px-4 py-3 text-sm font-semibold tracking-wide text-on-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  Request Service
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
