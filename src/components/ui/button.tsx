import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 active:scale-95",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg",
        outline: "border border-primary/20 bg-background hover:bg-gradient-trust hover:border-primary/40 hover:shadow-card",
        secondary: "bg-gradient-secondary text-secondary-foreground hover:shadow-glow hover:scale-105 active:scale-95",
        ghost: "hover:bg-gradient-trust hover:text-primary transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-dark",
        premium: "bg-gradient-hero text-white shadow-hero hover:shadow-glow hover:scale-105 active:scale-95",
        glass: "glass text-foreground hover:shadow-elevated hover:scale-105 backdrop-blur-xl",
        medical: "bg-medical-light-blue text-medical-blue hover:bg-medical-blue hover:text-white hover:shadow-medical transition-all duration-300",
        trust: "bg-white text-primary border-2 border-primary/20 hover:border-primary hover:shadow-trust hover:scale-105",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm font-medium",
        sm: "h-9 px-4 py-2 text-xs font-medium rounded-lg",
        lg: "h-14 px-8 py-4 text-base font-semibold rounded-xl",
        xl: "h-16 px-10 py-5 text-lg font-semibold rounded-2xl",
        icon: "h-12 w-12 rounded-xl",
        "icon-sm": "h-9 w-9 rounded-lg",
        "icon-lg": "h-14 w-14 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
