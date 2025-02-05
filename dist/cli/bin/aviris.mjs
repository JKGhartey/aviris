#!/usr/bin/env node

// cli/bin/aviris.ts
import { program } from "commander";

// cli/commands/add.ts
import fs2 from "fs-extra";
import path2 from "path";

// cli/lib/helpers.js
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
async function copyComponent(fileName, targetDir) {
  const sourcePath = path.join(
    __dirname,
    "../../app/components/custom",
    fileName
  );
  const targetPath = path.join(targetDir, fileName);
  try {
    await fs.copy(sourcePath, targetPath);
    console.log(`Copied ${fileName} to ${targetDir}`);
  } catch (error) {
    throw new Error(`Failed to copy ${fileName}: ${error.message}`);
  }
}

// cli/commands/add.ts
var COMPONENTS = {
  "custom-button": {
    name: "CustomButton",
    files: ["CustomButton.tsx"],
    dependencies: [
      "@radix-ui/react-slot",
      "class-variance-authority",
      "clsx",
      "tailwind-merge"
    ],
    baseComponents: ["Button"]
  }
};
async function addComponent(componentName) {
  try {
    const component = COMPONENTS[componentName];
    if (!component) {
      console.error(
        `Component "${componentName}" not found. Use 'aviris list' to see available components.`
      );
      return;
    }
    const customComponentsDir = path2.join(
      process.cwd(),
      "components/custom"
    );
    await fs2.ensureDir(customComponentsDir);
    for (const file of component.files) {
      await copyComponent(file, customComponentsDir);
    }
    console.log(`\u2705 Successfully added ${component.name} component`);
    if (component.dependencies.length > 0) {
      console.log("\nRequired dependencies:");
      console.log(`yarn add ${component.dependencies.join(" ")}`);
    }
    if (component.baseComponents.length > 0) {
      console.log("\nRequired base components:");
      component.baseComponents.forEach((baseComponent) => {
        console.log(
          `yarn dlx shadcn-ui@latest add ${baseComponent.toLowerCase()}`
        );
      });
    }
  } catch (error) {
    console.error("Error adding component:", error.message);
  }
}

// cli/commands/list.ts
var COMPONENTS2 = {
  "custom-button": {
    name: "CustomButton",
    description: "A customized button component based on shadcn/ui Button",
    dependencies: [
      "@radix-ui/react-slot",
      "class-variance-authority",
      "clsx",
      "tailwind-merge"
    ],
    baseComponents: ["Button"]
  }
};
function listComponents() {
  console.log("\nAvailable components:\n");
  Object.entries(COMPONENTS2).forEach(([key, component]) => {
    console.log(`${component.name} (${key})`);
    console.log(`Description: ${component.description}`);
    console.log(
      "Required base components:",
      component.baseComponents.join(", ")
    );
    console.log("Dependencies:", component.dependencies.join(", "));
    console.log("");
  });
}

// cli/bin/aviris.ts
program.version("1.0.0").description("Aviris CLI for installing and managing UI components");
program.command("add <component>").description("Add a component to your project").action(addComponent);
program.command("list").description("List all available components").action(listComponents);
program.parse(process.argv);
