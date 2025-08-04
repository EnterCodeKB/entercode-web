//app/portfolio/page.js
"use client";
import React, { useState } from "react";
import styles from "@/app/portfolio/portfolio.module.css";
import Image from "next/image";
import Link from "next/link";
import DemoCarousel from "@/components/DemoCarousel";

const projects = [
  {
    title: "PW NORD",
    description: "Professionell rengöring av altaner och uteplatser.",
    category: "Webbdesign & Utveckling",
    image: "/images/pwnoronepg.png",
    id: "pwnord",
    url: "https://www.pwnord.se",
  },
  {
    title: "Auxesis",
    description: "Professionell webbplats för en forskningsbolag inom smärta.",
    category: "Web & Branding",
    image: "/images/auxesis.png",
    id: "auxesis",
    url: "https://www.auxesis.se",
  },
  {
    title: "HemmaGott",
    description: "Samling av recept – enkelt, gott och hemtrevligt.",
    category: "Receptapp",
    image: "/images/hemmagottbgbild.png",
    id: "hemmagott",
    url: "https://www.hemmagott.se",
  },
];

const demos = [
  {
    title: "Frisörsalong",
    description:
      "Modern hemsida med onlinebokning, tjänstelista och galleribilder.",
    category: "Skönhet & Hälsa",
    images: [
      "/images/demo/demo-frisor-1.jpeg",
      "/images/demo/demo-frisor-2.jpeg",
      "/images/demo/demo-frisor-3.jpeg",
    ],
    url: "/kontakt?fran=frisor",
    ctaText: "Få en liknande hemsida",
  },
  {
    title: "Restaurang",
    description:
      "Menypresentation, öppettider och bordsbokning för mobil och desktop.",
    category: "Mat & Dryck",
    images: [
      "/images/demo/demo-restaurang-1.jpeg",
      "/images/demo/demo-restaurang-2.jpeg",
      "/images/demo/demo-restaurang-3.jpeg",
    ],
    url: "/kontakt?fran=restaurang",
    ctaText: "Få en liknande hemsida",
  },
  {
    title: "Byggfirma",
    description:
      "Visa upp projekt, tjänster, offertförfrågan och kontaktformulär.",
    category: "Tjänsteföretag",
    images: [
      "/images/demo/demo-bygg-1.jpeg",
      "/images/demo/demo-bygg-2.jpeg",
      "/images/demo/demo-bygg-3.jpeg",
    ],
    url: "/kontakt?fran=byggfirma",
    ctaText: "Få en liknande hemsida",
  },
  {
    title: "E-handel – Kläder",
    description:
      "Trendig webbshop med produktvisning, filtrering och snabbkassa.",
    category: "E-handel",
    images: [
      "/images/demo/demo-eshop-1.jpeg",
      "/images/demo/demo-eshop-2.jpeg",
      "/images/demo/demo-eshop-3.jpeg",
    ],
    url: "/kontakt?fran=eshop",
    ctaText: "Få en liknande webshop",
  },
  {
    title: "Terapeut / Coach",
    description:
      "Lugn design med bokningssystem, presentation av tjänster och kontaktformulär.",
    category: "Hälsa & Välmående",
    images: [
      "/images/demo/demo-coach-1.jpeg",
      "/images/demo/demo-coach-2.jpeg",
      "/images/demo/demo-coach-3.jpeg",
    ],
    url: "/kontakt?fran=coach",
    ctaText: "Få en liknande hemsida",
  },
  {
    title: "Konsultbolag",
    description:
      "Proffsig design med tjänstepresentation, case och kontaktvägar.",
    category: "Företagstjänster",
    images: [
      "/images/demo/demo-konsult-1.jpeg",
      "/images/demo/demo-konsult-2.jpeg",
      "/images/demo/demo-konsult-3.jpeg",
    ],
    url: "/kontakt?fran=konsult",
    ctaText: "Få en liknande hemsida",
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
                    width={400}
                    height={225}
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

        <div className={styles.textCenter}>
          <h2 className={styles.title}>
            Exempel <span className={styles.highlight}>per bransch</span>
          </h2>
          <p className={styles.description}>
            Här ser du olika typer av hemsidor vi kan skapa för din verksamhet.
            Välj en stil som passar dig!
          </p>
        </div>
      </div>

      {/* Ny karusell för demosektion */}
      <DemoCarousel demos={demos} />
    </section>
  );
}
