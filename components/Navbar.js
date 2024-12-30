import Image from "next/image";
import Link from "next/link";
import styles from "../app/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navdiv}>
      <div className={styles.logocontainer}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/bluelogganjpg.jpg"
            alt="logo"
            width={170}
            height={170}
            priority
            layout="intrinsic"
          />
        </Link>
      </div>
      <ul className={styles.uldiv}>
        <li className={styles.lidiv}>
          <Link href="/">HEM</Link>
        </li>
        <li className={styles.lidiv}>
          <Link href="/hur-vi-gor">OM OSS</Link>
        </li>
        <li className={styles.lidiv}>
          <Link href="/projekt">SÅ FUNGERAR DET</Link>
        </li>
        <li className={styles.lidiv}>
          <Link href="/kontakt">KONTAKT</Link>
        </li>
      </ul>
    </nav>
  );
}
