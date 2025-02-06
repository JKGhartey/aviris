#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// cli/bin/aviris.ts
var import_commander = require("commander");

// cli/commands/add.ts
var import_fs_extra2 = __toESM(require("fs-extra"));
var import_path2 = __toESM(require("path"));

// cli/lib/helpers.js
var import_fs_extra = __toESM(require("fs-extra"));
var import_path = __toESM(require("path"));
var import_url = require("url");
var import_meta = {};
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = import_path.default.dirname(__filename);
async function copyComponent(fileName, targetDir) {
  const sourcePath = import_path.default.join(
    __dirname,
    "../../app/components/custom",
    fileName
  );
  const targetPath = import_path.default.join(targetDir, fileName);
  try {
    await import_fs_extra.default.copy(sourcePath, targetPath);
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
    const customComponentsDir = import_path2.default.join(process.cwd(), "components/custom");
    await import_fs_extra2.default.ensureDir(customComponentsDir);
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
import_commander.program.version("1.0.0").description("Aviris CLI for installing and managing UI components");
import_commander.program.command("add <component>").description("Add a component to your project").action(addComponent);
import_commander.program.command("list").description("List all available components").action(listComponents);
import_commander.program.parse(process.argv);
