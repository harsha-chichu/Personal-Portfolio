"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { publications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBlob } from "@/components/ui/GradientBlob";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

export function Research() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.from(".pub-card", {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="research" ref={sectionRef} className="relative section-padding overflow-hidden">
      <GradientBlob color="blue" size="500px" className="-left-60 top-40 opacity-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          label="Research"
          title="Publications"
          subtitle="My contributions to the field of artificial intelligence and deep learning"
        />

        <div className="space-y-6 max-w-4xl mx-auto">
          {publications.map((pub) => (
            <div key={pub.id} className="pub-card">
              <SpotlightCard
                spotlightColor="rgba(59, 130, 246, 0.12)"
                className="p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent-blue/10 text-accent-blue shrink-0">
                    {pub.conference}
                  </span>
                  <span className="text-text-muted text-sm font-mono">{pub.year}</span>
                </div>

                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                  {pub.title}
                </h3>

                <p className="text-text-secondary text-sm mb-4">
                  {pub.authors.map((author, i) => (
                    <span key={author}>
                      {i > 0 && ", "}
                      <span
                        className={
                          author === "Harsha Vardhan Sunnam"
                            ? "text-accent-purple font-medium"
                            : ""
                        }
                      >
                        {author}
                      </span>
                    </span>
                  ))}
                </p>

                <p className="text-text-muted text-sm mb-6 leading-relaxed line-clamp-3">
                  {pub.abstract}
                </p>

                <div className="flex items-center gap-6 flex-wrap">
                  {pub.citations !== undefined && (
                    <span className="text-sm text-text-secondary">
                      <span className="font-semibold text-accent-cyan">
                        {pub.citations}
                      </span>{" "}
                      citations
                    </span>
                  )}
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent-blue hover:underline"
                    >
                      Journal 
                    </a>
                  )}
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent-blue hover:underline"
                    >
                      PDF
                    </a>
                  )}
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
