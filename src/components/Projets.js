import React from 'react'
import {Card, Col, Row, Typography} from 'antd';
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import masques from '../images/Masques.png'
import morningnews from '../images/Morningnews.png'
import mymoviz from '../images/Mymoviz.PNG'
import tickettac from '../images/Ticketac.PNG'
import weatherapp from '../images/Weatherapp.PNG'
import bikeshop from '../images/Bikeshop.PNG'
import blackboard from '../images/BlackBoard.PNG'
import pokedex from '../images/Pokedex.png'
import WimgmHome from '../images/WimgmHome.png'
import SBHlogo from '../images/SBHlogo.png'

const {Title} = Typography;
const {Meta} = Card;

export default function Projets() {

    return (
        <div id="projets">
            <Row>
                <Col offset={1} span={21}>
                    <Title level={2}>Projets</Title>
                </Col>
            </Row>
            <Row gutter={[8, 40]}>
                <Col span={6} offset={2}>
                    <Fade left>
                        <Link to="/FilRouge">
                            <Card
                                hoverable
                                cover={<img alt="SchoolByHiit Logo Jérémy Potel" src={SBHlogo}/>}
                            >
                                <Meta title="Projet final School By Hiit"/>
                            </Card>
                        </Link>
                    </Fade>
                </Col>
                <Col span={6}>
                    <Fade top>
                        <Link to="/masques">
                            <Card
                                hoverable
                                cover={<img alt="Masques.org Jérémy Potel" src={masques}/>}
                            >
                                <Meta title="Masques.org"/>
                            </Card>
                        </Link>
                    </Fade>
                </Col>
                <Col span={6}>
                    <Fade right>
                        <Link to="/morningnews">
                            <Card
                                hoverable
                                cover={<img alt="Morningnews Jérémy Potel" src={morningnews}/>}
                            >
                                <Meta title="MorningNews"/>
                            </Card>
                        </Link>
                    </Fade>
                </Col>
                <Col span={6} offset={2}>
                    <Fade right>
                        <Link to="/blackboard">
                            <Card
                                hoverable
                                cover={<img alt="BlackBoard Jérémy Potel" src={blackboard}/>}
                            >
                                <Meta title="BlackBoard"/>
                            </Card>
                        </Link>
                    </Fade>
                </Col>
                <Col span={6}>
                    <Fade left>
                        <Link to="/mymoviz">
                            <Card
                                hoverable
                                cover={<img alt="Mymoviz Jérémy Potel" src={mymoviz}/>}
                            >
                                <Meta title="MyMoviz"/>
                            </Card>
                        </Link>
                    </Fade>
                </Col>
                <Col span={6}>
                    <Fade bottom>
                        <Link to="/ticketac">
                            <Card
                                hoverable
                                cover={<img alt="Ticketac Jérémy Potel" src={tickettac}/>}
                            >
                                <Meta title="Ticketac"/>
                            </Card>
                        </Link>
                    </Fade>
                </Col>
                <Col offset={2} span={8}>
                    <Fade right>
                        <Link to="/bikeshop">
                            <Card
                                hoverable
                                cover={<img alt="Bikeshop Jérémy Potel" src={bikeshop}/>}
                            >
                                <Meta title="Bike Shop"/>
                            </Card>
                        </Link>
                    </Fade>
                </Col>
                <Col span={8}>
                    <Fade left>
                        <Link to="/weatherapp">
                            <Card
                                hoverable
                                cover={<img alt="Weatherapp Jérémy Potel" src={weatherapp}/>}
                            >
                                <Meta title="Weatherapp"/>
                            </Card>
                        </Link>
                    </Fade>
                </Col>
            </Row>
            <Row>
                <Title level={4}>Projets en cours</Title>
            </Row>
            <Row>
                <Col offset={4} span={8}>
                    <Fade left>
                        <Link to="/pokedex">
                            <Card
                                hoverable
                                cover={<img alt="Pokedex Jérémy Potel" src={pokedex}/>}
                            >
                                <Meta title="Pokedex"/>
                            </Card>
                        </Link>
                    </Fade>
                </Col>
                <Col span={8}>
                    <Fade right>
                        <Link to="/rpg">
                            <Card
                                hoverable
                                cover={<img alt="WhereIsMyGM Jérémy Potel" src={WimgmHome}/>}
                            >
                                <Meta title="WhereIsMyGM"/>
                            </Card>
                        </Link>
                    </Fade>
                </Col>
            </Row>
        </div>
    )
}