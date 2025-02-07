export const routes = {
  home: "/",
  docs: {
    root: "/docs",
    installation: "/docs/installation",
    cli: "/docs/cli",
    theming: "/docs/theming",
    components: {
      root: "/docs/components",
      code: "/docs/components/code",
      toolbar: "/docs/components/toolbar",
      apiTable: "/docs/components/api-table",
      sectionHeader: "/docs/components/section-header",
      folderStructure: "/docs/components/folder-structure",
    },
    templates: {
      root: "/docs/templates",
      landingPage: "/docs/templates/landing-page",
    },
    customization: {
      root: "/docs/customization",
      styling: "/docs/customization/styling",
      variants: "/docs/customization/variants",
      animation: "/docs/customization/animation",
    },
    api: {
      root: "/docs/api",
      components: "/docs/api/components",
      cli: "/docs/api/cli",
      hooks: "/docs/api/hooks",
    },
  },
  github: "https://github.com/jkghartey/aviris",
} as const;

export type Routes = typeof routes;

// Helper type to get all route strings
export type RouteString = {
  [K in keyof Routes]: Routes[K] extends string
    ? Routes[K]
    : {
        [J in keyof Routes[K]]: Routes[K][J] extends string
          ? Routes[K][J]
          : {
              [L in keyof Routes[K][J]]: Routes[K][J][L];
            }[keyof Routes[K][J]];
      }[keyof Routes[K]];
}[keyof Routes];
