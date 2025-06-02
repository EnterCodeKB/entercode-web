import Link from "next/link";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-labelledby="footer-heading">
      <div className={styles.container}>
        <div>
          <Link
            href="/"
            className={styles.logoLink}
            aria-label="entercode webbyrå startsida"
          >
            enter<span className={styles.logoAccent}>code</span>
          </Link>
          <p className={styles.text}>
            Vi skapar moderna webbplatser som hjälper ditt företag att växa och
            lyckas online.
          </p>
        </div>

        <div>
          <h3 className={styles.sectionTitle}>Snabblänkar</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link href="/om-oss" className={styles.link}>
                Om oss
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/tjanster" className={styles.link}>
                Tjänster
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/portfolio" className={styles.link}>
                Portfölj
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/kontakt" className={styles.link}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.sectionTitle}>Tjänster</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link href="/tjanster#webbdesign" className={styles.link}>
                Webbdesign
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/tjanster#webbutveckling" className={styles.link}>
                Webbutveckling
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/tjanster#grafisk-design" className={styles.link}>
                Grafisk design
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/tjanster#seo" className={styles.link}>
                SEO
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.sectionTitle}>Kontakt</h3>
          <ul className={styles.linkList}>
            <li className={styles.text}>Stockholm, Sverige</li>
            <li className={styles.linkItem}>
              <a href="tel:+46707123456" className={styles.link}>
                070-267 38 85
              </a>
            </li>
            <li className={styles.linkItem}>
              <a href="mailto:hej@entercode.se" className={styles.link}>
                info@entercode.se
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.bottomText}>
          © {currentYear} entercode. Alla rättigheter förbehållna.
        </p>
        <div className={styles.bottomLinks}>
          <Link href="/integritetspolicy" className={styles.bottomLink}>
            Integritetspolicy
          </Link>
          <Link href="/anvandarvillkor" className={styles.bottomLink}>
            Användarvillkor
          </Link>
          <Link href="/webbplatstillganglighet" className={styles.bottomLink}>
            Tillgänglighet
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
