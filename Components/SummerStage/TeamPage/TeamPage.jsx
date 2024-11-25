import team from "@/datas/teachersDatas";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import TeacherDescr from "./TeacherDescr";
import styles from "./TeamPage.module.css";

gsap.registerPlugin(ScrollTrigger);

const TeamPage = ({ summer }) => {
  const containerRef = useRef();
  const titleRef = useRef();
  const cardContainerRef = useRef();

  useEffect(() => {
    gsap.to(containerRef.current, {
      background: summer ? "#fde1bf" : "rgb(71, 174, 230)",
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
      id="equipe"
      className={styles.TeamContainer}
      style={summer ? summerBG : winterBG}
    >
      <h2
        ref={titleRef}
        className={styles.teamTitle}
      >{`Notre Équipe d'intervenants musicaux`}</h2>
      <div ref={cardContainerRef} className={styles.cardContainer}>
        {team.map((elt) => {
          return <TeacherDescr key={elt.id} elt={elt} />;
        })}
      </div>
    </div>
  );
};

export default TeamPage;
