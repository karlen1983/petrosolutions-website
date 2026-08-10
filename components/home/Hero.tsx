"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ShieldCheck, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const heroStats = [
  { value: "24/7/365", label: "Factory-authorized service" },
  { value: "FL & LA", label: "Two-state coverage" },
  { value: "1 team", label: "Equipment + payments" },
];

// Curated hero rotation sourced from /public/gallery — five branded shots
// chosen to land within a typical scroll dwell.
const heroImages = [
  {
    src: "/gallery/gas_station_exterior_twilight.jpg",
    alt: "Modern fueling station forecourt — Petro Solutions hero shot",
    tag: "Modern station",
  },
  {
    src: "/gallery/gas_station_maintenance_night.jpg",
    alt: "Night forecourt service work in progress",
    tag: "Forecourt · After hours",
  },
  {
    src: "/gallery/underground_fuel_tank_installation.jpg",
    alt: "Underground storage tank installation and construction",
    tag: "UST install · Construction",
  },
  {
    src: "/gallery/fuel_dispenser_service_technicians.jpg",
    alt: "Petro Solutions technicians servicing a fuel pump",
    tag: "Service · Maintenance",
  },
  {
    src: "/gallery/contactless_payment_pump_closeup.jpg",
    alt: "Merchant services and pay-at-pump processing",
    tag: "Merchant · Pay at pump",
  },
];

const SLIDE_MS = 4800;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % heroImages.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  const current = heroImages[active];

  return (
    <section
      ref={ref}
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-surface pb-20 pt-16 lg:pb-28 lg:pt-24"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1F4B5A 1px, transparent 1px), linear-gradient(to bottom, #1F4B5A 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Animated soft accent washes */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.5, scale: 0.9 }}
        animate={
          prefersReducedMotion
            ? { opacity: 0.6 }
            : { opacity: [0.5, 0.85, 0.5], scale: [0.9, 1.05, 0.9] }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-primary-container/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0.4, scale: 1.05 }}
        animate={
          prefersReducedMotion
            ? { opacity: 0.4 }
            : { opacity: [0.4, 0.7, 0.4], scale: [1.05, 0.92, 1.05] }
        }
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="pointer-events-none absolute -bottom-48 -left-32 h-[24rem] w-[24rem] rounded-full bg-chartreuse/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-4 md:px-6 lg:grid-cols-12 lg:gap-16 lg:px-16">
        {/* Copy column */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.45, 0.32, 0.94] }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
            <span className="h-1.5 w-1.5 rounded-full bg-chartreuse" />
            Petroleum equipment &amp; merchant services
          </span>

          <h1
            id="hero-title"
            className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-on-surface sm:text-5xl lg:text-[4.25rem]"
          >
            One team for the equipment,{" "}
            <span className="text-primary-container">
              the install, and the payments.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-on-surface-variant lg:text-lg">
            Sales, service, and installation of petroleum equipment from fuel
            storage tanks to dispensers and forecourt accessories — paired
            with full-service merchant processing through Orion Merchant
            Solutions. One vendor instead of three.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/#contact" size="lg">
              Request Service
              <ArrowRight size={16} strokeWidth={2.2} />
            </Button>
            <Button href="tel:18778473876" variant="secondary" size="lg">
              <Phone size={16} strokeWidth={2.2} />
              1-877-847-3876
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3 text-xs text-on-surface-variant">
            <ShieldCheck
              size={16}
              strokeWidth={2.2}
              className="text-primary-container"
            />
            FL Licensed Contractor · CBC 1257332 · PCC 1256882
          </div>
        </motion.div>

        {/* Visual column — animated banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.85,
            delay: 0.2,
            ease: [0.21, 0.45, 0.32, 0.94],
          }}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-outline-variant bg-surface-container shadow-[0_20px_60px_rgba(31,75,90,0.18)]">
            {/* Parallax shell */}
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="absolute inset-0 h-full w-full"
            >
              <AnimatePresence initial={false} mode="sync">
                <motion.div
                  key={current.src}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1.16 }}
                  exit={{ opacity: 0, scale: 1.22 }}
                  transition={{
                    opacity: {
                      duration: 1.2,
                      ease: [0.4, 0, 0.2, 1],
                    },
                    scale: {
                      duration: SLIDE_MS / 1000 + 1.2,
                      ease: "linear",
                    },
                  }}
                  className="absolute inset-0 h-full w-full"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={current.src}
                    alt={current.alt}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Color wash + bottom vignette for legibility */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/45 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/70 via-primary/15 to-transparent" />

            {/* Animated scan line accent */}
            {!prefersReducedMotion && (
              <motion.div
                aria-hidden
                initial={{ y: "-10%", opacity: 0 }}
                animate={{ y: "110%", opacity: [0, 0.6, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1.4,
                }}
                className="pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-chartreuse/30 to-transparent mix-blend-screen"
              />
            )}

            {/* Floating credential pill */}
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-surface-container-lowest/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary-container shadow-[0_4px_16px_rgba(31,75,90,0.15)] backdrop-blur">
              <ShieldCheck size={12} strokeWidth={2.4} />
              Authorized · Wayne · OPW · Verifone
            </div>

            {/* Animated caption */}
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current.tag}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, ease: [0.21, 0.45, 0.32, 0.94] }}
                  className="rounded-full bg-surface-container-lowest/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary-container shadow-[0_4px_16px_rgba(0,0,0,0.18)] backdrop-blur"
                >
                  {current.tag}
                </motion.span>
              </AnimatePresence>

              {/* Slide indicators */}
              <div className="flex items-center gap-1.5">
                {heroImages.map((img, idx) => {
                  const isActive = idx === active;
                  return (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => setActive(idx)}
                      aria-label={`Show image ${idx + 1} of ${heroImages.length}`}
                      aria-current={isActive ? "true" : undefined}
                      className="group relative h-1.5 overflow-hidden rounded-full bg-on-primary/40 transition-all duration-300"
                      style={{ width: isActive ? 28 : 10 }}
                    >
                      {isActive && !prefersReducedMotion && (
                        <motion.span
                          key={`progress-${active}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: SLIDE_MS / 1000,
                            ease: "linear",
                          }}
                          style={{ transformOrigin: "left" }}
                          className="absolute inset-0 rounded-full bg-chartreuse"
                        />
                      )}
                      {isActive && prefersReducedMotion && (
                        <span className="absolute inset-0 rounded-full bg-chartreuse" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stats card */}
          <div className="mt-6 grid grid-cols-3 gap-0 overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest">
            {heroStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`px-4 py-5 text-center ${
                  idx > 0 ? "border-l border-outline-variant" : ""
                }`}
              >
                <p className="font-display text-2xl font-extrabold tracking-tight text-on-surface">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
