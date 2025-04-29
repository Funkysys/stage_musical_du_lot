"use client";
import gsap from "gsap";
import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../utils/dataContext"; // Ensure this path is correct
import styles from "./HomePage.module.css";

const WelcomePage = () => {
  const { loading, title } = useContext(DataContext);
  const [background, setBackground] = useState<string>("");
  const [width, setWidth] = useState<number>(0);
  const [ready, setReady] = useState(false);
  const [height, setHeight] = useState<number>(0);
  const lRef = useRef<HTMLSpanElement>(null);
  const eRef = useRef<HTMLSpanElement>(null);
  const sRef = useRef<HTMLSpanElement>(null);
  const tRef = useRef<HTMLSpanElement>(null);
  const aRef = useRef<HTMLSpanElement>(null);
  const gRef = useRef<HTMLSpanElement>(null);
  const e2Ref = useRef<HTMLSpanElement>(null);
  const mRef = useRef<HTMLSpanElement>(null);
  const uRef = useRef<HTMLSpanElement>(null);
  const s2Ref = useRef<HTMLSpanElement>(null);
  const iRef = useRef<HTMLSpanElement>(null);
  const cRef = useRef<HTMLSpanElement>(null);
  const a2Ref = useRef<HTMLSpanElement>(null);
  const l2Ref = useRef<HTMLSpanElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const titleDateRef = useRef<HTMLHeadingElement>(null);
  const titleDateRef2 = useRef<HTMLHeadingElement>(null);
  const titleDateRef3 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (title === "august") {
      setBackground("#fbb764");
    } else if (title === "july") {
      setBackground("#9DDE85");
    } else {
      setBackground("rgb(71, 174, 230)");
    }
  }, [title]);

  useEffect(() => {
    setWidth(window.innerHeight);
    setHeight(window.innerWidth);
    if (width) {
      setReady(true);
    }
  }, [width, height]);

  useEffect(() => {
    if (ready) {
      const TL = gsap.timeline({});
      TL.to(lRef.current, { top: "0", opacity: "1", right: "0" });
      TL.to(eRef.current, { top: "0", opacity: "1", right: "0" }, "-=0.5");
      TL.to(sRef.current, { top: "0", opacity: "1" }, "-=0.5");
      TL.to(tRef.current, { top: "0", opacity: "1", right: "0" }, "-=0.5");
      TL.to(aRef.current, { top: "0", opacity: "1", right: "0" }, "-=0.5");
      TL.to(gRef.current, { top: "0", opacity: "1" }, "-=0.5");
      TL.to(e2Ref.current, { top: "0", opacity: "1" }, "-=0.5");
      TL.to(mRef.current, { top: "0", opacity: "1", right: "0" }, "-=0.5");
      TL.to(uRef.current, { top: "0", opacity: "1", right: "0" }, "-=0.5");
      TL.to(s2Ref.current, { top: "0", opacity: "1", right: "0" }, "-=0.5");
      TL.to(iRef.current, { top: "0", opacity: "1" }, "-=0.5");
      TL.to(cRef.current, { top: "0", opacity: "1", right: "0" }, "-=0.5");
      TL.to(a2Ref.current, { top: "0", opacity: "1" }, "-=0.5");
      TL.to(l2Ref.current, { top: "0", opacity: "1", right: "0" }, "-=0.5");
      TL.to(
        h2Ref.current,
        { rotate: 350, opacity: "1", fontSize: "6em" },
        "-=0.2"
      );
      if (width > 1080) {
        TL.to(h2Ref.current, { fontSize: "4.5em" }, "-=0.2");
      } else {
        TL.to(h2Ref.current, { fontSize: "2.5em" }, "-=0.2");
      }
      TL.to(
        h2Ref.current,
        {
          boxShadow:
            "10px 10px 10px black, -1px -1px 2px rgba(0, 0, 0, 0.8), -1px 1px 2px rgba(0, 0, 0, 0.8), 1px -1px 2px rgba(0, 0, 0, 0.8)",
        },
        "-=0.2"
      );
      TL.to(titleDateRef.current, { top: "0", opacity: "1" }, "-=0.5");
      TL.to(titleDateRef2.current, { top: "0", opacity: "1" }, "-=0.5");
      TL.to(titleDateRef3.current, { top: "0", opacity: "1" }, "-=0.5");
    }
  }, [ready, width]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}></div>
      </div>
    );
  }

  return (
    <div
      id="home"
      className={styles.container}
      style={background ? { backgroundColor: background } : {}}
    >
      <h1 className={styles.title1}>
        <span ref={lRef} id="l" className={styles.l}>
          L
        </span>
        <span ref={eRef} className={styles.e}>
          e{" "}
        </span>
        <span ref={sRef} className={styles.s}>
          S
        </span>
        <span ref={tRef} className={styles.t}>
          t
        </span>
        <span ref={aRef} className={styles.a}>
          a
        </span>
        <span ref={gRef} className={styles.g}>
          g
        </span>
        <span ref={e2Ref} className={styles.e2}>
          e{" "}
        </span>
        <span ref={mRef} className={styles.m}>
          M
        </span>
        <span ref={uRef} className={styles.u}>
          u
        </span>
        <span ref={s2Ref} className={styles.s2}>
          s
        </span>
        <span ref={iRef} className={styles.i}>
          i
        </span>
        <span ref={cRef} className={styles.c}>
          c
        </span>
        <span ref={a2Ref} className={styles.a2}>
          a
        </span>
        <span ref={l2Ref} className={styles.l2}>
          l{" "}
        </span>
      </h1>
      <h2 className={styles.title2} ref={h2Ref}>
        Du Lot
      </h2>
      <h3 className={styles.titleDate} ref={titleDateRef2}>
        {"Stage D'Aout Du 4 au 8 août 2025 "}
      </h3>
      <h3
        className={styles.titleDate}
        ref={titleDateRef3}
      >{`Stage de Juillet Du 23 au 25 Juillet 2025`}</h3>
      <h3
        className={styles.titleDate}
        ref={titleDateRef}
      >{`Stage d'Hiver Du 21 au 23 février 2025`}</h3>
    </div>
  );
};

export default WelcomePage;
