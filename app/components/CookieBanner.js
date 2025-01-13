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
  };

  const handleAcceptNecessary = () => {
    // Spara användarens val
    localStorage.setItem("cookiePreference", "necessary");
    setIsVisible(false);
  };

  if (!isVisible) return null; // Visa inte bannern om användaren redan valt

  return (
    <div className={styles.banner}>
      <p>
        Vi använder cookies för att förbättra din upplevelse. Genom att klicka på
        "Acceptera alla" godkänner du alla cookies, eller så kan du välja att bara
        acceptera nödvändiga cookies.
      </p>
      <div className={styles.buttons}>
        <button onClick={handleAcceptAll} className={styles.acceptAll}>
          Acceptera alla
        </button>
        <button onClick={handleAcceptNecessary} className={styles.acceptNecessary}>
          Acceptera endast nödvändiga
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
