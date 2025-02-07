"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mouse,
  Move,
  Type,
  Square,
  Circle,
  Minus,
  Image,
  Hand,
  Frame,
  ChevronDown,
  LucideIcon,
} from "lucide-react";

const ICON_SIZE = 16;
const ZOOM_LEVELS = ["25%", "50%", "75%", "100%", "150%", "200%"];

const toolbarVariants = cva(
  "flex items-center gap-2 bg-background border rounded-lg shadow-sm p-1.5",
  {
    variants: {
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col",
      },
      size: {
        default: "w-auto",
        sm: "w-10",
        lg: "w-14",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      size: "default",
    },
  }
);

const toolGroupVariants = cva("flex items-center gap-1", {
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface ToolbarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toolbarVariants> {
  tools?: ToolItem[];
}

export interface ToolItem {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  tooltip?: string;
}

const defaultTools: ToolItem[] = [
  { icon: <Mouse size={ICON_SIZE} />, label: "Select", tooltip: "Select (V)" },
  { icon: <Hand size={ICON_SIZE} />, label: "Hand", tooltip: "Hand Tool (H)" },
  {
    icon: <Frame size={ICON_SIZE} />,
    label: "Frame",
    tooltip: "Frame Tool (F)",
  },
  { icon: <Type size={ICON_SIZE} />, label: "Text", tooltip: "Text Tool (T)" },
  {
    icon: <Square size={ICON_SIZE} />,
    label: "Rectangle",
    tooltip: "Rectangle Tool (R)",
  },
  {
    icon: <Circle size={ICON_SIZE} />,
    label: "Ellipse",
    tooltip: "Ellipse Tool (O)",
  },
  {
    icon: <Minus size={ICON_SIZE} />,
    label: "Line",
    tooltip: "Line Tool (L)",
  },
  {
    icon: <Image size={ICON_SIZE} />,
    label: "Image",
    tooltip: "Place Image (P)",
  },
];

export function Toolbar({
  className,
  orientation,
  size,
  tools = defaultTools,
  ...props
}: ToolbarProps) {
  const [activeTool, setActiveTool] = React.useState<string>("Select");
  const [zoom, setZoom] = React.useState("100%");

  return (
    <TooltipProvider>
      <div
        className={cn(toolbarVariants({ orientation, size }), className)}
        {...props}
      >
        <div className={toolGroupVariants({ orientation })}>
          {tools.map((tool, index) => (
            <Tooltip key={tool.label}>
              <TooltipTrigger asChild>
                <Button
                  variant={activeTool === tool.label ? "secondary" : "ghost"}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => {
                    setActiveTool(tool.label);
                    tool.onClick?.();
                  }}
                >
                  {tool.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tool.tooltip || tool.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        <Separator
          className={orientation === "vertical" ? "my-2" : "mx-2"}
          orientation={orientation === "vertical" ? "horizontal" : "vertical"}
        />

        <Select value={zoom} onValueChange={setZoom}>
          <SelectTrigger className="h-8 w-[100px]">
            <SelectValue placeholder={zoom} />
          </SelectTrigger>
          <SelectContent>
            {ZOOM_LEVELS.map((level) => (
              <SelectItem key={level} value={level}>
                {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </TooltipProvider>
  );
}
