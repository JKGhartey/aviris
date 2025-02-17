import { routes } from "@/constants/routes";

export const docsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      href: routes.docs.root,
      items: [
        {
          title: "Introduction",
          href: routes.docs.root,
          description: "Learn about Aviris components and get started",
        },
        {
          title: "Installation",
          href: routes.docs.installation,
          description: "How to install and set up Aviris components",
        },
        {
          title: "CLI Usage",
          href: routes.docs.cli,
          description: "Using the Aviris CLI to add components",
        },
        // {
        //   title: "Theming",
        //   href: routes.docs.theming,
        //   description: "Customize the look and feel of components",
        // },
      ],
    },
    {
      title: "Components",
      href: routes.docs.components.root,
      items: [
        {
          title: "Code",
          href: routes.docs.components.code,
          description: "Code blocks with copy functionality and tabs",
        },
        {
          title: "Toolbar",
          href: routes.docs.components.toolbar,
          description: "Toolbar component with quick access to tools",
        },
        {
          title: "API Table",
          href: routes.docs.components.apiTable,
          description: "API table component with customizable properties",
        },
        {
          title: "Section Header",
          href: routes.docs.components.sectionHeader,
          description:
            "Flexible header component for sections with title and actions",
        },
        {
          title: "Folder Structure",
          href: routes.docs.components.folderStructure,
          description:
            "Tree-like component for displaying file and directory structures",
        },
      ],
    },

    {
      title: "Templates",
      href: routes.docs.templates.root,
      items: [
        {
          title: "Landing Page",
          href: routes.docs.templates.landingPage,
          description:
            "A modern landing page template with hero section and features",
        },
      ],
    },

    {
      title: "Customization",
      href: routes.docs.customization.root,
      items: [
        {
          title: "Styling",
          href: routes.docs.customization.styling,
          description: "Style your components with Tailwind CSS",
        },
        {
          title: "Variants",
          href: routes.docs.customization.variants,
          description: "Create custom variants for components",
        },
        {
          title: "Animation",
          href: routes.docs.customization.animation,
          description: "Add animations to your components",
        },
      ],
    },
    {
      title: "API",
      href: routes.docs.api.root,
      items: [
        {
          title: "Component API",
          href: routes.docs.api.components,
          description: "Component props and configuration",
        },
        {
          title: "CLI Reference",
          href: routes.docs.api.cli,
          description: "CLI commands and options",
        },
        {
          title: "Hooks",
          href: routes.docs.api.hooks,
          description: "Custom hooks and utilities",
        },
      ],
    },
    {
      title: "Widgets",
      href: routes.docs.widgets.root,
      items: [
        {
          title: "Job Application",
          href: routes.docs.widgets.jobApplication,
          description:
            "A customizable job application form widget for collecting candidate information.",
        },
      ],
    },
  ],
};
