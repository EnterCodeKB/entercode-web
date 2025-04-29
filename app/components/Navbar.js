"use client";

export const dynamic = "force-dynamic";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
            height={auto}
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
          <li
            className={`${styles.lidiv} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            <Link href="/">HEM</Link>
          </li>

          <li
            className={`${styles.lidiv} ${
              pathname === "/omoss" ? styles.active : ""
            }`}
          >
            <Link href="/omoss">OM OSS</Link>
          </li>

          <li
            className={`${styles.lidiv} ${
              pathname === "/kontakt" ? styles.active : ""
            }`}
          >
            {" "}
            <Link href="/kontakt">KONTAKT</Link>
          </li>

          <li
            className={`${styles.lidiv} ${
              pathname === "/prispaket" ? styles.active : ""
            }`}
          >
            {" "}
            <Link href="/prispaket">PRISPAKET</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
