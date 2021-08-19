import React from 'react'
import {Col, Collapse, Layout, Row, Typography} from 'antd';
import photo from '../images/photo.jpg';
import Flash from 'react-reveal/Flash';
import Skills from "./Skills";
import Projet from "./Projets";
import Pro from "./Pro";
import Education from "./Education";
import Perso from "./Perso";
import MyFooter from "./Footer";

const {Title} = Typography;
const {Content} = Layout;
const { Panel } = Collapse;

export default function Home() {

    return (
        <Layout>
            <Content>
                <Row>
                    <Col offset={10} span={4}>
                        <Flash>
                            <img id='picture' src={photo} alt='Jérémy Potel'/>
                        </Flash>
                    </Col>
                </Row>
                <Row>
                    <Col offset={10} span={4}>
                        <Title level={3}> Jérémy Potel</Title>
                        <Title level={4}>Développeur web Fullstack junior</Title>
                    </Col>
                </Row>
                <Row id='presentation'>
                    <Col span={16} offset={4}>
                        <p>Gravitant dans l'univers du développement informatique depuis 2019 à
                            travers l'apprentissage du COBOL,
                            je viens d'achever une alternance avec
                            <a href="http://www.school-by-hiit.fr/"> School By Hi!t</a>, chez <a
                                href="https://www.energy-pool.eu/fr/">Energy Pool</a> en tant que
                            développeur
                            fullstack <strong>Java</strong>/ <strong>Angular</strong>, après mon passage
                            à <a
                                href="https://www.lacapsule.academy/fr/">La Capsule Academy</a> en 2020.</p>
                    </Col>
                </Row>
                <Skills/>
                <Projet/>
                <Pro/>
                <Education/>
                <Collapse>
                    <Panel header="About Me" key="1">
                        <Perso/>
                    </Panel>
                </Collapse>
            <MyFooter/>
            </Content>
        </Layout>
    )
}