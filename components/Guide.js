import React from "react";
import Link from "next/link";

export default function Guide() {
  return (
    <section className="grid-section">
      <div className="grid-item1">
        <img className="gridimg1" src="/grid1img.jpeg" alt="hemsida" />
      </div>
      <div className="grid-item2">
        <div className="white-space">
          <h2>Hemsida</h2>
          <p>
            Erfarna utvecklare som bygger digitala mästerverk för företag i alla
            storlekar och skapar moderna hemsidor, omsätter idéer till
            imponerande onlineverklighet och struktuerad framgång.
          </p>
        </div>
      </div>
      <div className="grid-item3">
        {" "}
        <div className="white-space">
          <h2>Våra funktioner</h2>
          <p>
            <li>Responsiva Hemsidor för små och stora bolag</li>
            <li>Tecknisk support</li>
            <li>Hjälp med befintlig hemsida</li>
            <li>Kundanpassade tjänster</li>
            <li>IT Support</li>
          </p>
        </div>
      </div>
      <div className="grid-item4">
        {" "}
        <img src="/grid4img.jpeg" alt="hemsida" />
      </div>
    </section>
  );
}
