import React from 'react'
import {Col, Layout, Row, Typography} from 'antd';
import Typewriter from "typewriter-effect";
import Contact from "./Contact";

const {Title} = Typography;

export default function Home() {
    return (
        <Layout>
            <Row>
                <Col offset={6} span={10}>
                    <Title>
                        <Typewriter
                            options={{
                                cursor: ' '
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('Salut, je suis Jérémy Potel !')
                                    .start()
                            }}
                        />
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col offset={4} span={14}>
                    <Title level={2}>
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
                    </Title>
                </Col>
            </Row>
            <Contact/>
        </Layout>
    )
}
