"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { personalInfo } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const chapters = [
  {
    number: "01",
    label: "Researcher",
    headline: "Published in healthcare AI",
    detail:
      "Deep learning framework for automated WBC subtype classification — achieving pathologist-level accuracy from peripheral blood smear images.",
    accent: "text-accent-blue",
    bg: "bg-accent-blue/5",
    border: "border-accent-blue/20",
  },
  {
    number: "02",
    label: "Engineer",
    headline: "Production AI systems",
    detail:
      "LangGraph multi-agent orchestration, RAG pipelines, and multi-LLM architectures — built and deployed for real clients.",
    accent: "text-accent-purple",
    bg: "bg-accent-purple/5",
    border: "border-accent-purple/20",
  },
  {
    number: "03",
    label: "Freelancer",
    headline: "End-to-end delivery",
    detail:
      "Full-stack AI applications for startups and enterprises — from requirement to deployed product, including GenAI chatbots and booking platforms.",
    accent: "text-accent-cyan",
    bg: "bg-accent-cyan/5",
    border: "border-accent-cyan/20",
  },
];

const currentStack = ["LangGraph", "LangChain", "AWS Bedrock", "Langfuse", "PyTorch", "Next.js"];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".about-section-content > *", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          label="About Me"
          title="My Story"
          subtitle="The journey from research labs to production AI systems"
        />

        <div className="about-section-content flex flex-col gap-8">
          {/* ── Bio paragraph ── */}
          <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
            {personalInfo.bio[0]}
          </p>

          {/* ── Three chapter cards ── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapters.map((c) => (
              <div
                key={c.number}
                className={cn(
                  "glass rounded-2xl p-6 border flex flex-col gap-3",
                  c.border
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-text-muted">{c.number}</span>
                  <span
                    className={cn(
                      "font-mono text-xs font-semibold uppercase tracking-wider",
                      c.accent
                    )}
                  >
                    {c.label}
                  </span>
                </div>
                <h4 className="font-heading text-lg font-bold text-text-primary">
                  {c.headline}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>

          {/* ── "Currently working with" bar ── */}
          <div className="glass rounded-2xl p-6 border border-glass-border">
            <p className="text-xs font-mono text-text-muted uppercase tracking-[0.15em] mb-4">
              // currently working with
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {currentStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-overlay border border-glass-border text-xs font-mono text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-muted font-mono">
              <span>📍 {personalInfo.location}</span>
              <span className="opacity-40 hidden sm:inline">·</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-accent-blue transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* ── Stats row ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl font-bold text-text-primary">
                  {stat.value}
                  <span className="gradient-text">{stat.suffix}</span>
                </p>
                <p className="text-text-muted text-xs font-mono mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
