export const routes = {
  home: "/",
  docs: {
    index: "/docs",
    components: "/docs/components",
    installation: "/docs/installation",
  },
  github: "https://github.com/jkghartey/aviris",
} as const;

export type AppRoutes = typeof routes;
