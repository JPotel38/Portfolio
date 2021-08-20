import React, {useEffect, useState} from 'react'
import {Col, Collapse, Row, Typography, Layout} from 'antd';
import photo from '../images/photo.jpg';
import Flash from 'react-reveal/Flash';
import Skills from "./Skills";
import Projets from "./Projets";
import Pro from "./Pro";
import Education from "./Education";
import Perso from "./Perso";
import MyFooter from "./Footer";

const {Title} = Typography;
const {Panel} = Collapse;

export default function Home() {
    const [prez, setPrez] = useState('');

    useEffect(() => {
        let i = 0;
        setPrez('Développeur web Fullstack');
        let txt;
        if (i < prez.length) {
            txt += prez.charAt(i);
            i++;
            setTimeout(50);
        }
    }, [])

    return (
        <Layout>
            <Row>
                <Col offset={10} span={4}>
                    <Flash>
                        <img id='picture' src={photo} alt='Jérémy Potel'/>
                    </Flash>
                </Col>
            </Row>
            <Row style={{textAlign: 'center'}}>
                <Col offset={9} span={4}>
                    <Title level={3}> Jérémy Potel</Title>
                    <Title level={4}>Développeur web Fullstack</Title>
                </Col>
            </Row>
            <Skills/>
            <Projets/>
            <Pro/>
            <Education/>
            <Collapse>
                <Panel header="About Me" key="1">
                    <Perso/>
                </Panel>
            </Collapse>
            <MyFooter/>
        </Layout>
    )
}