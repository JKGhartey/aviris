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
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          1. Install Dependencies
        </h2>
        <p className="leading-7">
          First, install the required dependencies in your project:
        </p>
        <div className="rounded-md bg-muted px-4 py-3 font-mono text-sm">
          npm install aviris-components tailwindcss-animate
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          2. Install CLI Tool
        </h2>
        <p className="leading-7">Install the Aviris CLI globally:</p>
        <div className="rounded-md bg-muted px-4 py-3 font-mono text-sm">
          npm install -g aviris-components
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          3. Configure Tailwind CSS
        </h2>
        <p className="leading-7">
          Add the following configuration to your tailwind.config.js:
        </p>
        <div className="rounded-md bg-muted px-4 py-3 font-mono text-sm">
          {`module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/aviris-components/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("tailwindcss-animate")],
}`}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          4. Add Components
        </h2>
        <p className="leading-7">
          Use the CLI to add components to your project:
        </p>
        <div className="rounded-md bg-muted px-4 py-3 font-mono text-sm">
          aviris add custom-button
        </div>
        <p className="text-sm text-muted-foreground">
          This will copy the component files to your project and install any
          required dependencies.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          5. Usage
        </h2>
        <p className="leading-7">Import and use components in your code:</p>
        <div className="rounded-md bg-muted px-4 py-3 font-mono text-sm">
          {`import { CustomButton } from "aviris-components";

export default function MyComponent() {
  return <CustomButton>Click me</CustomButton>;
}`}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Requirements
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>React 19 or higher</li>
          <li>Next.js 15 or higher</li>
          <li>Node.js 16.8 or higher</li>
          <li>TailwindCSS 3.4 or higher</li>
        </ul>
      </div>
    </div>
  );
}
