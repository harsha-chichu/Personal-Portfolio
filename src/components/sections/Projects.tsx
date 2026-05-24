"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".project-card", {
        opacity: 0,
        y: 50,
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
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="A selection of projects that showcase my expertise in AI and software engineering"
        />

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <SpotlightCard
                spotlightColor="rgba(139, 92, 246, 0.15)"
                className="group p-0 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-purple/5"
              >
                {/* Image thumbnail */}
                <div className="relative h-48 bg-linear-to-br from-surface-light to-surface overflow-hidden rounded-t-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onLoad={(e) => {
                      const fallback = e.currentTarget.parentElement?.querySelector(".project-fallback");
                      if (fallback) (fallback as HTMLElement).style.display = "none";
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Fallback — hidden when image loads successfully */}
                  <div className="project-fallback absolute inset-0 bg-linear-to-br from-accent-blue/10 to-accent-purple/10 flex items-center justify-center">
                    <span className="font-mono text-text-muted opacity-40 text-sm">
                      {project.title}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full glass text-sm text-text-primary hover:text-accent-blue transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-linear-to-r from-accent-blue to-accent-purple text-sm text-white"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-mono bg-accent-purple/10 text-accent-purple"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile action links — always visible on touch, hover overlay handles desktop */}
                {(project.github || project.live) && (
                  <div className="flex items-center gap-3 px-6 pb-5 sm:hidden">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 text-center rounded-full glass text-sm text-text-primary border border-glass-border"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 text-center rounded-full bg-linear-to-r from-accent-blue to-accent-purple text-sm text-white"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
