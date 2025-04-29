import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import styles from "./ProgammePage.module.css";

gsap.registerPlugin(ScrollTrigger);

const ProgammePage = ({ title }) => {
  const containerRef = useRef();
  const titleProgRef = useRef();
  const pProgRef = useRef();
  const [background, setBackground] = useState("#CEFFBC");

  useEffect(() => {
    if (title === "august") {
      setBackground("#fde1bf");
    } else if (title === "july") {
      setBackground("#CEFFBC");
    } else {
      setBackground("#bce7ff");
    }
  }, [title]);

  useEffect(() => {
    gsap.to(containerRef.current, {
      background: background,
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

  return (
    <div
      id="programme"
      ref={containerRef}
      className={styles.containerProgramme}
      style={{ backgroundColor: background }}
    >
      <h2
        ref={titleProgRef}
        className={styles.titleProg}
      >{`Programme type d’une journée de stage :`}</h2>
      <div ref={pProgRef} className={styles.pProgContainer}>
        <p className={styles.moment}>Matin : 10H - 13H </p>
        <p>Rythme et harmonie</p>
        <p>initiation à la composition et l’arrangement</p>
        <p className={styles.lunch}>13H - 14H30 : PAUSE DEJEUNER</p>
        <p className={styles.moment}>Après-midi : 14H30 - 18H </p>
        <p>Improvisation tous style</p>
        <p>
          Thématique autour du répertoire et de l’interprétation (jazz, pop,
          rock, funk, blues, chanson française, musique du monde, etc...)
        </p>
        <p className={styles.jam}>18h : JAM SESSION*</p>
        <p>{`Jam Session* : non obligatoire ni automatique, elle est mise en place selon la demande des élèves et à la discrétion des intervenants.`}</p>
        <p>{`à noter : le programme peut évoluer selon les thématiques abordées et le nombre d’élèves.`}</p>
      </div>
    </div>
  );
};

export default ProgammePage;
