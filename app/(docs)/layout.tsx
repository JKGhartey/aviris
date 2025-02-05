import React from "react";
import Link from "next/link";

const sidebarNav = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
      {
        title: "Installation",
        href: "/docs/installation",
      },
      {
        title: "CLI",
        href: "/docs/cli",
      },
      {
        title: "Theming",
        href: "/docs/theming",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Overview",
        href: "/components",
        description: "Browse all available components.",
      },
      {
        title: "Button",
        href: "/components/button",
        description: "Clickable button with multiple styles and states.",
      },
      // Add more components here as we create them
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
        <div className="relative overflow-hidden py-6 pr-6 lg:py-8">
          <nav className="relative space-y-6 px-4">
            {sidebarNav.map((section) => (
              <div key={section.title} className="space-y-3">
                <h4 className="font-medium text-muted-foreground">
                  {section.title}
                </h4>
                <div className="grid grid-flow-row auto-rows-max gap-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground"
                    >
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8">
        <div className="mx-auto w-full min-w-0">
          <div className="pb-12 pt-8">{children}</div>
        </div>
      </main>
    </div>
  );
}
