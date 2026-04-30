import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of the Petro Solutions website, including disclaimers regarding accuracy of information and limitation of liability.",
  alternates: { canonical: "https://petrosolutions.com/terms" },
};

const LAST_UPDATED = "April 30, 2026";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: `By accessing or using this website, you agree to these Terms of Service and to the disclaimers set out below. If you do not accept these terms, please do not use the site.`,
  },
  {
    id: "use",
    title: "2. Use of the Website",
    body: `This website is provided as a source of information about Petro Solutions and the services we offer in petroleum equipment, installation, service, merchant processing, and financing. You may use the site for lawful, informational purposes and to contact us about our services. You agree not to use the site to transmit unlawful, harmful, or misleading content, to interfere with the site's operation, or to attempt unauthorized access to any portion of it.`,
  },
  {
    id: "accuracy",
    title: "3. Accuracy of Information",
    body: `Information contained on this website is made available under the following conditions:

Periodic changes or updates may occur, which can affect the accuracy and availability of the information presented. Visitors are advised, when making any decision based on information obtained from the internet, to verify the information independently.

While we work to keep the information current, we do not warrant that it is complete, accurate, or up to date at every point in time.`,
  },
  {
    id: "liability",
    title: "4. Limitation of Liability",
    body: `Petro Solutions shall not be held liable for any damages caused as a result of the use of the information contained on this website. To the fullest extent permitted by applicable law, the website is provided on an "as is" and "as available" basis, without warranties of any kind, whether express or implied.`,
  },
  {
    id: "endorsement",
    title: "5. No Endorsement",
    body: `Accessibility of services, documents, programs, information, or any other material through this website does not imply suitability or endorsement for any purpose by any party. Reference to any specific brand, manufacturer, product, or service does not constitute or imply endorsement, recommendation, or favoring beyond the express commercial relationships described on the site.`,
  },
  {
    id: "third-parties",
    title: "6. Third-Party Links and Services",
    body: `The website may include links to, or content delivered by, third parties (for example, payment platforms, financing partners, or downloadable documents). We are not responsible for the content, accuracy, or practices of those third parties. Use of any third-party service is governed by that party's own terms.`,
  },
  {
    id: "ip",
    title: "7. Intellectual Property",
    body: `All content on this website — including text, photographs of our field work, layouts, graphics, and design — is the property of Petro Solutions or its licensors and is protected by applicable copyright and trademark law. You may not copy, reproduce, or redistribute the content for commercial purposes without prior written permission.

Manufacturer names referenced on this site (including Wayne, OPW, Verifone, Veeder-Root, Bennett, and Gilbarco) are the trademarks of their respective owners and are used to indicate authorized product lines.`,
  },
  {
    id: "contact-form",
    title: "8. Contact Form & Correspondence",
    body: `Submitting the Request Service form, or otherwise contacting us through this website, does not by itself create a contractual or service relationship. Any such relationship will be formalized in a separate written agreement, work order, or signed proposal.`,
  },
  {
    id: "governing-law",
    title: "9. Governing Law",
    body: `These Terms of Service are governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of laws principles. Any dispute arising out of or related to your use of this website shall be subject to the exclusive jurisdiction of the state and federal courts located in Miami-Dade County, Florida.`,
  },
  {
    id: "changes",
    title: "10. Changes to These Terms",
    body: `We may update these Terms of Service from time to time. The "Last Updated" date at the top of this page reflects the most recent revision. Your continued use of the website after a change constitutes acceptance of the revised terms.`,
  },
  {
    id: "contact",
    title: "11. Contact",
    body: `Questions about these Terms can be directed to:

**Petro Solutions**
5200 NW 77th Court, Doral, FL 33166
Email: info@omsps.com
Phone: 1-877-847-3876`,
  },
];

export default function TermsPage() {
  return (
    <article className="bg-surface">
      <header className="bg-surface-container-low py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-container">
            Legal
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-on-surface-variant">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="mt-6 text-base leading-relaxed text-on-surface-variant">
            These terms describe how the Petro Solutions website may be used,
            disclaim warranties on the information presented, and limit our
            liability for use of that information.
          </p>
        </div>
      </header>

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

        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-outline-variant pt-8 text-sm">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-1.5 text-on-surface-variant transition-colors hover:text-primary-container"
          >
            Privacy Policy
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
