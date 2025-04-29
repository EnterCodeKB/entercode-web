"use client";

import React, { Suspense } from "react";
import { useForm, ValidationError } from "@formspree/react";
import FormInnerComponent from "./FormInnerComponent"; // <-- Lägg till
import styles from "../styles/FormComponent.module.css";

const FormComponent = () => {
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
          <input id="name" type="text" name="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">E-postadress</label>
          <input id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="package">Paket</label>
          <Suspense fallback={<div>Loading package options...</div>}>
            <FormInnerComponent />
          </Suspense>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message">Meddelande</label>
          <textarea id="message" name="message" rows="5" required />
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

export default FormComponent;
