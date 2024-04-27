'use client'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import styles from './HomePage.module.css'
import WelcomePage from '../SummerStage/WelcomePage/WelcomePage'
import PresentationPage from '../SummerStage/PresentationContainer/PresentationContainer'
import ProgrammePage from '../SummerStage/ProgrammePage/ProgammePage'
import DetailsPage from '../SummerStage/DetailsPage/DetailsPage'
import TeamPage from '../SummerStage/TeamPage/TeamPage'
import InformationsPage from '../SummerStage/InformationsPage/InformationsPage'
import Footer from '../SummerStage/Footer/Footer'
import summerDatas from '@/datas/detailsDatas'
import winterDatas from '@/datas/detailsWinterDatas'
import NavbarContainer from '../NavbarContainer/NavbarContainer'

const HomePage = () => {
    const [summer, setSummer] = useState(true)
    return (
        <div className={styles.container} >
            <NavbarContainer>
                <Button
                    id='1'
                    name='Summer'
                    type='checkbox'
                    variant={summer ? "primary" : "warning"}
                    value={summer ? "summer" : "winter"}
                    onClick={() => setSummer(!summer)}
                >
                    {summer ? "☀️ Été" : "❄️ Hiver"}
                </Button>
            </NavbarContainer>
            <WelcomePage summer={summer} />
            <PresentationPage summer={summer} />
            <ProgrammePage summer={summer} />
            {summer &&
                <DetailsPage summer={summer} datas={summerDatas} />
            }
            {
                !summer && <DetailsPage summer={summer} datas={winterDatas} />
            }
            <TeamPage summer={summer} />
            <InformationsPage summer={summer} />
            <Footer />
        </div>
    )
}

export default HomePage