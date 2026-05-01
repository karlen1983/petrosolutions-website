"use client";

import { motion } from "framer-motion";
import {
  Fuel,
  Database,
  Monitor,
  ShieldAlert,
  CircuitBoard,
  Container,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Authorized brands per petro-solutions.com/products
const brands = [
  "Wayne",
  "OPW",
  "Verifone",
  "Veeder-Root",
  "Bennett",
  "Gilbarco",
];

const categories = [
  {
    icon: Fuel,
    title: "Fuel Dispensers",
    description:
      "Retail, commercial, and high-flow dispensers — sold, installed, and serviced in-house.",
    items: ["Wayne", "Gilbarco", "Bennett"],
  },
  {
    icon: Container,
    title: "Storage Tanks & Piping",
    description:
      "Aboveground and underground systems with full piping, sumps, and accessory packages.",
    items: ["UST & AST", "Fiberglass & steel", "Containment sumps"],
  },
  {
    icon: Database,
    title: "ATG & Leak Detection",
    description:
      "Automatic tank gauging and environmental monitoring tied directly to compliance reporting.",
    items: ["Veeder-Root TLS", "OPW", "Statistical leak detection"],
  },
  {
    icon: Monitor,
    title: "POS & Forecourt Controllers",
    description:
      "PCI-ready point-of-sale and payment systems integrated with the dispensers we install.",
    items: ["Verifone", "EMV pin pads", "Forecourt controllers"],
  },
  {
    icon: ShieldAlert,
    title: "Security Systems",
    description:
      "DVR/NVR camera systems and alarms designed for petroleum retail environments.",
    items: ["HD surveillance", "Remote viewing", "Forecourt audio"],
  },
  {
    icon: CircuitBoard,
    title: "C-Store & Ancillary",
    description:
      "Ancillary store equipment — repaired, replaced, and supported alongside the forecourt.",
    items: ["Walk-in coolers", "Air & water units", "Price signs", "Lighting"],
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-16">
        <SectionHeader
          eyebrow="Products & Equipment"
          title="The hardware behind every fueling site."
          description="Petro Solutions is an authorized distributor for the brands the petroleum retail industry trusts. We sell, install, and provide in-house repair on every system we ship."
        />

        {/* Section banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.45, 0.32, 0.94] }}
          className="relative mt-12 overflow-hidden rounded-lg border border-outline-variant bg-surface-container"
        >
          <div className="relative aspect-[21/9] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gallery/fuel_equipment_showroom_systems.jpg"
              alt="Petroleum equipment and forecourt hardware"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/30 to-transparent" />
          </div>
          <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center px-6 py-6 text-on-primary sm:px-10">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-surface-container-lowest/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-on-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-chartreuse" />
              Authorized distributor
            </span>
            <p className="mt-3 font-display text-lg font-bold leading-tight tracking-tight sm:text-2xl">
              Wayne, OPW, Veeder-Root, Verifone — sold, installed, and serviced in-house.
            </p>
          </div>
        </motion.div>

        {/* Authorized brands strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.21, 0.45, 0.32, 0.94] }}
          className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3 rounded-lg border border-outline-variant bg-surface-container-lowest p-5"
        >
          <p className="mr-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
            Authorized for
          </p>
          {brands.map((brand, i) => (
            <span key={brand} className="inline-flex items-center gap-3">
              {i > 0 && (
                <span
                  aria-hidden
                  className="h-1 w-1 rounded-full bg-outline-variant"
                />
              )}
              <span className="font-display text-base font-semibold tracking-tight text-on-surface transition-colors duration-200 hover:text-primary-container">
                {brand}
              </span>
            </span>
          ))}
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.article
              key={cat.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.07,
                ease: [0.21, 0.45, 0.32, 0.94],
              }}
              className="group flex flex-col rounded-lg border border-outline-variant bg-surface-container-lowest p-7 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(31,75,90,0.08)]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary-container text-on-primary">
                  <cat.icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight text-on-surface">
                  {cat.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                {cat.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-outline-variant px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-on-surface-variant"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
