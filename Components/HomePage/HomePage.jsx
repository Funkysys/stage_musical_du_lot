import React, { useLayoutEffect, useRef } from 'react'
import styles from './HomePage.module.css'
import gsap from 'gsap'
import WelcomePage from '../WelcomePage/WelcomePage'
import PresentationPage from '../PresentationContainer/PresentationContainer'
import ProgrammePage from '../ProgrammePage/ProgammePage'
import DetailsPage from '../DetailsPage/DetailsPage'
import TeamPage from '../TeamPage/TeamPage'
import InformationsPage from '../InformationsPage/InformationsPage'
import Footer from '../Footer/Footer'

const HomePage = () => {
    
    return (
        <div className={styles.container}>
            <WelcomePage />
            <PresentationPage />
            <ProgrammePage />
            <DetailsPage />
            <TeamPage />
            <InformationsPage />
            <Footer />
        </div>
    )
}

export default HomePage