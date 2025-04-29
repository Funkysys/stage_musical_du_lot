import { DataContext } from "@/utils/dataContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useContext, useEffect, useRef, useState } from "react";
import styles from "./DetailsPage.module.css";

gsap.registerPlugin(ScrollTrigger);

const DetailsPage = () => {
  const { data, title } = useContext(DataContext);
  const [toggle, setToggle] = useState(false);
  const [content, setContent] = useState([data[0]]);
  const containerRef = useRef();
  const titleRef1 = useRef();
  const titleRef2 = useRef();
  const pRef1 = useRef();
  const pRef2 = useRef();
  const descrRef = useRef();
  const linkRef = useRef();

  const [background, setBackground] = useState("#bce7ff");


  useEffect(() => {
    if (title === "august") {
      setBackground("#CEFFBC");
    } else if (title === "july") {
      setBackground("#bce7ff");
    } else {
      setBackground("#fde1bf");
    }
    if (data.length > 0) {
      setContent(data[0]);
    }
  }, [title]);

  const handleOnClick = (el) => {
    setContent(el);
    setToggle(!toggle);
    if (toggle) {
      gsap.to(descrRef.current, { display: "block", opacity: "1" });
      gsap.to(linkRef.current, { display: "block", opacity: "1" });
    } else {
      gsap.to(descrRef.current, { display: "none", opacity: "1" });
      gsap.to(linkRef.current, { display: "none", opacity: "1" });
    }
  };
  useEffect(() => {
    gsap.to(containerRef.current, {
      background: background,
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
    gsap.to(titleRef1.current, {
      opacity: "1",
      right: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
    gsap.to(titleRef2.current, {
      opacity: "1",
      right: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
    gsap.to(pRef1.current, {
      opacity: "1",
      right: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
    gsap.to(pRef2.current, {
      opacity: "1",
      right: "0",
      duration: "1.2",
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
  }, [background]);

  return (
    <div ref={containerRef} className={styles.container}>
      <h2 ref={titleRef1} className={styles.titleDetails}>
        Détails des différents modules
      </h2>
      <div ref={pRef1} className={styles.pDetailsContainer}>
        <div className={styles.pButtonsContainer}>
          {data.map((el) => {
            return (
              <button
                key={el.id}
                className={styles.button}
                onClick={() => handleOnClick(el)}
              >
                <p>{el.button.toUpperCase()}</p>
              </button>
            );
          })}
        </div>
        {content && (
          <div className={styles.content}>
            <p>{content.title}</p>
            <p>{content.content}</p>
            {content.links && (
              <div className={styles.links}>
                <p
                  className={styles.linksCategories}
                >{`Le programme arrive bientôt.`}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <h2 ref={titleRef2} className={styles.titleDetails}>
        Coaching de groupe
      </h2>
      <p
        ref={pRef2}
        className={styles.paragraph}
      >{`Un coaching de groupe peut être envisagé en dehors du stage sur demande.`}</p>
    </div>
  );
};

export default DetailsPage;
