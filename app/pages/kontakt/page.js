"use client";

import React, { Suspense } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useSearchParams } from "next/navigation";
import styles from "./index.module.css";

const KontaktForm = () => {
  const [state, handleSubmit] = useForm("mannvbln");
  const searchParams = useSearchParams();
  const paket = searchParams.get("paket");

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
        <div className={styles.inputGroup}>
          <label htmlFor="package">Paket</label>
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
              <option value="" disabled>
                Välj
              </option>
              <option value="Allmän förfrågan / Övrigt">
                Allmän förfrågan / Övrigt
              </option>
              <option value="Startpaket">Startpaket</option>
              <option value="Företagspaket">Företagspaket</option>
              <option value="Premiumpaket">Premiumpaket</option>
            </select>
          )}
        </div>
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
        <button
          type="submit"
          className={`${styles.inputButton} ${
            state.succeeded ? styles.success : ""
          }`}
          disabled={state.submitting || state.succeeded}
        >
          {state.submitting ? (
            <div className={styles.spinner}></div>
          ) : state.succeeded ? (
            "✅ Skickat!"
          ) : (
            "Skicka"
          )}
        </button>
      </form>
    </div>
  );
};

export default function KontaktSidaWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <KontaktForm />
    </Suspense>
  );
}
