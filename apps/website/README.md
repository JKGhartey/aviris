# Aviris Components

A collection of customized shadcn/ui components with additional features and customizations.

## Installation

1. Install the package:

```bash
# Using yarn
yarn add aviris-components

# Using npm
npm install aviris-components

# Using pnpm
pnpm add aviris-components
```

2. Install the CLI globally:

```bash
# Using yarn
yarn global add aviris-components

# Using npm
npm install -g aviris-components

# Using pnpm
pnpm add -g aviris-components
```

3. Add the required Tailwind CSS configuration:

```js
// tailwind.config.js or tailwind.config.ts
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/aviris-components/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
    },
  },
  plugins: [animate],
};
```

## Usage

1. Add components using the CLI:

```bash
# Using yarn
yarn aviris add custom-button

# Using npm
npx aviris add custom-button

# Using pnpm
pnpm aviris add custom-button
```

2. Import and use components in your code:

```tsx
import { CustomButton } from "aviris-components";

export default function MyComponent() {
  return <CustomButton variant="default">Click me</CustomButton>;
}
```

## Available Components

- **CustomButton**: A customized button component with loading states and gradient support
  - Variants: default, secondary, destructive, outline, ghost, link
  - Sizes: sm, default, lg
  - States: loading, disabled
  - Custom styles support

## Documentation

Visit our documentation at [https://yourdomain.com/docs](https://yourdomain.com/docs) for detailed usage instructions and examples.

## Requirements

- React 19 or higher
- Next.js 15 or higher
- TailwindCSS 3.4 or higher

## License

MIT © [Your Name]
