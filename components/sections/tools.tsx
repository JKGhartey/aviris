"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRadixui,
} from "react-icons/si";
import { TbComponents } from "react-icons/tb";

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
];

export function Tools() {
  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-6 py-24 border-t">
      <div className="grid gap-16">
        <div className="relative text-center">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl md:text-5xl">
            Aviris built with{" "}
            <span className="group inline-block relative h-[1.1em] w-[5em]">
              <span className="absolute inset-0 flex items-center justify-center opacity-100 transition-all duration-300 translate-y-0 group-hover:opacity-0 group-hover:translate-y-2">
                modern tools
              </span>
              {tools.map((tool, i) => (
                <span
                  key={tool.name}
                  className="absolute inset-0 flex items-center justify-center opacity-0 -translate-y-2 transition-all duration-300 hover:opacity-100 hover:translate-y-0"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {tool.name}
                </span>
              ))}
            </span>
          </h2>
        </div>

        <div className="mx-auto grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="group/tool relative flex aspect-square items-center justify-center rounded-xl border bg-background/50 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-accent hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="h-12 w-12 transition-all duration-300 group-hover/tool:scale-110" />
                <span className="sr-only">{tool.name}</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-all duration-300 group-hover/tool:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
