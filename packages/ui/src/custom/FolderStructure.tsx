"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/apps/landing/lib/utils";
import {
  ChevronRight,
  Folder,
  File,
  FileJson,
  FileText,
  FileCode,
  FileImage,
  FileVideo,
  FileAudio,
  Package,
  GitBranch,
  Settings,
  Lock,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const folderStructureVariants = cva("font-mono", {
  variants: {
    size: {
      default: "text-sm",
      sm: "text-xs",
      lg: "text-base",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
    },
    density: {
      default: "space-y-1",
      compact: "space-y-0.5",
      comfortable: "space-y-2",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
    density: "default",
  },
});

interface TreeNode {
  name: string;
  children?: TreeNode[];
  isOpen?: boolean;
  /**
   * Optional icon override. Can be a Lucide icon or a custom SVG component.
   * SVG components should:
   * - Accept standard props (size, className, stroke, etc.)
   * - Use currentColor for stroke/fill
   * - Have a viewBox of "0 0 24 24"
   */
  icon?: React.ComponentType<{
    size?: number | string;
    className?: string;
    stroke?: string;
    strokeWidth?: number | string;
    fill?: string;
  }>;
}

export interface FolderStructureProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof folderStructureVariants> {
  /**
   * The tree data structure to display
   */
  tree: TreeNode[];
  /**
   * Whether to show file/folder icons
   * @default true
   */
  showIcons?: boolean;
  /**
   * Whether to allow expanding/collapsing folders
   * @default true
   */
  expandable?: boolean;
  /**
   * Whether all folders should be expanded by default
   * @default false
   */
  defaultExpanded?: boolean;
  /**
   * Whether to animate folder expansion/collapse
   * @default true
   */
  animate?: boolean;
}

const itemVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const getFileIcon = (filename: string): LucideIcon => {
  // Special files
  const specialFiles: Record<string, LucideIcon> = {
    "package.json": Package,
    "package-lock.json": Package,
    "yarn.lock": Lock,
    ".gitignore": GitBranch,
    ".env": Lock,
    "tsconfig.json": FileJson,
    "README.md": FileText,
  };

  if (filename in specialFiles) {
    return specialFiles[filename];
  }

  // File extensions
  const extension = filename.split(".").pop()?.toLowerCase();
  if (!extension) return File;

  const extensionMap: Record<string, LucideIcon> = {
    // Config files
    json: FileJson,
    yaml: FileCode,
    yml: FileCode,
    toml: FileCode,
    // Documentation
    md: FileText,
    txt: FileText,
    pdf: FileText,
    // Code files
    js: FileCode,
    jsx: FileCode,
    ts: FileCode,
    tsx: FileCode,
    css: FileCode,
    scss: FileCode,
    html: FileCode,
    py: FileCode,
    rb: FileCode,
    php: FileCode,
    java: FileCode,
    go: FileCode,
    rs: FileCode,
    // Media files
    jpg: FileImage,
    jpeg: FileImage,
    png: FileImage,
    gif: FileImage,
    svg: FileImage,
    mp4: FileVideo,
    mov: FileVideo,
    mp3: FileAudio,
    wav: FileAudio,
  };

  return extensionMap[extension] || File;
};

function TreeItem({
  node,
  level = 0,
  showIcons,
  expandable,
  defaultExpanded,
  animate,
}: {
  node: TreeNode;
  level?: number;
  showIcons?: boolean;
  expandable?: boolean;
  defaultExpanded?: boolean;
  animate?: boolean;
}) {
  const [isOpen, setIsOpen] = React.useState(defaultExpanded);
  const hasChildren = node.children && node.children.length > 0;
  const isFolder = hasChildren;

  const handleToggle = () => {
    if (expandable && hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  const Icon = node.icon || (isFolder ? Folder : getFileIcon(node.name));

  return (
    <div>
      <div
        className={cn(
          "group flex items-center gap-2 rounded-md py-1 px-1.5 -mx-1.5",
          expandable && hasChildren && "cursor-pointer hover:bg-muted/50",
          level > 0 && "mt-1"
        )}
        style={{ paddingLeft: `${level * 1.5}rem` }}
        onClick={handleToggle}
        role={expandable && hasChildren ? "button" : undefined}
        tabIndex={expandable && hasChildren ? 0 : undefined}
      >
        {expandable && hasChildren && (
          <ChevronRight
            className={cn(
              "h-3.5 w-3.5 shrink-0 text-muted-foreground/50 transition-transform group-hover:text-muted-foreground",
              isOpen && "rotate-90"
            )}
          />
        )}
        {showIcons && (
          <div className="shrink-0">
            <Icon
              className={cn(
                "h-4 w-4",
                isFolder
                  ? "text-blue-500/70 group-hover:text-blue-500"
                  : "text-gray-400/70 group-hover:text-gray-400"
              )}
            />
          </div>
        )}
        <span className="truncate">{node.name}</span>
      </div>
      {hasChildren && isOpen && (
        <motion.div
          variants={animate ? itemVariants : undefined}
          initial={animate ? "hidden" : undefined}
          animate={animate ? "visible" : undefined}
          exit={animate ? "hidden" : undefined}
        >
          {node.children?.map((child, index) => (
            <TreeItem
              key={child.name + index}
              node={child}
              level={level + 1}
              showIcons={showIcons}
              expandable={expandable}
              defaultExpanded={defaultExpanded}
              animate={animate}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}

export function FolderStructure({
  tree,
  showIcons = true,
  expandable = true,
  defaultExpanded = false,
  animate = true,
  size,
  variant,
  density,
  className,
  ...props
}: FolderStructureProps) {
  return (
    <div
      className={cn(
        folderStructureVariants({ size, variant, density }),
        className
      )}
      {...props}
    >
      {tree.map((node, index) => (
        <TreeItem
          key={node.name + index}
          node={node}
          showIcons={showIcons}
          expandable={expandable}
          defaultExpanded={defaultExpanded}
          animate={animate}
        />
      ))}
    </div>
  );
}
