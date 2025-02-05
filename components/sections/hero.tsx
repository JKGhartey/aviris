"use client";

import Link from "next/link";
import { CustomButton } from "@/components/custom/CustomButton";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
      stiffness: 100,
      damping: 10,
    },
  },
};

const titleContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const titleWord = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

export function Hero() {
  return (
    <section className="relative p-5 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"
      />

      {/* Gradient Orbs */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-primary/5 rounded-full blur-3xl -z-10"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full"
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-primary/5 rounded-full blur-3xl -z-10"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="w-full h-full"
        />
      </motion.div>

      {/* Content */}
      <div className="container relative py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center justify-center gap-8"
        >
          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 backdrop-blur-sm border border-primary/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Elevate Your React Development
            </p>
          </motion.div>

          {/* Title */}
          <motion.div
            variants={titleContainer}
            className="space-y-4 text-center max-w-3xl"
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <div className="overflow-hidden">
                <motion.span
                  variants={titleWord}
                  className="block bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-foreground/50"
                >
                  Craft Stunning UIs
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  variants={titleWord}
                  className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70"
                >
                  Without the Complexity
                </motion.span>
              </div>
            </h1>
            <motion.p
              variants={item}
              className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground"
            >
              Premium React components that combine the power of shadcn/ui with
              enhanced features. Ship faster with ready-to-use, customizable
              components that just work.
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/components">
              <CustomButton size="lg" className="relative group px-8 h-12">
                <span className="relative z-10">Explore Components</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
              </CustomButton>
            </Link>
            <Link href="/docs">
              <CustomButton
                variant="outline"
                size="lg"
                className="relative group px-8 h-12 border-primary/20 hover:border-primary/40"
              >
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 group-hover:text-foreground transition-colors">
                  Get Started
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
              </CustomButton>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8"
          >
            {[
              { label: "Ready Components", value: "10+" },
              { label: "Style Variants", value: "50+" },
              { label: "Active Projects", value: "1k+" },
              { label: "Community Stars", value: "100+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
