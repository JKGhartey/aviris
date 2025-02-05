const COMPONENTS = {
  "custom-button": {
    name: "CustomButton",
    description: "A customized button component based on shadcn/ui Button",
    dependencies: [
      "@radix-ui/react-slot",
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
    ],
    baseComponents: ["Button"],
  },
};

export function listComponents() {
  console.log("\nAvailable components:\n");

  Object.entries(COMPONENTS).forEach(([key, component]) => {
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
