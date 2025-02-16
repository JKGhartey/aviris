interface InstallConfig {
  pkg: string;
  cli?: {
    command: string;
    args?: string[];
  };
}

type ComponentInstallation = Record<string, InstallConfig>;

export const installation: ComponentInstallation = {
  code: {
    pkg: "aviris-components",
    cli: {
      command: "aviris",
      args: ["add", "code"],
    },
  },
  button: {
    pkg: "aviris-components",
    cli: {
      command: "aviris",
      args: ["add", "button"],
    },
  },
  // Add more components here as needed
};

export function getInstallationConfig(
  component: string
): InstallConfig | undefined {
  return installation[component];
}

export function generateInstallCommands(config: InstallConfig) {
  const { cli } = config;

  if (cli) {
    const cliCommand = `${cli.command} ${cli.args?.join(" ")}`;
    return {
      npm: [cliCommand],
      yarn: [cliCommand],
      pnpm: [cliCommand],
    };
  }

  return {
    npm: [`npm install ${config.pkg}`],
    yarn: [`yarn add ${config.pkg}`],
    pnpm: [`pnpm add ${config.pkg}`],
  };
}
