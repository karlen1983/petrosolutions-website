"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Phone } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

const heroStats = [
  { value: "24/7/365", label: "Factory-authorized service" },
  { value: "FL & LA", label: "Two-state coverage" },
  { value: "1 team", label: "Equipment + payments" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={ref}
      id="home"
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
      {/* Soft accent wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-primary-container/10 blur-3xl"
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

          <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-on-surface sm:text-5xl lg:text-[4.25rem]">
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

        {/* Visual column */}
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-outline-variant bg-surface-container">
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="absolute inset-0 h-full w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1695561324569-5e47c76dc0a3?w=1400&q=85&auto=format&fit=crop"
                alt="Modern fueling station at night with illuminated dispensers and canopy"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/45 via-transparent to-transparent" />
            {/* Floating credential pill */}
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-surface-container-lowest/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary-container shadow-[0_4px_16px_rgba(31,75,90,0.15)] backdrop-blur">
              <ShieldCheck size={12} strokeWidth={2.4} />
              Authorized · Wayne · OPW · Verifone
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
