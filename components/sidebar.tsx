"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    title: string;
    href: string;
    items?: {
      title: string;
      href: string;
      description?: string;
    }[];
  }[];
}

export function Sidebar({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <div className="relative overflow-hidden h-[calc(100vh-3.5rem)]">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Documentation
            </h2>
            <nav className="grid items-start gap-2">
              {items.map((item) => {
                const isActive = pathname === item.href;

                if (item.items) {
                  return (
                    <div key={item.href} className="space-y-2">
                      <h4 className="font-medium text-muted-foreground px-4">
                        {item.title}
                      </h4>
                      <div className="grid gap-1 pl-2">
                        {item.items.map((subItem) => {
                          const isSubActive = pathname === subItem.href;

                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={cn(
                                "flex w-full items-center rounded-md p-2 hover:underline",
                                {
                                  "bg-muted": isSubActive,
                                }
                              )}
                            >
                              <span className="text-sm">{subItem.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      isActive ? "bg-accent" : "transparent"
                    )}
                  >
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
