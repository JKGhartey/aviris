import { Metadata } from "next";
import { CodeBlock } from "@/components/custom/CodeBlock";
import { ComponentPreview } from "@/components/custom/ComponentPreview";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Landing Page Template",
  description: "A modern landing page template with hero section and features.",
};

const installCode = `# Create a new Next.js project
npx create-next-app@latest my-landing-page --typescript --tailwind --app

# Navigate to the project
cd my-landing-page

# Install dependencies
npm install framer-motion @radix-ui/react-dialog @radix-ui/react-separator lucide-react`;

const heroSectionCode = `import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-primary/30 dark:to-secondary/30">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent dark:from-transparent dark:via-primary/10 dark:to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl py-24 sm:py-32 lg:py-40 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Build beautiful websites faster
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            A collection of modern UI components and templates built with Tailwind CSS and Framer Motion. Fully customizable and ready for production.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}`;

const featuresCode = `import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";

const features = [
  {
    title: "Modern Components",
    description:
      "Built with modern technologies like React, TypeScript, and Tailwind CSS.",
    icon: Code,
  },
  {
    title: "Beautiful Design",
    description:
      "Carefully crafted components with beautiful animations and interactions.",
    icon: Palette,
  },
  {
    title: "Fast Development",
    description:
      "Get started quickly with pre-built components and templates.",
    icon: Zap,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};

export function FeaturesSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Features</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to build modern applications.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="relative rounded-2xl border bg-background p-8"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}`;

export default function LandingPageTemplate() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Landing Page Template
        </h1>
        <p className="text-lg text-muted-foreground">
          A modern landing page template with hero section and features.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <p className="leading-7 text-muted-foreground">
          Follow these steps to set up your project with the landing page
          template:
        </p>
        <CodeBlock code={installCode} language="bash" />

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">File Structure</h3>
          <p className="leading-7 text-muted-foreground mb-4">
            Create the following files in your project:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
            <li>
              <code className="font-mono text-sm">
                components/sections/hero.tsx
              </code>{" "}
              - Hero section component
            </li>
            <li>
              <code className="font-mono text-sm">
                components/sections/features.tsx
              </code>{" "}
              - Features section component
            </li>
            <li>
              <code className="font-mono text-sm">app/page.tsx</code> - Main
              page component
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Hero Section
        </h2>
        <p className="leading-7 text-muted-foreground">
          Create a new file at{" "}
          <code className="font-mono text-sm">
            components/sections/hero.tsx
          </code>{" "}
          and add the following code:
        </p>
        <CodeBlock code={heroSectionCode} language="tsx" />
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Features Section
        </h2>
        <p className="leading-7 text-muted-foreground">
          Create a new file at{" "}
          <code className="font-mono text-sm">
            components/sections/features.tsx
          </code>{" "}
          and add the following code:
        </p>
        <CodeBlock code={featuresCode} language="tsx" />
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <p className="leading-7 text-muted-foreground">
          Import and use the sections in your page:
        </p>
        <CodeBlock
          code={`import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Customization
        </h2>
        <p className="leading-7 text-muted-foreground">
          The template is built with customization in mind:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
          <li>Modify the content and styling to match your brand</li>
          <li>Add or remove sections as needed</li>
          <li>Customize animations and transitions</li>
          <li>Update the color scheme using Tailwind CSS classes</li>
        </ul>
      </div>
    </div>
  );
}
