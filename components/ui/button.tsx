import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const variantClasses = {
  default: "bg-primary text-white hover:bg-primary/90",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-muted/10",
  secondary: "bg-secondary text-white hover:bg-secondary/90",
  ghost: "bg-transparent text-foreground hover:bg-muted/10",
  link: "text-primary underline-offset-4 hover:underline",
};

const sizeClasses = {
  default: "h-11 px-4 py-2 text-sm",
  sm: "h-9 px-3 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10 p-0",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export { Button };
