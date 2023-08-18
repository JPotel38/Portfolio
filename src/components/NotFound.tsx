import React from 'react'
import {Col, Container, Row} from "react-bootstrap";

export default function NotFound() {

    return (
        <Container>
            <Row>
                <Col span={24}>
                    <h1>Not found :(</h1>
                </Col>
            </Row>
        </Container>
    )
}
