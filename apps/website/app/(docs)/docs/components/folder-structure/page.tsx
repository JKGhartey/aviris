import type { Metadata } from "next";
import { FolderStructure } from "@/components/custom/FolderStructure";
import { ComponentPreview } from "@/components/custom/ComponentPreview";
import { CodeBlock } from "@/components/custom/CodeBlock";
import { ApiTable } from "@/components/custom/ApiTable";
import { Paintbrush } from "lucide-react";

export const metadata: Metadata = {
  title: "Folder Structure",
  description:
    "A tree-like component for displaying file and directory structures with smooth animations and customizable styles.",
};

const basicCode = `import { FolderStructure } from "aviris-components";

const tree = [
  {
    name: "project-root",
    children: [
      {
        name: "src",
        children: [
          { name: "components" },
          { name: "pages" },
          { name: "styles" },
        ],
      },
      { name: "package.json" },
      { name: "README.md" },
    ],
  },
];

export default function FolderStructureDemo() {
  return <FolderStructure tree={tree} />;
}`;

const customizationCode = `import { FolderStructure } from "aviris-components";

// Custom SVG icons as React components
function ProjectIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3h18v18H3z" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

function ComponentIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 7v10c0 2.2 3.6 4 8 4s8-1.8 8-4V7" />
      <path d="M20 7c0 2.2-3.6 4-8 4s-8-1.8-8-4" />
      <path d="M12 3c4.4 0 8 1.8 8 4s-3.6 4-8 4-8-1.8-8-4 3.6-4 8-4" />
    </svg>
  );
}

const customTree = [
  {
    name: "my-project",
    icon: ProjectIcon, // Custom SVG icon for root
    children: [
      {
        name: "src",
        children: [
          {
            name: "components",
            icon: ComponentIcon, // Custom SVG icon for components
            children: [
              { name: "Button.tsx" },
              { name: "Card.tsx" },
              { name: "styles.css" },
            ],
          },
          { name: "pages" },
          { name: "assets" },
        ],
      },
      { name: "package.json" },
      { name: "README.md" },
    ],
  },
];

export default function CustomFolderStructureDemo() {
  return (
    <FolderStructure
      tree={customTree}
      className="border rounded-lg p-4 bg-muted/5"
      defaultExpanded
    />
  );
}`;

const propDefinitions = [
  {
    name: "tree",
    type: "TreeNode[]",
    description: "Required. The tree data structure to display.",
  },
  {
    name: "showIcons",
    type: "boolean",
    defaultValue: "true",
    description: "Whether to show file/folder icons.",
  },
  {
    name: "expandable",
    type: "boolean",
    defaultValue: "true",
    description: "Whether to allow expanding/collapsing folders.",
  },
  {
    name: "defaultExpanded",
    type: "boolean",
    defaultValue: "false",
    description: "Whether all folders should be expanded by default.",
  },
  {
    name: "animate",
    type: "boolean",
    defaultValue: "true",
    description: "Whether to animate folder expansion/collapse.",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    defaultValue: '"default"',
    description: "The size variant of the component.",
  },
  {
    name: "variant",
    type: '"default" | "muted"',
    defaultValue: '"default"',
    description: "The color variant of the component.",
  },
  {
    name: "density",
    type: '"compact" | "default" | "comfortable"',
    defaultValue: '"default"',
    description: "The spacing density between items.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes to apply.",
  },
];

const treeNodeDefinitions = [
  {
    name: "name",
    type: "string",
    description: "Required. The name of the file or folder.",
  },
  {
    name: "children",
    type: "TreeNode[]",
    description: "Optional. Array of child nodes for folders.",
  },
];

const demoTree = [
  {
    name: "my-project",
    children: [
      {
        name: "src",
        children: [
          {
            name: "components",
            children: [
              { name: "Button.tsx" },
              { name: "Card.tsx" },
              { name: "styles.css" },
            ],
          },
          { name: "pages" },
          {
            name: "assets",
            children: [
              { name: "logo.svg" },
              { name: "hero.png" },
              { name: "video.mp4" },
            ],
          },
        ],
      },
      { name: "package.json" },
      { name: "tsconfig.json" },
      { name: ".env" },
      { name: "README.md" },
    ],
  },
];

