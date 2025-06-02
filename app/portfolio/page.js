"use client";
import React from "react";
import styles from "@/app/portfolio/portfolio.module.css";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "PW NORD",
    description: "Professionell rengöring av altaner och uteplatser.",
    category: "Webbdesign & Utveckling",
    image: "/images/pwnord1.png", // denna ska finnas i public/images
    id: "pwnord",
    url: "https://www.pwnord.se",
  },
  {
    title: "Auxesis",
    description: "Professionell webbplats för en forskningsbolag inom smärta.",
    category: "Web & Branding",
    image: "/images/auxesis.png", // denna ska också ligga i public/images
    id: "auxesis",
    url: "https://www.auxesis.se",
  },
  {
    title: "HemmaGott",
    description: "Samling av recept – enkelt, gott och hemtrevligt.",
    category: "Receptapp",
    image: "/images/smattochgott.png", // OBS: detta är korrekt när bilden ligger i public/images
    id: "hemmagott",
    url: "https://www.hemmagott.se",
  },
];

export default function PortfolioPage() {
  return (
    <section className={styles.section} aria-labelledby="portfolio-heading">
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <h1 id="portfolio-heading" className={styles.title}>
            Vårt <span className={styles.highlight}>arbete</span>
          </h1>
          <p className={styles.description}>
            Se några av våra senaste projekt och upptäck hur vi kan hjälpa din
            verksamhet att lyckas online.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              <article className={styles.card} id={project.id}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.image}
                  />
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.category}>{project.category}</p>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
