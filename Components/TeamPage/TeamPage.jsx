import React, { useRef, useEffect } from 'react'
import styles from './TeamPage.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import TeacherDescr from './TeacherDescr'
import team from '@/datas/teachersDatas'

gsap.registerPlugin(ScrollTrigger)

const TeamPage = () => {
    const containerRef = useRef()
    const titleRef = useRef()
    const cardContainerRef = useRef()

    useEffect(() => {
        gsap.to(containerRef.current, {
            background: "#fde1bf",
            duration: '1.2',
            scrollTrigger: {
                trigger: containerRef.current
            }
        })
        gsap.to(titleRef.current, {opacity: 1, right: '0', duration: '1.2',
        scrollTrigger: {
            trigger: containerRef.current
        }})
        gsap.to(cardContainerRef.current, {opacity: 1, top: '0', duration: '1.2',
        scrollTrigger: {
            trigger: containerRef.current
        }})
    }, [])


    

    return (
        <div ref={containerRef} id="equipe" className={styles.TeamContainer}>
            <h2 ref={titleRef} className={styles.teamTitle}>{`L'équipe Pédagogique`}</h2>
            <div ref={cardContainerRef} className={styles.cardContainer}>
                {team.map(elt => {
                    return (
                        <TeacherDescr key={elt.id} elt={elt} />
                    )
                })}
            </div>
        </div>
    )
}

export default TeamPage