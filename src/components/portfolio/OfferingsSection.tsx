import { Globe, Hammer, Handshake, MessageCircle, Users } from "lucide-react";
import { offerings } from "@/data/portfolio";

const icons = [MessageCircle, Globe, Hammer, Handshake, Users];

export default function OfferingsSection() {
  return (
    <section className="section section-center" id="offerings">
      <div className="site-wrap">
        <h2 className="section-title">What I can offer for Your Organization</h2>
        <p className="section-copy">
          I have worked with a number of clients ranging from nascent startup to
          product teams shipping AI systems. Check what I can do.
        </p>
        <div className="offer-grid">
          {offerings.map((offer, index) => {
            const Icon = icons[index] ?? MessageCircle;
            return (
              <article key={offer.title} className="offer-card">
                <Icon className="h-7 w-7" strokeWidth={1.4} aria-hidden />
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
