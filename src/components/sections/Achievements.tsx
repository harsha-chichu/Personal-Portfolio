"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { achievements } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { cn } from "@/lib/utils";

// Per-achievement color config
const iconConfig: Record<
  string,
  { iconBg: string; iconColor: string; borderFrom: string; borderTo: string; orgColor: string }
> = {
  trophy: {
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    borderFrom: "#f59e0b",
    borderTo: "#d97706",
    orgColor: "text-amber-500",
  },
  award: {
    iconBg: "bg-accent-blue/10",
    iconColor: "text-accent-blue",
    borderFrom: "#3b82f6",
    borderTo: "#6366f1",
    orgColor: "text-accent-blue",
  },
  star: {
    iconBg: "bg-accent-purple/10",
    iconColor: "text-accent-purple",
    borderFrom: "#8b5cf6",
    borderTo: "#a78bfa",
    orgColor: "text-accent-purple",
  },
  medal: {
    iconBg: "bg-accent-cyan/10",
    iconColor: "text-accent-cyan",
    borderFrom: "#06b6d4",
    borderTo: "#0891b2",
    orgColor: "text-accent-cyan",
  },
};

function AchievementIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const cls = cn("w-5 h-5", className);

  if (icon === "trophy") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={cls}>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <line x1="4" y1="22" x2="20" y2="22" />
      </svg>
    );
  }

  if (icon === "award") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={cls}>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    );
  }

  if (icon === "star") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={cls}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }

  // medal (default)
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={cls}>
      <circle cx="12" cy="14" r="5" />
      <path d="M7.5 5h9" />
      <path d="M7.5 5 6 9l6 2 6-2-1.5-4" />
    </svg>
  );
}

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".achievement-card", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="achievements" ref={sectionRef} className="relative section-padding overflow-hidden">
      <GradientBlob
        color="purple"
        size="400px"
        className="right-0 top-1/2 -translate-y-1/2 opacity-10"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          label="Achievements"
          title="Awards & Recognition"
          subtitle="Milestones and accolades from my journey in AI research and development"
        />

        {/* 2×2 grid — no alternating timeline */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {achievements.map((achievement) => {
            const config = iconConfig[achievement.icon] ?? iconConfig.trophy;

            return (
              <div
                key={achievement.id}
                className="achievement-card glass rounded-2xl p-6 relative overflow-hidden"
              >
                {/* Colored top border strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: `linear-gradient(to right, ${config.borderFrom}, ${config.borderTo})`,
                  }}
                />

                {/* Icon + year row */}
                <div className="flex items-start justify-between gap-4 mt-1 mb-4">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                      config.iconBg
                    )}
                  >
                    <AchievementIcon icon={achievement.icon} className={config.iconColor} />
                  </div>
                  <span className="text-xs font-mono text-text-muted px-2.5 py-1 rounded-full bg-overlay border border-glass-border shrink-0">
                    {achievement.date}
                  </span>
                </div>

                <h3 className="font-heading text-base font-bold text-text-primary mb-1 leading-snug">
                  {achievement.title}
                </h3>
                <p className={cn("text-xs font-medium mb-3", config.orgColor)}>
                  {achievement.organization}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
