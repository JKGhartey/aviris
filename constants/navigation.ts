import { routes } from "./routes";

export const navItems = [
  {
    heading: "Documentation",
    items: [
      {
        title: "Docs",
        href: routes.docs.root,
        description: "Documentation home",
      },
      {
        title: "Components",
        href: routes.docs.components.root,
        description: "Browse components",
      },
      {
        title: "Installation",
        href: routes.docs.installation,
        description: "Installation guide",
      },
    ],
  },
  {
    heading: "Links",
    items: [
      { title: "GitHub", href: routes.github, description: "View source code" },
    ],
  },
] as const;

export type NavItem = (typeof navItems)[number]["items"][number];
