"use client";

import { useSearchParams } from "next/navigation";
import styles from "../styles/FormComponent.module.css";

export default function FormInnerComponent() {
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

  if (paket) {
    return (
      <input
        id="package"
        type="text"
        name="package"
        value={formatPackageName(paket)}
        readOnly
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
}
