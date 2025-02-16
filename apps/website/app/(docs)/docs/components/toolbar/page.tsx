import { Metadata } from "next";
import { Toolbar } from "@/components/custom/Toolbar";
import { ComponentPreview } from "@/components/custom/ComponentPreview";
import { InstallationSection } from "@/components/custom/InstallationSection";
import { ApiTable } from "@/components/custom/ApiTable";
import {
  Mouse,
  Hand,
  Frame,
  Type,
  Square,
  Circle,
  Minus,
  Image,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Toolbar",
  description:
    "A Figma-inspired toolbar component for tool selection and controls.",
};

const toolbarCode = `import { Toolbar } from "aviris-components";

export default function ToolbarDemo() {
  return (
    <Toolbar />
  );
}`;

const customToolsCode = `import { Toolbar } from "aviris-components";
import { Pencil, Eraser, ColorPicker } from "lucide-react";

const customTools = [
  { icon: <Pencil size={16} />, label: "Draw", tooltip: "Draw Tool (B)" },
  { icon: <Eraser size={16} />, label: "Erase", tooltip: "Eraser Tool (E)" },
  { icon: <ColorPicker size={16} />, label: "Color", tooltip: "Color Picker (I)" },
];

export default function CustomToolbarDemo() {
  return (
    <Toolbar tools={customTools} />
  );
}`;

const tooltipToolbarCode = `import { Toolbar } from "aviris-components";

export default function TooltipToolbarDemo() {
  return (
    <Toolbar
      tools={[
        { icon: <Mouse size={16} />, label: "Select", tooltip: "Select Tool (V)" },
        { icon: <Hand size={16} />, label: "Hand", tooltip: "Pan Around (H)" },
      ]}
    />
  );
}`;

const propDefinitions = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"horizontal"',
    description: "The orientation of the toolbar.",
  },
  {
    name: "size",
    type: '"default" | "sm" | "lg"',
    defaultValue: '"default"',
    description: "The size of the toolbar.",
  },
  {
    name: "tools",
    type: "ToolItem[]",
    defaultValue: "defaultTools",
    description: "Array of tools to display in the toolbar.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "Additional CSS classes to apply.",
  },
];

const toolItemDefinitions = [
  {
    name: "icon",
    type: "React.ReactNode",
    description: "Required. The icon to display for the tool.",
  },
  {
    name: "label",
    type: "string",
    description: "Required. The name of the tool.",
  },
  {
    name: "tooltip",
    type: "string",
    description: "Optional tooltip text to show on hover.",
  },
  {
    name: "onClick",
    type: "() => void",
    description: "Optional click handler for the tool.",
  },
];

export default function ToolbarPage() {
  return (
    <div className="space-y-8">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Toolbar</h1>
      <p className="leading-7 text-muted-foreground">
        A Figma-inspired toolbar component for tool selection and controls.
      </p>

      <InstallationSection component="toolbar" />

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview code={toolbarCode}>
          <Toolbar className="w-fit" />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Custom Tools
        </h2>
        <ComponentPreview code={customToolsCode}>
          <Toolbar
            tools={[
              {
                icon: <Mouse size={16} />,
                label: "Select",
                tooltip: "Select (V)",
              },
              {
                icon: <Hand size={16} />,
                label: "Hand",
                tooltip: "Hand Tool (H)",
              },
              {
                icon: <Frame size={16} />,
                label: "Frame",
                tooltip: "Frame Tool (F)",
              },
            ]}
            className="w-fit"
          />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          With Tooltips
        </h2>
        <p className="leading-7 text-muted-foreground">
          Hover over the tools to see tooltips with keyboard shortcuts.
        </p>
        <ComponentPreview code={tooltipToolbarCode}>
          <Toolbar
            tools={[
              {
                icon: <Mouse size={16} />,
                label: "Select",
                tooltip: "Select Tool (V)",
              },
              {
                icon: <Hand size={16} />,
                label: "Hand",
                tooltip: "Pan Around (H)",
              },
            ]}
            className="w-fit"
          />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <ApiTable properties={propDefinitions} />

        <ApiTable
          title="ToolItem Interface"
          properties={toolItemDefinitions}
          showDefault={false}
        />
      </div>
    </div>
  );
}
