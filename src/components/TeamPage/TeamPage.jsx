"use client";
import team from "@/data/teachersData";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import TeacherDescr from "./TeacherDescr";
import styles from "./TeamPage.module.css";

gsap.registerPlugin(ScrollTrigger);

const TeamPage = ({ title }) => {
  const containerRef = useRef();
  const titleRef = useRef();
  const cardContainerRef = useRef();
  const cardContainerRef2 = useRef();
  const [background, setBackground] = useState("#fbb764");
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
    gsap.to(containerRef.current, {
      background: background,
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
    gsap.to(titleRef.current, {
      opacity: 1,
      right: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
    gsap.to(cardContainerRef.current, {
      opacity: 1,
      top: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
    gsap.to(cardContainerRef2.current, {
      opacity: 1,
      top: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
  }, []);

  const summerBG = {
    background: "#fde1bf",
  };
  const winterBG = {
    background: "rgb(71, 174, 230)",
  };

  return (
    <div
      ref={containerRef}
      id="team"
      className={styles.TeamContainer}
      style={{ background: background }}
    >
      <h2
        ref={titleRef}
        className={styles.teamTitle}
      >{`Notre Équipe d'intervenants musicaux`}</h2>
      <h3>{`(équipe variable selon les stages et l'effectif)`}</h3>
      <div
        ref={cardContainerRef}
        className={`${styles.cardContainer} grid gap-2 grid-cols-4 md:grid-cols-2 lg:grid-cols-3`}
      >
        {team.slice(0, 3).map((elt) => {
          return <TeacherDescr key={elt.id} elt={elt} />;
        })}
      </div>
      <div
        ref={cardContainerRef2}
        className={`${styles.cardContainer} grid gap-2 grid-cols-4 md:grid-cols-2 lg:grid-cols-3`}
      >
        {team.slice(3).map((elt) => {
          return <TeacherDescr key={elt.id} elt={elt} />;
        })}
      </div>
    </div>
  );
};

export default TeamPage;
