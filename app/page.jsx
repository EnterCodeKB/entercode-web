import Guide from "./components/Guide";
import Hero from "./components/Hero";
import React from "react";
import Navbar from "./components/Navbar";
import "./styles/Guide.css";
import "./styles/Footer.module.css";

export default function Home() {
  return (
    <div className="grid-container">
      <div className="a4-container">
        <Hero />
        <Guide />
      </div>
    </div>
  );
}
