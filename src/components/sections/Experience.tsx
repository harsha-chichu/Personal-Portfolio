"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBlob } from "@/components/ui/GradientBlob";

const typeLabels: Record<string, string> = {
  "full-time": "Full-Time",
  internship: "Internship",
  freelance: "Freelance",
};

const typeBadgeStyles: Record<string, string> = {
  "full-time": "bg-accent-blue/15 text-accent-blue border-accent-blue/30",
  internship: "bg-accent-purple/15 text-accent-purple border-accent-purple/30",
  freelance: "bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30",
};

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".exp-card", {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="experience" ref={sectionRef} className="relative section-padding overflow-hidden">
      <GradientBlob color="purple" size="400px" className="top-40 -left-20 opacity-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading label="Experience" title="Where I've Worked" />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent" />

          <div className="space-y-8 sm:space-y-12">
            {experience.map((exp) => (
              <div key={exp.id} className="exp-card relative pl-12 sm:pl-16 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-2 sm:left-4 md:left-6 top-1 w-4 h-4 rounded-full border-2 border-accent-purple bg-background">
                  <div className="absolute inset-0.5 rounded-full bg-accent-purple/50" />
                </div>

                {/* Card */}
                <div className="glass rounded-xl p-4 sm:p-6 hover:bg-glass-hover transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start justify-between gap-2 sm:gap-3 mb-3">
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-semibold text-text-primary">
                        {exp.role}
                      </h3>
                      <p className="text-accent-blue font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono px-2.5 py-1 rounded-full border ${typeBadgeStyles[exp.type]}`}
                      >
                        {typeLabels[exp.type]}
                      </span>
                    </div>
                  </div>

                  {/* Date */}
                  <p className="text-text-muted text-sm font-mono mb-4">
                    {exp.startDate} — {exp.endDate}
                  </p>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-baseline gap-2.5 text-sm text-text-secondary leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-purple shrink-0 translate-y-[1px]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-full bg-overlay text-text-muted border border-glass-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
