import React from 'react'
import {Button, Col, Layout, Row, Typography} from 'antd';
import {Link} from 'react-router-dom';
import {FrownOutlined} from '@ant-design/icons';
import Nav from './Nav';
import apple from '../images/apple.png';
import golf from '../images/golf.png'

const {Content} = Layout;
const {Title} = Typography;

export default function Game() {

    return (
        <Layout>
            <Content>
                <Row>
                    <Col span={24}>
                        <Title>Game Zone</Title>
                        <Title level={3}>Plus de surprises à venir...</Title>
                    </Col>
                </Row>
                <Row>
                    <Col xs={0} sm={0} md={11} lg={11} xl={11}>
                        <Button className="gameButton" shape="round" target="_blank">
                            <a href="../../public/snake/snake.html"><img src={apple}
                                                                          alt="Apple"/> Snake</a></Button>
                        <p className="gameText">Snake est un jeu originellement paru en 1976, puis remis au
                            gût du jour en 1998 grâce aux Nokia, dans lesquels il était préinstallé.</p>
                    </Col>
                    <Col xs={24} sm={24} md={11} lg={11} xl={11} offset={1}>
                        <Button className="gameButton" shape="round" target="_blank"><Link
                            to="/pendu"><FrownOutlined style={{color: "yellow", fontSize: 30}}/> Pendu</Link></Button>
                        <p className="gameText">Les origines du jeu du pendu sont inconnues, mais une
                            variante a été découverte dès 1894.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={0} sm={0} md={11} lg={11} xl={11}>
                        <Button className="gameButton" shape="round" target="_blank"><Link to="/pingpong">
                            <img src={golf} alt="Golf"/>Pingpong</Link></Button>
                        <p className="gameText"> Ce sport d'origine britannique est pratiqué par des millions
                            de personnes dans le monde. Saurez-vous vaincre votre adversaire ?</p>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}