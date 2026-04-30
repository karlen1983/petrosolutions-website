"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Activity,
  Cpu,
  ClipboardList,
  Lightbulb,
  Building2,
  Radio,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Wrench,
    title: "24/7/365 Factory-Authorized Maintenance",
    description:
      "Round-the-clock service on petroleum equipment with technicians trained and authorized by the OEMs we install.",
  },
  {
    icon: ClipboardList,
    title: "Preventative & Fixed-Cost Agreements",
    description:
      "Predictable maintenance schedules and fixed-cost service agreements that protect uptime and budget alike.",
  },
  {
    icon: Activity,
    title: "Environmental Compliance & Monitoring",
    description:
      "Inspections, monitoring system service, and reporting that keep stations ahead of state and federal regulators.",
  },
  {
    icon: Cpu,
    title: "POS & Security Systems",
    description:
      "Point-of-sale support and forecourt security infrastructure — installed, supported, and integrated.",
  },
  {
    icon: Building2,
    title: "Complete C-Store Equipment Repair",
    description:
      "From walk-in coolers to lighting to ancillary store hardware — our techs cover the whole site, not just the pumps.",
  },
  {
    icon: Radio,
    title: "Computer-Based Dispatch",
    description:
      "Radio and computer-dispatched response with guaranteed response times so the right tech arrives with the right parts.",
  },
];

const extras = [
  { icon: Lightbulb, label: "Lighting maintenance" },
  { icon: Activity, label: "ATG service" },
  { icon: Wrench, label: "Dispenser repair" },
  { icon: ClipboardList, label: "Compliance reporting" },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-16">
        <SectionHeader
          eyebrow="Service & Maintenance"
          title="Keep every gallon flowing."
          description="Our technicians are factory-trained and held to the highest standards of professionalism, conduct, and craftsmanship — whether the job is a scheduled preventative visit or a station-down emergency."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-outline-variant bg-outline-variant sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
                ease: [0.21, 0.45, 0.32, 0.94],
              }}
              className="group relative bg-surface-container-lowest p-8 transition-colors duration-300 hover:bg-surface-container-low"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary-container/10 text-primary-container">
                <service.icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-on-surface">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                {service.description}
              </p>
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="absolute right-7 top-7 text-outline-variant transition-colors group-hover:text-primary-container"
              />
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
            Also covered
          </p>
          {extras.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 text-sm text-on-surface-variant"
            >
              <Icon size={14} strokeWidth={2} className="text-primary-container" />
              {label}
            </span>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-on-surface-variant">
            Need a custom maintenance plan? We build agreements tailored to
            your dispenser count, throughput, and number of sites.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary-container hover:text-primary"
          >
            Talk to a service manager
            <ArrowUpRight size={15} strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
