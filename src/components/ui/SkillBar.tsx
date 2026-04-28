"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface SkillBarProps {
  name: string;
  level: number;
}

export function SkillBar({ name, level }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!barRef.current || !containerRef.current) return;

      gsap.from(barRef.current, {
        scaleX: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-text-primary">{name}</span>
        <span className="text-xs text-text-muted font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-overlay overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple origin-left"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
