import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Footer from "./components/Footer";
import Nav from "./components/Navbar";
import BackgroundWrapper from "./components/BackgroundWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>EnterCode Sweden KB</title>
        <meta name="description" content="Description of your page" />

        {/* Lägg till Montserrat-fonten från Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <BackgroundWrapper>
          <Nav />
          <main className="relative">{children}</main>
        </BackgroundWrapper>
        <Footer />
      </body>
    </html>
  );
}
