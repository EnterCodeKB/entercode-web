import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navdiv}>
      <div className={styles.logocontainer}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/entercodeny.png"
            alt="logo"
            width={170}
            height={170}
          />
        </Link>
      </div>
      <ul className={styles.uldiv}>
        <li className={styles.lidiv}>
          <Link href="/">HEM</Link>
        </li>
        <li className={styles.lidiv}>
          <Link href="/pages/omoss">OM OSS</Link>
        </li>
        <li className={styles.lidiv}>
          <Link href="/pages/projekt">WEBBSIDOR</Link>
        </li>
        <li className={styles.lidiv}>
          <Link href="/kontakt">KONTAKT</Link>
        </li>
      </ul>
    </nav>
  );
}
