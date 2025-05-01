"use client";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./InformationsPage.module.css";

const InformationsPage = ({ title }) => {
  const containerRef = useRef();
  const titleRef = useRef();
  const titleRef2 = useRef();
  const pRef1 = useRef();
  const pRef2 = useRef();
  const pRef3 = useRef();
  const pRef4 = useRef();
  const [background, setBackground] = useState("#CEFFBC");
  const [showTitle, setShowTitle] = useState("Hiver");
  const [descriptionAndInscription, setDescriptionAndInscription] = useState([
    "/assets/pdf/description_2025_stage_juillet.pdf",
    "/assets/pdf/formulaire_inscription_juillet25.pdf",
    "/assets/pdf/autorisation_parentale_2025.pdf",
    "/assets/pdf/autorisation_parentale_2025_image.pdf",
  ]);

  useEffect(() => {
    if (title === "august") {
      setBackground("#fde1bf");
      setShowTitle("Aout");
      setDescriptionAndInscription([
        "/assets/pdf/description_august_2025.pdf",
        "/assets/pdf/formulaire_august_inscription_2025.pdf",
        "/assets/pdf/autorisation_parentale_aout2025.pdf",
        "/assets/pdf/autorisation_parentale_aout2025_image.pdf",
      ]);
    } else if (title === "july") {
      setBackground("#CEFFBC");
      setShowTitle("Juillet");
      setDescriptionAndInscription([
        "/assets/pdf/description_2025_stage_juillet.pdf",
        "/assets/pdf/formulaire_inscription_juillet25.pdf",
        "/assets/pdf/autorisation_parentale_2025.pdf",
        "/assets/pdf/autorisation_parentale_2025_image.pdf",
      ]);
    } else {
      setBackground("#bce7ff");
      setShowTitle("Hiver");
      setDescriptionAndInscription([
        "assets/pdf/plaquette_stage_février_2025.pdf",
        "/assets/pdf/formulaire_inscription_hiver25.pdf",
      ]);
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
    gsap.to(titleRef.current, {
      opacity: "1",
      right: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
    gsap.to(pRef1.current, {
      opacity: "1",
      right: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
    gsap.to(pRef2.current, {
      opacity: "1",
      right: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
    gsap.to(pRef3.current, {
      opacity: "1",
      right: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
    gsap.to(pRef4.current, {
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
      id="information"
      ref={containerRef}
      className={styles.infosContainer}
      style={{ background: background }}
    >
      <h2 ref={titleRef} className={styles.infosTitle}>
        Informations {showTitle} 2025
      </h2>
      <div className={styles.part}>
        <h3 className={styles.infosSubTitle}>Coût du stage</h3>
        <div ref={pRef1} className={styles.pDetailsContainer}>
          <p className={styles.paragraphe}>
            Participation à la semaine de stage :
          </p>
          {title === "august" && (
            <>
              <p>{`- 375€ (dont 10€ d'adhésion à l'association organisatrice In Extremis) `}</p>
              <p>{`- 325€ (dont 10€ d'adhésion à l'association organisatrice In Extremis) pour les adhérents à l'école de musique de Cajarc.`}</p>
            </>
          )}
          {title === "july" && (
            <>
              <p>{`- 270€ (dont 10€ d'adhésion à l'association organisatrice In Extremis) `}</p>
              <p>{`- 250€ (dont 10€ d'adhésion à l'association organisatrice In Extremis) pour les adhérents à l'école de musique de Cajarc.`}</p>
              <p>
                {`- 150€ (dont 10€ d'adhésion à l'association organisatrice In Extremis) pour les adhérents à l'école de musique de Cajarc de moins `}
                <span style={{ textDecoration: "underline" }}>de 16 ans.</span>
              </p>
            </>
          )}
          {title === "winter" && (
            <>
              <p>{`- 270€ (dont 10€ d'adhésion à l'association organisatrice In Extremis) `}</p>
              <p>{`- 250€ (dont 10€ d'adhésion à l'association organisatrice In Extremis) pour les adhérents à l'école de musique de Cajarc.`}</p>
              <p>
                {`- 150€ (dont 10€ d'adhésion à l'association organisatrice In Extremis) pour les adhérents à l'école de musique de Cajarc de moins `}
                <span style={{ textDecoration: "underline" }}>de 16 ans.</span>
              </p>
            </>
          )}
          <p>{`Participation à la journée possible, nous contacter.`}</p>
          <Link target="_blank" href={descriptionAndInscription[0]}>
            Fiche Description
          </Link>

          <Link
            target="_blank"
            href={descriptionAndInscription[1]}
          >{`Formulaire d'inscription`}</Link>
          {descriptionAndInscription[2] && (
            <Link
              target="_blank"
              href={descriptionAndInscription[2]}
            >{`Autorisation parentale`}</Link>
          )}
          {descriptionAndInscription[3] && (
            <Link
              target="_blank"
              href={descriptionAndInscription[3]}
            >{`Autorisation parentale pour le droit à l'image`}</Link>
          )}
        </div>
      </div>
      <div className={styles.part}>
        <h3 className={styles.infosSubTitle}>Réservations</h3>
        <div ref={pRef2} className={styles.pDetailsContainer}>
          <p>Adressez un chèque de réservation de 100 euros</p>
          <p>{`à l’ordre de l’association`}</p>
          <p>{`IN EXTREMIS à l’adresse suivante :`}</p>
          <p>{`IN EXTREMIS`}</p>
          <p>{`11 rue de la cascade`}</p>
          <p>{`46160 CAJARC`}</p>
        </div>
      </div>
      <div className={styles.part}>
        <h3 className={styles.infosSubTitle}>Le lieu du stage</h3>
        <h4 className={styles.subSubTitle}>
          {"Nouvelle école de musique de Cajarc. "}
        </h4>
        <div className={styles.photo}>
          <Image
            src="/assets/images/ecole_de_musique.jpg"
            alt="Nouvelle école de musique de Cajarc"
            fill
            className={styles.customImg}
            sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw"
          />
        </div>
      </div>
      <div className={styles.part}>
        <h3 className={styles.infosSubTitle}>La restauration</h3>
        <div ref={pRef3} className={styles.pDetailsContainer}>
          <p>{`Pour les stagiaires qui le souhaitent, possibilité de se restaurer le midi avec l’équipe pédagogique dans un des restaurants du village. `}</p>
        </div>
      </div>
      <div className={styles.part}>
        <h3 className={styles.infosSubTitle}>{`L'hébergement`}</h3>
        <div ref={pRef4} className={styles.pDetailsContainer}>
          <p>
            {`Nous ne prenons pas en charge l'hébergement durant le stage mais nous vous conseillons de vous renseigner au près de `}
            <Link
              href="https://www.cajarc.fr/decouverte/tourisme/hebergements"
              target="_blank"
            >{`l'office de tourisme de Cajarc`}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InformationsPage;
