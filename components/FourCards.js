import styles from "../styles/4Cards.module.css";

const CardGrid = () => {
  const cards = [
    {
      id: 1,
      icon: "/icons/servicetr.png",
      title: "SERVICE I TOPPKLASS",
      description:
        "Att leverera enastående service är vår högsta prioritet. Vi är alltid redo att hjälpa till, och våra dörrar står alltid öppna.",
    },
    {
      id: 2,
      icon: "/icons/digitaltransp.png",
      title: "DIN DIGITAL PARTNER",
      description:
        "Vi har inga kunder – vi har partners. Tänk på oss som det hemliga vapnet bakom ditt företag, med uppdraget att hjälpa dig att lyckas!",
    },
    {
      id: 3,
      icon: "/icons/diamandpngtr.png",
      title: "INGA LÅNGA BYNDANDE AVTAL",
      description:
        "Transparent och fast prissättning utan överraskningar eller långsiktiga avtal. Inte nöjd med vår tjänst? Avsluta när som helst.",
    },
    {
      id: 4,
      icon: "/icons/tools2transp.png",
      title: "AVANCERADE VERKTYG OCH OSLAGBARA RESULTAT",
      description:
        "Få toppmoderna verktyg, den senaste teknologin och de bästa marknadsföringsresultaten ditt företag någonsin haft.",
    },
  ];

  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
          <img src={card.icon} alt={card.title} className={styles.icon} />
          <h3 className={styles.title}>{card.title}</h3>
          <div className={styles.divider}></div>
          <p className={styles.description}>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
