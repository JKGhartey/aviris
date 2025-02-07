import { Metadata } from "next";
import { SectionHeader } from "@/components/custom/SectionHeader";
import { ComponentPreview } from "@/components/custom/ComponentPreview";
import { InstallationSection } from "@/components/custom/InstallationSection";
import { ApiTable } from "@/components/custom/ApiTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Section Header",
  description:
    "A flexible header component for sections with title, description, and actions.",
};

const basicCode = `import { SectionHeader } from "aviris-components";

export default function SectionHeaderDemo() {
  return (
    <SectionHeader
      title="Team Members"
      description="Manage your team members and their account permissions here."
      headingLevel="h3"
    />
  );
}`;

const withActionsCode = `import { SectionHeader } from "aviris-components";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function SectionHeaderDemo() {
  return (
    <SectionHeader
      title="Team Members"
      description="Manage your team members and their account permissions here."
      actions={
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Member
        </Button>
      }
      headingLevel="h3"
    />
  );
}`;

const alignmentCode = `import { SectionHeader } from "aviris-components";

export default function SectionHeaderDemo() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Left Aligned"
        description="Default alignment is left."
        align="left"
        headingLevel="h3"
      />
      <SectionHeader
        title="Center Aligned"
        description="Center aligned content."
        align="center"
        headingLevel="h3"
      />
      <SectionHeader
        title="Right Aligned"
        description="Right aligned content."
        align="right"
        headingLevel="h3"
      />
    </div>
  );
}`;

const sizesCode = `import { SectionHeader } from "aviris-components";

export default function SectionHeaderDemo() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Small Header"
        description="A small section header."
        size="sm"
        headingLevel="h3"
      />
      <SectionHeader
        title="Default Header"
        description="A default section header."
        headingLevel="h3"
      />
      <SectionHeader
        title="Large Header"
        description="A large section header."
        size="lg"
        headingLevel="h3"
      />
    </div>
  );
}`;

const propDefinitions = [
  {
    name: "title",
    type: "string",
    description: "Required. The title text to display.",
  },
  {
    name: "description",
    type: "string",
    description: "Optional description text to display below the title.",
  },
  {
    name: "actions",
    type: "React.ReactNode",
    description: "Optional actions to display below the description.",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    defaultValue: '"default"',
    description: "The size variant of the header.",
  },
  {
    name: "align",
    type: '"left" | "center" | "right"',
    defaultValue: '"left"',
    description: "The alignment of the header content.",
  },
  {
    name: "animate",
    type: "boolean",
    defaultValue: "true",
    description: "Whether to enable the entrance animation.",
  },
  {
    name: "titleClassName",
    type: "string",
    description: "Optional additional classes for the title element.",
  },
  {
    name: "descriptionClassName",
    type: "string",
    defaultValue: '"text-muted-foreground leading-7"',
    description: "Optional additional classes for the description element.",
  },
  {
    name: "actionsClassName",
    type: "string",
    defaultValue: '"flex items-center gap-4"',
    description: "Optional additional classes for the actions container.",
  },
];

export default function SectionHeaderPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Section Header"
        description="A flexible header component for sections with title, description, and actions."
        size="lg"
        headingLevel="h1"
      />

      <InstallationSection component="section-header" />

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview code={basicCode} hasAnimation>
          <SectionHeader
            title="Team Members"
            description="Manage your team members and their account permissions here."
            headingLevel="h3"
          />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          With Actions
        </h2>
        <ComponentPreview code={withActionsCode} hasAnimation>
          <SectionHeader
            title="Team Members"
            description="Manage your team members and their account permissions here."
            actions={
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Member
              </Button>
            }
            headingLevel="h3"
          />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Alignment
        </h2>
        <ComponentPreview code={alignmentCode} hasAnimation>
          <div className="space-y-8">
            <SectionHeader
              title="Left Aligned"
              description="Default alignment is left."
              align="left"
              headingLevel="h3"
            />
            <SectionHeader
              title="Center Aligned"
              description="Center aligned content."
              align="center"
              headingLevel="h3"
            />
            <SectionHeader
              title="Right Aligned"
              description="Right aligned content."
              align="right"
              headingLevel="h3"
            />
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Sizes
        </h2>
        <ComponentPreview code={sizesCode} hasAnimation>
          <div className="space-y-8">
            <SectionHeader
              title="Small Header"
              description="A small section header."
              size="sm"
              headingLevel="h3"
            />
            <SectionHeader
              title="Default Header"
              description="A default section header."
              headingLevel="h3"
            />
            <SectionHeader
              title="Large Header"
              description="A large section header."
              size="lg"
              headingLevel="h3"
            />
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <ApiTable properties={propDefinitions} />
      </div>
    </div>
  );
}
