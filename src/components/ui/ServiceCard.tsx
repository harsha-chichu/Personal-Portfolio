import { Service } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";

const iconMap: Record<string, string> = {
  brain: "\uD83E\uDDE0",
  code: "\uD83D\uDCBB",
  layers: "\uD83D\uDE80",
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <GlassCard className="group h-full">
      <div className="text-4xl mb-4">{iconMap[service.icon] || "\u26A1"}</div>
      <h3 className="font-heading text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-blue transition-colors">
        {service.title}
      </h3>
      <p className="text-text-secondary text-sm mb-5 leading-relaxed">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
            <span className="text-accent-purple text-xs">&bull;</span>
            {feature}
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
