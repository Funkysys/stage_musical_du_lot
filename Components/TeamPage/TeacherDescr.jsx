import React, { useState, useRef, useEffect } from 'react'
import styles from './TeamPage.module.css'
import Image from 'next/image'

const TeacherDescr = ({ elt }) => {
    const [toggle, setToggle] = useState(false)
    const descrRef = useRef()
    const linkRef = useRef()

    const handleOnClick = () => {
        setToggle(!toggle)
    }
    return (
        <div key={elt.id} className={styles.teacherCard}>
            <h3 className={styles.name}>{elt.name}</h3>
            <div className={styles.interContainer}>
                <div className={styles.photo}>
                    <Image
                        src={elt.photo}
                        alt={elt.alt}
                        fill
                        className={styles.customImg}
                        sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw"
                    />
                </div>
                <div className={toggle ? styles.activeBtn : styles.addDescr}>
                    <button onClick={handleOnClick}>
                        <p>+</p>
                    </button>
                </div>
                <div ref={descrRef} className={toggle ? styles.activeDescr : styles.description}>
                    <p>{elt.bio}</p>
                </div>
            </div>
            <div ref={linkRef} className={toggle ? styles.activeDescr : styles.links}>
                {
                    elt.descrLinks.length > 1 ?
                        (
                            elt.descrLinks.map(el => {
                                return (
                                    <a
                                        key={elt.id * Math.random()}
                                        href={`https://${el.link}`} target='_blank'>
                                        {el.title}
                                    </a>
                                )
                            }
                            )
                        )
                        : 
                        <a
                        key={elt.id * Math.random()}
                        href={`https://${elt.descrLinks[0].link}`} target='_blank'>
                                {elt.descrLinks[0].title}
                            </a>
                        
                }
            </div>
        </div>
    )
}

export default TeacherDescr