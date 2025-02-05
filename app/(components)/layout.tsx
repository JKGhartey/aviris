import React from "react";
import Link from "next/link";

const topNav = [
  { title: "Docs", href: "/docs" },
  { title: "Components", href: "/components" },
  { title: "Themes", href: "/themes" },
  { title: "Examples", href: "/examples" },
];

const componentsNav = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/components",
      },
      {
        title: "Installation",
        href: "/components/installation",
      },
      {
        title: "components.json",
        href: "/components/components-json",
      },
      {
        title: "Theming",
        href: "/components/theming",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Button",
        href: "/components/button",
        description: "Clickable button with multiple styles and states.",
      },
      // Add more components here as we create them
    ],
  },
];

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold">aviris</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {topNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-foreground/80"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <div className="relative overflow-hidden py-6 pr-6 lg:py-8">
            <nav className="relative space-y-6 px-4">
              {componentsNav.map((section) => (
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
    </div>
  );
}
