import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ASSETS } from "@/public/assets";

type LogoProps = {
  className?: string;
  variant?: "default" | "standalone";
};

export function Logo({ className = "", variant = "default" }: LogoProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle system theme preference
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Show a default logo during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <Image
        src={ASSETS.logos.dark}
        alt="Aviris Logo"
        width={50}
        height={50}
        className={className}
        priority
      />
    );
  }

  const logoSrc =
    currentTheme === "dark"
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
