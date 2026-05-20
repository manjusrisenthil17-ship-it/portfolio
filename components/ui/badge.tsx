import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const variantClasses = {
  default: "border border-border bg-muted text-foreground",
  secondary: "border-transparent bg-secondary text-white hover:bg-secondary/90",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variantClasses;
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
