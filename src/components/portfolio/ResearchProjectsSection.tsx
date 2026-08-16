import { research } from "@/data/portfolio";

export default function ResearchProjectsSection() {
  return (
    <section id="research-projects" className="research-section scroll-mt-16">
      <span className="portfolio-section-number">02</span>
      <h2 className="portfolio-section-title">Research &amp; Projects</h2>
      <p className="portfolio-section-subtitle">{research.headline}</p>

      <div className="research-section-content">
        <p className="research-body">{research.body}</p>
        <p className="research-quote">{research.quote}</p>

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
