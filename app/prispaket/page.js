"use client";

import styles from "./index.module.css";
import Link from "next/link";

export default function Prispaket() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Våra Prispaket</h1>

      <div className={styles.grid}>
        {/* Startpaket */}
        <div className={styles.card}>
          <h2>Startpaket</h2>
          <p className={styles.price}>från 6 000 kr</p>
          <ul className={styles.features}>
            <li>Onepager-webbplats</li>
            <li>Mobilanpassad design</li>
            <li>Grundläggande SEO</li>
            <li>Kontaktformulär</li>
          </ul>
          <Link href="/kontakt?paket=startpaket" className={styles.button}>
            Kontakta oss
          </Link>
        </div>

        {/* Företagspaket */}
        <div className={styles.card}>
          <h2>Företagspaket</h2>
          <p className={styles.price}>från 15 000 kr</p>
          <ul className={styles.features}>
            <li>Upp till 5 sidor</li>
            <li>CMS-integration</li>
            <li>Anpassad design</li>
            <li>Google Analytics</li>
          </ul>
          <Link href="/kontakt?paket=foretagspaket" className={styles.button}>
            Boka möte
          </Link>
        </div>

        {/* Premiumpaket */}
        <div className={styles.card}>
          <h2>Premiumpaket</h2>
          <p className={styles.price}>från 30 000 kr</p>
          <ul className={styles.features}>
            <li>Skräddarsydd lösning</li>
            <li>API-integrationer</li>
            <li>Headless CMS</li>
            <li>Teknisk SEO och prestandaoptimering</li>
          </ul>
          <Link href="/kontakt?paket=premiumpaket" className={styles.button}>
            Diskutera projekt
          </Link>
        </div>

        {/* Anpassat Paket */}
      </div>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Redo att ta nästa steg?</h2>
        <p>
          Vi hjälper dig skapa en webbplats som lyfter ditt företag till nästa
          nivå.
        </p>
        <Link href="/kontakt" className={styles.ctaButton}>
          Kontakta oss idag
        </Link>
      </section>
    </main>
  );
}
