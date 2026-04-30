import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-sm",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-container text-on-primary border border-primary-container hover:bg-primary hover:border-primary hover:shadow-[0_8px_24px_rgba(31,75,90,0.25)]",
  secondary:
    "bg-surface-container-lowest text-primary-container border border-outline-variant hover:border-primary-container/60 hover:bg-surface-container-low",
  ghost:
    "bg-transparent text-on-surface border border-transparent hover:bg-surface-container-low",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  type = "button",
  onClick,
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition-all duration-200 active:scale-[0.98] ${
    sizes[size]
  } ${variants[variant]} ${
    disabled ? "pointer-events-none opacity-50" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
