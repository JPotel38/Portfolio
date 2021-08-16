import React from 'react'
import {Col, Layout, Row, Typography} from 'antd';
import Nav from './Nav'

const {Content} = Layout;
const {Title, Text} = Typography;


export default function Perso() {
    return (
        <Layout style={{height: "100vh"}}>
            <Nav/>
            <Content>
                <Row>
                    <Title>Projets personnels</Title>
                </Row>
                <Title level={2}>KultureMania</Title>
                <Row gutter={[16, 24]}>
                    <Col xs={0} sm={0} md={0} lg={9} xl={10}>
                        <img alt="KultureMania Jérémy Potel" src="../KultureMania.jpg" width="100%" height="350"/>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={10} xl={11} offset={1}>
                        <Text><a href="https://kulturemania.blog/">KultureMania</a> est une webzine que j'ai créée
                            en 2017.
                            Je rédige des articles et des dossiers sur les items de la culture contemporaine :
                            films, séries, livres, jeux vidéos et musique.
                            Afin de promouvoir ce site, je communique régulièrement sur les réseaux sociaux (<a
                                href="https://www.facebook.com/kulturemania/">Facebook</a>, <a
                                href="https://twitter.com/KultureMania">Twitter</a>, <a
                                href="https://www.instagram.com/kulture.mania/">Instagram</a>). Nous réalisons enfin
                            des podcasts en duo disponibles sur Deezer.</Text>
                    </Col>
                </Row>

                <Title level={2}>Futuréel Festival</Title>
                <Row gutter={[16, 24]}>
                    <Col xs={0} sm={0} md={0} lg={9} xl={10}>
                        <img alt="Futuréel Jérémy Potel" src="../Futuréel.jpg" width="100%" height="350"/>
                    </Col>
                    <Col xs={24} sm={24} md={0} lg={10} xl={11} offset={1}>
                        <Text> Le <a href="https://www.facebook.com/futureelfestival/">Futuréel Festival</a> est un
                            festival de musique que nous avons imaginé et mis en place en juillet 2017.
                            Etant alors un des cofondateurs, j'ai pris en charge la communication, l'administratif,
                            le lien avec les artistes et la gestion lors de l'événement.</Text>
                    </Col>
                </Row>

                <Title level={2}>Service civique à l'AFEV</Title>
                <Row gutter={[16, 24]}>
                    <Col xs={0} sm={0} md={0} lg={9} xl={10}>
                        <img alt="AFEV Jérémy Potel" src="../Afev.jpg" width="100%" height="350"/>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={10} xl={11} offset={1}>
                        <Text> En 2016, j'ai effectué un service civique auprès de l'AFEV en tant que "Ambassadeur
                            du Livre" dans une école de Lyon 5ème.
                            Il s'agissait de donner le goût de la lecture aux enfants qui n'avaient forcément la
                            possiblité de lire chez eux.</Text>
                    </Col>
                </Row>

                <Title level={2}>Programme Vacances Travail en Nouvelle-Zélande</Title>
                <Row gutter={[16, 24]}>
                    <Col xs={0} sm={0} md={0} lg={9} xl={10}>
                        <img alt="PVT Nouvelle-Zélande Jérémy Potel" src="../NZ.jpg" width="100%" height="350"/>
                    </Col>
                    <Col xs={24} sm={24} md={0} lg={10} xl={11} offset={1}>
                        <Text>En 2014-2015, j'ai effectué une année de césure en Nouvelle-Zélande dans le cadre du
                            Programme Vacances Travail.
                            Cette expérience a participé à mon ouverture d'esprit et à une plus grande maturité.
                            J'ai profité de ce séjour pour renforcer mon anglais, une langue que je pratique
                            toujours au quotidien.</Text>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}