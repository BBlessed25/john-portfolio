import { Lightbulb, MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="site-wrap" style={{ maxWidth: 420 }}>
        <div className="side-card">
          <Lightbulb className="talk-icon" strokeWidth={1.2} aria-hidden />
          <h3>Have Something Cool in Mind?</h3>
          <p>This can be start of something great!!!</p>
          <a href={`mailto:${profile.email}`} className="pill-btn">
            Let&apos;s Talk
            <MessageCircle className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
