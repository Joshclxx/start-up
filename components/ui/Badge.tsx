import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "violet";
  className?: string;
}

const badgeVariants = {
  default:
    "bg-surface text-text-muted border border-border",
  accent:
    "bg-accent/10 text-accent border border-accent/20",
  violet:
    "bg-violet/10 text-violet border border-violet/20",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-body",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
