"use client";

import { Suspense } from "react";
import FormKontakt from "./FormKontakt";
import styles from "./index.module.css";

export default function KontaktPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Kontakta oss</h1>
      <Suspense fallback={<div>Laddar formulär...</div>}>
        <FormKontakt />
      </Suspense>
    </div>
  );
}
