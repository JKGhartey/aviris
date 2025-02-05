import React from "react";
import { cn } from "@/lib/utils";
import { ButtonProps } from "../ui/button";
import { Button } from "../ui/button";

interface CustomButtonProps extends ButtonProps {
  customClassName?: string;
}

export const CustomButton = React.forwardRef<
  HTMLButtonElement,
  CustomButtonProps
>(({ className, customClassName, children, ...props }, ref) => {
  return (
    <Button
      className={cn("custom-button-base", customClassName, className)}
      ref={ref}
      {...props}
    >
      {children}
    </Button>
  );
});

CustomButton.displayName = "CustomButton";
