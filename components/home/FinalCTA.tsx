"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section aria-labelledby="cta-title" className="py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.21, 0.45, 0.32, 0.94] }}
          className="relative overflow-hidden rounded-lg border border-outline-variant bg-primary px-8 py-14 text-on-primary md:px-14 md:py-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-on-primary-container/15 blur-3xl"
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-chartreuse/10 blur-3xl"
          />

          <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-on-primary-container">
                One vendor. One contact point.
              </p>
              <h2
                id="cta-title"
                className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              >
                Equipment, install, service, and payments — handled by one
                team.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-primary-container/90">
                Service request, equipment quote, or new build. Send the form
                and we&apos;ll respond during office hours, or call the
                toll-free line for 24/7/365 emergency dispatch.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
              <Button
                href="/#contact"
                size="lg"
                className="!border-on-primary !bg-on-primary !text-primary hover:!bg-on-primary/90"
              >
                Request Service
                <ArrowRight size={16} strokeWidth={2.2} />
              </Button>
              <Button
                href="tel:18778473876"
                variant="ghost"
                size="lg"
                className="!text-on-primary hover:!bg-on-primary/10"
              >
                <Phone size={16} strokeWidth={2.2} />
                1-877-847-3876
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
