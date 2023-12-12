import { useState } from 'react'
import styles from './Footer.module.css'
const Legal = () => {
    const [toggle, setToggle] = useState()
    const handleOnClick = () => {
        setToggle(!toggle)
    }
    return (
        toggle ?
        <>
            <div className={styles.legalContainer}>
            <button className={styles.closeButton} onClick={handleOnClick}>X</button>
                <div className={styles.mentions}>
                    <p className='mb-2 fs-5'>{`Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez, sans réserves, les présentes modalités.`}</p>
                    <p className='mb-4 fs-5'>{`Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, les responsables du présent site internet www.lestagemusicaldulot.fr sont :`}</p>
                    <p className='mb-2 fs-4'>{`Éditeur du Site : `}</p>
                    <p className='mb-2 fs-5'>{`ASSOCIATION IN EXTREMIS`}</p>
                    <p className='mb-2 fs-5'>{`Responsable éditorial : Antoine Delbos`}</p>
                    <p className='mb-2 fs-5'>{`5 rue Saint Laurent 77400 Lagny Sur Marne`}</p>
                    <p className='mb-2 fs-5'>{`Email : lestagemusicaldulot@gmail.com`}</p>
                    <p className='mb-4 fs-5'>{`Site Web : en cours`}</p>
                    <p className='mb-2 fs-4'>{`Hébergement :`}</p>
                    <p className='mb-2 fs-5'>{`Hébergeur : Hostinger`}</p>
                    <p className='mb-4 fs-5'>{`Site Web : www.hostinger.fr`}</p>
                    <p className='mb-2 fs-4'>{`Développement : `}</p>
                    <p className='mb-4 fs-5'>{`Antoine Delbos`}</p>
                    <p className='mb-2 fs-4'>{`Conditions d’utilisation : `}</p>
                    <p className='mb-2 fs-5'>{`Ce site est proposé en différents langages web (HTML, Javascript, CSS) pour un meilleur confort d’utilisation et un graphisme plus agréable.`}</p>
                    <p className='mb-2 fs-5'>{`Nous vous recommandons de recourir à des navigateurs modernes comme Safari, Firefox, Google Chrome, etc…`}</p>
                    <p className='mb-2 fs-5'>{`Le développeur met en œuvre tous les moyens dont il dispose, pour assurer une information fiable et une mise à jour fiable de ses sites internet.`}</p>
                    <p className='mb-2 fs-5'>{`Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations auprès de l'entreprise , et signaler toutes modifications du site qu’il jugerait utile. l'entreprise n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.`}</p>
                    <p className='mb-2 fs-5'><span className='fs-4'>Cookies : </span>{`Le présent site n'utilise pas de cookies.`}</p>
                </div>
            </div>
        </>
        :
        <button className={styles.contactButton} onClick={handleOnClick}>Mentions Légales</button>
    )
}

export default Legal