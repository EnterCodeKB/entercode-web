"use client";

import { useForm, ValidationError } from "@formspree/react";
import styles from "./index.module.css";

export default function FormKontakt() {
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
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Namn */}
      <div className={styles.inputGroup}>
        <label htmlFor="name">Namn</label>
        <input id="name" type="text" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      {/* E-post */}
      <div className={styles.inputGroup}>
        <label htmlFor="email">E-postadress</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Meddelande */}
      <div className={styles.inputGroup}>
        <label htmlFor="message">Meddelande</label>
        <textarea id="message" name="message" rows="5" required></textarea>
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
  );
}
