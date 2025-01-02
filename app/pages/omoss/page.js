"use client";
import React from "react";
import styles from "./omoss.module.css";
import Cards from "../../components/FourCards";

export default function Work() {
  return (
    <div className={styles.gridcontainer}>
      <div className={styles.workingcontainer}>
        <div>
          <img
            src="/arbetsplats.jpeg"
            width={900}
            alt="gardinen"
            className={styles.workimg}
          />
        </div>
        <div className={styles.cardscontainer}>
          <Cards />
        </div>
      </div>
      <div className={styles.a4container}>
        <div className={styles.gardincontainer}>
          <h1 className={styles.h1box}>
            Det är en plats att skapa, växa och drömma stort
          </h1>
          <div>
            <img
              src="/gardinen1.png"
              width={400}
              alt="gardinen"
              className={styles.rotatedimg}
            />
          </div>
        </div>
        <p className={styles.textcontainer}>
          <strong>EnterCode Sweden KB</strong> har etablerat sig i Stockholm som
          en innovativ aktör inom digital utveckling och marknadsföring. <br />
          Företaget samarbetar med småföretag, tech-startups, medicinska
          organisationer och större varumärken för att skapa smarta
          webbplattformar, kreativa digitala upplevelser och strategiska
          marknadsföringskampanjer. <br />
          <br />
          Som en dynamisk partner sätter EnterCode Sweden KB alltid de senaste
          teknologierna i centrum för sina projekt och kombinerar dessa med
          förstklassig service, tydlig kommunikation och mätbara resultat.{" "}
          <br />
          Ledda av ett erfaret team av digitala marknadsföringsexperter,
          kreativa designers, utvecklare och innehållsspecialister, arbetar vi
          nära våra kunder för att bygga starka digitala varumärken och frigöra
          deras fulla tillväxtpotential. <br />
          <br />
          Med Stockholm som bas är vi redo att hjälpa företag att möta
          morgondagens digitala utmaningar med smarta lösningar och kraftfull
          innovation.
        </p>
      </div>
    </div>
  );
}
