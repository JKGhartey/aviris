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

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const router = useRouter();

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {navItems.map(({ heading, items }) => (
          <CommandGroup key={heading} heading={heading}>
            {items.map(({ title, href, description }) => (
              <CommandItem
                key={href}
                onSelect={() => {
                  router.push(href);
                  onOpenChange(false);
                }}
              >
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
