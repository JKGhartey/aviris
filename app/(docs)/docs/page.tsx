import Link from "next/link";
import { CustomButton } from "@/components/custom/CustomButton";

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Introduction
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Aviris is a collection of high-quality React components built on top
          of shadcn/ui. It provides additional features, customizations, and a
          CLI tool for easy installation.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Quick Start
        </h2>
        <p className="leading-7">
          Install Aviris components using your preferred package manager:
        </p>
        <div className="rounded-md bg-muted px-4 py-3 font-mono text-sm">
          npm install aviris-components
        </div>
        <p className="leading-7">Install the CLI globally:</p>
        <div className="rounded-md bg-muted px-4 py-3 font-mono text-sm">
          npm install -g aviris-components
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Features
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Built on top of shadcn/ui components</li>
          <li>Additional features and customizations</li>
          <li>Easy installation through CLI</li>
          <li>TypeScript support</li>
          <li>Tailwind CSS styling</li>
          <li>Fully customizable</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Next Steps
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/docs/installation"
            className="group relative rounded-lg border p-6 hover:border-foreground"
          >
            <h3 className="font-semibold">Installation →</h3>
            <p className="text-sm text-muted-foreground">
              Step-by-step guide to install and set up Aviris in your project.
            </p>
          </Link>
          <Link
            href="/docs/components/button"
            className="group relative rounded-lg border p-6 hover:border-foreground"
          >
            <h3 className="font-semibold">Components →</h3>
            <p className="text-sm text-muted-foreground">
              Browse and learn how to use our collection of components.
            </p>
          </Link>
        </div>
      </div>

      <div className="flex gap-4">
        <Link href="/docs/installation">
          <CustomButton>Get Started</CustomButton>
        </Link>
        <Link href="https://github.com/yourusername/aviris" target="_blank">
          <CustomButton variant="outline">GitHub</CustomButton>
        </Link>
      </div>
    </div>
  );
}
