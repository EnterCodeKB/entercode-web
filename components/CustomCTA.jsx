import React from "react";
import styles from "@/styles/CustomCTA.module.css";
import Link from "next/link";

export default function CustomCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Behöver du en skräddarsydd lösning?</h2>
          <p>
            Vi erbjuder anpassade lösningar för företag med specifika krav.
            Kontakta oss för en personlig konsultation.
          </p>
        </div>
        <Link href="/kom-igang" className={styles.button}>
          Kontakta oss
        </Link>
      </div>
    </section>
  );
}
