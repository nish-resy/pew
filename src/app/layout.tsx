import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi NCR",
    addressCountry: "IN",
  },
  areaServed: ["International", "Europe"],
  description:
    "Specialized mobile engineering and product consultancy for scalable applications and distributed engineering systems.",
  email: "info@paulenggworks.com",
  name: "PEW",
  alternateName: "Paul Engg Works",
  serviceType: [
    "Mobile engineering consulting",
    "iOS architecture consulting",
    "Distributed engineering consulting",
  ],
  url: "https://paulenggworks.com",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://paulenggworks.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "PEW | Mobile Engineering Consultancy",
    template: "%s | PEW",
  },
  description:
    "PEW is a specialized mobile engineering and product consultancy for scalable mobile applications, iOS architecture, performance, and distributed engineering systems.",
  keywords: [
    "mobile engineering consultancy",
    "iOS architecture consulting",
    "mobile product scalability",
    "distributed engineering consulting",
    "mobile engineering advisory",
    "PEW",
  ],
  openGraph: {
    description:
      "Specialized mobile engineering consulting for scalable products, distributed delivery, and international product teams.",
    images: [
      {
        alt: "PEW mobile engineering systems visual",
        height: 1365,
        url: "/engineering-visual.png",
        width: 2048,
      },
    ],
    locale: "en_US",
    siteName: "PEW",
    title: "PEW | Mobile Engineering Consultancy",
    type: "website",
    url: "/",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
