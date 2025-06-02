"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return pathname === path ? styles.activeLink : styles.inactiveLink;
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoMenuWrapper}>
          <button
            onClick={toggleMenu}
            className={styles.mobileMenuButton}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
          >
            {isMenuOpen ? (
              <X className={styles.icon} aria-hidden="true" />
            ) : (
              <Menu className={styles.icon} aria-hidden="true" />
            )}
          </button>

          <div className={styles.logoWrapper}>
            <Link
              href="/"
              className={styles.logo}
              aria-label="entercode webbyrå startsida"
            >
              <img src="/images/logo-small.jpg" alt="Logotyp" />
              <span className={styles.logoText}>
                enter<span className={styles.logoAccent}>code</span>
              </span>
            </Link>
          </div>
        </div>

        <nav className={styles.desktopNav} aria-label="Huvudmeny">
          <Link href="/omoss" className={isActive("/omoss")}>
            Om oss
          </Link>
          <Link href="/tjanster" className={isActive("/tjanster")}>
            Tjänster
          </Link>
          <Link href="/portfolio" className={isActive("/portfolio")}>
            Portfölj
          </Link>
          <Link href="/kontakt" className={isActive("/kontakt")}>
            Kontakt
          </Link>
          <Link href="/kom-igang" className={styles.startButton}>
            Kom igång
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className={styles.mobileMenu}>
          <nav className={styles.mobileNav} aria-label="Mobil meny">
            <Link
              href="/om-oss"
              className={isActive("/om-oss")}
              onClick={() => setIsMenuOpen(false)}
            >
              Om oss
            </Link>
            <Link
              href="/tjanster"
              className={isActive("/tjanster")}
              onClick={() => setIsMenuOpen(false)}
            >
              Tjänster
            </Link>
            <Link
              href="/portfolio"
              className={isActive("/portfolio")}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfölj
            </Link>
            <Link
              href="/kontakt"
              className={isActive("/kontakt")}
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
            <Link
              href="/kom-igang"
              className={styles.startButtonMobile}
              onClick={() => setIsMenuOpen(false)}
            >
              Kom igång
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
