import React, { useState, useEffect, useRef } from 'react'
import styles from './InformationsPage.module.css'
import Image from 'next/image'
import gsap from 'gsap'

const InformationsPage = ({ summer }) => {

    const containerRef = useRef()
    const titleRef = useRef()
    const titleRef2 = useRef()
    const pRef1 = useRef()
    const pRef2 = useRef()
    const pRef3 = useRef()
    const pRef4 = useRef()
    const summerBG = {
        background: "#bce7ff"
    }
    const winterBG = {
        background: "#fde1bf"
    }

    useEffect(() => {
        gsap.to(containerRef.current, {
            background: "#bce7ff",
            duration: '1.2',
            scrollTrigger: {
                trigger: containerRef.current
            }
        })
        gsap.to(titleRef.current, {
            opacity: '1',
            right: '0',
            duration: '1.2',
            scrollTrigger: {
                trigger: containerRef.current
            }
        })
        gsap.to(pRef1.current, {
            opacity: '1',
            right: '0',
            duration: '1.2',
            scrollTrigger: {
                trigger: containerRef.current
            }
        })
        gsap.to(pRef2.current, {
            opacity: '1',
            right: '0',
            duration: '1.2',
            scrollTrigger: {
                trigger: containerRef.current
            }
        })
        gsap.to(pRef3.current, {
            opacity: '1',
            right: '0',
            duration: '1.2',
            scrollTrigger: {
                trigger: containerRef.current
            }
        })
        gsap.to(pRef4.current, {
            opacity: '1',
            right: '0',
            duration: '1.2',
            scrollTrigger: {
                trigger: containerRef.current
            }
        })
    }, [])

    return (
        <div
            id="informations"
            ref={containerRef}
            className={styles.infosContainer}
            style={summer ? summerBG : winterBG}
        >
            <h2 ref={titleRef} className={styles.infosTitle}>Informations {summer ? "Été" : "Hiver"}</h2>
            <div className={styles.part}>
                <h3 className={styles.infosSubTitle}>Coût du stage</h3>
                <div ref={pRef1} className={styles.pDetailsContainer}>
                    <p className={styles.paragraphe}>Participation à la semaine de stage :</p>
                    {summer ?
                        <>
                            <p>{`- 375€ (dont 10€ d'adhésion à l'association organisatrice In Extremis) `}</p>
                            <p>{`- 325€ (dont 10€ d'adhésion à l'association organisatrice In Extremis) pour les adhérents à l'école de musique de Cajarc.`}</p>
                        </>
                        :
                        <>
                            <p>{`- 270€ (dont 10€ d'adhésion à l'association organisatrice In Extremis) `}</p>
                            <p>{`- 250€ (dont 10€ d'adhésion à l'association organisatrice In Extremis) pour les adhérents à l'école de musique de Cajarc.`}</p>
                        </>
                    }
                    <p>{`Participation à la journée possible, nous contacter.`}</p>
                    <a target='_blank' href='/assets/pdf/description_2023.pdf'>Fiche Description</a >
                    <a target='_blank' href='/assets/pdf/fiche_pédago_2023.docx.pdf'>Contenu Pédagogique</a >
                    <a target='_blank' href='/assets/pdf/formulaire_inscription.pdf'>{`Formulaire d'inscription`}</a >
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
                <h4 className={styles.subSubTitle}>Nouvelle Ecole de musique de Cajarc. </h4>
                <div className={styles.photo}>
                    <Image
                        src='/assets/images/ecole_de_musique.jpg'
                        alt="Nouvelle école de musique de Cajarc"
                        fill
                        className={styles.customImg}
                        sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw"/>
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
                    <p>{`Nous ne prenons pas en charge l'hébergement durant le stage mais nous vous conseillons de vous renseigner au près de `}
                        <a href='https://www.cajarc.fr/decouverte/tourisme/hebergements' target='_blank'>{`l'office de tourisme de Cajarc`}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InformationsPage