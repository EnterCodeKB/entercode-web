// app/components/FormComponent.js
"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useSearchParams } from "next/navigation";
import styles from "../styles/FormComponent.module.css";

const FormComponent = () => {
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
        {/* Inputs här */}
      </form>
    </div>
  );
};

export default FormComponent;
