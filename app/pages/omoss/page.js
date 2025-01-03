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
        <div className={styles.visioncontainer}>
          <p className={styles.textcontainer}>
            Vi är en webbbyrå och IT-partner med ett personligt och familjärt
            engagemang. Vi har kombinerat vår erfarenhet och passion för teknik,
            design och problemlösning för att skapa en byrå där kreativitet
            möter pålitliga IT-lösningar. <br />
            Med en bakgrund inom peogrammering och it-teknik erbjuder vi
            skräddarsydda lösningar för både små och medelstora företag som vill
            växa online och effektivisera sin verksamhet. <br />
            <br />
            Vi tror på att bygga starka relationer med våra kunder och ser varje
            projekt som ett samarbete där vi tillsammans skapar något unikt.
            Oavsett om du behöver en modern webbplats, IT-support eller
            strategiska lösningar för att förenkla din vardag, finns vi här för
            att hjälpa dig.
            <br />
          </p>
          <div className={styles.visiondiv}>
            <h2>Vår vision</h2>
            <p className={styles.visiontext}>
              {" "}
              Att göra teknik och digitala lösningar tillgängliga, personliga
              och enkla för alla.
            </p>
            <h2>Våra värderingar</h2>
            <ul>
              <li>
                <strong>Personligt bemötande:</strong>Vi är alltid nära till
                hands och lägger stor vikt vid att förstå våra kunders behov.
              </li>
              <li>
                <strong>Kreativitet:</strong>Varje lösning är unik, precis som
                våra kunder.
              </li>
              <li>
                <strong>Tillförlitlighet:</strong>Vi håller vad vi lovar och
                levererar kvalitet i varje steg.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
