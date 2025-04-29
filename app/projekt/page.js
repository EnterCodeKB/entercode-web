"use client";
import React from "react";

import ImageCarousel from "../components/ImageCarousel";
import styles from "./projekt.module.css";

export default function Projekt() {
  const carousels = [
    ["/images/img1.png", "/images/img2.png", "/images/img3.png"],
    ["/images/img4.png", "/images/img5.png", "/images/img6.png"],
    ["/images/img7.png", "/images/img8.png", "/images/img9.png"],
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Välkommen till vår sida</h1>
        <p>Här hittar du våra senaste projekt och inspiration.</p>
      </header>
      <section className={styles.carouselSection}>
        {carousels.map((images, index) => (
          <div key={index} className={styles.column}>
            <ImageCarousel images={images} />
          </div>
        ))}
      </section>
    </div>
  );
}
