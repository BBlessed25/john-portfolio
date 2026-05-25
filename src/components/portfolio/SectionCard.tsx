import type { ReactNode } from "react";

type SectionCardProps = {
  title?: string;
  children: ReactNode;
  id?: string;
};

export default function SectionCard({ title, children, id }: SectionCardProps) {
  return (
    <section id={id} className="scroll-mt-16">
      {title ? (
        <h2 className="mb-4 text-base font-semibold text-[var(--gh-fg)]">
          {title}
        </h2>
      ) : null}
      <div className="rounded-[var(--gh-radius)] border border-[var(--gh-border)] bg-[var(--gh-default)] p-4 shadow-[0_1px_0_rgba(27,31,36,0.04)] md:p-6">
        {children}
      </div>
    </section>
  );
}
