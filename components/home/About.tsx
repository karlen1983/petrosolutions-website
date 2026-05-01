"use client";

import { motion } from "framer-motion";
import {
  Award,
  Building2,
  Globe2,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const values = [
  "Maintain a safe environment for everyone",
  "Quality of work that is second to none",
  "Cost-conscious value tailored to each client",
  "Information that is otherwise difficult to access",
  "Unparalleled experience applied for the client",
  "Drug-free workplace · HAZWOPER trained",
];

const credentials = [
  {
    icon: Award,
    label: "OEM-Authorized",
    value: "6+ major brands",
    detail: "Wayne · OPW · Verifone · Veeder-Root · Bennett · Gilbarco",
  },
  {
    icon: ShieldCheck,
    label: "Fully Certified",
    value: "Field-ready crews",
    detail: "HAZWOPER trained · drug-free workplace · general liability insured",
  },
  {
    icon: Globe2,
    label: "Two-State Coverage",
    value: "FL & LA",
    detail: "Service crews from Doral and Holden — equipment ships nationwide.",
  },
];

const offices = [
  {
    region: "Florida headquarters",
    city: "Doral, Florida",
    address: "5200 NW 77th Court, Doral, FL 33166",
    phone: "305-883-8687",
    tel: "3058838687",
  },
  {
    region: "Louisiana office",
    city: "Holden, Louisiana",
    address: "26904 James Chapel Road N, Holden, LA 70744",
    phone: "985-520-5801",
    tel: "9855205801",
  },
];

export function About() {
  return (
    <section id="about" className="bg-surface-container-low py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left column */}
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

            <div className="mt-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
                What we stand for
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-on-surface-variant sm:grid-cols-2">
                {values.map((value) => (
                  <p key={value} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-container" />
                    {value}
                  </p>
                ))}
              </div>
            </div>

            {/* Credentials strip — adds visual weight to balance the right column */}
            <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-outline-variant bg-outline-variant sm:grid-cols-3">
              {credentials.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.07,
                    ease: [0.21, 0.45, 0.32, 0.94],
                  }}
                  className="flex flex-col gap-3 bg-surface-container-lowest p-5"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-md bg-primary-container/10 text-primary-container">
                    <item.icon size={18} strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-container">
                      {item.label}
                    </p>
                    <p className="mt-1 font-display text-sm font-bold tracking-tight text-on-surface">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-on-surface-variant">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column */}
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
                  src="/gallery/petro_solutions_team_group.jpg"
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

            {/* Combined Locations card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.21, 0.45, 0.32, 0.94] }}
              className="overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest"
            >
              <div className="border-b border-outline-variant px-6 py-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
                  Locations
                </p>
                <p className="mt-1 font-display text-base font-bold text-on-surface">
                  Two regional offices, nationwide reach.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-px bg-outline-variant sm:grid-cols-2">
                {offices.map((office) => (
                  <div
                    key={office.region}
                    className="flex gap-4 bg-surface-container-lowest p-6"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary-container/10 text-primary-container">
                      <MapPin size={18} strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
                        {office.region}
                      </p>
                      <p className="mt-1 font-display text-sm font-bold text-on-surface">
                        {office.city}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-on-surface-variant">
                        {office.address}
                      </p>
                      <a
                        href={`tel:${office.tel}`}
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-on-surface transition-colors hover:text-primary-container"
                      >
                        <Phone size={12} strokeWidth={2.2} />
                        {office.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Coverage + Licenses combined card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.21, 0.45, 0.32, 0.94] }}
              className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-outline-variant bg-outline-variant sm:grid-cols-2"
            >
              <div className="flex gap-4 bg-surface-container-lowest p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary-container/10 text-primary-container">
                  <Building2 size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
                    Coverage
                  </p>
                  <p className="mt-1 font-display text-sm font-bold text-on-surface">
                    Florida &amp; Louisiana
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-on-surface-variant">
                    Crews dispatched from Miami-Dade and Holden. Equipment
                    ships nationwide.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-surface-container-lowest p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary-container/10 text-primary-container">
                  <ShieldCheck size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
                    Licenses
                  </p>
                  <p className="mt-1 font-display text-sm font-bold text-on-surface">
                    CBC 1257332 · PCC 1256882
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-on-surface-variant">
                    FL Certified Building Contractor &amp; Pollutant Storage
                    Contractor.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
