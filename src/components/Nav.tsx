import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.scss';

export default function Nav() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href={'/'} className={'current-navbar-brand'}>Home</Navbar.Brand>
                <Navbar.Brand href={'portfolio'}>Portfolio
                </Navbar.Brand>
                <Navbar.Brand href={'experience'}>Experience
                </Navbar.Brand>
                <Navbar.Brand href={'about'}>À propos </Navbar.Brand>
                <Navbar.Brand href="https://github.com/JPotel38" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub}/>
                </Navbar.Brand>
                <Navbar.Brand href="https://www.linkedin.com/in/jérémy-potel/" target="_blank"
                              rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </Navbar.Brand>
                <Navbar.Brand href="https://www.instagram.com/alvar.aotearoa/" target="_blank"
                              rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram}/>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
