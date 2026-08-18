import { ArrowUpRight } from "lucide-react";
import { offerings } from "@/data/portfolio";

export default function OfferingsSection() {
  return (
    <section className="offerings-section site-wrap" id="offerings">
      <div className="offerings-intro">
        <p className="inner-page-eyebrow">What I do</p>
        <h2>Ways I can help.</h2>
        <p>
          I work with startups and product teams turning ambitious AI ideas into
          reliable, useful software.
        </p>
      </div>
      <div className="offer-list">
        {offerings.map((offer) => (
          <article key={offer.title} className="offer-row">
            <div>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
            <ArrowUpRight aria-hidden strokeWidth={1.6} />
          </article>
        ))}
      </div>
    </section>
  );
}
