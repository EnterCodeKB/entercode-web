"use client";

import { motion } from "framer-motion";
import styles from "../styles/Cards.module.css";

export default function Cards() {
  return (
    <section className={`${styles.cardsSection} ${styles.fadeIn}`}>
      <div className={styles.cardsGrid}>
        {/* Kort 1 */}
        <div className={`${styles.card} ${styles.fadeDelay1}`}>
          <div className={styles.imgContainer}>
            <img src="/vadvigor.jpeg" alt="Webbsidor" className={styles.img} />
            <div className={styles.overlay}>
              <h3 className={styles.cardTitle}>Webbsidor</h3>
              <p className={styles.cardText}>
                Vi bygger moderna och strukturerade webbsidor som imponerar och
                skapar digital framgång.
              </p>
            </div>
          </div>
        </div>

        {/* Kort 2 */}
        <div className={`${styles.card} ${styles.fadeDelay2}`}>
          <div className={styles.imgContainer}>
            <img
              src="/devices.jpeg"
              alt="Våra tjänster"
              className={styles.img}
            />
            <div className={styles.overlay}>
              <h3 className={styles.cardTitle}>Våra tjänster</h3>
              <ul className={styles.cardList}>
                <li>Webbsidor för företag</li>
                <li>Hjälp med befintlig hemsida</li>
                <li>Kundanpassade lösningar</li>
                <li>IT-support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Kort 3 */}
        <div className={`${styles.card} ${styles.fadeDelay3}`}>
          <div className={styles.imgContainer}>
            <img src="/suport2.jpeg" alt="Vår process" className={styles.img} />
            <div className={styles.overlay}>
              <h3 className={styles.cardTitle}>Vår process</h3>
              <ul className={styles.cardList}>
                <li>Behovsanalys</li>
                <li>Design och utveckling</li>
                <li>Lansering och optimering</li>
                <li>Löpande support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