const customTree = [
  {
    name: "my-project",
    children: [
      {
        name: "src",
        children: [
          {
            name: "components",
            children: [
              { name: "Button.tsx" },
              { name: "Card.tsx" },
              { name: "styles.css" },
            ],
          },
          { name: "pages" },
          { name: "assets" },
        ],
      },
      { name: "package.json" },
      { name: "README.md" },
    ],
  },
];

export default function FolderStructurePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Folder Structure
        </h1>
        <p className="text-lg text-muted-foreground">
          A tree-like component for displaying file and directory structures
          with smart file type detection and smooth animations.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <p className="leading-7 text-muted-foreground">
          The component provides an interactive way to display hierarchical file
          structures with automatic file type icons and expandable folders.
        </p>
        <ComponentPreview code={basicCode}>
          <FolderStructure tree={demoTree} className="max-w-md" />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Customization
        </h2>
        <p className="leading-7 text-muted-foreground">
          The component automatically detects file types and displays
          appropriate icons, but you can also provide custom icons for any file
          or folder. It supports various file extensions including code files,
          images, videos, and configuration files.
        </p>
        <ComponentPreview code={customizationCode}>
          <FolderStructure
            tree={customTree}
            className="max-w-md border rounded-lg p-4 bg-muted/5"
            defaultExpanded
          />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Custom Icons
        </h2>
        <p className="leading-7 text-muted-foreground">
          While the component provides automatic file type detection, you can
          override any file or folder icon using the <code>icon</code> property.
          Icons can be custom SVG components or Lucide icons that follow the
          same interface.
        </p>
        <div className="my-6 flex flex-col gap-4">
          <div className="rounded-lg border bg-card text-card-foreground">
            <div className="flex items-center gap-3 border-b p-4">
              <div className="rounded-full bg-primary/10 p-2.5">
                <Paintbrush className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Icon Requirements</h3>
            </div>
            <div className="p-6">
              <ul className="grid gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1">
                    <svg
                      className="h-2 w-2 fill-primary"
                      viewBox="0 0 6 6"
                      aria-hidden="true"
                    >
                      <circle cx="3" cy="3" r="3" />
                    </svg>
                  </span>
                  <span>
                    Icons should be SVG components that accept standard props (
                    <code>size</code>, <code>className</code>,{" "}
                    <code>stroke</code>, etc.)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1">
                    <svg
                      className="h-2 w-2 fill-primary"
                      viewBox="0 0 6 6"
                      aria-hidden="true"
                    >
                      <circle cx="3" cy="3" r="3" />
                    </svg>
                  </span>
                  <span>
                    SVGs should use <code>currentColor</code> for stroke/fill to
                    support theming
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1">
                    <svg
                      className="h-2 w-2 fill-primary"
                      viewBox="0 0 6 6"
                      aria-hidden="true"
                    >
                      <circle cx="3" cy="3" r="3" />
                    </svg>
                  </span>
                  <span>
                    Icons should have a <code>viewBox</code> of "0 0 24 24" for
                    consistent sizing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-primary/10 p-1">
                    <svg
                      className="h-2 w-2 fill-primary"
                      viewBox="0 0 6 6"
                      aria-hidden="true"
                    >
                      <circle cx="3" cy="3" r="3" />
                    </svg>
                  </span>
                  <span>Icons are rendered at 16x16 pixels by default</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <ApiTable properties={propDefinitions} />

        <ApiTable
          title="TreeNode Interface"
          properties={[
            ...treeNodeDefinitions,
            {
              name: "icon",
              type: "LucideIcon",
              description: "Optional icon override for the node.",
            },
          ]}
          showDefault={false}
        />
      </div>
    </div>
  );
}
