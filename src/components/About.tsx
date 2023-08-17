import React from 'react'
import {Col, Layout, Row, Typography} from 'antd';

const {Title} = Typography;


export default function About() {
    return (
        <Layout>
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
                            href="https://www.lacapsule.academy/fr/">La Capsule Academy</a> en 2020.
                        Je parle anglais et possède un niveau conversationnel en espagnol.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col offset={1} span={21}>
                    <Title>Projets personnels</Title>
                </Col>
            </Row>
            <Row>
                <Col offset={1}>
                    <Title level={2}>KultureMania</Title>
                    <p><a href="https://kulturemania.blog/">KultureMania</a> est une webzine que j'ai créée
                        en 2017.
                        Je rédige des articles et des dossiers sur les items de la culture contemporaine :
                        films, séries, livres, jeux vidéos et musique.
                        Afin de promouvoir ce site, je communique régulièrement sur les réseaux sociaux (<a
                            href="https://www.facebook.com/kulturemania/">Facebook</a>, <a
                            href="https://twitter.com/KultureMania">Twitter</a>, <a
                            href="https://www.instagram.com/kulture.mania/">Instagram</a>). Nous réalisons enfin
                        des podcasts en duo disponibles sur Deezer.</p>
                </Col>
            </Row>
            <Row>
                <Col offset={1}>
                    <Title level={2}>Futuréel Festival</Title>
                    <p> Le <a href="https://www.facebook.com/futureelfestival/">Futuréel Festival</a> est un
                        festival de musique que nous avons imaginé et mis en place en juillet 2017.
                        Etant alors un des cofondateurs, j'ai pris en charge la communication, l'administratif,
                        le lien avec les artistes et la gestion lors de l'événement.</p>
                </Col>
            </Row>

            <Row>
                <Col offset={1}>
                    <Title level={2}>Service civique à l'AFEV</Title>
                    <p> En 2016, j'ai effectué un service civique auprès de l'AFEV en tant que "Ambassadeur
                        du Livre" dans une école de Lyon 5ème.
                        Il s'agissait de donner le goût de la lecture aux enfants qui n'avaient forcément la
                        possiblité de lire chez eux.</p>
                </Col>
            </Row>

            <Row>
                <Col offset={1}>
                    <Title level={2}>Programme Vacances Travail en Nouvelle-Zélande</Title>
                    <p>En 2014-2015, j'ai effectué une année de césure en Nouvelle-Zélande dans le cadre du
                        Programme Vacances Travail.
                        Cette expérience a participé à mon ouverture d'esprit et à une plus grande maturité.
                        J'ai profité de ce séjour pour renforcer mon anglais, une langue que je pratique
                        toujours au quotidien.</p>
                </Col>
            </Row>
        </Layout>
    )
}
