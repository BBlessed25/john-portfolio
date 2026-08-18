import { research } from "@/data/portfolio";

export default function ResearchProjectsSection() {
  return (
    <section id="projects" className="inner-page inner-page-projects site-wrap scroll-mt-24">
      <header className="inner-page-intro">
        <p className="inner-page-eyebrow">Projects</p>
        <h1 className="inner-page-title">Ideas made useful.</h1>
        <p className="inner-page-copy">{research.headline}</p>
      </header>

      <div className="research-section-content">
        <p className="research-body">{research.body}</p>
        <blockquote className="research-quote">{research.quote}</blockquote>

        <div className="research-tags">
          {research.tags.map((tag) => (
            <span key={tag} className="research-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
