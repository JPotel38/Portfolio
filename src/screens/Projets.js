import React from 'react'
import {Card, Col, Layout, Row, Typography} from 'antd';
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Sider from './Nav';
import masques from '../images/Masques.png'
import morningnews from '../images/Morningnews.png'
import mymoviz from '../images/Mymoviz.PNG'
import tickettac from '../images/Ticketac.PNG'
import weatherapp from '../images/Weatherapp.PNG'
import bikeshop from '../images/Bikeshop.PNG'
import blackboard from '../images/BlackBoard.PNG'

const {Content} = Layout;
const {Title} = Typography;
const {Meta} = Card;

export default function Projets() {

    return (
        <Layout>
            <Sider/>
            <Content>
                <Row>
                    <Col span={24}>
                        <Title>Projets</Title>
                    </Col>
                </Row>
                <Row gutter={[16, 24]}>
                    <Col span={12}>
                        <Fade left>
                            <Link to="/masques">
                                <Card
                                    hoverable
                                    style={{width: "100%", height: "100%"}}
                                    cover={<img alt="Masques.org Jérémy Potel" src={masques}/>}
                                >
                                    <Meta style={{fontSize: "20px"}} title="Masques.org"
                                          description=" Masques.org est le projet final du bootcamp La Capsule."/>
                                </Card>
                            </Link>
                        </Fade>
                    </Col>
                    <Col span={12}>
                        <Fade right>
                            <Link to="/morningnews">
                                <Card
                                    hoverable
                                    style={{width: "100%", height: "100%"}}
                                    cover={<img alt="Morningnews Jérémy Potel" src={morningnews}/>}
                                >
                                    <Meta style={{fontSize: "20px"}} title="MorningNews"
                                          description="MorningNews fait appel à une API pour obtenir les nouvelles du monde entier."/>
                                </Card>
                            </Link>
                        </Fade>
                    </Col>
                    <Col span={12}>
                        <Fade left>
                            <Link to="/blackboard">
                                <Card
                                    hoverable
                                    style={{width: "100%", height: "100%"}}
                                    cover={<img alt="BlackBoard Jérémy Potel" src={blackboard}/>}
                                >
                                    <Meta style={{fontSize: "20px"}} title="BlackBoard"
                                          description="BlackBoard est l'outil idéal pour réaliser des Dataviz !"/>
                                </Card>
                            </Link>
                        </Fade>
                    </Col>
                    <Col span={12}>
                        <Fade right>
                            <Link to="/mymoviz">
                                <Card
                                    hoverable
                                    style={{width: "100%", height: "100%"}}
                                    cover={<img alt="Mymoviz Jérémy Potel" src={mymoviz}/>}
                                >
                                    <Meta style={{fontSize: "20px"}} title="MyMoviz"
                                          description="My Moviz permet de voir les dernières sorties ainsi que noter et enregistre les films."/>
                                </Card>
                            </Link>
                        </Fade>
                    </Col>
                    <Col span={12}>
                        <Fade left>
                            <Link to="/ticketac">
                                <Card
                                    hoverable
                                    style={{width: "100%", height: "100%"}}
                                    cover={<img alt="Ticketac Jérémy Potel" src={tickettac}/>}
                                >
                                    <Meta style={{fontSize: "20px"}} title="Ticketac"
                                          description="Ticketac est le projet réalisé dans le terme d'un hackathon, en duo sur trois jours."/>
                                </Card>
                            </Link>
                        </Fade>
                    </Col>
                    <Col span={12}>
                        <Fade right>
                            <Link to="/bikeshop">
                                <Card
                                    hoverable
                                    style={{width: "100%", height: "100%"}}
                                    cover={<img alt="Bikeshop Jérémy Potel" src={bikeshop}/>}
                                >
                                    <Meta style={{fontSize: "20px"}} title="Bike Shop"
                                          description="Bike Shop a été le premier projet réalisé à La Capsule."/>
                                </Card>
                            </Link>
                        </Fade>
                    </Col>
                    <Col span={12}>
                        <Fade left>
                            <Link to="/weatherapp">
                                <Card
                                    hoverable
                                    style={{width: "100%", height: "100%"}}
                                    cover={<img alt="Weatherapp Jérémy Potel" src={weatherapp}/>}
                                >
                                    <Meta style={{fontSize: "20px"}} title="Weatherapp"
                                          description="Weather App permet de connaître la température d'une ville en temps réel. "/>
                                </Card>
                            </Link>
                        </Fade>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}