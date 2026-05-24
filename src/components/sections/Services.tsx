"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

// Accent color per service row (cycles through)
const serviceAccents = [
  {
    pillBg: "bg-accent-purple/10",
    pillText: "text-accent-purple",
    pillBorder: "border-accent-purple/20",
  },
  {
    pillBg: "bg-accent-blue/10",
    pillText: "text-accent-blue",
    pillBorder: "border-accent-blue/20",
  },
  {
    pillBg: "bg-accent-cyan/10",
    pillText: "text-accent-cyan",
    pillBorder: "border-accent-cyan/20",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".service-row", {
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
    <section id="services" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          label="Services"
          title="What I Offer"
          subtitle="Freelance services to help you build and scale AI-powered solutions"
        />

        <div className="space-y-4">
          {services.map((service, i) => {
            const accent = serviceAccents[i % serviceAccents.length];

            return (
              <div key={service.id} className="service-row glass rounded-2xl p-6 sm:p-8">
                <div className="grid gap-4 md:grid-cols-[72px_1fr] md:gap-8 items-start">

                  {/* Large service number — desktop only */}
                  <div className="hidden md:block font-heading text-6xl font-bold text-text-primary opacity-[0.07] leading-none select-none pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div>
                    {/* Title row with mobile number badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="md:hidden font-mono text-sm font-bold text-text-muted opacity-50 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-text-primary">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className={cn(
                            "px-3 py-1 rounded-full text-xs font-mono border",
                            accent.pillBg,
                            accent.pillText,
                            accent.pillBorder
                          )}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
