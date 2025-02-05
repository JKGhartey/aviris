import Link from "next/link";
import { CustomButton } from "@/components/custom/CustomButton";

export function Hero() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <div className="rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 px-3 py-1 text-sm text-primary animate-in fade-in slide-in-from-top-4 duration-1000">
          Introducing Aviris Components
        </div>
        <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-1000 font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          Beautiful React Components
          <span className="text-primary block mt-1">Built with Tailwind</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          A collection of high-quality components built on top of shadcn/ui.
          Fully customizable and ready for your next project.
        </p>
        <div className="space-x-4 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <Link href="/components">
            <CustomButton
              size="lg"
              className="shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
            >
              Browse Components
            </CustomButton>
          </Link>
          <Link href="/docs">
            <CustomButton
              variant="outline"
              size="lg"
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              Documentation
            </CustomButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
