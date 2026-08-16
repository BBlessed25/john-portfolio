import { Dot } from "lucide-react";
import type { Activity } from "@/data/portfolio";

type ActivityCardProps = {
  activity: Activity;
};

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className="py-1">
      {activity.organization || activity.role ? (
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            {activity.organization ? (
              <h4 className="text-base font-semibold text-[var(--gh-fg)]">
                {activity.organization}
              </h4>
            ) : null}
            {activity.campus ? (
              <p className="text-xs text-[var(--gh-fg-muted)]">{activity.campus}</p>
            ) : null}
            {activity.role ? (
              <p className="mt-1 text-base text-[var(--gh-fg)]">{activity.role}</p>
            ) : null}
          </div>
          {activity.period ? (
            <span className="shrink-0 text-xs text-[var(--gh-fg-muted)]">
              {activity.period}
            </span>
          ) : null}
        </div>
      ) : null}
      <ul
        className={`space-y-2 text-base leading-relaxed text-[var(--gh-fg-muted)] ${activity.organization || activity.role ? "mt-3" : ""}`}
      >
        {activity.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <Dot className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gh-fg-muted)]" aria-hidden />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
