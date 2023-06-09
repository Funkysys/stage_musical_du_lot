import React, { useRef, useEffect } from 'react'
import styles from './PresentationContainer.module.css'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)
const PresentationContainer = () => {
  const boxRef = useRef()
  const titleRef = useRef()
  const pRef = useRef()
  const imageRef = useRef()

  useEffect(() => {
    gsap.to(boxRef.current, {
      background: "#bce7ff",
      duration: '1.2',
      scrollTrigger: {
        trigger: boxRef.current
      }
    })
    gsap.to(titleRef.current, {
      opacity: '1',
      right: '0',
      duration: '1.2',
      scrollTrigger: {
        trigger: boxRef.current
      }
    })
    gsap.to(pRef.current, {
      opacity: '1',
      right: '0',
      duration: '1.2',
      scrollTrigger: {
        trigger: boxRef.current
      }
    })
    gsap.to(imageRef.current, {
      opacity: '1',
      bottom: '0',
      duration: '1.2',
      scrollTrigger: {
        trigger: boxRef.current
      }
    })
  }, [])
  return (
    <div id="presentation" ref={boxRef} className={styles.presentationContainer}>
      <h2 ref={titleRef} className={styles.title}>Présentation</h2>
      <div ref={pRef} className={styles.paragraph}>
        <p >{`L’association In Extremis est très heureuse de présenter son stage musical qui cette année accueillera quatre musiciens professionnels : `}</p>
        <p>Antoine Delbos (batteur et compositeur),</p>
        <p>Robin Nitram (guitariste et compositeur),</p>
        <p>Sacha Le Roy (bassiste et compositeur) et</p>
        <p>Benjamin Aubry (saxophoniste et compositeur).</p>
        <p>Le stage en quelques mots : </p>
        <p >{`Nous sommes très heureux de continuer cette aventure avec vous dans cette magnifique région qu’est le Lot. Le but de ce stage musical étant de partager notre passion de la musique et de donner à chacun.e l’envie de trouver sa voie à travers son parcours de musicien.ne.`}</p>
        <p >{`Ce stage est ouvert à toutes et à tous ceux qui désirent apprendre et s’exprimer à travers la musique vivante c’est à dire la pratique de son instrument, l’écoute collective et le partage avec les autres.`}</p>
      </div>
      <div ref={imageRef} className={styles.image}>
        <Image
          src='/assets/images/presse2.jpg'
          fill
          className={styles.customImg}
          sizes="(max-width: 768px) 90vw,
              (max-width: 1200px) 40vw,
              33vw"
          alt='photo de la presse pour le stage'
        />
      </div>
    </div>
  )
}

export default PresentationContainer