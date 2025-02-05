import { SectionHeader } from "../section-header";
import { Zap, Box, Repeat } from "lucide-react";

const benefits = [
  {
    title: "Quick Setup",
    description:
      "Get started in minutes with our CLI tool. No complex configuration required.",
    icon: Zap,
  },
  {
    title: "Production Ready",
    description:
      "Built with performance and accessibility in mind. Battle-tested and reliable.",
    icon: Box,
  },
  {
    title: "Always Updated",
    description:
      "Regular updates ensure you have access to the latest features and improvements.",
    icon: Repeat,
  },
];

export function Benefits() {
  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-6 py-24">
      <div className="grid gap-16">
        <SectionHeader
          title="Why Choose Aviris?"
          description="Build modern applications with confidence using our production-ready components."
          className="max-w-[800px]"
        />

        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-none">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group relative overflow-hidden rounded-lg border bg-background p-8 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
