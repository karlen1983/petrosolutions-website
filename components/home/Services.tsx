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
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-16">
        <SectionHeader
          titleId="services-title"
          eyebrow="Service & Maintenance"
          title="Keep every gallon flowing."
          description="Our technicians are factory-trained and held to the highest standards of professionalism, conduct, and craftsmanship — whether the job is a scheduled preventative visit or a station-down emergency."
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
              src="/gallery/fuel_dispenser_service_technicians.jpg"
              alt="Petro Solutions technicians servicing a fuel pump"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/30 to-transparent" />
          </div>
          <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center px-6 py-6 text-on-primary sm:px-10">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-surface-container-lowest/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-on-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-chartreuse" />
              Factory-authorized techs
            </span>
            <p className="mt-3 font-display text-lg font-bold leading-tight tracking-tight sm:text-2xl">
              Trained on the equipment we install — on call when you need them.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-outline-variant bg-outline-variant sm:grid-cols-2 lg:grid-cols-3">
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

        {/* Featured capability callouts */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            {
              src: "/gallery/technician_monitoring_fuel_system_tablet.jpg",
              eyebrow: "Compliance · ATG",
              title: "Environmental monitoring you can hand to a regulator.",
              description:
                "ATG service, leak detection, and compliance reporting that keeps stations ahead of state and federal inspections.",
            },
            {
              src: "/gallery/operations_monitoring_control_room.jpg",
              eyebrow: "Dispatch · 24/7/365",
              title: "Computer-based dispatch with guaranteed response times.",
              description:
                "Radio- and computer-dispatched response routes the right tech with the right parts to your forecourt fast.",
            },
          ].map((item, i) => (
            <motion.article
              key={item.eyebrow}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.21, 0.45, 0.32, 0.94],
              }}
              className="group relative overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-surface-container-lowest/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-container shadow-[0_4px_16px_rgba(31,75,90,0.18)] backdrop-blur">
                  {item.eyebrow}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold tracking-tight text-on-surface">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              </div>
            </motion.article>
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
