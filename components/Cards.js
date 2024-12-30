import styles from "../app/styles/Cards.module.css";
export default function Card() {
  return (
    <section>
      <div className={styles.cardsdiv}>
        {/*<div className={styles.div43}>
        
  </div>*/}

        <div className={styles.div44}>
          <div className={styles.div45}>
            {/*första bilden */}
            <div className={styles.column3}>
              <div className={styles.div46}>
                <div className={styles.imgContainer}>
                  <img
                    loading="vadvigor"
                    src="/vadvigor.jpeg"
                    className={styles.img9}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.div47}>Webbsidor</div>
                    <div className={styles.div48}>
                      Erfarna utvecklare som bygger digitala mästerverk för
                      företag i alla storlekar och skapar moderna hemsidor,
                      omsätter idéer till imponerande onlineverklighet och
                      struktuerad framgång.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*andra bild getting */}
            <div className={styles.column4}>
              <div className={styles.div49}>
                <div className={styles.imgContainer}>
                  <img
                    loading="devices"
                    src="/devices.jpeg"
                    className={styles.img10}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.div47}>Våra tjänster</div>
                    <div className={styles.textlist}>
                      <li className={styles.div48}>
                        Webbsidor för små och stora bolag
                      </li>
                      <li className={styles.div48}>
                        Hjälp med befintlig hemsida
                      </li>
                      <li className={styles.div48}>Kundanpassade tjänster</li>
                      <li className={styles.div48}>IT Support</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*tredje bild hund och katt */}
            <div className={styles.column5}>
              <div className={styles.div52}>
                <div className={styles.imgContainer}>
                  <img
                    loading="suport"
                    src="/suport2.jpeg"
                    className={styles.img11}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.div47}>Vår process:</div>
                    <div className={styles.textlist}>
                      <li className={styles.div48}>Vi analyserar era behov </li>
                      <li className={styles.div48}>
                        Designar och utvecklar framtida sidan
                      </li>
                      <li className={styles.div48}>
                        {" "}
                        Presenterar Lanserar och Optimerar
                      </li>
                      <li className={styles.div48}>
                        Oendlig Support och underhåll
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
