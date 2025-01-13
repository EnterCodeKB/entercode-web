"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/CookieBanner.module.css";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowBanner(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({ essential: true }));
    setShowBanner(false);
  };

  const handleShowPreferences = () => {
    setShowPreferences(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowPreferences(false);
    setShowBanner(false);
  };

  const handleCheckboxChange = (type) => {
    setPreferences((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <>
      {showBanner && (
        <div className={styles.alert}>
          <p className={styles.text}>
            Den här webbplatsen använder cookies för att förbättra
            användarupplevelsen. Genom att fortsätta använda vår webbplats
            godkänner du användningen av cookies i enlighet med vår{" "}
            <a href="/privacy-policy" className={styles.link}>
              integritetspolicy
            </a>
            .
          </p>
          <div className={styles.buttonGroup}>
            <button onClick={handleAcceptAll} className={styles.button}>
              Godkänn alla
            </button>
            <button onClick={handleShowPreferences} className={styles.button}>
              Anpassa
            </button>
            <button onClick={handleAcceptEssential} className={styles.button}>
              Bara nödvändiga
            </button>
          </div>
        </div>
      )}

      {showPreferences && (
        <div className={styles.modal}>
          <h2 className={styles.modalTitle}>Cookie-inställningar</h2>
          <p className={styles.modalText}>
            Välj vilka typer av cookies du vill tillåta:
          </p>
          <div className={styles.checkboxGroup}>
            <label className={styles.label}>
              <input type="checkbox" checked={preferences.essential} disabled />
              Nödvändiga cookies (krävs alltid)
            </label>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() => handleCheckboxChange("analytics")}
              />
              Analytiska cookies
            </label>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={() => handleCheckboxChange("marketing")}
              />
              Marknadsföringscookies
            </label>
          </div>
          <button onClick={handleSavePreferences} className={styles.button}>
            Spara val
          </button>
        </div>
      )}
    </>
  );
}
