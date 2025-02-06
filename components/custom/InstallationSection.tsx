import { CodeBlock } from "./CodeBlock";
import {
  getInstallationConfig,
  generateInstallCommands,
} from "@/config/installation";

interface InstallationSectionProps {
  component: string;
}

export function InstallationSection({ component }: InstallationSectionProps) {
  const config = getInstallationConfig(component);
  if (!config) return null;

  const commands = generateInstallCommands(config);
  const installCode = Object.entries(commands).reduce(
    (acc, [pkg, cmds]) => ({
      ...acc,
      [pkg]: cmds.join("\n"),
    }),
    {}
  );

  return (
    <div className="space-y-4">
      <h2
        id="installation"
        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight"
      >
        Installation
      </h2>
      <CodeBlock code={installCode} hasTabs showLineNumbers={false} />
    </div>
  );
}
