"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./PresentationContainer.module.css";

gsap.registerPlugin(ScrollTrigger);

const PresentationContainer = ({ title }) => {
  const boxRef = useRef();
  const titleRef = useRef();
  const titleRef2 = useRef();
  const pRef = useRef();
  const pRef2 = useRef();
  const imageRef = useRef();
  const [background, setBackground] = useState("#bce7ff");

  useEffect(() => {
    if (title === "august") {
      setBackground("#CEFFBC");
    } else if (title === "july") {
      setBackground("#bce7ff");
    } else {
      setBackground("#fde1bf");
    }
  }, [title]);

  useEffect(() => {
    gsap.to(boxRef.current, {
      background: background,
      duration: "1.2",
      scrollTrigger: {
        trigger: boxRef.current,
      },
    });
    gsap.to(titleRef.current, {
      opacity: "1",
      right: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: boxRef.current,
      },
    });
    gsap.to(pRef.current, {
      opacity: "1",
      right: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: boxRef.current,
      },
    });
    gsap.to(titleRef2.current, {
      opacity: "1",
      right: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: boxRef.current,
      },
    });
    gsap.to(pRef2.current, {
      opacity: "1",
      right: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: boxRef.current,
      },
    });
    gsap.to(imageRef.current, {
      opacity: "1",
      bottom: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: boxRef.current,
      },
    });
  }, []);
  return (
    <div
      id="presentation"
      ref={boxRef}
      className={styles.presentationContainer}
      style={{ backgroundColor: background }}
    >
      <h2 ref={titleRef} className={styles.title}>
        Présentation
      </h2>
      <div ref={pRef} className={styles.paragraph}>
        <p>{`L’association In Extremis est très heureuse de présenter son stage musical qui cette année accueillera quatre musiciens professionnels (selon les effectifs et contenus de stage) pour intervenir au près des stagiaires pour préparer les concerts de restitution : `}</p>
        <p>Antoine Delbos (batteur et compositeur),</p>
        <p>Robin Nitram (guitariste et compositeur),</p>
        <p>Sacha Le Roy (bassiste et compositeur) et</p>
        <p>Benjamin Aubry (saxophoniste et compositeur).</p>
        <p>Le stage en quelques mots : </p>
        <p>{`Nous sommes très heureux de continuer cette aventure avec vous dans cette magnifique région qu’est le Lot. Le but de ce stage musical étant de partager notre passion de la musique et plus spécifiquement de l'improvisation ainsi que de donner à chacun.e l’envie de trouver sa voie à travers son parcours de musicien.ne.`}</p>
        <p>{`Ce stage est ouvert à toutes et à tous ceux qui désirent apprendre et s’exprimer à travers la musique vivante c’est à dire la pratique de son instrument, l’écoute collective et le partage avec les autres.`}</p>
      </div>
      <h2 ref={titleRef2} className={styles.title}>
        Ils en parlent :
      </h2>
      <div ref={pRef2} className={styles.paragraph}>
        <a
          target="_blank"
          href="https://www.ladepeche.fr/2023/08/22/un-tres-beau-bilan-du-stage-de-musique-improvisee-11408165.php"
        >
          Cajarc. Un très beau bilan du stage de musique improvisée
        </a>
        <a
          target="_blank"
          href="https://www.ladepeche.fr/2023/06/26/un-stage-de-musique-improvisee-avec-in-extremis-11301554.php"
        >
          Cajarc. Un stage de musique improvisée avec IN Extremis
        </a>
        <a
          target="_blank"
          href="https://www.tourisme-figeac.com/offres/stage-de-musique-improvisee-cajarc-fr-4263380/"
        >
          Grand Figeac Tourisme
        </a>
        <a
          target="_blank"
          href="https://www.ladepeche.fr/2024/08/10/le-stage-de-musique-improvisee-fait-le-plein-12134909.php"
        >
          La dépèche : Le stage de musique improvisée fait le plein
        </a>
      </div>
      <div ref={imageRef} className={styles.image}>
        <a
          target="_blank"
          href="https://www.ladepeche.fr/2024/08/10/le-stage-de-musique-improvisee-fait-le-plein-12134909.php"
        >
          <Image
            src="/assets/images/stage_2025.jpg"
            fill
            className={styles.customImg}
            sizes="(max-width: 768px) 90vw,
              (max-width: 1200px) 40vw,
              33vw"
            alt="photo de la presse pour le stage"
          />
        </a>
      </div>
    </div>
  );
};

export default PresentationContainer;
