import ContactForm from "@/components/portfolio/ContactForm";
import { profile } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section className="contact-stage scroll-mt-24" id="contact" aria-labelledby="contact-title">
      <div className="site-wrap contact-content">
        <p className="inner-page-eyebrow">Contact</p>
        <h1 className="inner-page-title" id="contact-title">Have something cool in mind?</h1>
        <p className="inner-page-copy">
          Tell me what you are building, where you are stuck, or what you want
          to explore. This could be the start of something great.
        </p>
        <ContactForm />
        <p className="contact-direct">
          Prefer email? <a href={`mailto:${profile.publicEmail}`}>{profile.publicEmail}</a>
        </p>
      </div>
    </section>
  );
}
