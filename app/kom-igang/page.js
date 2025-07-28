// app/kom-igang/page.js

"use client";

import React from "react";
import styles from "@/styles/getStarted.module.css";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Startup",
    price: "9 500 kr",
    description: "Perfekt för småföretag som vill etablera sig online.",
    features: [
      "Responsiv webbdesign",
      "3 sidor inkl. startsida",
      "SEO-optimering",
      "Kontaktformulär",
      "Social media integration",
      "1 månads support",
    ],
  },
  {
    name: "Business",
    price: "18 500 kr",
    description: "Komplett lösning för växande företag med högre krav.",
    features: [
      "Allt i Startup-paketet",
      "Upp till 10 sidor",
      "Bildgalleri/portfolio",
      "Bloggfunktion",
      "Nyhetsbrev-integration",
      "Google Analytics-installation",
      "3 månaders support",
    ],
    popular: true,
  },
  {
    name: "E-handel",
    price: "Från 29 500 kr",
    description: "Fullständig e-handelslösning för din verksamhet.",
    features: [
      "Alla funktioner i Business-paketet",
      "Produktkatalog",
      "Betallösningar",
      "Fraktintegrationer",
      "Kundvagn och checkout",
      "6 månaders support",
    ],
  },
];

const GetStartedSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>
            Välj din <span className={styles.highlight}>betalningsplan</span>
          </h1>
          <p>
            Vi erbjuder flexibla lösningar för företag i olika storlekar. Välj
            den plan som passar dig bäst.
          </p>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`${styles.card} ${pkg.popular ? styles.popular : ""}`}
            >
              {pkg.popular && <div className={styles.ribbon}>Mest populär</div>}
              <h3>{pkg.name}</h3>
              <div className={styles.price}>{pkg.price}</div>
              <p className={styles.description}>{pkg.description}</p>
              <ul className={styles.features}>
                {pkg.features.map((feature, i) => (
                  <li key={i}>
                    <CheckCircle size={18} /> {feature}
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className={styles.button}>
                Välj {pkg.name}
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.custom}>
          <h2>Behöver du en skräddarsydd lösning?</h2>
          <p>
            Vi erbjuder anpassade lösningar för företag med specifika krav.
            Kontakta oss för en personlig konsultation.
          </p>
          <Link href="/kontakt" className={styles.cta}>
            Kontakta oss
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
