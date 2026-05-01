"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const facts = [
  {
    icon: MapPin,
    label: "Florida headquarters",
    value: "Doral, Florida",
    detail: "5200 NW 77th Court, Doral, FL 33166",
  },
  {
    icon: MapPin,
    label: "Louisiana office",
    value: "Holden, Louisiana",
    detail: "26904 James Chapel Road N, Holden, LA 70744",
  },
  {
    icon: Building2,
    label: "Coverage",
    value: "Florida & Louisiana, with nationwide shipping",
    detail:
      "Service crews dispatched from Miami-Dade and Holden. Equipment shipped nationwide.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-surface-container-low py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="About"
              title="A petroleum partner, not a vendor."
              description="Petro Solutions and Orion Merchant Solutions provide a multi-dimensional service experience to customers in the gasoline retail industry — quality sales, service, and installation of petroleum equipment, paired with credit card processing under one roof."
            />

            <figure className="mt-10 rounded-lg border-l-2 border-primary-container bg-surface-container-lowest p-6">
              <Quote
                size={20}
                strokeWidth={2}
                className="text-primary-container"
              />
              <blockquote className="mt-3 font-display text-base leading-relaxed text-on-surface">
                Our mission is to provide the absolute best equipment and
                installation of petroleum products, along with efficient
                service while maintaining the highest ethical and safety
                standards in the industry.
              </blockquote>
              <figcaption className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                Petro Solutions, Mission Statement
              </figcaption>
            </figure>

            <div className="mt-8 grid grid-cols-1 gap-3 text-sm text-on-surface-variant sm:grid-cols-2">
              {[
                "Maintain a safe environment for everyone",
                "Quality of work that is second to none",
                "Cost-conscious value tailored to each client",
                "Information that is otherwise difficult to access",
                "Unparalleled experience applied for the client",
                "Drug-free workplace · HAZWOPER trained",
              ].map((value) => (
                <p key={value} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-container" />
                  {value}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:col-span-6">
            <motion.figure
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.21, 0.45, 0.32, 0.94] }}
              className="relative overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/gallery/08-petro-solutions-team-one-vendor.jpg"
                  alt="Petro Solutions team — one vendor for equipment, install, and payments"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/15 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-5 py-4 text-on-primary">
                <span className="text-sm font-semibold tracking-tight">
                  One team. One vendor.
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-on-primary-container">
                  Equipment · Install · Payments
                </span>
              </figcaption>
            </motion.figure>

            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.21, 0.45, 0.32, 0.94],
                }}
                className="flex gap-5 rounded-lg border border-outline-variant bg-surface-container-lowest p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary-container/10 text-primary-container">
                  <fact.icon size={20} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
                    {fact.label}
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-on-surface">
                    {fact.value}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">
                    {fact.detail}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Licenses card */}
            <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
                Licenses
              </p>
              <p className="mt-2 font-display text-base font-bold text-on-surface">
                CBC 1257332 &middot; PCC 1256882
              </p>
              <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">
                Florida Certified Building Contractor and Pollutant Storage
                Contractor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
