import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export default function Contact() {

    return (
        <Container>
            <Row>
                <Col offset={1} span={12}>
                    <address>
                        <a href="mailto:potel.jeremy@gmail.com">potel.jeremy@gmail.com</a>
                    </address>
                    <p>+33782736832</p>
                </Col>
            </Row>
        </Container>
    );
};
