import React, { useState, useEffect, useRef } from 'react'
import styles from './DetailsPage.module.css'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const DetailsPage = ({ datas, summer }) => {
    const [toggle, setToggle] = useState(false)
    const [content, setContent] = useState([datas[0]])
    const containerRef = useRef()
    const titleRef1 = useRef()
    const titleRef2 = useRef()
    const pRef1 = useRef()
    const pRef2 = useRef()
    const descrRef = useRef()
    const linkRef = useRef()

    const summerBG = {
        background: "#bce7ff"
    }
    const winterBG = {
        background: "#fde1bf"
    }

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
            background: summer ? "#bce7ff" : "#fde1bf",
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
        <div
            ref={containerRef}
            className={styles.container}
            style={summer ? summerBG : winterBG}
        >
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
                            {!summer ?
                                content.links &&
                                <>
                                    {content.links.map(elt => {
                                        return (
                                            <div key={elt.id} className={styles.links}>
                                                <p className={styles.linksCategories}>{elt.categorie}</p>
                                                <p className={styles.linksYoutube}>
                                                    Youtube :
                                                    <a target='_blank' href={elt.youtube}> {elt.name}</a >
                                                </p>
                                                <p className={styles.linksPdf}>
                                                    PDF :
                                                    <a target='_blank' href={elt.pdf}> {elt.name}</a >
                                                </p>
                                            </div>
                                        )
                                    })
                                    }
                                </>
                                :
                                <div>
                                    <div className={styles.links}>
                                        <p className={styles.linksCategories}>{`Le programme arrive bientôt.`}</p>
                                    </div>
                                </div>
                            }
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