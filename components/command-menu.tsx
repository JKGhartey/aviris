"use client";

import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { navItems } from "@/constants/navigation";
import { docsConfig } from "@/config/docs";

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const router = useRouter();

  const handleNavigation = (href: string | undefined) => {
    if (typeof href === "string" && href) {
      router.push(href);
      onOpenChange(false);
    }
  };

  // Get components from docsConfig
  const components =
    docsConfig.sidebarNav.find((section) => section.title === "Components")
      ?.items || [];

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {navItems.map(({ heading, items }) => (
          <CommandGroup key={heading} heading={heading}>
            {items.map(({ title, href, description }) => (
              <CommandItem key={href} onSelect={() => handleNavigation(href)}>
                <div>
                  <div className="text-sm font-medium">{title}</div>
                  <div className="text-xs text-muted-foreground">
                    {description}
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
        <CommandSeparator />
        <CommandGroup heading="Components">
          {components.map((component) => (
            <CommandItem
              key={component.href}
              onSelect={() => handleNavigation(component.href)}
            >
              <div>
                <div className="text-sm font-medium">{component.title}</div>
                <div className="text-xs text-muted-foreground">
                  {component.description}
                </div>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Links">
          <CommandItem
            onSelect={() => {
              window.open("https://github.com/jkghartey/aviris", "_blank");
              onOpenChange(false);
            }}
          >
            <div className="text-sm font-medium">GitHub Repository</div>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
