"use client";

import { Code2, Cpu, Gauge, Lightbulb, Mail, MessageCircle, PenLine } from "lucide-react";
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
    <section className="posts-section" id="posts" aria-labelledby="posts-title">
      <div className="site-wrap posts-layout">
        <div className="posts-main">
          <h2 className="posts-heading" id="posts-title">
            Recent Posts
          </h2>
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
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                </article>
              );
            })}
          </div>
          <button type="button" className="view-all" onClick={() => setShowAll((open) => !open)}>
            {showAll ? "SHOW LESS" : "VIEW ALL"}
          </button>
        </div>

        <aside className="posts-sidebar">
          <div className="side-card talk-card">
            <Lightbulb className="talk-icon" strokeWidth={1.2} aria-hidden />
            <h3>Have Something Cool in Mind?</h3>
            <p>This can be start of something great!!!</p>
            <a href={`mailto:${profile.email}`} className="pill-btn talk-btn">
              Let&apos;s Talk
              <MessageCircle className="h-4 w-4" strokeWidth={1.7} aria-hidden />
            </a>
          </div>

          <div className="side-card newsletter-card">
            <h3>
              <Mail className="h-4 w-4" strokeWidth={1.7} aria-hidden />
              Subscribe to my newsletter
            </h3>
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
