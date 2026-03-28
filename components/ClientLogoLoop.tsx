"use client";

import dynamic from "next/dynamic";
import type { LogoItem } from "@/components/LogoLoop";

const LogoLoop = dynamic(
  () =>
    import("@/components/LogoLoop").then((m) => ({ default: m.LogoLoop })),
  {
    ssr: false,
    loading: () => (
      <div className="h-[60px] w-full animate-pulse rounded-lg bg-white/5" />
    ),
  }
);

export function ClientLogoLoop(props: {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  return <LogoLoop {...props} />;
}
