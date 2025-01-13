"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./index.module.css";

const KontaktSida = () => {
  const [state, handleSubmit] = useForm("mannvbln");

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
