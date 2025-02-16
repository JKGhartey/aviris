import { Metadata } from "next";
import { SectionHeader } from "@/components/custom/SectionHeader";
import Link from "next/link";
import { docsConfig } from "@/config/docs";
import { cn } from "@/apps/landing/lib/utils";

export const metadata: Metadata = {
  title: "Components",
  description: "Explore all available components in the Aviris library.",
};

export default function ComponentsPage() {
  const components = docsConfig.sidebarNav.find(
    (group) => group.title === "Components"
  )?.items;

  if (!components) return null;

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Components"
        description="Explore all available components in the Aviris library."
        size="lg"
        headingLevel="h1"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Link
            key={component.href}
            href={component.href || ""}
            className={cn(
              "group relative rounded-lg border p-6 hover:bg-muted",
              "transition-colors"
            )}
          >
            <h2 className="font-semibold tracking-tight text-foreground mb-2">
              {component.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {component.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
