import { Navbar, Nav } from 'react-bootstrap';
import Image from 'next/image';
import styles from "./NavbarContainer.module.css"

const NavbarContainer = () => {
    return (
        <nav className={styles.navBarContainer}>
            <Navbar
                variant="dark"
                fixed='top'
                expand="lg"
                className='p-0'
                style={{ "background": 'rgba(0, 0, 0, 0.8)' }}
            >
                <div className={styles.logoToggle}>
                    <div className={styles.toggleButton}>
                        <Navbar.Toggle
                            aria-controls="responsive-navbar-nav "
                        />
                    </div>
                    <Navbar.Brand href="#home" className='p-0'>
                        <Image
                            alt=""
                            src="/assets/images/logo-asso.png"
                            width="120"
                            height="90"
                        /></Navbar.Brand>
                </div>
                <div className={styles.nav}>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <div className={styles.subNav}>
                                <Nav.Link href="#presentation" className='mx-5'>Présentation</Nav.Link>
                                <Nav.Link eventKey="3" href="/#programme" className='mx-5'>Programme</Nav.Link>
                                <Navbar.Brand href="#home"  className={styles.aHome}>
                                    <Image
                                        alt=""
                                        src="/assets/images/logo-asso.png"
                                        width="120"
                                        height="90"
                                    /></Navbar.Brand>
                                <Nav.Link eventKey="4" href="#equipe" className='mx-5'>Equipe Pédagogique</Nav.Link>
                                <Nav.Link href="#informations">Informations</Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar >
        </nav >
    )
}

export default NavbarContainer