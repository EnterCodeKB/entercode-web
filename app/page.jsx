import React from "react";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards"; // Cards flyttas hit
import Guide from "@/components/Guide";
import "@/styles/Guide.css";
import "@/styles/Page.module.css";
import "@/styles/Footer.module.css";

export default function Home() {
  return (
    <div className="grid-container">
      <Hero />
    </div>
  );
}
