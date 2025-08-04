// Anpassad Embla Carousel-komponent för ditt projekt (Next.js, JSX)
"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/portfolio/portfolio.module.css";

export default function DemoCarousel({ demos }) {
  return (
    <div className={styles.demoGrid2}>
      {demos.map((demo, i) => (
        <EmblaCard key={i} demo={demo} />
      ))}
    </div>
  );
}

function EmblaCard({ demo }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <article className={styles.card}>
      <div className={styles.carouselWrapper}>
        <div className={"embla overflow-hidden"} ref={emblaRef}>
          <div className="embla__container flex">
            {demo.images.map((img) => (
              <div key={img} className={styles.emblaSlide}>
                <Image
                  src={img}
                  alt={`${demo.title}`}
                  fill
                  className={styles.carouselImage}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className={`${styles.carouselButton} ${styles.right}`}
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <div className={styles.cardContent}>
        <p className={styles.category}>{demo.category}</p>
        <h3 className={styles.projectTitle}>{demo.title}</h3>
        <p className={styles.projectDescription}>{demo.description}</p>
        <div className={styles.demoCTA}>
          <Link href={demo.url} className={styles.demoButton}>
            {demo.ctaText}
          </Link>
        </div>
      </div>
    </article>
  );
}
