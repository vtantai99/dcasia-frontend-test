import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "base-input-styles", // Transition ở base
  {
    variants: {
      variant: {
        default: "border-transparent",
        primary: "border-primary-default",
        error: "border-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "default" | "primary" | "error";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, variant = "default", ...props }, ref) => {
    const StartIcon = startIcon;
    const EndIcon = endIcon;

    return (
      <div className="w-full relative">
        {StartIcon && <div className="absolute left-6 top-1/2 transform -translate-y-1/2">{startIcon}</div>}
        <input
          type={type}
          className={cn(
            "flex w-full border-[3px] bg-gray text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            "rounded-xl px-6 py-5 text-xl placeholder:text-paragraph font-normal",
            startIcon ? "pl-[60px]" : "",
            endIcon ? "pr-[60px]" : "",
            inputVariants({ variant }),
            className
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && <div className="absolute right-6 top-1/2 transform -translate-y-1/2">{endIcon}</div>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
