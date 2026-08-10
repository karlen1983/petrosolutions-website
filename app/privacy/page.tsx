import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { absoluteUrl } from "@/lib/site";

const DESCRIPTION =
  "How Petro Solutions handles information collected through this website, including the contact form. We do not track visitors and do not sell personal data.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/privacy") },
  openGraph: {
    type: "article",
    url: absoluteUrl("/privacy"),
    title: "Privacy Policy | Petro Solutions",
    description: DESCRIPTION,
    siteName: "Petro Solutions",
    locale: "en_US",
  },
};

const LAST_UPDATED = "April 30, 2026";

const sections = [
  {
    id: "statement",
    title: "1. Privacy Statement",
    body: `Petro Solutions does not track or profile visitors to this website. We do not use advertising cookies, behavioral tracking, or third-party analytics that build a profile of you across other sites.

The only personal information we receive is the information you choose to send us — for example, when you submit our Request Service form or email us directly.`,
  },
  {
    id: "information",
    title: "2. Information You Send Us",
    body: `When you complete the contact form on this site, we collect only what you provide: your name, company (optional), email address, phone number, the service you're inquiring about, and any message you include. If you mark a request as urgent, that flag is sent along with the message so we can prioritize the dispatch.

If you call or email us directly, we keep the basic record of that communication (your contact details and the substance of the request) so we can serve you and follow up appropriately.`,
  },
  {
    id: "use",
    title: "3. How We Use That Information",
    body: `We use the information you submit for one purpose: to respond to your request and serve you as a customer. That includes scheduling service, preparing equipment quotes, processing financing inquiries, dispatching technicians, and communicating with you about an active project.

We do not sell, rent, or trade your personal information. We do not share it with third parties except where necessary to deliver the service you've asked for (for example, routing a financing application to a lender), or where required by law.`,
  },
  {
    id: "third-parties",
    title: "4. Third-Party Services Used by This Site",
    body: `To deliver the contact form securely, this website uses the following services:

**Cloudflare Turnstile** — a bot-protection challenge that helps prevent automated form abuse. Cloudflare receives a small amount of technical information (such as a token and request metadata) to verify the request is legitimate. It does not receive the contents of your message.

**SMTP email delivery** — when the form is submitted, the contents are sent over an SMTP relay to Petro Solutions' inbox. The message is transported and stored within standard email infrastructure.

These services have their own privacy practices, governed by their published policies.`,
  },
  {
    id: "retention",
    title: "5. How Long We Keep It",
    body: `We retain contact form submissions and related correspondence for as long as is reasonably necessary to serve the customer relationship and to meet legal, accounting, or reporting obligations. You may request deletion of your information at any time using the contact details below.`,
  },
  {
    id: "rights",
    title: "6. Your Choices",
    body: `You can choose not to submit the contact form. You can ask us at any time what information we hold about you, request that we correct or delete it, or ask that we stop using it. Email us at info@omsps.com and we'll respond within a reasonable timeframe.`,
  },
  {
    id: "disclaimer",
    title: "7. Information Disclaimer",
    body: `Information on this website is made available subject to the following:

Periodic changes or updates may occur, which can affect the accuracy and availability of the information presented. Visitors are advised, when making any decision based on information obtained from the internet, to verify the information independently. Petro Solutions shall not be held liable for any damages caused as a result of the use of the information contained herein. Accessibility of services, documents, programs, or other material through this website does not imply suitability or endorsement for any purpose by any party.

Please do not navigate this website if you are not willing to accept the terms above.`,
  },
  {
    id: "changes",
    title: "8. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this page reflects the most recent revision. Your continued use of the website after a change constitutes acceptance of the revised policy.`,
  },
  {
    id: "contact",
    title: "9. Contact Us",
    body: `Questions about this Privacy Policy or about the information we hold can be sent to:

**Petro Solutions**
5200 NW 77th Court, Doral, FL 33166
Email: info@omsps.com
Phone: 1-877-847-3876`,
  },
];

export default function PrivacyPage() {
  return (
    <article className="bg-surface">
      {/* Header */}
      <header className="bg-surface-container-low py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-container">
            Legal
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-on-surface-variant">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="mt-6 text-base leading-relaxed text-on-surface-variant">
            Petro Solutions does not collect or track personal information
            from visitors to this website. The only personal information we
            receive is what you choose to submit, such as a contact form or an
            email — and we use that information only to respond to you.
          </p>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
        <div className="space-y-12">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="font-display text-xl font-bold tracking-tight text-on-surface sm:text-2xl">
                {s.title}
              </h2>
              <div className="mt-4 space-y-4">
                {s.body.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-on-surface-variant"
                    dangerouslySetInnerHTML={{
                      __html: para.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong class='text-on-surface'>$1</strong>"
                      ),
                    }}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-outline-variant pt-8 text-sm">
          <Link
            href="/terms"
            className="inline-flex items-center gap-1.5 text-on-surface-variant transition-colors hover:text-primary-container"
          >
            Terms of Service
            <ArrowRight size={14} strokeWidth={2.2} />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-on-surface-variant transition-colors hover:text-primary-container"
          >
            Contact us
            <ArrowRight size={14} strokeWidth={2.2} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-on-surface-variant transition-colors hover:text-primary-container"
          >
            Back to home
            <ArrowRight size={14} strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </article>
  );
}
