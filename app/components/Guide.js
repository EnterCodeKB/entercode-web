"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Guide() {
  useEffect(() => {
    const images = document.querySelectorAll(".imgspel, .text-container");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
          }
        });
      },
      { threshold: 0.1 } // Triggar när 10% av bilden är synlig
    );

    images.forEach((image) => {
      image.style.animationPlayState = "paused"; // Pausar animationen initialt
      observer.observe(image);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section">
     
      <div className="övertext-container">
        <div className="övertextdiv  ">
          <p>
            Erfarna utvecklare som bygger digitala mästerverk för företag i alla
            storlekar och skapar moderna hemsidor, omsätter idéer till
            imponerande onlineverklighet och strukturerad framgång. Erfarna
            utvecklare som bygger digitala mästerverk för företag i alla
            storlekar och skapar moderna hemsidor, omsätter idéer till
            imponerande onlineverklighet och strukturerad framgång.
          </p>
        </div>
      </div>
      {/* <div className="text-container">
        <div className="ptext">
          <p>
            Erfarna utvecklare som bygger digitala mästerverk för företag i alla
            storlekar och skapar moderna hemsidor, omsätter idéer till
            imponerande onlineverklighet och strukturerad framgång. storlekar
            och skapar moderna hemsidor, omsätter idéer till imponerande
            onlineverklighet och strukturerad framgång.
          </p>
        </div>
      </div>*/}
       <div className="images-container">
        <img className="imgspel img1" src="/pc7.png" alt="PC" />
        <img className="imgspel img2" src="/laptop11.png" alt="Laptop" />
        <img className="imgspel img3" src="/laptopomobill11.png" alt="Mobil" />
      </div>
    </section>
  );
}
