import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h1 id="hero-heading" className={styles.heading}>
            Familjär webbyrå <br />
            med <span className={styles.highlight}>passion</span> för design
          </h1>
          <p className={styles.paragraph}>
            Vi är en duo som bygger vackra och funktionella hemsidor som hjälper
            ditt företag att växa.
          </p>
          <div className={styles.buttonsWrapper}>
            <Link href="/portfolio" className={styles.primaryButton}>
              Se vårt arbete
            </Link>
            <Link href="/kontakt" className={styles.secondaryButton}>
              Kontakta oss
            </Link>
          </div>
        </div>
        <div className={styles.imageBlock}>
          <div className={styles.imageWrapper}>
            <Image
              src="/backgronds/Depositphotos_46659543_XL.jpg"
              //src="/devices.jpeg"
              alt="Mamma och dotter arbetar tillsammans"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.circleBottom}></div>
          <div className={styles.circleTop}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
