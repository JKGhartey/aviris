"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn, copyToClipboard } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabTriggerStyles = cn(
  "relative rounded-none border-b-2 border-b-transparent",
  "bg-transparent px-4 pb-3 pt-2 font-medium",
  "text-muted-foreground shadow-none",
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

interface CodeContentProps
  extends Omit<React.HTMLAttributes<HTMLPreElement>, "children"> {
  content: string;
  showLineNumbers?: boolean;
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
    <div className="flex items-center border-b px-4 py-1">
      {showLanguage ? (
        <span className="text-xs font-medium text-muted-foreground">
          {language || "plaintext"}
        </span>
      ) : (
        <span className="flex-1" />
      )}
      <Button
        size="icon"
        variant="ghost"
        className="h-8 w-8 ml-auto"
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
  className,
  ...props
}: CodeContentProps) {
  const lines = React.useMemo(() => content.split("\n"), [content]);

  return (
    <pre
      className={cn(
        "overflow-x-auto py-4",
        showLineNumbers ? "pl-8" : "px-4",
        className
      )}
      {...props}
    >
      {showLineNumbers ? (
        <code className="relative grid text-sm">
          {lines.map((line, i) => (
            <span key={i} className="grid grid-cols-[auto,1fr] gap-4">
              <span className="text-muted-foreground select-none">{i + 1}</span>
              <span>{line}</span>
            </span>
          ))}
        </code>
      ) : (
        <code className="text-sm">{content}</code>
      )}
    </pre>
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
      <div className="flex items-center justify-between pr-2">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          {tabs.map((tab) => (
            <TabsTrigger key={tab} value={tab} className={tabTriggerStyles}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {Object.entries(code).map(([tab, content]) => (
        <TabsContent
          key={tab}
          value={tab}
          className="relative mt-2 rounded-lg border"
        >
          <CodeHeader
            showLanguage={showLanguage}
            language={language || tab}
            onCopy={() => onCopy(content)}
            copied={copied}
          />
          <CodeContent
            content={content}
            showLineNumbers={showLineNumbers}
            className={className}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}

export function CodeBlock({
  code,
  showLineNumbers = true,
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
      <TabsSection
        code={code}
        copied={copied}
        onCopy={handleCopy}
        showLineNumbers={showLineNumbers}
        language={language}
        showLanguage={showLanguage}
        className={className}
      />
    );
  }

  const content = typeof code === "string" ? code : Object.values(code)[0];

  return (
    <div className="relative rounded-lg border">
      <CodeHeader
        showLanguage={showLanguage}
        language={language}
        onCopy={() => handleCopy(content)}
        copied={copied}
      />
      <CodeContent
        content={content}
        showLineNumbers={showLineNumbers}
        className={className}
        {...props}
      />
    </div>
  );
}
