import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 font-medium transition-transform duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none select-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-dark",
        secondary: "bg-foreground text-card hover:opacity-90",
        outline: "bg-card text-foreground shadow-[var(--shadow-card)]",
        ghost: "bg-transparent text-foreground hover:bg-border/60",
        trust: "bg-trust text-primary-foreground",
        muted: "bg-background text-foreground",
        danger: "bg-primary/10 text-primary",
      },
      size: {
        sm: "h-9 px-3 text-xs rounded-sm",
        md: "h-11 px-4 text-sm rounded-md",
        lg: "h-12 px-5 text-sm rounded-md",
        icon: "size-11 rounded-md",
        chip: "h-8 px-3 text-xs rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type = "button", ...props }: Props) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
