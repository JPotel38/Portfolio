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
import {FormattedMessage} from "react-intl";

const {Title} = Typography;
const {Panel} = Collapse;

export default function Home() {
    return (
        <Layout>
            <Row>
                <Col offset={10} xs={12} sm={12} md={4}>
                    <Flash>
                        <img id='picture' src={photo} alt='Jérémy Potel'/>
                    </Flash>
                </Col>
            </Row>
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
                                    .typeString('Front-end developer')
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
                <Panel key="1" id="perso" header={
                    <FormattedMessage
                        id="Home.about"
                        defaultMessage="A propos"
                    />
                }>
                    <Perso/>
                </Panel>
            </Collapse>
            <Contact/>
        </Layout>
    )
}