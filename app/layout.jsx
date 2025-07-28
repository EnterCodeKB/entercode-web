// app/layout.jsx
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CookieBanner from "@/components/CookieBanner";

export const metadata = {
  title: "EnterCode Sweden KB",
  description:
    "Vi erbjuder moderna webblösningar och apputveckling skräddarsydda för dina behov.",
  metadataBase: new URL("https://www.entercode.se"),
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "EnterCode Sweden KB",
    description: "Webb- och apputveckling för framtiden.",
    url: "https://www.entercode.se",
    siteName: "EnterCode",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EnterCode Sweden KB",
    description: "Webb- och apputveckling för framtiden.",
    images: ["/og-image.png"],
  },
  other: {
    "google-site-verification": "DIN_GOOGLE_KOD_HÄR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "EnterCode Sweden KB",
              url: "https://www.entercode.se",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.entercode.se/sok?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body>
        <Header />
        <CookieBanner />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
