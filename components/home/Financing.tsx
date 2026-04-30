"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Banknote,
  FileSignature,
  Wrench,
  Download,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const CREDIT_APPLICATION_URL =
  "/petro-solutions/OMSPS_Credit_Application.pdf";

const points = [
  {
    icon: Banknote,
    title: "Financing for the equipment we install",
    description:
      "Dispensers, tanks, ATGs, POS systems, and full forecourt builds — financed alongside the install instead of separately.",
  },
  {
    icon: FileSignature,
    title: "Start with one application",
    description:
      "A single OMSPS credit application kicks off the conversation. One document, one point of contact.",
  },
  {
    icon: Wrench,
    title: "Paired with the project, not bolted on",
    description:
      "Because Petro Solutions handles the equipment, install, and service, the financing conversation stays anchored to the actual project scope.",
  },
];

export function Financing() {
  return (
    <section id="financing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-16">
        <SectionHeader
          eyebrow="Financing"
          title="Equipment financing, paired with the install."
          description="Spread the cost of new petroleum equipment and retrofits across terms that match your station. Start with our credit application — we'll follow up to scope the right structure alongside the project."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.21, 0.45, 0.32, 0.94],
              }}
              className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary-container/40 text-on-secondary-container">
                <point.icon size={20} strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 font-display text-base font-bold tracking-tight text-on-surface">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.21, 0.45, 0.32, 0.94] }}
          className="mt-14 grid items-center gap-6 rounded-lg border border-outline-variant bg-surface-container-lowest p-8 sm:p-10 md:grid-cols-12"
        >
          <div className="md:col-span-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
              OMSPS Credit Application
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-on-surface">
              Download the credit application.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
              Complete and return the application, and we&apos;ll follow up
              with next steps. Prefer to talk first? The team is happy to walk
              through it alongside the equipment and install.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
            <a
              href={CREDIT_APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-container px-5 py-3 text-sm font-semibold tracking-wide text-on-primary transition-all duration-200 hover:bg-primary hover:shadow-[0_8px_24px_rgba(31,75,90,0.25)] active:scale-[0.98]"
            >
              <Download size={16} strokeWidth={2.2} />
              Download application (PDF)
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-container hover:text-primary"
            >
              Or talk to us first
              <ArrowRight size={14} strokeWidth={2.2} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
