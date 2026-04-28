"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { achievements } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBlob } from "@/components/ui/GradientBlob";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

const iconMap: Record<string, string> = {
  trophy: "\uD83C\uDFC6",
  award: "\uD83C\uDFC5",
  medal: "\uD83E\uDD47",
  star: "\u2B50",
};

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        });
      }

      gsap.from(".achievement-card", {
        opacity: 0,
        x: (i: number) => (i % 2 === 0 ? -40 : 40),
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="achievements" ref={sectionRef} className="relative section-padding">
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

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line (desktop only) */}
          <div
            ref={lineRef}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent origin-top"
          />

          <div className="space-y-6">
            {achievements.map((achievement, i) => (
              <div
                key={achievement.id}
                className={`achievement-card md:w-[calc(50%-1.5rem)] ${
                  i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <SpotlightCard
                  spotlightColor="rgba(139, 92, 246, 0.12)"
                  className="transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl shrink-0">
                      {iconMap[achievement.icon] || "\uD83C\uDFC6"}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="font-heading text-lg font-semibold text-text-primary">
                          {achievement.title}
                        </h3>
                        <span className="text-xs font-mono text-text-muted">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="text-accent-blue text-sm font-medium mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
