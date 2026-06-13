"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { GradientBlob } from "@/components/ui/GradientBlob";

// Top skills shown in the right identity card
const coreStack = ["Python", "LangChain", "LangGraph", "PyTorch", "Next.js", "AWS"];

// First sentence of bio for the hero
const heroBio = personalInfo.bio[0].split(".")[0] + ".";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background blobs — no particle field */}
      <GradientBlob color="purple" size="600px" className="-top-40 -right-40 opacity-25" />
      <GradientBlob color="blue" size="500px" className="-bottom-40 -left-40 opacity-15" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text content ── */}
          <div className="text-center lg:text-left">

            {/* Greeting */}
            <p className="font-mono text-sm text-text-muted mb-5 tracking-wide">
              Hi, I&apos;m 👋
            </p>

            {/* Name */}
            <h1 className="font-heading font-bold leading-tight">
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-text-primary">
                {personalInfo.name.split(" ")[0]}
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl gradient-text">
                {personalInfo.name.split(" ")[1]}.
              </span>
            </h1>

            {/* Role pills */}
            <div className="flex flex-wrap gap-2 mt-5 justify-center lg:justify-start">
              {["AI Engineer", "Researcher", "Freelancer"].map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-full text-xs font-mono border border-glass-border bg-glass-bg text-text-secondary"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed mt-6 max-w-xl mx-auto lg:mx-0">
              {heroBio}
            </p>

            {/* CTA buttons */}
            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start flex-wrap">
              <Button variant="primary" href="#projects">
                View My Work
              </Button>
              <Button variant="outline" href="#contact">
                Get In Touch
              </Button>
            </div>

            {/* Social + location */}
            <div className="flex items-center gap-3 mt-6 justify-center lg:justify-start flex-wrap">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg glass text-xs font-mono text-text-muted hover:text-accent-blue transition-colors"
                  aria-label={social.platform}
                >
                  {social.platform}
                </a>
              ))}
              <span className="text-text-muted text-xs font-mono opacity-60">
                · {personalInfo.location}
              </span>
            </div>
          </div>

          {/* ── Right: Identity card — desktop only ── */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="glass rounded-2xl p-6 border border-glass-border">

              {/* Avatar */}
              <div className="flex justify-center mb-5">
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-accent-purple/40">
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-linear-to-r from-accent-blue to-accent-purple shrink-0" />
                <span className="font-mono text-sm text-text-primary font-medium">
                  {personalInfo.title}
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                  <span className="text-xs font-mono text-green-400">Open to work</span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {personalInfo.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-overlay rounded-xl p-4 border border-glass-border"
                  >
                    <p className="font-heading text-2xl font-bold text-text-primary">
                      {stat.value}{stat.suffix}
                    </p>
                    <p className="text-text-muted text-xs font-mono mt-1 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-border mb-5" />

              {/* Core stack */}
              <p className="text-text-muted text-xs font-mono mb-3">// core stack</p>
              <div className="flex flex-wrap gap-2">
                {coreStack.map((name) => (
                  <span
                    key={name}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-accent-purple/10 text-accent-purple"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <p className="text-center text-xs font-mono text-text-muted">
              📍 {personalInfo.location} · Available for freelance projects
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
