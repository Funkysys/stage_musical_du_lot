import Head from 'next/head'
import Image from 'next/image'
import NavbarContainer from '@/Components/NavbarContainer/NavbarContainer'
import HomePage from '@/Components/HomePage/HomePage'
import { Inter } from "next/font/google"
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Stage Musical Du Lot</title>
        <meta name="description" content="Bienvenue dans un stage autour des musiques improvisés centré sur la bienveillance et la créativité. hâte de vous y voir !" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarContainer />
      <main className={styles.main}>
        <HomePage />
      </main>
    </>
  )
}
