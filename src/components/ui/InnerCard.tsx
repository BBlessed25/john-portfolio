import type { ReactNode } from "react";

type InnerCardProps = {
  children: ReactNode;
  className?: string;
};

export default function InnerCard({ children, className = "" }: InnerCardProps) {
  return (
    <div
      className={`rounded-[var(--gh-radius)] border border-[var(--gh-border)] bg-[var(--gh-default)] p-3 ${className}`}
    >
      {children}
    </div>
  );
}
