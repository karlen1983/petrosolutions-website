"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const credentials = [
  { value: "24/7/365", label: "Factory-authorized response" },
  { value: "FL & LA", label: "Two states served" },
  { value: "HAZWOPER", label: "Trained crews" },
  { value: "CBC 1257332", label: "FL licensed contractor" },
];

const reasons = [
  {
    title: "Petroleum is all we do.",
    description:
      "Every technician, project manager, and merchant rep on our team works in fuel daily. We don't generalize.",
  },
  {
    title: "Equipment + payments under one team.",
    description:
      "Petro Solutions and Orion Merchant Solutions together mean one phone call instead of three vendors when something at the forecourt needs attention.",
  },
  {
    title: "Built for the Gulf Coast.",
    description:
      "Doral-headquartered with a Holden, LA office. We know the codes, inspectors, and salt-air realities of Florida and Louisiana.",
  },
];

export function WhyChoose() {
  return (
    <section
      id="why"
      aria-labelledby="why-title"
      className="bg-primary text-on-primary py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-on-primary-container">
              Why Petro Solutions
            </p>
            <h2
              id="why-title"
              className="mt-4 font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]"
            >
              The team petroleum operators call when downtime isn&apos;t an
              option.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-on-primary-container/90 lg:text-lg">
              Bridging petroleum services with merchant solutions is what
              makes us different in this market. By tying bank card processing
              to gasoline terminal service, customers reduce multiple vendor
              calls to one contact point.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {credentials.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <p className="font-display text-xl font-extrabold leading-tight tracking-tight text-on-primary lg:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[11px] font-semibold uppercase leading-snug tracking-[0.14em] text-on-primary-container">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:col-span-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.21, 0.45, 0.32, 0.94],
                }}
                className="flex gap-4 rounded-lg border border-on-primary/15 bg-on-primary/5 p-6 backdrop-blur-sm"
              >
                <Sparkles
                  size={18}
                  strokeWidth={1.8}
                  className="mt-1 shrink-0 text-on-primary-container"
                />
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-primary-container/90">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
