"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/CookieBanner.module.css";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = { essential: true, analytics: true, marketing: true };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleAcceptEssential = () => {
    const consent = { essential: true };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
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
        <div className={styles.banner}>
          <p>
            Vi använder cookies för att förbättra din upplevelse. Klicka på
            "Godkänn alla" för att acceptera alla cookies eller välj
            "Anpassa" för att göra dina val. Läs mer i vår{" "}
            <a href="/privacy-policy" className={styles.link}>
              integritetspolicy
            </a>.
          </p>
          <div className={styles.actions}>
  <button onClick={handleAcceptAll} className={styles.primaryButton}>
    Godkänn alla
  </button>
  <button onClick={handleShowPreferences} className={styles.secondaryButton}>
    Anpassa
  </button>
  <button onClick={handleAcceptEssential} className={styles.secondaryButton}>
    Bara nödvändiga
  </button>
</div>

        </div>
      )}

      {showPreferences && (
        <div className={styles.modal}>
          <h2>Cookie-inställningar</h2>
          <p>Välj vilka typer av cookies du vill tillåta:</p>
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
          <div className={styles.actions}>
            <button onClick={handleSavePreferences} className={styles.primaryButton}>
              Spara val
            </button>
          </div>
        </div>
      )}
    </>
  );
}
