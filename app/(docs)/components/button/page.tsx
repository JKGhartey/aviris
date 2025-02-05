import { CustomButton } from "@/components/custom/CustomButton";
import Link from "next/link";

export default function ButtonPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Button
          </h1>
          <p className="text-lg text-muted-foreground">
            A button component with multiple styles and states.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Link
            href="https://github.com/yourusername/aviris"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:underline"
          >
            View on GitHub
          </Link>
        </div>
      </div>

      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-4">
          <div className="grid gap-4">
            <div className="space-y-4">
              <h2 className="font-heading text-xl font-semibold tracking-tight">
                Installation
              </h2>
              <div className="rounded-md bg-muted px-4 py-3 font-mono text-sm">
                yarn aviris add custom-button
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-heading text-xl font-semibold tracking-tight">
                Usage
              </h2>
              <div className="rounded-md border">
                <div className="flex items-center gap-4 p-4">
                  <CustomButton>Default Button</CustomButton>
                  <CustomButton variant="secondary">Secondary</CustomButton>
                  <CustomButton variant="destructive">Destructive</CustomButton>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-heading text-xl font-semibold tracking-tight">
                Variants
              </h2>
              <div className="rounded-md border">
                <div className="flex flex-wrap items-center gap-4 p-4">
                  <CustomButton variant="outline">Outline</CustomButton>
                  <CustomButton variant="ghost">Ghost</CustomButton>
                  <CustomButton variant="link">Link</CustomButton>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-heading text-xl font-semibold tracking-tight">
                Sizes
              </h2>
              <div className="rounded-md border">
                <div className="flex items-center gap-4 p-4">
                  <CustomButton size="sm">Small</CustomButton>
                  <CustomButton size="default">Default</CustomButton>
                  <CustomButton size="lg">Large</CustomButton>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-heading text-xl font-semibold tracking-tight">
                States
              </h2>
              <div className="rounded-md border">
                <div className="flex items-center gap-4 p-4">
                  <CustomButton disabled>Disabled</CustomButton>
                  <CustomButton isLoading>Loading</CustomButton>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-heading text-xl font-semibold tracking-tight">
                Custom Styles
              </h2>
              <div className="rounded-md border">
                <div className="flex items-center gap-4 p-4">
                  <CustomButton customClassName="bg-gradient-to-r from-pink-500 to-violet-500 text-white">
                    Gradient
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            API Reference
          </h2>
          <div className="rounded-md border">
            <div className="overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50 text-left">
                    <th className="p-4 font-medium">Prop</th>
                    <th className="p-4 font-medium">Type</th>
                    <th className="p-4 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-mono">variant</td>
                    <td className="p-4 font-mono">ButtonVariant</td>
                    <td className="p-4">Button style variant</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-mono">size</td>
                    <td className="p-4 font-mono">ButtonSize</td>
                    <td className="p-4">Button size</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-mono">isLoading</td>
                    <td className="p-4 font-mono">boolean</td>
                    <td className="p-4">Show loading state</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono">customClassName</td>
                    <td className="p-4 font-mono">string</td>
                    <td className="p-4">Additional custom styles</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
