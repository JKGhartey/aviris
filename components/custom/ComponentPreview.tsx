"use client";

import * as React from "react";
import { CodeBlock } from "./CodeBlock";
import { cn } from "@/lib/utils";
import { Eye, Code as CodeIcon, RotateCw } from "lucide-react";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The component to be rendered
   */
  children: React.ReactNode;
  /**
   * The code to be displayed in the code block
   */
  code: string;
  /**
   * Whether to show line numbers in the code block
   */
  showLineNumbers?: boolean;
  /**
   * The language of the code block
   */
  language?: string;
  /**
   * Whether the component has animations that can be replayed
   */
  hasAnimation?: boolean;
}

export function ComponentPreview({
  children,
  code,
  showLineNumbers = true,
  language = "tsx",
  hasAnimation = false,
  className,
  ...props
}: ComponentPreviewProps) {
  const [isCode, setIsCode] = React.useState(false);
  const [key, setKey] = React.useState(0);

  const handleReplay = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg border", className)}
      {...props}
    >
      <div className="flex h-11 items-center justify-between border-b bg-background px-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCode(false)}
            className={cn(
              "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50",
              !isCode && "bg-muted text-foreground"
            )}
          >
            <Eye className="mr-2 size-4" />
            Preview
          </button>
          <button
            onClick={() => setIsCode(true)}
            className={cn(
              "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50",
              isCode && "bg-muted text-foreground"
            )}
          >
            <CodeIcon className="mr-2 size-4" />
            Code
          </button>
        </div>
        {hasAnimation && !isCode && (
          <button
            onClick={handleReplay}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
          >
            <RotateCw className="size-4" />
            <span className="sr-only">Replay animation</span>
          </button>
        )}
      </div>
      <div className="relative">
        <div
          className={cn(
            "h-[350px] w-full transition-[transform,opacity]",
            isCode
              ? "pointer-events-none absolute inset-0 opacity-0 -translate-x-full"
              : "opacity-100 translate-x-0"
          )}
        >
          <div className="flex h-full items-center justify-center p-10">
            {React.cloneElement(children as React.ReactElement, {
              key,
              replay: key > 0,
            })}
          </div>
        </div>
        <div
          className={cn(
            "transition-[transform,opacity]",
            !isCode
              ? "pointer-events-none absolute inset-0 opacity-0 translate-x-full"
              : "opacity-100 translate-x-0"
          )}
        >
          <CodeBlock
            code={code}
            language={language}
            showLineNumbers={showLineNumbers}
            showLanguage
          />
        </div>
      </div>
    </div>
  );
}
