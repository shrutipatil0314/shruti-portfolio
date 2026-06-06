import type { Metadata } from "next";
// @ts-ignore: allow global CSS import in Next.js layout
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Shruti Patil — DevOps Engineer",
  description:
    "Portfolio of Shruti Patil, a DevOps Engineer specializing in CI/CD, Kubernetes, and cloud infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="pixel-grid-bg">{children}</body>
    </html>
  );
}
