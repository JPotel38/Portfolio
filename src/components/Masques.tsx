import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

export default function Masques() {

    return (
        <Container>
            <Row>
                <Col span={12}>
                    <h1>Masques.org</h1>
                </Col>
                <Col span={3} offset={3}>
                    <a href="https://github.com/ChristopheApp/masques.org" target="_blank"
                       rel="noopener noreferrer" style={{color: '#92D050', fontSize: "50px"}}>
                        <i className="fa-brands fa-github"/></a> </Col>
            </Row>
            <Row>
                <Col xs={0} sm={0} md={15}>
                    <iframe src="https://player.vimeo.com/video/431216403" title="video masques.org"
                            width="100%" height="564" frameBorder="0" allow="autoplay; fullscreen"
                            allowFullScreen/>
                </Col>
                <Col offset={2} xs={22} sm={22} md={7}>
                    <p>Masques.org est le projet final réalisé à La Caspule, en
                        l'espace de dix jours en trio. Le site utilise toutes les notions vues pendant la
                        formation. Le front-end est réalisé avec React.JS et Ant Design tandis que le
                        serveur est développé en Express, framework de Node.JS.</p>
                    <p>Nous avons utilisé un système de géoloclisation par Google Map, où chaque vendeur
                        de masques est représenté par un marqueur. L'ensemble du site est dynamique
                        (panier, personnalisation des masques, page profil etc.). Le module de paiement
                        est Stripe. Les commandes, les articles et les utilisateurs sont hebergés sur
                        une base de données MongoDB.</p>
                    <p>Vous retrouverez le parcours utilisateur ci-contre.</p>
                </Col>
            </Row>
        </Container>
    )
}
