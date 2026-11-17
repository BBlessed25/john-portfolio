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
          I’m a software engineer building web applications, backend integrations,
          and AI-powered automation. My experience spans AI coding agent
          evaluation, Python services, and frontend development. I’m based in
          London, Ontario, Canada.
        </p>
        <a href="#contact" className="pill-btn">
          Get in touch
          <MessageCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden />
        </a>
      </div>
    </section>
  );
}
