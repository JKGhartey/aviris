"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRadixui,
  SiFramer,
  SiFigma,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const tools = [
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    name: "Radix UI",
    icon: SiRadixui,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
  },
  {
    name: "Figma",
    icon: SiFigma,
  },
];

export function Tools() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-6 py-32">
      <div className="grid gap-16">
        <div className="relative text-center">
          <div className="flex items-center justify-start max-w-[40rem] mx-auto">
            <h2 className="inline-flex items-center justify-center text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl md:text-5xl">
              <span>Aviris built with</span>{" "}
              <span className="relative inline-flex items-center ml-3">
                <AnimatePresence mode="wait">
                  {!hoveredTool ? (
                    <motion.span
                      key="default"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="inline-flex items-center"
                    >
                      modern tools
                    </motion.span>
                  ) : (
                    <motion.span
                      key={hoveredTool}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="inline-flex items-center"
                    >
                      {hoveredTool}
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </h2>
          </div>
        </div>

        <div className="relative w-full">
          <div className="flex gap-6 items-center justify-center flex-nowrap overflow-x-auto pb-4 scrollbar-none -mx-4 px-4">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredTool(tool.name)}
                  onHoverEnd={() => setHoveredTool(null)}
                  className="flex-shrink-0"
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="relative flex aspect-square items-center justify-center rounded-xl border bg-background/50 backdrop-blur-sm p-6 w-24 h-24"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Icon className="h-12 w-12" />
                    </motion.div>
                    <span className="sr-only">{tool.name}</span>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-transparent"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
