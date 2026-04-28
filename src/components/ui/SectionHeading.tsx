"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !lineRef.current) return;

      gsap.from(containerRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      gsap.from(lineRef.current, {
        scaleX: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="mb-10 sm:mb-16 text-center">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue mb-4 block">
        {"// "}
        {label}
      </span>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      <div
        ref={lineRef}
        className="mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple origin-left"
      />
      {subtitle && (
        <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">{subtitle}</p>
      )}
    </div>
  );
}
