"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const fadeInUp = {
  from: { opacity: 0, y: 60 },
  to: { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
};

export const fadeInLeft = {
  from: { opacity: 0, x: -60 },
  to: { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
};

export const fadeInRight = {
  from: { opacity: 0, x: 60 },
  to: { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
};

export const staggerReveal = {
  from: { opacity: 0, y: 40 },
  to: { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.15 },
};

export const scaleIn = {
  from: { opacity: 0, scale: 0.8 },
  to: { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
};

export { gsap, ScrollTrigger };
