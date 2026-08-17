import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["700", "800"],
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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=true;if(t==="light")d=false;else if(t==="system")d=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.dataset.theme=d?"dark":"light";}catch(e){document.documentElement.dataset.theme="dark";}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${nunito.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
