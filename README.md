This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Contact form email setup

The hero's **Get in touch** button and the writing sidebar's **Let's talk** link
open the contact section. The form sends messages through the server route
`POST /api/contact` using Resend. The recipient is `profile.email` in
`src/data/portfolio.tsx` (currently `johnnyadex@gmail.com`). The visitor's email
is used as Reply-To, so replying in your inbox addresses the visitor.

1. Create a [Resend account](https://resend.com/) and
   [verify a domain you own](https://resend.com/docs/dashboard/domains/introduction)
   by adding the DNS records Resend provides. For example, verify
   `johnayodeji.tech` to send from `contact@johnayodeji.tech`.
2. Create a Resend API key with sending access for that domain.
3. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` and
   `CONTACT_FROM_EMAIL`. The sender must belong to the verified domain; your
   Gmail address is the recipient, not the sender.
4. Restart the local Next.js server. For production, add the same variables to
   your hosting provider's environment settings and redeploy when ready. Run as
   a Next.js application with server/API support; a static-only export cannot
   execute this route. Do not prefix either variable with `NEXT_PUBLIC_` or
   commit `.env.local`.
5. Submit a message from the form and confirm it arrives in your inbox (check
   Spam too). Reply to verify the visitor's address is selected. A successful
   submission means Resend accepted the request; actual delivery must be checked
   in your inbox or Resend dashboard.

The form validates inputs, blocks cross-origin browser submissions, and includes
a hidden honeypot for basic bot filtering. For higher traffic, apply a rate limit
to `/api/contact` using your hosting provider's firewall. The email address remains
visible as an alternative. Provider failures keep the message in the form and
show an error; missing configuration returns HTTP 503 rather than false success.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
