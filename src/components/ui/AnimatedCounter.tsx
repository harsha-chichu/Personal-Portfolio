"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function AnimatedCounter({ value, suffix = "", label }: AnimatedCounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!numberRef.current || !containerRef.current) return;

      const obj = { val: 0 };

      gsap.to(obj, {
        val: value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = Math.round(obj.val).toString();
          }
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="text-center">
      <div className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
        <span ref={numberRef}>0</span>
        <span className="gradient-text">{suffix}</span>
      </div>
      <p className="text-text-secondary text-sm mt-1">{label}</p>
    </div>
  );
}
