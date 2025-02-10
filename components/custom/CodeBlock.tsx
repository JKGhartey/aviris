"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn, copyToClipboard } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabTriggerStyles = cn(
  "relative rounded-none border-b-2 border-b-transparent",
  "bg-transparent px-4 pb-3 pt-2 font-mono text-sm font-medium",
  "text-muted-foreground shadow-none hover:text-foreground",
  "data-[state=active]:border-b-primary",
  "data-[state=active]:text-foreground",
  "data-[state=active]:shadow-none",
  "transition-colors"
);

interface CodeProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string | Record<string, string>;
  showLineNumbers?: boolean;
  hasTabs?: boolean;
  language?: string;
  showLanguage?: boolean;
}

interface CodeHeaderProps {
  showLanguage?: boolean;
  language?: string;
  onCopy: () => void;
  copied: boolean;
}

interface CodeContentProps {
  content: string;
  showLineNumbers?: boolean;
  onCopy: VoidFunction;
  copied: boolean;
  className?: string;
}

interface TabsSectionProps {
  code: Record<string, string>;
  copied: boolean;
  onCopy: (text: string) => Promise<void>;
  showLineNumbers?: boolean;
  language?: string;
  showLanguage?: boolean;
  className?: string;
}

function CodeHeader({
  showLanguage,
  language,
  onCopy,
  copied,
}: CodeHeaderProps) {
  return (
    <div className="flex items-center justify-end border-b px-4 py-1">
      {showLanguage && (
        <span className="text-xs font-medium text-muted-foreground">
          {language || "plaintext"}
        </span>
      )}
      <Button
        size="icon"
        variant="ghost"
        className="h-8 w-8"
        onClick={onCopy}
        title={copied ? "Copied!" : "Copy code"}
      >
        {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
        <span className="sr-only">Copy code</span>
      </Button>
    </div>
  );
}

function CodeContent({
  content,
  showLineNumbers,
  onCopy,
  copied,
  className,
}: CodeContentProps) {
  const lines = React.useMemo(() => content.split("\n"), [content]);

  return (
    <div className="group relative">
      <pre
        className={cn(
          "overflow-x-auto py-4 text-sm",
          showLineNumbers ? "pl-8" : "px-4",
          className
        )}
      >
        {showLineNumbers ? (
          <code className="relative grid">
            {lines.map((line, i) => (
              <span key={i} className="grid grid-cols-[auto,1fr] gap-4">
                <span className="text-muted-foreground select-none">
                  {i + 1}
                </span>
                <span>{line}</span>
              </span>
            ))}
          </code>
        ) : (
          <code>{content}</code>
        )}
      </pre>
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-3 top-3 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
        onClick={onCopy}
        title={copied ? "Copied!" : "Copy code"}
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        <span className="sr-only">Copy code</span>
      </Button>
    </div>
  );
}

function TabsSection({
  code,
  copied,
  onCopy,
  showLineNumbers,
  language,
  showLanguage,
  className,
}: TabsSectionProps) {
  const tabs = Object.keys(code);
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="relative">
      <TabsList className="h-11 w-full justify-start rounded-none border-b bg-transparent p-0">
        {tabs.map((tab) => (
          <TabsTrigger key={tab} value={tab} className={tabTriggerStyles}>
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(code).map(([tab, content]) => (
        <TabsContent
          key={tab}
          value={tab}
          className="relative mt-0 rounded-none border-0"
        >
          <CodeContent
            content={content}
            showLineNumbers={showLineNumbers}
            onCopy={() => onCopy(content)}
            copied={copied}
            className={className}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}

export function CodeBlock({
  code,
  showLineNumbers = false,
  hasTabs = false,
  language,
  showLanguage = false,
  className,
  ...props
}: CodeProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = React.useCallback(async (text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  if (hasTabs && typeof code === "object") {
    return (
      <div className="rounded-md border bg-muted/40">
        <TabsSection
          code={code}
          copied={copied}
          onCopy={handleCopy}
          showLineNumbers={showLineNumbers}
          language={language}
          showLanguage={showLanguage}
          className={className}
        />
      </div>
    );
  }

  const content = typeof code === "string" ? code : Object.values(code)[0];

  return (
    <div className="rounded-md border bg-muted/40">
      <CodeContent
        content={content}
        showLineNumbers={showLineNumbers}
        onCopy={() => handleCopy(content)}
        copied={copied}
        className={className}
      />
    </div>
  );
}
