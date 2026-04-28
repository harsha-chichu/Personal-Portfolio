import { Publication } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";

interface PublicationCardProps {
  publication: Publication;
  highlightAuthor?: string;
}

export function PublicationCard({ publication, highlightAuthor = "Alex Johnson" }: PublicationCardProps) {
  return (
    <GlassCard className="p-8">
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent-blue/10 text-accent-blue shrink-0">
          {publication.conference}
        </span>
        <span className="text-text-muted text-sm font-mono">{publication.year}</span>
      </div>

      <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
        {publication.title}
      </h3>

      <p className="text-text-secondary text-sm mb-4">
        {publication.authors.map((author, i) => (
          <span key={author}>
            {i > 0 && ", "}
            <span className={author === highlightAuthor ? "text-accent-purple font-medium" : ""}>
              {author}
            </span>
          </span>
        ))}
      </p>

      <p className="text-text-muted text-sm mb-6 leading-relaxed line-clamp-3">
        {publication.abstract}
      </p>

      <div className="flex items-center gap-6 flex-wrap">
        {publication.citations !== undefined && (
          <span className="text-sm text-text-secondary">
            <span className="font-semibold text-accent-cyan">{publication.citations}</span> citations
          </span>
        )}
        {publication.doi && (
          <a
            href={publication.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-blue hover:underline"
          >
            Journal
          </a>
        )}
        {publication.pdf && (
          <a
            href={publication.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-blue hover:underline"
          >
            PDF
          </a>
        )}
      </div>
    </GlassCard>
  );
}
