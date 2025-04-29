"use client";

import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./index.module.css";

const KontaktSida = () => {
  const [state, handleSubmit] = useForm("mannvbln");
  const [paket, setPaket] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const paketParam = urlParams.get("paket");
      if (paketParam) setPaket(paketParam);
    }
  }, []);

  const formatPackageName = (paket) => {
    switch (paket) {
      case "startpaket":
        return "Startpaket";
      case "foretagspaket":
        return "Företagspaket";
      case "premiumpaket":
        return "Premiumpaket";
      default:
        return "";
    }
  };

  if (state.succeeded) {
    return (
      <div className={styles.successMessage}>
        <h1 className={styles.kontakth1}>Tack för din förfrågan!</h1>
        <p>Vi kommer att kontakta dig så snart som möjligt.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Kontakta oss</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Namn */}
        <div className={styles.inputGroup}>
          <label htmlFor="name">Namn</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Ditt namn"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        {/* E-post */}
        <div className={styles.inputGroup}>
          <label htmlFor="email">E-postadress</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Din e-postadress"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Välj anledning */}
        <div className={styles.inputGroup}>
          <label htmlFor="reason">Välj</label>
          <select
            id="reason"
            name="reason"
            required
            defaultValue=""
            className={styles.selectInput}
          >
            <option value="" disabled>
              Välj anledning
            </option>
            <option value="Webbdesign">Webbdesign</option>
            <option value="Webbutveckling">Webbutveckling</option>
            <option value="Support">Support</option>
            <option value="Annat">Annat</option>
          </select>
        </div>

        {/* Paket - frivilligt */}
        <div className={styles.inputGroup}>
          <label htmlFor="package">Paket (frivilligt)</label>
          {paket ? (
            <input
              id="package"
              type="text"
              name="package"
              value={formatPackageName(paket)}
              readOnly
              placeholder="Valt paket"
            />
          ) : (
            <select
              id="package"
              name="package"
              defaultValue=""
              className={styles.selectInput}
            >
              <option value="">Inget paket valt</option>
              <option value="Startpaket">Startpaket</option>
              <option value="Företagspaket">Företagspaket</option>
              <option value="Premiumpaket">Premiumpaket</option>
            </select>
          )}
          {!paket && (
            <p
              style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}
            >
              (Du kan lämna detta tomt om du bara vill ställa en fråga.)
            </p>
          )}
        </div>

        {/* Meddelande */}
        <div className={styles.inputGroup}>
          <label htmlFor="message">Meddelande</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Ditt meddelande"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        {/* Skicka-knapp */}
        <button
          type="submit"
          className={styles.inputButton}
          disabled={state.submitting}
        >
          {state.submitting ? "Skickar..." : "Skicka"}
        </button>
      </form>
    </div>
  );
};

export default KontaktSida;
