import { CodeBlock } from "@/components/custom/CodeBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation",
  description:
    "Follow these steps to install and set up Aviris in your project.",
};

const installCommand = {
  npm: "npm install -g aviris-cli",
  pnpm: "pnpm add -g aviris-cli",
  yarn: "yarn global add aviris-cli",
  bun: "bun add -g aviris-cli",
};

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("tailwindcss-animate")
  ],
}`;

const usageExample = `import { CustomButton } from "@/components/custom/CustomButton";

export default function MyComponent() {
  return <CustomButton>Click me</CustomButton>;
}`;

const addComponentCommand = {
  npm: "npx aviris add custom-button",
  pnpm: "pnpm dlx aviris add custom-button",
  yarn: "yarn dlx aviris add custom-button",
  bun: "bunx aviris add custom-button",
};

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Installation
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Follow these steps to install and set up Aviris in your project.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
          1. Install CLI Tool
        </h2>
        <p className="leading-7">First, install the Aviris CLI globally:</p>
        <CodeBlock code={installCommand} hasTabs language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
          2. Configure Tailwind CSS
        </h2>
        <p className="leading-7">
          Add the following configuration to your tailwind.config.js:
        </p>
        <CodeBlock code={tailwindConfig} language="javascript" />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
          3. Add Components
        </h2>
        <p className="leading-7">
          Use the CLI to add components to your project:
        </p>
        <CodeBlock code={addComponentCommand} hasTabs language="bash" />
        <p className="text-sm text-muted-foreground">
          This will copy the component files to your project and install any
          required dependencies automatically.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
          4. Usage
        </h2>
        <p className="leading-7">Import and use components in your code:</p>
        <CodeBlock code={usageExample} language="tsx" />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
          Requirements
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>React 18 or higher</li>
          <li>Next.js 13 or higher</li>
          <li>Node.js 16.8 or higher</li>
          <li>TailwindCSS 3.3 or higher</li>
        </ul>
      </div>
    </div>
  );
}
