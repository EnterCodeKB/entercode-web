"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <div className={styles.menuContainer}>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
        <ul
          className={`${styles.uldiv} ${isMenuOpen ? styles.menuOpen : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <li className={styles.lidiv}>
            <Link href="/">HEM</Link>
          </li>
          <li className={styles.lidiv}>
            <Link href="/pages/omoss">OM OSS</Link>
          </li>
          <li className={styles.lidiv}>
            <Link href="/pages/kontakt">KONTAKT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
