import React from 'react'
import {Col, Collapse, Layout, Row, Typography} from 'antd';
import Skills from "./Skills";
import Projets from "./Projets";
import Pro from "./Pro";
import Education from "./Education";
import Perso from "./Perso";
import Typewriter from "typewriter-effect";
import Contact from "./Contact";

const {Title} = Typography;
const {Panel} = Collapse;

export default function Home() {
    return (
        <Layout>
            <Row style={{textAlign: 'center'}}>
                <Col offset={6} span={10}>
                    <Title>
                        <Typewriter
                            options={{
                                cursor: ' '
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('Jérémy Potel')
                                    .start()
                            }}
                        />
                    </Title>
                </Col>
            </Row>
            <Row style={{textAlign: 'center'}}>
                <Col offset={4} span={14}>
                    <Title level={2}>
                        <Typewriter
                            options={{
                                cursor: ' '
                            }}
                            onInit={(typewriter) => {
                                typewriter.pauseFor(2500)
                                    .typeString('Développeur full stack')
                                    .start();
                            }}
                        />
                    </Title>
                </Col>
            </Row>
            <Skills/>
            <Projets/>
            <Pro/>
            <Education/>
            <Collapse>
                <Panel header="A propos" key="1" id="perso">
                    <Perso/>
                </Panel>
            </Collapse>
            <Contact/>
        </Layout>
    )
}
