import Link from "next/link";
import { CustomButton } from "@/components/custom/CustomButton";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-primary/5 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

      {/* Content */}
      <div className="container relative py-20">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 backdrop-blur-sm border border-primary/10 animate-in fade-in slide-in-from-top-4 duration-1000">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Elevate Your React Development
            </p>
          </div>

          {/* Title */}
          <div className="space-y-4 text-center max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-foreground/50">
              Craft Stunning UIs
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">
                Without the Complexity
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground">
              Premium React components that combine the power of shadcn/ui with
              enhanced features. Ship faster with ready-to-use, customizable
              components that just work.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <Link href="/components">
              <CustomButton size="lg" className="relative group px-8 h-12">
                <span className="relative z-10">Explore Components</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
              </CustomButton>
            </Link>
            <Link href="/docs">
              <CustomButton
                variant="outline"
                size="lg"
                className="relative group px-8 h-12 border-primary/20 hover:border-primary/40"
              >
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 group-hover:text-foreground transition-colors">
                  Get Started
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
              </CustomButton>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            {[
              { label: "Ready Components", value: "10+" },
              { label: "Style Variants", value: "50+" },
              { label: "Active Projects", value: "1k+" },
              { label: "Community Stars", value: "100+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
