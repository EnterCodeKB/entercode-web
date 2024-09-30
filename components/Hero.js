import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      <img className="herobg" src="/herobg.jpeg" alt="" />
      <div className="herotext">
        <div>
          <h1>Välkommen Till EnterCode Sweden</h1>
          <h2>Bygg Framgångsrik Webbsida Med Oss</h2>
          <p>
            Din hemsida framkallar dina affärsmål. <br /> Kom ihåg: <br /> Syns
            du inte så finns du inte!
          </p>
          <p>Vi har lösningen för att få ditt företag att växa.</p>
          <p>
            Navigera i affärsdjungeln med webbutveckling och <br />
            få konsultation oavsett om du är nykläcktstart-up eller etablerad
            bolag.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
