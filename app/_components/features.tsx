interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "TypeScript Ready",
    description:
      "Built with TypeScript for better developer experience and type safety.",
  },
  {
    title: "Tailwind CSS",
    description:
      "Styled with Tailwind CSS for rapid UI development and customization.",
  },
  {
    title: "CLI Tool",
    description: "Easy installation of components using our CLI tool.",
  },
  {
    title: "Customizable",
    description: "Fully customizable components to match your brand.",
  },
  {
    title: "Accessible",
    description:
      "Built with accessibility in mind following WAI-ARIA standards.",
  },
  {
    title: "Dark Mode",
    description: "Supports both light and dark modes out of the box.",
  },
];

export function Features() {
  return (
    <section className="container space-y-6 py-8 md:py-12 lg:py-24 relative">
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-primary/30 dark:to-primary/10 dark:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-background/95" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to build modern React applications
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map(({ title, description }, index) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-lg border bg-background/50 p-2 transition-all hover:bg-background/80 hover:shadow-2xl hover:-translate-y-1"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex h-[180px] flex-col justify-between rounded-md p-6">
              <h3 className="font-bold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
