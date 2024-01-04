import React, { useEffect, useState, useRef } from 'react'
import styles from "./WelcomePage.module.css"
import gsap from 'gsap'

const WelcomePage = ({summer}) => {
    const [width, setWidth] = useState()
    const [ready, setReady] = useState(false)
    const [height, setHeight] = useState()
    const lRef = useRef()
    const eRef = useRef()
    const sRef = useRef()
    const tRef = useRef()
    const aRef = useRef()
    const gRef = useRef()
    const e2Ref = useRef()
    const mRef = useRef()
    const uRef = useRef()
    const s2Ref = useRef()
    const iRef = useRef()
    const cRef = useRef()
    const a2Ref = useRef()
    const l2Ref = useRef()
    const h2Ref = useRef()
    const titleDateRef = useRef()
    const titleDateRef2 = useRef()
    
    const summerBG = {
        background: "#fbb764"
    }
    const winterBG = {
        background: "rgb(71, 174, 230)"
    }

    useEffect(() => {
        setWidth(window.innerHeight)
        setHeight(window.innerWidth)
        if(width) {
            setReady(true)
        }
    }, [width, height])
    
    useEffect(() => {
        if(ready) {
            const TL = gsap.timeline({})
            TL.to(lRef.current, { top: '0', opacity: '1', right: '0'})
            TL.to(eRef.current, { top: '0', opacity: '1', right: '0'}, '-=0.5')
            TL.to(sRef.current, { top: '0', opacity: '1'}, '-=0.5')
            TL.to(tRef.current, { top: '0', opacity: '1', right: '0'}, '-=0.5')
            TL.to(aRef.current, { top: '0', opacity: '1', right: '0'}, '-=0.5')
            TL.to(gRef.current, { top: '0', opacity: '1'}, '-=0.5')
        TL.to(e2Ref.current, { top: '0', opacity: '1'}, '-=0.5')
        TL.to(mRef.current, { top: '0', opacity: '1', right: '0'}, '-=0.5')
        TL.to(uRef.current, { top: '0', opacity: '1', right: '0'}, '-=0.5')
        TL.to(s2Ref.current, { top: '0', opacity: '1', right: '0'}, '-=0.5')
        TL.to(iRef.current, { top: '0', opacity: '1'}, '-=0.5')
        TL.to(cRef.current, { top: '0', opacity: '1', right: '0'}, '-=0.5')
        TL.to(a2Ref.current, { top: '0', opacity: '1'}, '-=0.5')
        TL.to(l2Ref.current, { top: '0', opacity: '1', right: '0'}, '-=0.5')
        TL.to(h2Ref.current, { rotate: 350, opacity: "1", fontSize: "6em"}, '-=0.2')
        if (width > 1080) {
            TL.to(h2Ref.current, { fontSize: "4.5em"}, '-=0.2')
        } else {
            TL.to(h2Ref.current, { fontSize: "2.5em"}, '-=0.2')
        }
        TL.to(h2Ref.current, { boxShadow: "10px 10px 10px black, -1px -1px 2px rgba(0, 0, 0, 0.8), -1px 1px 2px rgba(0, 0, 0, 0.8), 1px -1px 2px rgba(0, 0, 0, 0.8)"}, '-=0.2')
        TL.to(titleDateRef.current, { top: '0', opacity: '1'}, '-=0.5')
        TL.to(titleDateRef2.current, { top: '0', opacity: '1'}, '-=0.5')
    }
    }, [ready])
    return (
        <div id='home' className={styles.container} style={summer ? summerBG : winterBG}>
            <h1 className={styles.title1}>
                <span ref={lRef} id="l" className={styles.l}>L</span>
                <span ref={eRef} className={styles.e}>e </span>
                <span ref={sRef} className={styles.s}>S</span>
                <span ref={tRef} className={styles.t}>t</span>
                <span ref={aRef} className={styles.a}>a</span>
                <span ref={gRef} className={styles.g}>g</span>
                <span ref={e2Ref} className={styles.e2}>e </span>
                <span ref={mRef} className={styles.m}>M</span>
                <span ref={uRef} className={styles.u}>u</span>
                <span ref={s2Ref} className={styles.s2}>s</span>
                <span ref={iRef} className={styles.i}>i</span>
                <span ref={cRef} className={styles.c}>c</span>
                <span ref={a2Ref} className={styles.a2}>a</span>
                <span ref={l2Ref} className={styles.l2}>l </span>
            </h1>
            <h2 className={styles.title2} ref={h2Ref}>Du Lot</h2>
            <h3 className={styles.titleDate} ref={titleDateRef}>{`Stage d'Hiver Du 16 au 18 février 2024`}</h3>
            <h3 className={styles.titleDate} ref={titleDateRef2}>Stage Été Du 5 au 9 août 2024</h3>
        </div>
    )
}

export default WelcomePage
