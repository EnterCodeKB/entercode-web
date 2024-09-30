import Features from "../components/Features";
import Guide from "../components/Guide";
import Hero from "../components/Hero";
import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="grid-container">
      <div className="a4-container">
        <Navbar />
        <Hero />
        <Guide />
      </div>
    </div>
  );
}
