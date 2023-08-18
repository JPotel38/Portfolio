import React from 'react'
import {Col, Container, Row} from "react-bootstrap";

export default function Pokedex() {

    return (
        <Container>
            <Row>
                <Col span={12}>
                    <h1>Pokedex</h1>
                </Col>
                <Col span={3} offset={3}>
                    <a href="https://github.com/JPotel38/pokedex" target="_blank" rel="noopener noreferrer"
                       style={{color: '#92D050', fontSize: "50px"}}>
                        <i className="fa-brands fa-github"/> </a>
                </Col>
            </Row>
            <Row>
                <Col offset={2} xs={22} sm={22} md={7}>
                    <p>Projet front-end Angular pour pratiquer tout les principes fondamentaux du framework :
                        resolvers, services, guards, interceptors, pipes, tests etc...</p>
                </Col>
            </Row>
        </Container>
    )
}
