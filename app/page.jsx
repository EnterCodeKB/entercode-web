import React from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CustomCTA from "@/components/CustomCTA";
import "@/styles/Page.module.css";
import "@/styles/Footer.module.css";

export default function Home() {
  return (
    <div className="grid-container">
      <Hero />
      <Services />
      <CustomCTA />
    </div>
  );
}
