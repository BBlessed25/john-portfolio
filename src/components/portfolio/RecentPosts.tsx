"use client";

import { Code2, Cpu, Gauge, Mail, MessageCircle, PenLine } from "lucide-react";
import { FormEvent, useState } from "react";
import { posts, profile } from "@/data/portfolio";

const PREVIEW_COUNT = 3;

const categoryIcons = {
  Agents: PenLine,
  "ML Ops": Gauge,
  Data: Cpu,
  Speech: MessageCircle,
  Engineering: Code2,
};

export default function RecentPosts() {
  const [subscribed, setSubscribed] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
  };

  const visiblePosts = showAll ? posts : posts.slice(0, PREVIEW_COUNT);

  return (
    <section className="inner-page posts-section site-wrap" id="posts" aria-labelledby="posts-title">
      <header className="inner-page-intro">
        <p className="inner-page-eyebrow">Writing</p>
        <h1 className="inner-page-title" id="posts-title">
          Notes from the work.
        </h1>
        <p className="inner-page-copy">
          Practical ideas about AI agents, production systems, data, and the
          craft of building dependable software.
        </p>
      </header>

      <div className="posts-layout">
        <div className="posts-main">
          <div className="posts-list">
            {visiblePosts.map((post) => {
              const Icon =
                categoryIcons[post.category as keyof typeof categoryIcons] ?? PenLine;
              return (
                <article key={post.title} className="post-item">
                  <div className="post-meta">
                    <span>{post.date}</span>
                    <span className="post-dot">·</span>
                    <span>{post.readTime}</span>
                    <span className="post-tag">
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
                      {post.category}
                    </span>
                  </div>
                  <div className="post-title-line">
                    <h2 className="post-title">{post.title}</h2>
                  </div>
                  <p className="post-excerpt">{post.excerpt}</p>
                </article>
              );
            })}
          </div>
          <button type="button" className="view-all" onClick={() => setShowAll((open) => !open)}>
            {showAll ? "SHOW LESS" : "VIEW ALL"}
          </button>
        </div>

        <aside className="posts-sidebar" aria-label="Stay in touch">
          <div className="posts-aside-block">
            <p className="inner-page-eyebrow">Start a conversation</p>
            <h2>Have something cool in mind?</h2>
            <p>This could be the start of something great.</p>
            <a href={`mailto:${profile.email}`} className="pill-btn talk-btn">
              Let&apos;s talk
              <MessageCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden />
            </a>
          </div>

          <div className="posts-aside-block newsletter-card">
            <h2>
              <Mail className="h-4 w-4" strokeWidth={1.7} aria-hidden />
              Subscribe to my newsletter
            </h2>
            <p>Get important news and articles delivered directly to your inbox.</p>
            {subscribed ? (
              <p className="newsletter-note">You&apos;re on the list. Thanks for subscribing.</p>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input type="email" name="email" placeholder="Email address" required />
                <button type="submit">Subscribe</button>
              </form>
            )}
            <p className="newsletter-note">
              You can unsubscribe at any time using the link in our emails. For more
              details, review our privacy policy.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
