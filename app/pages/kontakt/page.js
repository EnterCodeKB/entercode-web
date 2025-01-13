"use client";

import React, { useState } from "react";
import styles from "./index.module.css";


const KontaktSida = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Hanterar förändringar i formuläret
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validerar formuläret
  const isFormValid = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Alla fält måste fyllas i.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Ange en giltig e-postadress.");
      return false;
    }

    return true;
  };

  // Hanterar formulärinlämning
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid()) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/kontakt`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Ett oväntat fel inträffade.");
      }

      alert("Din förfrågan har skickats!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Ett fel inträffade:", error.message);
      alert(`Något gick fel: ${error.message}`);
    } finally {
      setIsLoading(false);
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
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">E-post</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Din e-post"
            value={formData.email}
            onChange={handleChange}
            required
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
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={styles.inputButton}
          disabled={isLoading}
        >
          {isLoading ? "Skickar..." : "Skicka"}
        </button>
      </form>
    </div>
  );
};

export default KontaktSida;
