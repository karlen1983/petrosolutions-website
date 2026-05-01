"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Project = {
  src: string;
  alt: string;
  caption: string;
  location: string;
};

// Featured projects shown in the on-page grid.
const featured: Project[] = [
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

// Complete portfolio (20 photos) — surfaced in the "See more" modal.
const allProjects: Project[] = [
  ...featured,
  {
    src: "/petro-solutions/003.jpg",
    alt: "Petroleum equipment installation in progress",
    caption: "Forecourt build-out",
    location: "Florida",
  },
  {
    src: "/petro-solutions/004.jpg",
    alt: "Site work on petroleum equipment",
    caption: "Site preparation",
    location: "Florida",
  },
  {
    src: "/petro-solutions/006.jpg",
    alt: "Crew assembling forecourt infrastructure",
    caption: "Forecourt assembly",
    location: "Retrofit project",
  },
  {
    src: "/petro-solutions/008.jpg",
    alt: "Steel structure rising over a fueling station forecourt",
    caption: "Canopy steel work",
    location: "Greenfield build",
  },
  {
    src: "/petro-solutions/009.jpg",
    alt: "Underground tank work in progress",
    caption: "UST staging",
    location: "South Florida",
  },
  {
    src: "/petro-solutions/010.jpg",
    alt: "Petroleum equipment job site",
    caption: "Tank pit prep",
    location: "Florida",
  },
  {
    src: "/petro-solutions/011.jpg",
    alt: "Heavy equipment working on fuel station site",
    caption: "Excavation",
    location: "Active site",
  },
  {
    src: "/petro-solutions/012.jpg",
    alt: "Petroleum equipment installation crew at work",
    caption: "Equipment install",
    location: "Florida",
  },
  {
    src: "/petro-solutions/013.jpg",
    alt: "Forecourt work with dispensers and underground access",
    caption: "Dispenser set",
    location: "Active station",
  },
  {
    src: "/petro-solutions/014.jpg",
    alt: "Petro Solutions crew on a build site",
    caption: "Crew on site",
    location: "Florida",
  },
  {
    src: "/petro-solutions/015.jpg",
    alt: "Petroleum equipment retrofit in progress",
    caption: "Retrofit work",
    location: "Retrofit project",
  },
  {
    src: "/petro-solutions/016.jpg",
    alt: "New petroleum equipment installation",
    caption: "New install",
    location: "New build site",
  },
  {
    src: "/petro-solutions/019.jpg",
    alt: "Completed petroleum equipment install",
    caption: "Final commissioning",
    location: "Florida",
  },
  {
    src: "/petro-solutions/020.jpg",
    alt: "Petroleum equipment job wrap-up",
    caption: "Project wrap-up",
    location: "Louisiana",
  },
];

export function Gallery() {
  const [open, setOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const closeAll = useCallback(() => {
    setLightboxIdx(null);
    setOpen(false);
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIdx((idx) =>
      idx === null ? null : (idx - 1 + allProjects.length) % allProjects.length
    );
  }, []);

  const showNext = useCallback(() => {
    setLightboxIdx((idx) =>
      idx === null ? null : (idx + 1) % allProjects.length
    );
  }, []);

  // Keyboard: Escape closes, arrows navigate when lightbox is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIdx !== null) {
          setLightboxIdx(null);
        } else {
          setOpen(false);
        }
      } else if (lightboxIdx !== null) {
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lightboxIdx, showPrev, showNext]);

  // Lock body scroll while modal is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const lightboxItem =
    lightboxIdx !== null ? allProjects[lightboxIdx] : null;

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-16">
        <SectionHeader
          eyebrow="Field Work"
          title="A look at the projects we keep online."
          description="Stations, retrofits, and equipment installs delivered across Florida and Louisiana — every photo is one of ours."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
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

        <div className="mt-10 flex items-center justify-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-2 rounded-md border border-outline-variant bg-surface-container-lowest px-6 py-3 text-sm font-semibold tracking-wide text-primary-container transition-all duration-200 hover:border-primary-container/60 hover:bg-surface-container-low active:scale-[0.98]"
          >
            See more projects
            <span className="inline-flex h-5 items-center rounded-full bg-primary-container/10 px-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary-container">
              {allProjects.length}
            </span>
            <ArrowRight
              size={16}
              strokeWidth={2.2}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-stretch justify-center bg-primary/85 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeAll();
            }}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.21, 0.45, 0.32, 0.94] }}
              className="relative my-6 flex w-full max-w-[1280px] flex-col overflow-hidden rounded-lg border border-outline-variant/40 bg-surface shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            >
              {/* Modal header */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-outline-variant/60 bg-surface/95 px-6 py-4 backdrop-blur">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
                    Field work archive
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold tracking-tight text-on-surface sm:text-xl">
                    All {allProjects.length} projects
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeAll}
                  className="rounded-md p-2 text-on-surface transition-colors hover:bg-surface-container hover:text-primary-container"
                  aria-label="Close gallery"
                >
                  <X size={20} strokeWidth={2.2} />
                </button>
              </div>

              {/* Modal grid */}
              <div className="overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {allProjects.map((project, idx) => (
                    <motion.button
                      key={project.src}
                      type="button"
                      onClick={() => setLightboxIdx(idx)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: Math.min(idx * 0.025, 0.4),
                        ease: [0.21, 0.45, 0.32, 0.94],
                      }}
                      className="group relative overflow-hidden rounded-md border border-outline-variant bg-surface-container text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue"
                      aria-label={`View ${project.caption}`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.src}
                          alt={project.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-90" />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 px-3 py-2.5 text-on-primary">
                        <span className="truncate text-xs font-semibold tracking-tight">
                          {project.caption}
                        </span>
                        <span className="hidden shrink-0 text-[10px] font-bold uppercase tracking-[0.14em] text-on-primary-container sm:inline">
                          {project.location}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Lightbox single-image view */}
            <AnimatePresence>
              {lightboxItem && (
                <motion.div
                  key="lightbox"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-charcoal/85 backdrop-blur-md"
                  onClick={(e) => {
                    if (e.target === e.currentTarget) setLightboxIdx(null);
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIdx(null)}
                    className="absolute right-5 top-5 rounded-full bg-surface-container-lowest/95 p-2 text-on-surface shadow-lg transition-colors hover:text-primary-container"
                    aria-label="Close image"
                  >
                    <X size={20} strokeWidth={2.2} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      showPrev();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-surface-container-lowest/90 p-3 text-on-surface shadow-lg transition-colors hover:text-primary-container sm:left-6"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={22} strokeWidth={2.2} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      showNext();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-surface-container-lowest/90 p-3 text-on-surface shadow-lg transition-colors hover:text-primary-container sm:right-6"
                    aria-label="Next image"
                  >
                    <ChevronRight size={22} strokeWidth={2.2} />
                  </button>

                  <motion.figure
                    key={lightboxItem.src}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.21, 0.45, 0.32, 0.94],
                    }}
                    className="relative mx-4 max-h-[88vh] w-full max-w-5xl"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={lightboxItem.src}
                      alt={lightboxItem.alt}
                      className="mx-auto max-h-[80vh] w-auto rounded-md object-contain shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
                    />
                    <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-md bg-surface-container-lowest/95 px-4 py-3 text-sm text-on-surface backdrop-blur">
                      <span className="font-semibold tracking-tight">
                        {lightboxItem.caption}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary-container">
                        {lightboxItem.location} ·{" "}
                        {(lightboxIdx ?? 0) + 1} / {allProjects.length}
                      </span>
                    </figcaption>
                  </motion.figure>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
