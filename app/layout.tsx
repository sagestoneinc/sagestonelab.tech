import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SagestoneLab.tech | Build. Test. Solve. Scale.",
  description:
    "SagestoneLab is the innovation arm of Sage Stone Inc — building AI-powered tools, automation systems, and SaaS products that power modern business growth.",
  keywords: [
    "SagestoneLab",
    "Sage Stone Inc",
    "AI tools",
    "automation",
    "SaaS",
    "innovation lab",
    "business tools",
  ],
  authors: [{ name: "Sage Stone Inc" }],
  creator: "Sage Stone Inc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sagestonelab.tech",
    siteName: "SagestoneLab.tech",
    title: "SagestoneLab.tech | Build. Test. Solve. Scale.",
    description:
      "Building tools. Powering growth. SagestoneLab is where Sage Stone Inc engineers, experiments, and launches the future.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SagestoneLab.tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SagestoneLab.tech | Build. Test. Solve. Scale.",
    description: "Building tools. Powering growth.",
    creator: "@SagestoneLab",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
