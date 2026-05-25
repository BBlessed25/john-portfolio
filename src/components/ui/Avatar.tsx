type AvatarProps = {
  name: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
};

export default function Avatar({ name, size = "md" }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full border border-[var(--gh-border)] bg-[var(--gh-subtle)] font-semibold text-[var(--gh-fg)] ${sizeClasses[size]}`}
      aria-hidden
    >
      {initials}
    </div>
  );
}
