import Footer from "../components/Footer";
import Guide from "../components/Guide";
import Hero from "../components/Hero";
import React from "react";
import Navbar from "../components/Navbar";
import KontaktBtn from "../components/KontaktBtn";

export default function Home() {
  return (
    <div className="grid-container">
      <div className="a4-container">
        <Navbar />
        <Hero />
        <Guide />
        <KontaktBtn />
        <Footer />
      </div>
    </div>
  );
}
