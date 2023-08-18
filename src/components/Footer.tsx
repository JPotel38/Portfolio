import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";

export default function MyFooter() {

    return (
        <Container>
            <Row>
                <Col span={4}>
                    <address>
                        <a href="mailto:potel.jeremy@gmail.com">potel.jeremy@gmail.com</a>
                    </address>
                </Col>
                <Col span={4}>
                    <p>+33782736832</p>
                </Col>
                <Col span={12}>
                    <a href="https://github.com/JPotel38" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a href="https://www.linkedin.com/in/jérémy-potel/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}


