import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nathan pro",
  description:
    "nathan pro web developer |react developer natahan pro | nathan pro 2016 | nathan pro.web",
  keywords: "webdev , nathanpro , reactDevelper ",
  twitter: {
    images: "/card.png",
    description: "Nathan Pro projects , portfolio",
  },
  openGraph: {
    images: "/card.png",
    title: "Nathan pro web developer portfolio",
  },

  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="7zom9sT8t9M5mvY7miiK_BB8XwR3VBysu-sKA2_vs4E"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y) {
                w[c] = w[c] || function() {
                  (w[c].q = w[c].q || []).push(arguments)
                }, w[c].l = 1 * new Date();
                t = l.createElement(a), y = l.getElementsByTagName(a)[0];
                t.async = 1; t.src = r; y.parentNode.insertBefore(t, y)
              })(window, document, 'clarity', 'https://www.clarity.ms/tag/ogm1030ckp');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
