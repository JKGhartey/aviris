interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`space-y-4 ${
        align === "center" ? "text-center mx-auto" : "text-left"
      }`}
    >
      <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {description}
        </p>
      )}
    </div>
  );
}
