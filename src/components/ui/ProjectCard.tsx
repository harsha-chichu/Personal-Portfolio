"use client";

import { Project } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlassCard className="group overflow-hidden p-0">
      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-surface-light to-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-text-muted text-sm">{project.title}</span>
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
              className="px-4 py-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-sm text-white"
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
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">{project.description}</p>
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
    </GlassCard>
  );
}
