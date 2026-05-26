import type { Activity } from "@/data/portfolio";

type ActivityCardProps = {
  activity: Activity;
};

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className="py-1">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h4 className="text-base font-semibold text-[var(--gh-fg)]">
            {activity.organization}
          </h4>
          {activity.campus ? (
            <p className="text-xs text-[var(--gh-fg-muted)]">{activity.campus}</p>
          ) : null}
          <p className="mt-1 text-base text-[var(--gh-fg)]">{activity.role}</p>
        </div>
        {activity.period ? (
          <span className="shrink-0 text-xs text-[var(--gh-fg-muted)]">
            {activity.period}
          </span>
        ) : null}
      </div>
      <ul className="mt-3 space-y-2 text-base leading-relaxed text-[var(--gh-fg-muted)]">
        {activity.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span className="text-[var(--gh-fg-muted)]">●</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
