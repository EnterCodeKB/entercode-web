"use client";

import React, { useState } from "react";
import styles from "./index.module.css";

const KontaktSida = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulärdata skickas:", formData);

    try {
      const response = await fetch(
        "https://entercode-production.up.railway.app/pages/kontakt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log("Svar från servern:", response);

      if (response.ok) {
        alert("Din förfrågan har skickats!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        alert("Något gick fel: " + (errorData.error || "Försök igen."));
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Ett fel inträffade: " + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Kontakta oss</h1>
      <p className={styles.description}>
        Behöver du hjälp med att skapa en professionell hemsida eller utveckla
        digitala lösningar? <br />
        Fyll i formuläret nedan så kontaktar vi dig för att diskutera dina idéer
        och behov.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Namn</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ditt namn"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">E-post</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Din e-postadress"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message">Meddelande</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Ditt meddelande"
            value={formData.message}
            onChange={handleChange}
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
