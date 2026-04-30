interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-container">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold leading-[1.15] tracking-tight text-on-surface sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-on-surface-variant lg:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
