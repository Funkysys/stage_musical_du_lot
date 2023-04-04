import React, { useState, useEffect, useRef } from 'react'
import styles from './DetailsPage.module.css'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import datas from '@/datas/detailsDatas'

gsap.registerPlugin(ScrollTrigger)

const DetailsPage = () => {
    const [toggle, setToggle] = useState(false)
    const [content, setContent] = useState([datas[0]])
    const containerRef = useRef()
    const titleRef1 = useRef()
    const titleRef2 = useRef()
    const pRef1 = useRef()
    const pRef2 = useRef()
    const descrRef = useRef()
    const linkRef = useRef()

    const handleOnClick = (el) => {
        setContent(el)
        setToggle(!toggle)
        if (toggle) {
            gsap.to(descrRef.current, { display: "block", opacity: '1' })
            gsap.to(linkRef.current, { display: "block", opacity: '1' })
        } else {
            gsap.to(descrRef.current, { display: "none", opacity: '1' })
            gsap.to(linkRef.current, { display: "none", opacity: '1' })
        }
    }
    useEffect(() => {
        gsap.to(containerRef.current, {
            background: "#bce7ff",
            duration: '1.2',
            scrollTrigger: {
                trigger: containerRef.current
            }
        })
        gsap.to(titleRef1.current, {
            opacity: '1',
            right: '0',
            duration: '1.2',
            scrollTrigger: {
                trigger: containerRef.current
            }
        })
        gsap.to(titleRef2.current, {
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
    }, [])

    return (
        <div ref={containerRef} className={styles.container}>
            <h2 ref={titleRef1} className={styles.titleDetails}>Détails des différents modules</h2>
            <div ref={pRef1} className={styles.pDetailsContainer}>
                <div className={styles.pButtonsContainer}>
                    {datas.map(el => {
                        return (
                            <button key={el.id} className={styles.button} onClick={() => handleOnClick(el)}>
                                <p>{el.button.toUpperCase()}</p>
                            </button>
                        )
                    })}
                </div>
                {
                    content && (
                        <div className={styles.content}>
                            <p>{content.title}</p>
                            <p>{content.content}</p>
                        </div>
                    )
                }
            </div>
            <h2 ref={titleRef2} className={styles.titleDetails}>Coaching de groupe</h2>
            <p ref={pRef2} className={styles.paragraph}>{`Un coaching de groupe peut être envisagé en dehors du stage sur demande.`}</p>
        </div>
    )
}

export default DetailsPage