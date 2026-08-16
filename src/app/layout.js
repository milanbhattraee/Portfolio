import "./globals.css";

export const metadata = {
  title: {
    default: "Milan Bhattarai | Software Engineer Portfolio",
    template: "%s | Milan Bhattarai"
  },
  description:
    "Milan Bhattarai - Self-taught Software Engineer specializing in full-stack development with React, Node, Express, PostgreSQL, MongoDB, Next.js, and Tailwind CSS. Projects include Shopylib, Travelib, and Scholib.",
  metadataBase: new URL("https://milanbhattarai.com.np"),
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/milan.png',
  },
  keywords: [
    "Milan Bhattarai",
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "React",
    "Node",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Next.js",
    "Tailwind CSS",
    "Portfolio",
    "Shopylib",
    "Travelib",
    "Scholib",
    "Self-taught Developer",
    "Nepal Developer",
  ],
  authors: [{ name: "Milan Bhattarai" }],
  creator: "Milan Bhattarai",
  publisher: "Milan Bhattarai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Milan Bhattarai | Software Engineer Portfolio",
    description:
      "Explore Milan Bhattarai's portfolio showcasing projects like Shopylib, Travelib, and Scholib, built with technologies including React, Node, Express, PostgreSQL, MongoDB, and Next.js.",
    type: "website",
    locale: "en_US",
    url: "https://milanbhattarai.com.np",
    siteName: "Milan Bhattarai Portfolio",
    images: [
      {
        url: "/images/milan.png",
        width: 1200,
        height: 630,
        alt: "Milan Bhattarai - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milan Bhattarai | Software Engineer Portfolio",
    description:
      "Portfolio of Milan Bhattarai - full-stack developer with expertise in React, Node, Express, PostgreSQL, MongoDB, Next.js, and modern web technologies.",
    images: ["/images/milan.png"],
    creator: "@milanbhattarai",
    site: "@milanbhattarai",
  },
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
  alternates: {
    canonical: "https://milanbhattarai.com.np",
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'technology',
  manifest: '/manifest.json',
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#0c0055",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Milan Bhattarai",
    jobTitle: "Software Engineer",
    description: "Self-taught Software Engineer specializing in full-stack development",
    url: "https://milanbhattarai.com.np",
    image: "https://milanbhattarai.com.np/images/milan.png",
    sameAs: [
      "https://github.com/milanbhattarai",
      "https://twitter.com/milanbhattarai",
      "https://linkedin.com/in/milanbhattarai",
    ],
    knowsAbout: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Full-Stack Development",
      "Web Development"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Self-taught"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-neutral-950">
        <div className="fixed inset-0 -z-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#0c0055d9,rgba(255,255,255,0))]" />
        {children}
      </body>
    </html>
  );
}
