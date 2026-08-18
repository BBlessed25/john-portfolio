import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/portfolio";

export default function HeroSection() {
  const firstName = profile.name.split(" ")[0];

  return (
    <section className="hero-stage">
      <div className="site-wrap">
        <Image
          src="/john.jpeg"
          alt={profile.name}
          className="hero-photo"
          width={118}
          height={118}
        />
        <h1 className="hero-title">
          Hi I&apos;m {firstName}, AI Engineer and Software Engineer
        </h1>
        <p className="hero-bio">
          I am an AI engineer and software engineer remotely working across
          Canada. I make <em>useful applications</em> for the web, agentic LLM
          systems, automation, and interfaces people actually use. In my spare
          time, I enjoy building, reading, and shipping experiments.
        </p>
        <a href={`mailto:${profile.email}`} className="pill-btn">
          Get in touch
          <MessageCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden />
        </a>
      </div>
    </section>
  );
}
