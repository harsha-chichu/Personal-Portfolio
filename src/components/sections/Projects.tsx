"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

// First featured project gets the hero card; the rest go in the compact grid
const featuredProject = projects.find((p) => p.featured) ?? projects[0];
const otherProjects = projects.filter((p) => p.id !== featuredProject.id);

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".featured-card", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".compact-card", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".compact-grid",
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="A selection of projects that showcase my expertise in AI and software engineering"
        />

        {/* ── Featured project — full width ── */}
        <div className="featured-card mb-8">
          <SpotlightCard
            spotlightColor="rgba(139, 92, 246, 0.15)"
            className="p-0 group"
          >
            <div className="p-6 sm:p-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-mono mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                Featured Project
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left: content */}
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary mb-3 group-hover:text-accent-blue transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-text-secondary text-base leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-overlay text-text-secondary border border-glass-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Action links — always visible */}
                  <div className="flex items-center gap-3 flex-wrap">
                    {featuredProject.github && (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium text-text-primary border border-glass-border hover:text-accent-blue transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {featuredProject.live && (
                      <a
                        href={featuredProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-accent-blue to-accent-purple text-sm font-medium text-white hover:shadow-lg hover:shadow-accent-purple/25 transition-all"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: project image (desktop only) */}
                <div className="hidden md:block relative h-64 rounded-xl overflow-hidden bg-overlay border border-glass-border">
                  {/* Fallback gradient — always visible behind the image */}
                  <div className="absolute inset-0 bg-linear-to-br from-accent-blue/5 to-accent-purple/10 flex items-end p-4">
                    <span className="font-mono text-xs text-text-muted opacity-40 line-clamp-1">
                      {featuredProject.title}
                    </span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* ── Compact grid — remaining projects ── */}
        <div className="compact-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div key={project.id} className="compact-card">
              <SpotlightCard
                spotlightColor="rgba(59, 130, 246, 0.12)"
                className="h-full group p-0 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image thumbnail */}
                <div className="relative h-44 rounded-t-2xl overflow-hidden bg-overlay shrink-0">
                  {/* Fallback gradient */}
                  <div className="absolute inset-0 bg-linear-to-br from-accent-blue/5 to-accent-purple/10 flex items-end p-3">
                    <span className="font-mono text-xs text-text-muted opacity-40 line-clamp-1">
                      {project.title}
                    </span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-base font-semibold text-text-primary mb-2 group-hover:text-accent-blue transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs font-mono bg-overlay text-text-muted border border-glass-border"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded text-xs font-mono text-text-muted">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  {/* Always-visible links — pinned to bottom */}
                  <div className="flex items-center gap-2 mt-auto pt-2 border-t border-glass-border">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-text-muted hover:text-accent-blue transition-colors"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.github && project.live && (
                      <span className="text-text-muted opacity-30">·</span>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-text-muted hover:text-accent-purple transition-colors"
                      >
                        Live ↗
                      </a>
                    )}
                    {!project.github && !project.live && (
                      <span className="text-xs font-mono text-text-muted opacity-40">
                        Private project
                      </span>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
