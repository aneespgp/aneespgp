import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anees-ur-Rehman - Full Stack Developer | MERN Stack Expert",
  description: "Full-stack developer specializing in React, Next.js, Node.js, and MongoDB. Expert in MERN stack with years of freelancing experience. Building robust frontend and backend applications with cutting-edge technologies.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer", 
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Freelancer",
    "Anees-ur-Rehman",
    "aneespgp"
  ].join(", "),
  authors: [{ name: "Anees-ur-Rehman", url: "https://github.com/anees-tech" }],
  creator: "Anees-ur-Rehman",
  publisher: "Anees-ur-Rehman",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aneespgp.vercel.app",
    title: "Anees-ur-Rehman - Full Stack Developer | MERN Stack Expert",
    description: "Full-stack developer specializing in React, Next.js, Node.js, and MongoDB. Expert in MERN stack with years of freelancing experience.",
    siteName: "Anees-ur-Rehman Portfolio",
    images: [
      {
        url: "https://github-readme-stats.vercel.app/api?username=anees-tech&show_icons=true&count_private=true&hide_border=true&theme=dark",
        width: 1200,
        height: 630,
        alt: "Anees-ur-Rehman - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anees-ur-Rehman - Full Stack Developer | MERN Stack Expert",
    description: "Full-stack developer specializing in React, Next.js, Node.js, and MongoDB. Expert in MERN stack with years of freelancing experience.",
    creator: "@aneespgp_2",
    images: ["https://github-readme-stats.vercel.app/api?username=anees-tech&show_icons=true&count_private=true&hide_border=true&theme=dark"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  alternates: {
    canonical: "https://aneespgp.vercel.app",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Anees-ur-Rehman",
    "jobTitle": "Full Stack Developer",
    "description": "Full-stack developer specializing in React, Next.js, Node.js, and MongoDB. Expert in MERN stack with years of freelancing experience.",
    "url": "https://aneespgp.vercel.app",
    "sameAs": [
      "https://linkedin.com/in/aneespgp",
      "https://github.com/anees-tech",
      "https://twitter.com/aneespgp_2",
      "https://instagram.com/aneespgp",
      "https://www.facebook.com/aneeesPGP",
      "https://dev.to/aneespgp",
      "https://codepen.com/aneespgp",
      "https://stackoverflow.com/users/14209356"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "Express.js",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "MySQL",
      "PHP",
      "Firebase",
      "Git",
      "Linux",
      "WordPress"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelancer"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Self-taught Developer"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://aneespgp.vercel.app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
