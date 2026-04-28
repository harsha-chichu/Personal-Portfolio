import { cn } from "@/lib/utils";

interface GradientBlobProps {
  color?: "blue" | "purple" | "cyan";
  size?: string;
  className?: string;
}

const colorMap = {
  blue: "from-accent-blue/20 to-accent-blue/0",
  purple: "from-accent-purple/20 to-accent-purple/0",
  cyan: "from-accent-cyan/20 to-accent-cyan/0",
};

export function GradientBlob({ color = "purple", size = "400px", className }: GradientBlobProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full bg-radial blur-[100px] pointer-events-none",
        colorMap[color],
        className
      )}
      style={{
        width: size,
        height: size,
        animation: "blob-drift 8s ease-in-out infinite",
      }}
    />
  );
}
