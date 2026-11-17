import { profile } from "@/data/portfolio";

const MAX_BODY_BYTES = 32_000;

function reply(body: { success?: boolean; error?: string }, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      const originUrl = new URL(origin);
      // Next.js can normalize request.url to an internal hostname behind a proxy.
      const host = request.headers.get("host") ?? new URL(request.url).host;
      if (!["http:", "https:"].includes(originUrl.protocol) || originUrl.host !== host) {
        return reply({ error: "Request not allowed." }, 403);
      }
    } catch {
      return reply({ error: "Request not allowed." }, 403);
    }
  }
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return reply({ error: "Expected JSON." }, 415);
  }
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) {
    return reply({ error: "Message is too large." }, 413);
  }

  let data: unknown;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).length > MAX_BODY_BYTES) {
      return reply({ error: "Message is too large." }, 413);
    }
    data = JSON.parse(body);
  } catch {
    return reply({ error: "Invalid message." }, 400);
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return reply({ error: "Invalid message." }, 400);
  }

  const fields = data as Record<string, unknown>;
  // A hidden field catches simple form-filling bots without interrupting visitors.
  if (fields.website) return reply({ success: true });
  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";
  if (
    !name || name.length > 100 || /[\r\n]/.test(name) ||
    !email || email.length > 254 || !/^[^\s<>@,;]+@[^\s<>@,;]+\.[^\s<>@,;]+$/.test(email) ||
    !message || message.length > 5000
  ) {
    return reply({ error: "Enter a name, valid email address, and message." }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    return reply({ error: "The contact form is unavailable. Please use the email address on the page." }, 503);
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [profile.email],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return reply({ error: "Unable to send your message. Please try again." }, 502);
    const result = await response.json();
    if (typeof result.id !== "string" || !result.id) {
      return reply({ error: "Unable to confirm your message. Please try again." }, 502);
    }
    return reply({ success: true });
  } catch {
    return reply({ error: "Unable to send your message. Please try again." }, 502);
  }
}
