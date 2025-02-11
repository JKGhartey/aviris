import Image from "next/image";
import { useTheme } from "next-themes";
import { ASSETS } from "@/public/assets";

type LogoProps = {
  className?: string;
  variant?: "default" | "standalone";
};

export function Logo({ className = "", variant = "default" }: LogoProps) {
  const { resolvedTheme } = useTheme();

  const logoSrc =
    resolvedTheme === "dark"
      ? variant === "standalone"
        ? ASSETS.logos.aloneLight
        : ASSETS.logos.light
      : variant === "standalone"
      ? ASSETS.logos.aloneDark
      : ASSETS.logos.dark;

  return (
    <Image
      src={logoSrc}
      alt="Aviris Logo"
      width={50}
      height={50}
      className={className}
      priority
    />
  );
}
