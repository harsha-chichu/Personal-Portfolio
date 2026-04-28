"use client";

import { personalInfo } from "@/data/portfolio";
import GradientText from "@/components/reactbits/GradientText";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <GradientText
            colors={["#3b82f6", "#8b5cf6", "#06b6d4"]}
            animationSpeed={6}
            className="font-heading text-lg font-bold"
          >
            {personalInfo.name.split(" ")[0]}.
          </GradientText>

          <div className="flex items-center gap-6">
            {personalInfo.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-blue transition-colors duration-200 text-sm"
              >
                {social.platform}
              </a>
            ))}
          </div>

          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
