"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { skills, skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillIcon } from "@/components/ui/SkillIcon";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".skill-card", {
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

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>;

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          label="Skills"
          title="My Expertise"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {categories.map((category) => (
            <div key={category} className="skill-card">
              <SpotlightCard
                spotlightColor="rgba(139, 92, 246, 0.12)"
                className="h-full transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple" />
                  {skillCategories[category]}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <SkillIcon key={skill.name} skill={skill} />
                    ))}
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
