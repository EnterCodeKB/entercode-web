import React from "react";
import styles from "./index.module.css";

const KontaktSida = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Kontakta oss</h1>
      <p className={styles.description}>
        Har du frågor eller funderingar? Fyll i formuläret nedan eller kontakta
        oss direkt via e-post eller telefon.
      </p>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Namn</label>
          <input type="text" id="name" name="name" placeholder="Ditt namn" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">E-post</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Din e-postadress"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message">Meddelande</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Ditt meddelande"
          ></textarea>
        </div>
        <button type="submit" className={styles.inputButton}>
          Skicka
        </button>
      </form>
      <div className={styles.contactInfo}>
        <h2>Kontaktinformation</h2>
        <p>
          <strong>E-post:</strong> info@entercode.se
        </p>
        <p>
          <strong>Telefon:</strong> 070-267 38 85
        </p>
        <p>Stockholm</p>
      </div>
    </div>
  );
};

export default KontaktSida;
