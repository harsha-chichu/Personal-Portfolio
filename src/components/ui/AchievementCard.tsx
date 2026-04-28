import { Achievement } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";

const iconMap: Record<string, string> = {
  trophy: "\uD83C\uDFC6",
  award: "\uD83C\uDFC5",
  medal: "\uD83E\uDD47",
  star: "\u2B50",
};

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <GlassCard>
      <div className="flex items-start gap-4">
        <div className="text-3xl shrink-0">
          {iconMap[achievement.icon] || "\uD83C\uDFC6"}
        </div>
        <div>
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <h3 className="font-heading text-lg font-semibold text-text-primary">
              {achievement.title}
            </h3>
            <span className="text-xs font-mono text-text-muted">{achievement.date}</span>
          </div>
          <p className="text-accent-blue text-sm font-medium mb-2">{achievement.organization}</p>
          <p className="text-text-secondary text-sm leading-relaxed">{achievement.description}</p>
        </div>
      </div>
    </GlassCard>
  );
}
