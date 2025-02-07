"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

const sectionHeaderVariants = cva("", {
  variants: {
    size: {
      default: "space-y-2",
      sm: "space-y-1.5",
      lg: "space-y-4",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "default",
    align: "left",
  },
});

const titleVariants = cva("font-bold tracking-tight", {
  variants: {
    size: {
      default: "text-2xl",
      sm: "text-xl",
      lg: "text-4xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface SectionHeaderProps
  extends VariantProps<typeof sectionHeaderVariants> {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
  actionsClassName?: string;
  animate?: boolean;
  replay?: boolean;
  className?: string;
  /**
   * The heading level to use for the title (h1-h6).
   * Use this to maintain proper document outline.
   * @default "h2"
   */
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

export function SectionHeader({
  title,
  description,
  actions,
  size,
  align,
  className,
  titleClassName,
  descriptionClassName = "text-muted-foreground leading-7",
  actionsClassName = "flex items-center gap-4",
  animate = true,
  replay = false,
  headingLevel = "h2",
  ...props
}: SectionHeaderProps) {
  const [key, setKey] = React.useState(0);
  const Heading = motion[headingLevel] || motion.h2;

  React.useEffect(() => {
    if (replay && animate) {
      setKey((prev) => prev + 1);
    }
  }, [replay, animate]);

  if (!animate) {
    return (
      <div
        className={cn(sectionHeaderVariants({ size, align }), className)}
        {...props}
      >
        <div className="space-y-1">
          {React.createElement(
            headingLevel,
            {
              className: cn(titleVariants({ size }), titleClassName),
            },
            title
          )}
          {description && (
            <p className={cn(descriptionClassName)}>{description}</p>
          )}
        </div>
        {actions && <div className={cn(actionsClassName)}>{actions}</div>}
      </div>
    );
  }

  return (
    <motion.div
      key={key}
      className={cn(sectionHeaderVariants({ size, align }), className)}
      variants={container}
      initial="hidden"
      animate="show"
      {...props}
    >
      <div className="space-y-1">
        <Heading
          className={cn(titleVariants({ size }), titleClassName)}
          variants={item}
        >
          {title}
        </Heading>
        {description && (
          <motion.p className={cn(descriptionClassName)} variants={item}>
            {description}
          </motion.p>
        )}
      </div>
      {actions && (
        <motion.div className={cn(actionsClassName)} variants={item}>
          {actions}
        </motion.div>
      )}
    </motion.div>
  );
}
