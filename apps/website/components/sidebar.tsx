"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/apps/landing/lib/utils";
import {
  Book,
  Boxes,
  FileCode2,
  Laptop,
  Layers,
  Settings,
  type LucideIcon,
} from "lucide-react";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    title: string;
    href: string;
    icon?: LucideIcon;
    items?: {
      title: string;
      href: string;
      description?: string;
    }[];
  }[];
  setIsOpen?: (open: boolean) => void;
}

const icons: Record<string, LucideIcon> = {
  "Getting Started": Book,
  Installation: Laptop,
  Components: Boxes,
  Customization: Settings,
  API: FileCode2,
  Development: Layers,
};

export function Sidebar({
  className,
  items,
  setIsOpen,
  ...props
}: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <div className="w-full">
      <div className="space-y-6">
        {items.map((section) => {
          const isActive = pathname === section.href;
          const Icon = section.icon || icons[section.title] || Book;

          if (section.items) {
            return (
              <div key={section.href} className="space-y-4">
                <h4 className="font-semibold text-sm tracking-tight flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {section.title}
                </h4>
                <div className="grid grid-flow-row auto-rows-max space-y-1 pl-6 border-l">
                  {section.items.map((item) => {
                    const isItemActive = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen?.(false)}
                        className={cn(
                          "group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 hover:bg-muted hover:text-foreground text-sm transition-colors",
                          isItemActive
                            ? "font-medium text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.title}
                        {item.description && (
                          <span className="sr-only">{item.description}</span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={section.href}
              href={section.href}
              onClick={() => setIsOpen?.(false)}
              className={cn(
                "group flex w-full items-center gap-2 rounded-md border border-transparent px-2 py-1.5 hover:bg-muted hover:text-foreground text-sm font-medium transition-colors",
                isActive
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {section.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
