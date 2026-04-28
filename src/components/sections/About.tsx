"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { personalInfo } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GradientBlob } from "@/components/ui/GradientBlob";
import LetterGlitch from "@/components/reactbits/LetterGlitch";
import ScrollReveal from "@/components/reactbits/ScrollReveal";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".about-image", {
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".about-text", {
        opacity: 0,
        x: 60,
        duration: 0.8,
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
    <section id="about" ref={sectionRef} className="relative section-padding overflow-hidden">
      <GradientBlob color="cyan" size="400px" className="top-20 right-0 opacity-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading label="About Me" title="Who I Am" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image with LetterGlitch background */}
          <div className="about-image relative">
            <div className="relative w-full aspect-square max-w-xs sm:max-w-md mx-auto rounded-2xl overflow-hidden gradient-border">
              <div className="absolute inset-px rounded-2xl overflow-hidden">
                <LetterGlitch
                  glitchColors={["#3b82f6", "#8b5cf6", "#06b6d4"]}
                  glitchSpeed={70}
                  outerVignette={true}
                  centerVignette={false}
                  smooth={true}
                  characters="AI ML DL NLP CNN RNN GAN GPT BERT LSTM 01"
                />
                {/* Profile overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Glow ring */}
                    <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan opacity-40 blur-lg" />
                    <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-glass-border shadow-2xl shadow-accent-purple/20">
                      <img
                        src={personalInfo.avatar}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = "none";
                          target.parentElement!.classList.add(
                            "bg-gradient-to-br",
                            "from-accent-blue/20",
                            "to-accent-purple/20",
                            "flex",
                            "items-center",
                            "justify-center"
                          );
                          const span = document.createElement("span");
                          span.className = "text-6xl";
                          span.textContent = personalInfo.name
                            .split(" ")
                            .map((w) => w[0])
                            .join("");
                          target.parentElement!.appendChild(span);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Status badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-surface-90 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-xs font-mono text-text-secondary">Available for freelance</span>
            </div>
          </div>

          {/* Text with ScrollReveal */}
          <div className="about-text">
            {personalInfo.bio.map((paragraph, i) => (
              <ScrollReveal
                key={i}
                enableBlur={true}
                baseOpacity={0.15}
                baseRotation={2}
                blurStrength={3}
              >
                {paragraph}
              </ScrollReveal>
            ))}

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <span className="text-accent-blue">&#9993;</span>
                {personalInfo.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <span className="text-accent-purple">&#128205;</span>
                {personalInfo.location}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-border">
          {personalInfo.stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
