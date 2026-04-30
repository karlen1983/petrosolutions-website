import { ShieldCheck, Wrench, Activity, Award, Clock } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "FL Contractor · CBC 1257332" },
  { icon: Wrench, label: "Factory-Authorized Service" },
  { icon: Activity, label: "HAZWOPER Trained Crews" },
  { icon: Clock, label: "24/7/365 Dispatch" },
  { icon: Award, label: "Wayne · OPW · Verifone Authorized" },
];

export function TrustBadges() {
  return (
    <section
      aria-label="Credentials"
      className="border-y border-outline-variant/40 bg-surface-container-low/60"
    >
      <div className="mx-auto max-w-[1440px] px-4 py-7 md:px-6 lg:px-16">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-on-surface-variant md:gap-x-10">
          {badges.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em]"
            >
              <Icon
                size={15}
                strokeWidth={2.2}
                className="text-primary-container"
              />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
