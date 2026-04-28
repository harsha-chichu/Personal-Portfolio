"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useTheme } from "next-themes";
import type { Skill } from "@/data/portfolio";

interface SkillIconProps {
  skill: Skill;
}

export function SkillIcon({ skill }: SkillIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useGSAP(
    () => {
      if (!ref.current) return;

      const icon = ref.current.querySelector(".skill-img");
      if (icon) {
        gsap.from(icon, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
          },
        });
      }
    },
    { scope: ref }
  );

  // Use simple-icons CDN for tech logos, with a fallback for non-standard ones
  const isBrandIcon = ![
    "brain",
    "opencv",
    "huggingface",
    "mlflow",
    "rl",
  ].includes(skill.icon);

  const iconColor = mounted && resolvedTheme === "light" ? "1a1a2e" : "white";
  const iconUrl = isBrandIcon
    ? `https://cdn.simpleicons.org/${skill.icon}/${iconColor}`
    : undefined;

  const fallbackEmoji: Record<string, string> = {
    brain: "\uD83E\uDDE0",
    opencv: "\uD83D\uDC41\uFE0F",
    huggingface: "\uD83E\uDD17",
    mlflow: "\uD83D\uDCCA",
    rl: "\uD83E\uDD16",
  };

  return (
    <div
      ref={ref}
      className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-glass-hover transition-colors duration-200"
    >
      <div className="skill-img w-12 h-12 flex items-center justify-center rounded-lg bg-glass-bg border border-glass-border group-hover:border-accent-purple/30 group-hover:shadow-lg group-hover:shadow-accent-purple/5 transition-all duration-300 group-hover:-translate-y-1">
        {iconUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={iconUrl}
            alt={skill.name}
            width={28}
            height={28}
            className="w-7 h-7 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
          />
        ) : (
          <span className="text-2xl">{fallbackEmoji[skill.icon] || "\u2B50"}</span>
        )}
      </div>
      <span className="text-xs font-mono text-text-muted group-hover:text-text-primary transition-colors duration-200 text-center">
        {skill.name}
      </span>
    </div>
  );
}
