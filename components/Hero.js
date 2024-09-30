import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      <img className="herobg" src="/herobg.jpeg" alt="" />
      <div className="">
        <div>
          <h1 className="text-8xl text-center text-gray-900 mt-4 lg:text-6xl md:text-lg">
            Välkommen Till EnterCode Sweden
          </h1>
          <h2 className="text-center font-bold text-gray-900 lg:text-6xl md:text-lg">
            Bygg Framgångsrik Webbsida Med Oss
          </h2>
          <h3 className="text-center text-gray-900 mt-4">
            Din hemsida framkallar dina affärsmål. <br /> Kom ihåg: <br /> Syns
            du inte så finns du inte!
          </h3>
        </div>
        <br />
        <div className="">
          <Link
            className="link"
            href="/"
            aria-label="Gå till formulärsidan"
          ></Link>
        </div>
      </div>
      <p></p>
    </section>
  );
};

export default Hero;
