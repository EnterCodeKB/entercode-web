import React from "react";
import styles from "./omoss.module.css";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className={styles.section} aria-labelledby="about-heading">
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <h1 id="about-heading" className={styles.title}>
            Om <span className={styles.highlight}>oss</span>
          </h1>
          <p className={styles.description}>
            Lär känna teamet bakom entercode – en familjedriven webbyrå med
            kombinerad expertis och personlig service.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.history}>
            <h2 className={styles.subheading}>Vår historia</h2>
            <p>
              Entercode grundades ur en gemensam passion för webbutveckling,
              design och problemlösning. Det som började som ett kreativt
              sidoprojekt mellan två teknikälskare växte snabbt till en
              personlig och pålitlig webbyrå med kunder från flera olika
              branscher.
            </p>
            <p>
              Med Helenas erfarenhet inom IT och Karolinas moderna perspektiv
              från UX-design och teknik, förenar vi teknisk kompetens med
              estetisk känsla. Tillsammans skapar vi skräddarsydda lösningar som
              både fungerar felfritt och ser fantastiska ut.
            </p>
            <div className={styles.stats}>
              <div>
                <p className={styles.statNumber}>5+</p>
                <p className={styles.statLabel}>År av erfarenhet</p>
              </div>
              <div>
                <p className={styles.statNumber}>20+</p>
                <p className={styles.statLabel}>Nöjda kunder</p>
              </div>
              <div>
                <p className={styles.statNumber}>50+</p>
                <p className={styles.statLabel}>Slutförda projekt</p>
              </div>
            </div>
          </div>

          <div className={styles.imageGrid}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/helenabildny2.png"
                  alt="Helena, medgrundare"
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.imageText}>
                <h3>Helena Adelsten</h3>
                <p>Webbutvecklare & Grundare</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/karolinabildny2.png"
                  alt="Karolina, medgrundare"
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.imageText}>
                <h3>Karolina L Boman</h3>
                <p>UX Designer & Medgrundare</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.storyText}>
          <p>
            Vårt mål är att göra teknik och digitala lösningar tillgängliga,
            personliga och enkla. Med bakgrund inom programmering och IT-teknik
            erbjuder vi smarta tjänster för små och medelstora företag som vill
            växa online och effektivisera sin vardag.{" "}
          </p>
          <p>
            Vi tror på nära samarbete och starka relationer. Varje projekt är
            ett partnerskap där vi tillsammans skapar något unikt. Behöver du en
            modern webbplats, teknisk support eller strategiska lösningar? Då
            finns vi här för dig – engagerade, nyfikna och lösningsorienterade.
          </p>
          <h2 className={styles.subheading}>Våra värderingar:</h2>
          <ul className={styles.valuesList}>
            <li>
              <strong>Personligt bemötande</strong> – Vi lyssnar, är
              tillgängliga och lär känna våra kunders behov på djupet.
            </li>
            <li>
              <strong>Kreativitet</strong> – Varje lösning är unik, precis som
              våra kunder.
            </li>
            <li>
              <strong>Tillförlitlighet</strong> – Vi håller vad vi lovar och
              levererar kvalitet i varje steg.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
