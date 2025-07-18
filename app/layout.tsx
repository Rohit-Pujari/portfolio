import type { Metadata } from "next";
import "./globals.css";
import Particles from "@/components/Particles";

export const metadata: Metadata = {
  title: "Rohit Pujari | Developer Portfolio",
  description:
    "Portfolio of Rohit Pujari — Full Stack developer, Linux enthusiast, and open-source contributor. View projects, blogs, and GitHub activity.",
  keywords: [
    "Rohit Pujari",
    "Full Stack Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "GitHub",
    "Open Source",
    "Vite",
    "JavaScript",
    "Linux",
    "Arch Linux",
    "Blogs",
  ],
  authors: [{ name: "Rohit Pujari", url: "https://rohit-pujari.github.io" }],
  creator: "Rohit Pujari",
  metadataBase: new URL("https://rohit-pujari.github.io"),
  openGraph: {
    title: "Rohit Pujari | Full Stack Developer",
    description: "Explore my work, GitHub activity, and blog posts.",
    url: "https://rohit-pujari.github.io",
    siteName: "Rohit Pujari Portfolio",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/avatar.jpg" type="image/jpg" />
      </head>
      <body className="bg-black text-white font-serif relative overflow-hidden">
        <div className="fixed top-0 left-0 w-full h-full z-0">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={700}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={200}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={true}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
