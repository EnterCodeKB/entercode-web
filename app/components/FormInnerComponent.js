"use client";

import React from "react";
import styles from "../styles/FormComponent.module.css";

const FormInnerComponent = ({ paket }) => {
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

  if (paket) {
    return (
      <input
        id="package"
        type="text"
        name="package"
        value={formatPackageName(paket)}
        readOnly
        placeholder="Valt paket"
        className={styles.selectInput}
      />
    );
  }

  return (
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
  );
};

export default FormInnerComponent;
