import Link from "next/link";
import { routes } from "@/constants/routes";
import { CodeBlock } from "@/components/custom/CodeBlock";

const features = [
  "Built on top of shadcn/ui components",
  "Additional features and customizations",
  "Easy installation through CLI",
  "TypeScript support",
  "Tailwind CSS styling",
  "Fully customizable",
];

const installCommand = {
  npm: "npm install -g aviris-cli",
  pnpm: "pnpm add -g aviris-cli",
  yarn: "yarn global add aviris-cli",
  bun: "bun add -g aviris-cli",
};

const addComponentCommand = {
  npm: "npx aviris add custom-button",
  pnpm: "pnpm dlx aviris add custom-button",
  yarn: "yarn dlx aviris add custom-button",
  bun: "bunx aviris add custom-button",
};

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
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
          Quick Start
        </h2>
        <p className="leading-7">Install the Aviris CLI globally:</p>
        <CodeBlock code={installCommand} hasTabs language="bash" />
        <p className="leading-7">Add components to your project:</p>
        <CodeBlock code={addComponentCommand} hasTabs language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
          Features
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
          Next Steps
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href={routes.docs.installation}
            className="group relative rounded-lg border p-6 hover:border-foreground"
          >
            <h3 className="font-semibold">Installation →</h3>
            <p className="text-sm text-muted-foreground">
              Step-by-step guide to install and set up Aviris in your project.
            </p>
          </Link>
          <Link
            href={routes.docs.components.root}
            className="group relative rounded-lg border p-6 hover:border-foreground"
          >
            <h3 className="font-semibold">Components →</h3>
            <p className="text-sm text-muted-foreground">
              Browse and learn how to use our collection of components.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
