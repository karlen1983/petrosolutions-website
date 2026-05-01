"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  HardHat,
  Drill,
  Search,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const phases = [
  {
    icon: ClipboardCheck,
    phase: "Phase 01",
    title: "Pre-construction meeting",
    description:
      "Scope, schedule, equipment, and subcontractor coordination reviewed with every party before any ground breaks.",
  },
  {
    icon: HardHat,
    phase: "Phase 02",
    title: "Turnkey construction & install",
    description:
      "Demo and removal of legacy systems, then aboveground or underground tank, dispenser, sumps, and forecourt buildout.",
  },
  {
    icon: Drill,
    phase: "Phase 03",
    title: "Commissioning & client training",
    description:
      "Calibration, leak testing, ATG setup, POS integration, and operator training before the site goes live.",
  },
  {
    icon: Search,
    phase: "Phase 04",
    title: "Two-week post-install inspection",
    description:
      "We come back two weeks after handoff to verify operation, retrain staff if needed, and address any field issues.",
  },
];

const credentials = [
  "Complete turnkey installations",
  "Aboveground & underground tank systems",
  "Demolition & removal of legacy systems",
  "Certified installer for major OEMs",
  "HAZWOPER-trained crews",
  "Drug-free workplace certified",
  "Comprehensive general liability insurance",
  "FL Licensed Contractor (CBC 1257332)",
];

export function Installation() {
  return (
    <section
      id="installation"
      className="bg-surface-container-low py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Installation & Construction"
              title="Greenfield builds. Major retrofits. Done right."
              description="Installation supervisors specialized in fluid-handling equipment lead every project. Crews are HAZWOPER-trained, drug-free certified, and backed by comprehensive general liability insurance — so you can hand off the build with confidence."
            />

            <motion.figure
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.21, 0.45, 0.32, 0.94] }}
              className="relative mt-10 overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/gallery/04-installation-construction-underground-tank.jpg"
                  alt="Underground storage tank installation and construction"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-5 py-4 text-on-primary">
                <span className="text-sm font-semibold tracking-tight">
                  Underground tank install
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-on-primary-container">
                  Turnkey · HAZWOPER
                </span>
              </figcaption>
            </motion.figure>

            <ul className="mt-8 grid grid-cols-1 gap-3 text-sm text-on-surface-variant sm:grid-cols-2">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0 text-primary-container"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Process timeline */}
          <ol className="relative lg:col-span-7">
            <div
              aria-hidden
              className="absolute left-[18px] top-2 hidden h-[calc(100%-1rem)] w-px bg-outline-variant lg:block"
            />
            {phases.map((phase, i) => (
              <motion.li
                key={phase.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.21, 0.45, 0.32, 0.94],
                }}
                className="relative mb-6 flex gap-5 last:mb-0 lg:pl-0"
              >
                <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-md border border-outline-variant bg-surface-container-lowest text-primary-container">
                  <phase.icon size={18} strokeWidth={1.8} />
                </span>
                <div className="flex-1 rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
                    {phase.phase}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-on-surface">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                    {phase.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
