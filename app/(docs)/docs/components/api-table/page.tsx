import { Metadata } from "next";
import { ApiTable } from "@/components/custom/ApiTable";
import { ComponentPreview } from "@/components/custom/ComponentPreview";
import { InstallationSection } from "@/components/custom/InstallationSection";

export const metadata: Metadata = {
  title: "API Table",
  description: "A reusable table component for displaying API documentation.",
};

const apiTableCode = `import { ApiTable } from "aviris-components";

const properties = [
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: "The size of the component.",
  },
  {
    name: "variant",
    type: '"default" | "ghost"',
    defaultValue: '"default"',
    description: "The visual style of the component.",
  },
];

export default function ApiTableDemo() {
  return (
    <ApiTable
      title="Component Props"
      description="The available props for this component."
      properties={properties}
    />
  );
}`;

const withoutDefaultCode = `import { ApiTable } from "aviris-components";

const properties = [
  {
    name: "icon",
    type: "React.ReactNode",
    description: "Required. The icon to display.",
  },
  {
    name: "label",
    type: "string",
    description: "Required. The label text.",
  },
];

export default function ApiTableDemo() {
  return (
    <ApiTable
      title="Interface Properties"
      properties={properties}
      showDefault={false}
    />
  );
}`;

const propDefinitions = [
  {
    name: "title",
    type: "string",
    description: "Optional title to display above the table.",
  },
  {
    name: "description",
    type: "string",
    description: "Optional description text to display below the title.",
  },
  {
    name: "properties",
    type: "Property[]",
    description: "Array of properties to display in the table.",
  },
  {
    name: "showDefault",
    type: "boolean",
    defaultValue: "true",
    description: "Whether to show the Default column.",
  },
];

const propertyDefinitions = [
  {
    name: "name",
    type: "string",
    description: "Required. The name of the property.",
  },
  {
    name: "type",
    type: "string",
    description: "Required. The type definition of the property.",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "Optional default value of the property.",
  },
  {
    name: "description",
    type: "string",
    description: "Required. Description of the property.",
  },
];

export default function ApiTablePage() {
  return (
    <div className="space-y-8">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        API Table
      </h1>
      <p className="leading-7 text-muted-foreground">
        A reusable table component for displaying API documentation with
        consistent styling.
      </p>

      <InstallationSection component="api-table" />

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview code={apiTableCode}>
          <ApiTable
            title="Component Props"
            description="The available props for this component."
            properties={[
              {
                name: "size",
                type: '"sm" | "md" | "lg"',
                defaultValue: '"md"',
                description: "The size of the component.",
              },
              {
                name: "variant",
                type: '"default" | "ghost"',
                defaultValue: '"default"',
                description: "The visual style of the component.",
              },
            ]}
          />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Without Default Column
        </h2>
        <p className="leading-7 text-muted-foreground">
          Use the showDefault prop to hide the Default column when displaying
          interface properties.
        </p>
        <ComponentPreview code={withoutDefaultCode}>
          <ApiTable
            title="Interface Properties"
            properties={[
              {
                name: "icon",
                type: "React.ReactNode",
                description: "Required. The icon to display.",
              },
              {
                name: "label",
                type: "string",
                description: "Required. The label text.",
              },
            ]}
            showDefault={false}
          />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <ApiTable properties={propDefinitions} />

        <ApiTable
          title="Property Definition"
          description="The shape of each property in the properties array."
          properties={propertyDefinitions}
          showDefault={false}
        />
      </div>
    </div>
  );
}
