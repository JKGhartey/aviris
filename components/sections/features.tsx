import { SectionHeader } from "../section-header";
import {
  Code2,
  Paintbrush,
  Terminal,
  Settings2,
  Accessibility,
  Moon,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const features: Feature[] = [
  {
    title: "TypeScript Ready",
    description:
      "Built with TypeScript for better developer experience and type safety.",
    icon: Code2,
  },
  {
    title: "Tailwind CSS",
    description:
      "Styled with Tailwind CSS for rapid UI development and customization.",
    icon: Paintbrush,
  },
  {
    title: "CLI Tool",
    description: "Easy installation of components using our CLI tool.",
    icon: Terminal,
  },
  {
    title: "Customizable",
    description: "Fully customizable components to match your brand.",
    icon: Settings2,
  },
  {
    title: "Accessible",
    description:
      "Built with accessibility in mind following WAI-ARIA standards.",
    icon: Accessibility,
  },
  {
    title: "Dark Mode",
    description: "Supports both light and dark modes out of the box.",
    icon: Moon,
  },
];

export function Features() {
  return (
    <section className="container max-w-7xl mx-auto px-4 md:px-6 space-y-16 py-24 sm:py-32">
      <SectionHeader
        title="Beautiful React Components"
        description="A collection of high-quality React components built on top of shadcn/ui. Fully customizable and ready to use in your projects."
        className="max-w-[800px]"
      />

      <div className="grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-colors hover:bg-accent/50"
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icon className="h-12 w-12 transition-colors group-hover:text-primary" />
                <div className="space-y-2">
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
