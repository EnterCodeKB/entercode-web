"use client";

import React, { useState } from "react";
import styles from "./index.module.css";

const KontaktSida = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Funktion för att hantera förändringar i input-fält
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Funktion för att hantera formulärinlämning
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulärdata skickas:", formData);

    try {
      const response = await fetch(
        "https://entercode-production.up.railway.app/api/kontakt",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Din förfrågan har skickats!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.text();
        console.error("Serverfel:", errorData);
        alert("Något gick fel: " + errorData);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Ett fel inträffade: " + error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Kontakta oss</h1>
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
    </div>
  );
};

export default KontaktSida;
