"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { skills, skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

// Per-category visual config
const categoryConfig: Record<
  string,
  { dot: string; label: string; pill: string }
> = {
  languages: {
    dot: "bg-accent-blue",
    label: "text-accent-blue",
    pill: "border-l-2 border-l-accent-blue bg-accent-blue/5 hover:bg-accent-blue/10",
  },
  frameworks: {
    dot: "bg-accent-purple",
    label: "text-accent-purple",
    pill: "border-l-2 border-l-accent-purple bg-accent-purple/5 hover:bg-accent-purple/10",
  },
  ml: {
    dot: "bg-accent-cyan",
    label: "text-accent-cyan",
    pill: "border-l-2 border-l-accent-cyan bg-accent-cyan/5 hover:bg-accent-cyan/10",
  },
  tools: {
    dot: "bg-text-muted",
    label: "text-text-muted",
    pill: "border-l-2 border-l-border bg-glass-bg hover:bg-glass-hover",
  },
};

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".skill-pill", {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef }
  );

  const categories = Object.keys(skillCategories) as Array<
    keyof typeof skillCategories
  >;

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          label="Skills"
          title="My Tech Stack"
          subtitle="The languages, frameworks, and tools I work with day to day"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const config = categoryConfig[category];
            const categorySkills = skills.filter((s) => s.category === category);

            return (
              <div key={category}>
                {/* Category header */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={cn("w-2 h-2 rounded-full shrink-0", config.dot)} />
                  <span
                    className={cn(
                      "text-xs font-mono uppercase tracking-wider font-semibold",
                      config.label
                    )}
                  >
                    {skillCategories[category]}
                  </span>
                </div>

                {/* Skill pills */}
                <div className="flex flex-col gap-2">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className={cn(
                        "skill-pill px-3 py-2.5 rounded-lg text-sm font-mono",
                        "text-text-primary border border-glass-border",
                        "transition-colors duration-200 cursor-default",
                        config.pill
                      )}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
