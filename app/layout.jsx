import Head from "next/head";
import "./globals.css";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Your Page Title</title>
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
        <main className="relative">{children}</main>
      </body>
      <Footer />
    </html>
  );
}
