import HomePage from "@/Components/HomePage/HomePage";
import NavbarContainer from "@/Components/NavbarContainer/NavbarContainer";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        {/* SEO de base */}
        <title>Stage Musical Du Lot - Bienveillance et Créativité</title>
        <meta
          name="description"
          content="Rejoignez le Stage Musical du Lot, un événement unique autour des musiques improvisées. Explorez votre créativité dans un cadre bienveillant. Hâte de vous y voir !"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />

        {/* Open Graph pour le partage sur les réseaux sociaux */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Stage Musical Du Lot" />
        <meta
          property="og:description"
          content="Participez au Stage Musical du Lot, un moment dédié à l'exploration musicale improvisée, centré sur la bienveillance et la créativité."
        />
        <meta
          property="og:image"
          content="https://stagemusicaldulot.fr/assets/images/stage.png"
        />
        <meta property="og:url" content="https://stagemusicaldulot.fr" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Stage Musical Du Lot" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stage Musical Du Lot" />
        <meta
          name="twitter:description"
          content="Découvrez le Stage Musical du Lot, un moment privilégié pour apprendre, partager et créer dans une ambiance bienveillante."
        />
        <meta
          name="twitter:image"
          content="https://stagemusicaldulot.fr/assets/images/stage.png"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarContainer />

      <main className={`${styles.main} ${inter.variable}`}>
        <HomePage />
      </main>
    </>
  );
}
