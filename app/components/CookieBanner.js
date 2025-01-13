"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/CookieBanner.module.css";



const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Kontrollera om användaren redan har valt cookies
    const cookiePreference = localStorage.getItem("cookiePreference");
    if (!cookiePreference) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    // Spara användarens val
    localStorage.setItem("cookiePreference", "all");
    setIsVisible(false);
    console.log("Alla cookies är accepterade!");
  };

  const handleAcceptNecessary = () => {
    // Spara användarens val
    localStorage.setItem("cookiePreference", "necessary");
    setIsVisible(false);
    console.log("Endast nödvändiga cookies är accepterade!");
  };

  if (!isVisible) return null; // Om bannern inte ska visas, returnera ingenting

  return (
    <div className={styles.banner}>
      <p>
        Vi använder cookies för att förbättra din upplevelse. Klicka på "Acceptera alla" för att godkänna alla cookies, eller välj "Endast nödvändiga" för att begränsa cookies.
      </p>
      <div className={styles.buttons}>
        <button onClick={handleAcceptAll} className={styles.acceptAll}>
          Acceptera alla
        </button>
        <button onClick={handleAcceptNecessary} className={styles.acceptNecessary}>
          Endast nödvändiga
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
