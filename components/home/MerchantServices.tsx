"use client";

import { motion } from "framer-motion";
import { CreditCard, Wallet, Receipt, Headphones } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const features = [
  {
    icon: CreditCard,
    title: "Pay at the pump",
    description:
      "EMV-ready card readers integrated with the dispensers and forecourt controllers we install.",
  },
  {
    icon: Wallet,
    title: "Retail, restaurant, supermarket POS",
    description:
      "Inside-the-store payments and full POS — including Clover technology — for c-stores, restaurants, and supermarkets.",
  },
  {
    icon: Receipt,
    title: "Competitive rates",
    description:
      "Competitive processing rates with data compliance standards across every program.",
  },
  {
    icon: Headphones,
    title: "24/7 merchant support",
    description:
      "Round-the-clock support delivered with professional and courteous service from Orion's team.",
  },
];

export function MerchantServices() {
  return (
    <section
      id="merchant"
      className="bg-surface-container-low py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Merchant Services"
              title="Card processing built for fuel — through Orion."
              description="Through our partnership with Orion Merchant Solutions, independent stations get a one-stop solution for credit card processing, pay-at-the-pump, and retail POS — without juggling multiple vendors."
            />

            <p className="mt-6 max-w-md text-sm leading-relaxed text-on-surface-variant">
              Orion Merchant Solutions is a registered Independent Sales
              Organization of Wells Fargo Bank, N.A., and an authorized
              reseller of Clover® payment technology by First Data.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/#contact">Get a rate review</Button>
              <Button href="tel:18778473876" variant="secondary">
                Talk to a specialist
              </Button>
            </div>

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
                  src="/gallery/contactless_payment_pump_closeup.jpg"
                  alt="Pay-at-the-pump merchant services in action"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-5 py-4 text-on-primary">
                <span className="text-sm font-semibold tracking-tight">
                  Pay-at-the-pump
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-on-primary-container">
                  EMV · Clover · POS
                </span>
              </figcaption>
            </motion.figure>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-outline-variant bg-outline-variant sm:grid-cols-2 lg:col-span-7">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.21, 0.45, 0.32, 0.94],
                }}
                className="bg-surface-container-lowest p-7"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-tertiary-container/15 text-tertiary-container">
                  <feature.icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-base font-bold tracking-tight text-on-surface">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
