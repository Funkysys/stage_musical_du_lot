import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./ProgammePage.module.css";

gsap.registerPlugin(ScrollTrigger);

const ProgammePage = ({ summer }) => {
  const containerRef = useRef();
  const titleProgRef = useRef();
  const pProgRef = useRef();
  useEffect(() => {
    gsap.to(containerRef.current, {
      background: summer ? "#fde1bf" : "#bce7ff",
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
    gsap.to(titleProgRef.current, {
      opacity: "1",
      right: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
    gsap.to(pProgRef.current, {
      opacity: "1",
      right: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
  }, []);

  const summerBG = {
    background: "#fde1bf",
  };
  const winterBG = {
    background: "#bce7ff",
  };

  return (
    <div
      id="programme"
      ref={containerRef}
      className={styles.containerProgramme}
      style={summer ? summerBG : winterBG}
    >
      <h2
        ref={titleProgRef}
        className={styles.titleProg}
      >{`Programme type d’une journée de stage :`}</h2>
      <div ref={pProgRef} className={styles.pProgContainer}>
        <p className={styles.moment}>Matin : </p>
        <p>Rythme</p>
        <p>CHANT ET OREILLE</p>
        <p className={styles.lunch}>13H - 14H30 : PAUSE DEJEUNER</p>
        <p className={styles.moment}>Après-midi </p>
        <p>COURS INDIVIDUELS et COURS THEMATIQUES</p>
        <p>JEUX COLLECTIF</p>
        <p>18h: JAM SESSION*</p>
        <p>{`à noter : le programme peut évoluer selon le niveau et le nombre d’élèves.`}</p>
        <p
          className={styles.jam}
        >{`Jam Session* : Non obligatoire ni automatique, elle est mise en place selon la demande des élèves et à la discrétion des intervenants.`}</p>
      </div>
    </div>
  );
};

export default ProgammePage;
