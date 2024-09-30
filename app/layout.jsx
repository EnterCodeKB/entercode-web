import Head from "next/head";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Description of your page" />
      </Head>
      <body>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
