import * as React from 'react';
import React__default from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

interface CustomButtonProps extends ButtonProps {
    customClassName?: string;
    isLoading?: boolean;
}
declare const CustomButton: React__default.ForwardRefExoticComponent<CustomButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

export { CustomButton };
