export default function ComponentsIntroduction() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Components
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A collection of pre-built components based on shadcn/ui with
          additional features and customizations.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Installation
        </h2>
        <p className="leading-7">
          Components can be installed individually using the Aviris CLI:
        </p>
        <div className="rounded-md bg-muted px-4 py-3">
          <code>yarn aviris add component-name</code>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Available Components
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a
            href="/components/button"
            className="group relative rounded-lg border p-6 hover:border-foreground"
          >
            <h3 className="font-semibold">Button</h3>
            <p className="text-sm text-muted-foreground">
              Clickable button with multiple styles and states.
            </p>
          </a>
          {/* Add more component cards here as we create them */}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Features
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Built on top of shadcn/ui components</li>
          <li>Additional features and customizations</li>
          <li>Easy installation through CLI</li>
          <li>TypeScript support</li>
          <li>Tailwind CSS styling</li>
          <li>Fully customizable</li>
        </ul>
      </div>
    </div>
  );
}
