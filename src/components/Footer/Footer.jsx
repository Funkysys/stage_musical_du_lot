import React from "react";
import ContactModal from "./ContactModale";
import styles from "./Footer.module.css";
import Legal from "./Legal";
const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <ContactModal />
      <Legal />
    </div>
  );
};

export default Footer;
