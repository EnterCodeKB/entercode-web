import React from "react";
import Link from "next/link";
import Cards from "./Cards";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.herotext}>
        <div>
          <h1 className={styles.divh1}>VÄLKOMMEN TILL ENTER CODE SWEDEN</h1>
          <h2 className={styles.divh2}>Bygg Framgångsrik Webbsida Med Oss</h2>
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default Hero;
