// app/layout.jsx
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import CookieBanner from "@/components/CookieBanner";

export const metadata = {
  title: "EnterCode Sweden KB",
  description: "Webbdesign",
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
