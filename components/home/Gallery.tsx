"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const projects = [
  {
    src: "/petro-solutions/018.jpg",
    alt: "Petro Solutions night work at a Conoco station forecourt",
    caption: "Forecourt overhaul",
    location: "Conoco · After hours",
  },
  {
    src: "/petro-solutions/001.jpg",
    alt: "Petro Solutions crew installing an underground storage tank",
    caption: "UST excavation & install",
    location: "South Florida",
  },
  {
    src: "/petro-solutions/017.jpg",
    alt: "New tank pad with risers and monitoring stick gauges",
    caption: "Tank pad commissioning",
    location: "New build site",
  },
  {
    src: "/petro-solutions/007.jpg",
    alt: "Steel canopy structure being raised at a fueling station",
    caption: "Canopy steel raise",
    location: "Greenfield build",
  },
  {
    src: "/petro-solutions/005.jpg",
    alt: "Excavation pit at a station undergoing demolition and rebuild",
    caption: "Site demo & excavation",
    location: "Retrofit project",
  },
  {
    src: "/petro-solutions/002.jpg",
    alt: "Forecourt service work with sumps exposed and dewatering pumps",
    caption: "Sumps & forecourt service",
    location: "Active station",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-16">
        <SectionHeader
          eyebrow="Field Work"
          title="A look at the projects we keep online."
          description="Stations, retrofits, and equipment installs delivered across Florida and Louisiana — every photo is one of ours."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.figure
              key={project.caption}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: (i % 3) * 0.08,
                ease: [0.21, 0.45, 0.32, 0.94],
              }}
              className="group relative overflow-hidden rounded-lg border border-outline-variant bg-surface-container"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.src}
                  alt={project.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4 text-on-primary">
                <span className="text-sm font-semibold tracking-tight">
                  {project.caption}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-on-primary-container">
                  {project.location}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
