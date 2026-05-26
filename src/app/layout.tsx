import type { Metadata } from "next";
import { Trirong } from "next/font/google";
import "./globals.css";

const trirong = Trirong({
  variable: "--font-trirong",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "John Ayodeji Adelusi | Portfolio",
  description: "AI Engineer and Software Engineer Portfolio",
  icons: {
    icon: [{ url: "/john.jpeg", type: "image/jpeg" }],
    shortcut: "/john.jpeg",
    apple: "/john.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.dataset.theme=d?"dark":"light";}catch(e){document.documentElement.dataset.theme="light";}})();`,
          }}
        />
      </head>
      <body className={`${trirong.variable} ${trirong.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
