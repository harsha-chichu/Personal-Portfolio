"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

const iconMap: Record<string, string> = {
  brain: "\uD83E\uDDE0",
  code: "\uD83D\uDCBB",
  layers: "\uD83D\uDE80",
};

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".service-card", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.6,
        ease: "back.out(1.4)",
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          label="Services"
          title="What I Offer"
          subtitle="Freelance services to help you build and scale AI-powered solutions"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <SpotlightCard
                spotlightColor="rgba(6, 182, 212, 0.12)"
                className="group h-full transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">
                  {iconMap[service.icon] || "\u26A1"}
                </div>
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-text-muted"
                    >
                      <span className="text-accent-purple text-xs">&bull;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
