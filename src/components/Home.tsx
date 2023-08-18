import React from 'react'
import Typewriter from "typewriter-effect";
import Contact from "./Contact";
import {Col, Container, Row} from "react-bootstrap";

export default function Home() {
    return (
        <Container>
            <Row>
                <Col offset={6} span={10}>
                    <h1>
                        <Typewriter
                            options={{
                                cursor: ' '
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('Salut, je suis Jérémy Potel !')
                                    .start()
                            }}
                        />
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col offset={4} span={14}>
                    <h2>
                        <Typewriter
                            options={{
                                cursor: ' '
                            }}
                            onInit={(typewriter) => {
                                typewriter.pauseFor(3500)
                                    .typeString('Développeur front-end')
                                    .start();
                            }}
                        />
                    </h2>
                </Col>
            </Row>
            <Contact/>
        </Container>
    )
}
