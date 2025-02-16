import { ComponentPreview } from "@/components/custom/ComponentPreview";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toolbar",
  description:
    "A component that displays both the rendered component and its source code.",
};

export default function PreviewPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>Component Preview</h1>
      <p>
        A component that displays both the rendered component and its source
        code.
      </p>

      <h2>Usage</h2>
      <ComponentPreview
        code={`import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <Button>
      Click me
    </Button>
  )
}`}
      >
        <Button>Click me</Button>
      </ComponentPreview>

      <h2>Props</h2>
      <ul>
        <li>
          <code>children</code> - The component to be rendered
        </li>
        <li>
          <code>code</code> - The source code to be displayed
        </li>
        <li>
          <code>showLineNumbers</code> - Whether to show line numbers in the
          code block (default: true)
        </li>
        <li>
          <code>language</code> - The language of the code block (default:
          &quot;tsx&quot;)
        </li>
      </ul>
    </div>
  );
}
