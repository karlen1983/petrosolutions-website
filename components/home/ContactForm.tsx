"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Printer,
} from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  "Equipment Sales",
  "Service & Maintenance",
  "Installation & Construction",
  "Merchant Services",
  "Financing",
  "POS / Security Systems",
  "Environmental Monitoring",
  "Other",
];

const inputClass =
  "w-full rounded-md border border-outline-variant bg-surface-container-lowest px-4 py-3 text-sm text-on-surface placeholder:text-outline transition-all focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/15";

const labelClass =
  "mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-on-surface-variant";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (loading) return;

    if (siteKey && !token) {
      setError("Please complete the security check.");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
      urgent: formData.get("urgent") === "on",
      turnstileToken: token,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = (await res.json()) as { error?: string };
        throw new Error(result.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send. Please try again."
      );
      turnstileRef.current?.reset();
      setToken(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-surface-container-low py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <SectionHeader
              titleId="contact-title"
              eyebrow="Contact"
              title="Request service or a quote."
              description="Tell us what you need and we'll route the request to the right team. For station-down emergencies, please call dispatch directly."
            />

            <div className="mt-10 rounded-lg border border-outline-variant bg-surface-container-lowest p-6 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-start gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-secondary-container/40 text-on-secondary-container">
                    <CheckCircle2 size={24} strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight text-on-surface">
                    Thanks — request received.
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    Our team will be in touch within one business day. For an
                    urgent issue, please call{" "}
                    <a
                      href="tel:18778473876"
                      className="font-semibold text-primary-container hover:text-primary"
                    >
                      1-877-847-3876
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className={inputClass}
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className={inputClass}
                        placeholder="Station / fleet name"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className={inputClass}
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        className={inputClass}
                        placeholder="(305) 555-0142"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className={labelClass}>
                      Service needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className={`${inputClass} appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231F4B5A%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C/svg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10`}
                    >
                      <option value="" disabled>
                        Select a service…
                      </option>
                      {services.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={`${inputClass} resize-none`}
                      placeholder="Site location, equipment make/model, and what you're seeing…"
                    />
                  </div>

                  <label className="flex items-start gap-3 rounded-md border border-outline-variant bg-surface-container-low p-4 text-sm text-on-surface-variant">
                    <input
                      type="checkbox"
                      name="urgent"
                      className="mt-0.5 h-4 w-4 accent-[var(--color-safety-orange)]"
                    />
                    <span>
                      <span className="font-semibold text-on-surface">
                        This is urgent — station impact.
                      </span>{" "}
                      We&apos;ll prioritize the dispatch and follow up by
                      phone.
                    </span>
                  </label>

                  {error && (
                    <p className="flex items-start gap-2 rounded-md bg-error-container/40 px-4 py-3 text-sm text-on-error-container">
                      <AlertTriangle
                        size={16}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0"
                      />
                      {error}
                    </p>
                  )}

                  {siteKey && (
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={siteKey}
                      onSuccess={setToken}
                      onExpire={() => setToken(null)}
                      onError={() => {
                        setToken(null);
                        setError(
                          "Security check failed. Please refresh and try again."
                        );
                      }}
                      options={{
                        theme: "light",
                        appearance: "interaction-only",
                      }}
                    />
                  )}

                  <button
                    type="submit"
                    disabled={loading || (Boolean(siteKey) && !token)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary-container px-6 py-3.5 text-sm font-semibold tracking-wide text-on-primary transition-all duration-200 hover:bg-primary hover:shadow-[0_8px_24px_rgba(31,75,90,0.25)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} strokeWidth={2.2} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} strokeWidth={2.2} />
                        Send request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4 lg:col-span-5"
          >
            <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
                Dispatch
              </p>
              <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-on-surface">
                Toll-free service line
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                Talk to a live technician for service requests, station-down
                emergencies, and dispatch.
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="tel:18778473876"
                  className="flex items-center gap-3 text-sm font-semibold text-on-surface hover:text-primary-container"
                >
                  <Phone size={16} strokeWidth={2} className="text-primary-container" />
                  1-877-847-3876 (toll free)
                </a>
                <a
                  href="mailto:info@omsps.com"
                  className="flex items-center gap-3 text-sm font-semibold text-on-surface hover:text-primary-container"
                >
                  <Mail size={16} strokeWidth={2} className="text-primary-container" />
                  info@omsps.com
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
                Florida headquarters
              </p>
              <h3 className="mt-2 flex items-center gap-3 font-display text-lg font-bold tracking-tight text-on-surface">
                <MapPin size={18} strokeWidth={2} className="text-primary-container" />
                Doral, FL
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                5200 NW 77th Court
                <br />
                Doral, FL 33166
              </p>
              <div className="mt-3 space-y-1.5 text-sm text-on-surface-variant">
                <p className="flex items-center gap-2">
                  <Phone size={14} strokeWidth={2} className="text-primary-container" />
                  <a href="tel:3058838687" className="hover:text-primary-container">
                    305-883-8687
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Printer size={14} strokeWidth={2} className="text-primary-container" />
                  Fax 305-883-8862
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
                Louisiana office
              </p>
              <h3 className="mt-2 flex items-center gap-3 font-display text-lg font-bold tracking-tight text-on-surface">
                <MapPin size={18} strokeWidth={2} className="text-primary-container" />
                Holden, LA
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                26904 James Chapel Road N
                <br />
                Holden, LA 70744
              </p>
              <div className="mt-3 space-y-1.5 text-sm text-on-surface-variant">
                <p className="flex items-center gap-2">
                  <Phone size={14} strokeWidth={2} className="text-primary-container" />
                  <a href="tel:9855205801" className="hover:text-primary-container">
                    985-520-5801
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Printer size={14} strokeWidth={2} className="text-primary-container" />
                  Fax 985-520-5815
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-outline-variant bg-surface-container-lowest p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-container">
                Hours
              </p>
              <p className="mt-2 inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight text-on-surface">
                <Clock size={18} strokeWidth={2} className="text-primary-container" />
                Mon–Fri 9:00am – 5:00pm
              </p>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                24/7/365 emergency dispatch available via the toll-free line.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
