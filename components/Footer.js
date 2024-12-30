import * as React from "react";

import styles from "../app/styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.div201}>
      <div className={styles.div202}>
        <div className={styles.column}>
          <h4 className={styles.divh4}>
            <i className="bi bi-geo-alt"></i>Telefon:
          </h4>
          <p className={styles.footertext}>
            {" "}
            +46 (0)70 267 38 85 <br />
          </p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.divh4}>
            <i className="bi bi-envelope"></i>Postadress:
          </h4>
          <p className={styles.footertext}>Lillåkersv.26</p>
          <p className={styles.footertext}>181 59 Lidingö</p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.divh4}>info@entercode.se</h4>
          <img src="/footer/QR.png" width={80} alt="" />

          <Link href="">
            <img
              className={styles.imglinkedin}
              src="/vitlinkedin.png"
              alt="linkedin"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
