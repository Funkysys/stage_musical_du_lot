import Link from "next/link";
import ContactModal from "./ContactModale";
import styles from "./Footer.module.css";
import Legal from "./Legal";
const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <ContactModal />
      <Link href="https://in-extremis-formation.fr">
        <button className={styles.inExtremisLink}>In Extremis Formation</button>
      </Link>
      <Legal />
    </div>
  );
};

export default Footer;
