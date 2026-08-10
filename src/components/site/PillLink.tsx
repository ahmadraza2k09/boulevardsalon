import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  to: string;
  children: ReactNode;
  variant?: "dark" | "gold" | "outline";
  className?: string;
};

const styles = {
  dark: "bg-primary text-primary-foreground hover:bg-primary/85",
  gold: "bg-gold text-accent-foreground hover:opacity-90",
  outline: "border border-current text-current hover:bg-foreground/5",
};

export function PillLink({ to, children, variant = "dark", className }: Props) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex min-w-[9.5rem] items-center justify-center rounded-full px-7 py-3 text-sm tracking-wide transition-all",
        styles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
