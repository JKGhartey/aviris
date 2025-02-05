import fs from "fs-extra";
import path from "path";
import { copyComponent } from "../lib/helpers.js";

const COMPONENTS = {
  "custom-button": {
    name: "CustomButton",
    files: ["CustomButton.tsx"],
    dependencies: [
      "@radix-ui/react-slot",
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
    ],
    baseComponents: ["Button"],
  },
};

export async function addComponent(componentName) {
  try {
    const component = COMPONENTS[componentName];
    if (!component) {
      console.error(
        `Component "${componentName}" not found. Use 'aviris list' to see available components.`
      );
      return;
    }

    // Ensure the custom components directory exists
    const customComponentsDir = path.join(
      process.cwd(),
      "app/components/custom"
    );
    await fs.ensureDir(customComponentsDir);

    // Copy the component files
    for (const file of component.files) {
      await copyComponent(file, customComponentsDir);
    }

    console.log(`✅ Successfully added ${component.name} component`);

    // Log dependencies that need to be installed
    if (component.dependencies.length > 0) {
      console.log("\nRequired dependencies:");
      console.log(`bun add ${component.dependencies.join(" ")}`);
    }

    // Log base components that need to be installed
    if (component.baseComponents.length > 0) {
      console.log("\nRequired base components:");
      component.baseComponents.forEach((baseComponent) => {
        console.log(`bunx shadcn-ui@latest add ${baseComponent.toLowerCase()}`);
      });
    }
  } catch (error) {
    console.error("Error adding component:", error.message);
  }
}
