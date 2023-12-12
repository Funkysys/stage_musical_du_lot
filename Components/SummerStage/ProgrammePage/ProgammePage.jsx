import React, { useRef, useEffect } from 'react'
import styles from './ProgammePage.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ProgammePage = ({summer}) => {
    const containerRef = useRef()
    const titleProgRef = useRef()
    const pProgRef = useRef()
    useEffect(() => {
        gsap.to(containerRef.current, {
            background: summer ? "#fde1bf" : "#bce7ff",
            duration: '1.2',
            scrollTrigger: {
                trigger: containerRef.current
            }
        })
        gsap.to(titleProgRef.current, {
            opacity: '1',
            right: '0',
            duration: '1.2',
            scrollTrigger: {
                trigger: containerRef.current
            }
        })
        gsap.to(pProgRef.current, {
            opacity: '1',
            right: '0',
            duration: '1.2',
            scrollTrigger: {
                trigger: containerRef.current
            }
        })
    }, [])

    const summerBG = {
        background: "#fde1bf"
    }
    const winterBG = {
        background: "#bce7ff"
    }

    return (
        <div 
        id='programme' 
        ref={containerRef} 
        className={styles.containerProgramme}
        style={summer ? summerBG : winterBG}
        >
            <h2 ref={titleProgRef} className={styles.titleProg}>{`Programme type d’une journée de stage :`}</h2>
            <div ref={pProgRef} className={styles.pProgContainer}>
                <p>10h - 11h30 : RYTHME</p>
                <p>11h30 - 13h : CHANT ET OREILLE</p>
                <p>13H - 14H : PAUSE DEJEUNER</p>
                <p>14H - 16H : COURS INDIVIDUELS et COURS THEMATIQUES</p>
                <p>16H - 18H : JEUX COLLECTIF</p>
                <p>18H - 20H : JAM SESSION*</p>
                <p>{`à noter : le programme peut évoluer selon le niveau et le nombre d’élèves.`}</p>
                <p>{`Jam Session* : le jeudi aura lieu à la place de la jam session, un accueil technique sous la forme d’un module d’initiation à la scène (son, lumière, placement, backline…) suivi d’un concert des professeurs puis des élèves. Le vendredi aura lieu aussi à la place d’une jam session, un temps de repos et un concert des professeurs puis des élèves.`}</p>
            </div>
        </div>
    )
}

export default ProgammePage