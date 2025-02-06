import { CodeBlock } from "@/components/custom/CodeBlock";
import { ComponentPreview } from "@/components/custom/ComponentPreview";
import { InstallationSection } from "@/components/custom/InstallationSection";

const singleExample = `npm install aviris-components
# or
yarn add aviris-components
# or
pnpm add aviris-components`;

const tabbedExample = {
  npm: "npm install aviris-components",
  yarn: "yarn add aviris-components",
  pnpm: "pnpm add aviris-components",
};

const usageExample = {
  tsx: `import { CustomButton } from "aviris-components";

export default function MyComponent() {
  return <CustomButton>Click me</CustomButton>;
}`,
  jsx: `import { CustomButton } from "aviris-components";

export default function MyComponent() {
  return <CustomButton>Click me</CustomButton>;
}`,
};

export default function CodePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Code</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A code component with copy functionality and optional tabs.
        </p>
      </div>

      <InstallationSection component="code" />

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          With Tabs
        </h2>
        <ComponentPreview
          code={`import { CodeBlock } from "@/components/custom/CodeBlock";

const example = {
  npm: "npm install aviris-components",
  yarn: "yarn add aviris-components",
  pnpm: "pnpm add aviris-components",
};

export function CodeBlockDemo() {
  return <CodeBlock code={example} hasTabs />;
}`}
        >
          <CodeBlock code={tabbedExample} hasTabs />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Usage Example
        </h2>
        <ComponentPreview
          code={`import { CodeBlock } from "@/components/custom/CodeBlock";

const example = {
  tsx: \`import { CustomButton } from "aviris-components";

export default function MyComponent() {
  return <CustomButton>Click me</CustomButton>;
}\`,
  jsx: \`import { CustomButton } from "aviris-components";

export default function MyComponent() {
  return <CustomButton>Click me</CustomButton>;
}\`,
};

export function CodeBlockDemo() {
  return <CodeBlock code={example} hasTabs language="typescript" />;
}`}
        >
          <CodeBlock code={usageExample} hasTabs language="typescript" />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Without Line Numbers
        </h2>
        <ComponentPreview
          code={`import { CodeBlock } from "@/components/custom/CodeBlock";

export function CodeBlockDemo() {
  return (
    <CodeBlock
      code={\`import { CustomButton } from "aviris-components";

export default function MyComponent() {
  return <CustomButton>Click me</CustomButton>;
}\`}
      showLineNumbers={false}
      language="typescript"
      showLanguage
    />
  );
}`}
        >
          <CodeBlock
            code={usageExample.tsx}
            showLineNumbers={false}
            language="typescript"
            showLanguage
          />
        </ComponentPreview>
      </div>
    </div>
  );
}
