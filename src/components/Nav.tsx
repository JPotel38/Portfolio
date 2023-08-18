import React from 'react'
import {HashLink} from "react-router-hash-link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Nav() {
    return (
        <Navbar expand="lg" >
            <Container>
                <Navbar.Brand key="0"><HashLink smooth to='/'>Home</HashLink>
                </Navbar.Brand>
                <Navbar.Brand key="2"><HashLink smooth to='/portfolio'>Portfolio</HashLink>
                </Navbar.Brand>
                <Navbar.Brand key="3"><HashLink smooth to='/experience'>Experience</HashLink>
                </Navbar.Brand>
                <Navbar.Brand key="4"><HashLink smooth to='/about'>À propos</HashLink>
                </Navbar.Brand>
                <Navbar.Brand key="5">
                    <a href="https://github.com/JPotel38" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </Navbar.Brand>
                <Navbar.Brand key="6">
                    <a href="https://www.linkedin.com/in/jérémy-potel/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
