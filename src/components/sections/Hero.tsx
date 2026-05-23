"use client";

import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { ParticleField } from "@/components/ui/ParticleField";
import { GradientBlob } from "@/components/ui/GradientBlob";
import BlurText from "@/components/reactbits/BlurText";
import DecryptedText from "@/components/reactbits/DecryptedText";
import Magnet from "@/components/reactbits/Magnet";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <ParticleField />
      <GradientBlob color="purple" size="600px" className="-top-40 -right-40 opacity-30" />
      <GradientBlob color="blue" size="500px" className="-bottom-40 -left-40 opacity-20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Decrypted subtitle role */}
        <div className="mb-4 sm:mb-6 h-8">
          <span className="font-mono text-xs sm:text-sm tracking-widest uppercase text-accent-blue">
            <DecryptedText
              text="AI Engineer | Freelancer"
              animateOn="view"
              speed={40}
              maxIterations={15}
              sequential={true}
              revealDirection="center"
              className="text-accent-blue"
              encryptedClassName="text-accent-purple"
              characters="01<>/{}[]&|#@$"
            />
          </span>
        </div>

        {/* Name heading with blur reveal */}
        <BlurText
          text={personalInfo.name}
          delay={150}
          animateBy="words"
          direction="bottom"
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight justify-center"
          stepDuration={0.5}
        />

        {/* Tagline */}
        <BlurText
          text={personalInfo.tagline}
          delay={80}
          animateBy="words"
          direction="top"
          className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 sm:mt-6 mb-8 sm:mb-10 leading-relaxed justify-center"
          stepDuration={0.4}
        />

        {/* Magnetic CTAs */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
          <Magnet padding={30} magnetStrength={3}>
            <Button variant="primary" href="#projects">
              View My Work
            </Button>
          </Magnet>
          <Magnet padding={30} magnetStrength={3}>
            <Button variant="outline" href="#contact">
              Get In Touch
            </Button>
          </Magnet>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animation: "bounce-down 2s ease-in-out infinite" }}
        >
          <span className="text-text-muted text-xs font-mono">scroll</span>
          <div className="w-px h-8 bg-linear-to-b from-text-muted to-transparent" />
        </div>
      </div>
    </section>
  );
}
