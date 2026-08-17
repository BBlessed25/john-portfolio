import { research } from "@/data/portfolio";

export default function ResearchProjectsSection() {
  return (
    <section id="projects" className="section site-wrap scroll-mt-24">
      <h2 className="section-title">Projects</h2>
      <p className="section-copy">{research.headline}</p>

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
