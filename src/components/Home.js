import React from 'react'
import {Col, Collapse, Layout, Row, Typography} from 'antd';
import photo from '../images/photo.jpg';
import Flash from 'react-reveal/Flash';
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
            <Row>
                <Col offset={11} span={4}>
                    <Flash>
                        <img id='picture' src={photo} alt='Jérémy Potel'/>
                    </Flash>
                </Col>
            </Row>
            <Row style={{textAlign: 'center'}}>
                <Col offset={9} span={4}>
                    <Title level={3}>
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
                <Col offset={8} span={6}>
                    <Title level={4}>
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
                <Panel header="About Me" key="1" id="perso">
                    <Perso/>
                </Panel>
            </Collapse>
            <Contact/>
        </Layout>
    )
}