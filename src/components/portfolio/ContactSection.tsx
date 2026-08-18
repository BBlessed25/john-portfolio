import { MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section className="contact-stage" id="contact">
      <div className="site-wrap contact-content">
        <p className="inner-page-eyebrow">Contact</p>
        <h1 className="inner-page-title">Have something cool in mind?</h1>
        <p className="inner-page-copy">
          Tell me what you are building, where you are stuck, or what you want
          to explore. This could be the start of something great.
        </p>
        <a href={`mailto:${profile.email}`} className="pill-btn">
          Let&apos;s talk
          <MessageCircle className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
