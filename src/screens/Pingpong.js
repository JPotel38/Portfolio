import React, {useEffect, useState} from 'react';
import {Col, Layout, Modal, Row, Typography} from 'antd';
import Nav from './Nav';
import {Circle, Layer, Stage} from 'react-konva';
import '../App.css';

const {Title, Text} = Typography;
const {Content} = Layout;

export default function Pingpong() {

    const [ball, setBall] = useState(null);
    const [scoreUn, setScoreUn] = useState(0);
    const [scoreDeux, setScoreDeux] = useState(0);
    useEffect(() => {
        if (ball === 1 || ball === 2) {
            setScoreDeux(scoreDeux + 1);
        } else if (ball === 7 || ball === 8) {
            setScoreUn(scoreUn + 1);
        }
        if (scoreUn === 11) {
            Modal.success({
                content: 'Joueur 1 gagne ! '
            });
            setScoreUn(0);
            setScoreDeux(0);
            setBall(null);
        } else if (scoreDeux === 11) {
            Modal.success({
                content: 'Joueur 2 gagne ! '
            });
            setScoreUn(0);
            setScoreDeux(0);
            setBall(null)
        }
    }, [ball]);

    function number(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let ballPosUn;
    let ballPosDeux;
    let ballPosTrois;
    let ballPosQuatre;
    let ballPosCinq;
    let ballPosSix;
    let ballPosSept;
    let ballPosHuit;


    switch (ball) {
        case 1:
            ballPosUn =
                <Stage width={105} height={100}><Layer><Circle x={40} y={50} radius={10} stroke="black" fill="yellow"/></Layer></Stage>;
            break;
        case 2:
            ballPosDeux = <Stage width={80} height={80}><Layer><Circle x={40} y={50} radius={10} stroke="black"
                                                                       fill="yellow"/></Layer></Stage>;
            break;
        case 3:
            ballPosTrois =
                <Stage width={450} height={100}><Layer><Circle x={50} y={50} radius={10} stroke="black" fill="yellow"/></Layer></Stage>;
            break;
        case 4:
            ballPosQuatre = <Stage width={450} height={80}><Layer><Circle x={50} y={50} radius={10} stroke="black"
                                                                          fill="yellow"/></Layer></Stage>;
            break;
        case 5:
            ballPosCinq =
                <Stage width={450} height={100}><Layer><Circle x={50} y={50} radius={10} stroke="black" fill="yellow"/></Layer></Stage>;
            break;
        case 6:
            ballPosSix = <Stage width={450} height={80}><Layer><Circle x={50} y={50} radius={10} stroke="black"
                                                                       fill="yellow"/></Layer></Stage>;
            break;
        case 7:
            ballPosSept =
                <Stage width={105} height={100}><Layer><Circle x={50} y={50} radius={10} stroke="black" fill="yellow"/></Layer></Stage>;
            break;
        case 8:
            ballPosHuit = <Stage width={105} height={80}><Layer><Circle x={50} y={50} radius={10} stroke="black"
                                                                        fill="yellow"/></Layer></Stage>;
            break;
        default:
            console.log('default');
            break;
    }
    return (

        <Layout style={{height: "100vh"}}>
            <Nav/>
                <Content>
                        <Row>
                            <Col span={24}>
                                <Title>Ping Pong</Title>
                                <Title level={2}>Le premier joueur arrivé à 11 points gagne !</Title>
                                <Title level={4}>Règles : pour commencer, appuyez sur un espace blanc, puis sur la balle
                                    pour la renvoyer.</Title>
                            </Col>
                        </Row>
                        <Row gutter={[8, 8]} style={{height: 200}}>
                            <Col key={1} span={2} offset={1}
                                 style={{backgroundColor: "white", border: '1px solid black'}} onClick={() => {
                                if (ball == null || ball === 1) {
                                    setBall(number(5, 8))
                                }
                            }}>
                                {ballPosUn}
                            </Col>
                            <Col key={3} span={9} style={{backgroundColor: "blue", border: '1px solid black'}}
                                 onClick={() => {
                                     if (ball === 3) {
                                         setBall(number(5, 8))
                                     }
                                 }}>
                                {ballPosTrois}
                            </Col>
                            <Col key={5} span={9} style={{backgroundColor: "blue", border: '1px solid black'}}
                                 onClick={() => {
                                     if (ball === 5) {
                                         setBall(number(1, 4))
                                     }
                                 }}>
                                {ballPosCinq}
                            </Col>
                            <Col key={7} span={2} style={{backgroundColor: "white", border: '1px solid black'}}
                                 onClick={() => {
                                     if (ball == null || ball === 7) {
                                         setBall(number(1, 4))
                                     }
                                 }}>
                                {ballPosSept}
                            </Col>
                        </Row>
                        <Row gutter={[8, 8]} style={{height: 200}}>
                            <Col key={2} span={2} offset={1}
                                 style={{backgroundColor: "white", border: '1px solid black'}} onClick={() => {
                                if (ball == null || ball === 2) {
                                    setBall(number(5, 8))
                                }
                            }}>
                                {ballPosDeux}
                            </Col>
                            <Col key={4} span={9} style={{backgroundColor: "blue", border: '1px solid black'}}
                                 onClick={() => {
                                     if (ball === 4) {
                                         setBall(number(5, 8))
                                     }
                                 }}>
                                {ballPosQuatre}
                            </Col>
                            <Col key={6} span={9} style={{backgroundColor: "blue", border: '1px solid black'}}
                                 onClick={() => {
                                     if (ball === 6) {
                                         setBall(number(1, 4))
                                     }
                                 }}>
                                {ballPosSix}
                            </Col>
                            <Col key={8} span={2} style={{backgroundColor: "white", border: '1px solid black'}}
                                 onClick={() => {
                                     if (ball == null || ball === 8) {
                                         setBall(number(1, 4))
                                     }
                                 }}>
                                {ballPosHuit}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={11} offset={1}>
                                <Text>Score Joueur Un : {scoreUn}</Text>
                            </Col>
                            <Col span={11} offset={1}>
                                <Text>Score Joueur Deux : {scoreDeux}</Text>
                            </Col>
                        </Row>
                </Content>
        </Layout>
    )
}