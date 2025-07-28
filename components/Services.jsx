import React from "react";
import styles from "../styles/Tjanster.module.css";
import { Code, Pen, Globe, Palette } from "lucide-react";

const services = [
  {
    title: "Webbdesign",
    description:
      "Vackra, responsiva och användarvänliga webbplatser skräddarsydda för din verksamhet och målgrupp.",
    icon: Palette,
    id: "webbdesign",
  },
  {
    title: "Webbutveckling",
    description:
      "Modern webbutveckling med fokus på prestanda, tillgänglighet och användarupplevelse.",
    icon: Code,
    id: "webbutveckling",
  },
  {
    title: "Grafisk design",
    description:
      "Logotyper, grafiska element och visuell identitet som hjälper ditt varumärke att sticka ut.",
    icon: Pen,
    id: "grafisk-design",
  },
  {
    title: "SEO",
    description:
      "Optimering för sökmotorer som hjälper potentiella kunder att hitta din webbplats.",
    icon: Globe,
    id: "seo",
  },
];

export default function Services() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <h1 id="services-heading" className={styles.title}>
            Våra <span className={styles.highlight}>tjänster</span>
          </h1>
          <p className={styles.description}>
            Vi erbjuder ett komplett utbud av digitala tjänster för att hjälpa
            ditt företag att lyckas online.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div className={styles.card} key={service.id} id={service.id}>
              <div className={styles.iconWrapper}>
                <service.icon className={styles.icon} aria-hidden="true" />
              </div>
              <h2 className={styles.cardTitle}>{service.title}</h2>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
