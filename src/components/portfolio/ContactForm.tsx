"use client";

import { Send } from "lucide-react";
import { useRef, useState } from "react";
import type { FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const sending = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setStatus("sending");
    const form = event.currentTarget;
    const fields = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(fields)),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error("Send failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={status === "sending"}>
      <fieldset disabled={status === "sending"}>
        <div className="contact-fields">
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" placeholder="Your name" autoComplete="name" required maxLength={100} />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required maxLength={254} />
          </div>
        </div>
        <div className="contact-field">
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" placeholder="Tell me what you have in mind…" rows={6} required maxLength={5000} />
        </div>
        <div className="contact-honeypot" hidden aria-hidden="true">
          <label htmlFor="contact-website">Leave this field empty</label>
          <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <button className="pill-btn contact-submit" type="submit">
          {status === "sending" ? "Sending…" : "Send message"}
          <Send className="h-4 w-4" strokeWidth={1.7} aria-hidden />
        </button>
      </fieldset>
      <p className="contact-feedback" role="status" aria-live="polite" aria-atomic="true">
        {status === "success" && "Thanks! Your message has been submitted. I’ll get back to you soon."}
        {status === "error" && "Your message couldn’t be sent. Your text is still here; please try again or use the email address below."}
      </p>
    </form>
  );
}
