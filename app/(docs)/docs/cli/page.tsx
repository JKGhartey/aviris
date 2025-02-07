import { Metadata } from "next";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { CodeBlock } from "@/components/custom/CodeBlock";

export const metadata: Metadata = {
  title: "CLI Usage",
  description:
    "Learn how to use the Aviris CLI to install and manage components.",
};

const installCode = `npm install -g aviris-cli
# or
yarn global add aviris-cli`;

const listComponentsCode = `aviris list

Available components:

CustomButton (custom-button)
Description: A customized button component based on shadcn/ui Button
Required base components: Button
Dependencies: @radix-ui/react-slot, class-variance-authority, clsx, tailwind-merge`;

const addComponentCode = `aviris add custom-button

✅ Successfully added CustomButton component

Required dependencies:
yarn add @radix-ui/react-slot class-variance-authority clsx tailwind-merge

Required base components:
yarn dlx shadcn-ui@latest add button`;

const setupCode = `module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/aviris-components/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("tailwindcss-animate")],
}`;

export default function CliPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="CLI Usage"
        description="Learn how to use the Aviris CLI to install and manage components."
        size="lg"
        headingLevel="h1"
      />

      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <p className="leading-7 text-muted-foreground">
          First, install the Aviris CLI globally using npm or yarn:
        </p>
        <CodeBlock code={installCode} language="bash" />
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Project Setup
        </h2>
        <p className="leading-7 text-muted-foreground">
          Before using Aviris components, make sure your Tailwind CSS
          configuration includes the necessary paths and plugins:
        </p>
        <CodeBlock code={setupCode} language="javascript" />
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          List Available Components
        </h2>
        <p className="leading-7 text-muted-foreground">
          To see all available components and their requirements:
        </p>
        <CodeBlock code={listComponentsCode} language="bash" />
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Add a Component
        </h2>
        <p className="leading-7 text-muted-foreground">
          To add a component to your project:
        </p>
        <CodeBlock code={addComponentCode} language="bash" />
        <div className="space-y-4 text-muted-foreground">
          <p className="leading-7">The CLI will:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Copy the component files to your project's components/custom
              directory
            </li>
            <li>Display the required dependencies to install</li>
            <li>Show any required base components from shadcn/ui</li>
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Component Structure
        </h2>
        <p className="leading-7 text-muted-foreground">
          Components are installed in your project's{" "}
          <code className="font-mono text-sm">components/custom</code>{" "}
          directory. This allows you to:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
          <li>Customize the components to match your needs</li>
          <li>Keep full control over the component code</li>
          <li>Maintain type safety and IDE support</li>
        </ul>
      </div>
    </div>
  );
}
