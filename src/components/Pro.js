import React from 'react'
import {Col, Row, Tabs, Typography} from 'antd';

const {Title} = Typography
const {TabPane} = Tabs;

export default function Pro() {

    return (
        <div id="pro">
            <Row><Col span={24}><Title>Expériences professionnelles</Title></Col></Row>
            <Row>
                <Tabs defaultActiveKey="1" centered size="large" keyboard tabBarGutter={400}>
                    <TabPane tab="2020-2021" key="1">
                        <Row>
                            <Col>
                                <p>Novembre 2020 - Août 2021</p>
                                <p>Alternant développeur full-stack Java/ Angular chez Energy Pool - Lyon</p>
                                <p>Chargé de la migration d'anciens écrans en AngularJS/ Play Framework en
                                    Angular 9 </p>
                                <ul>
                                    <li>Respect du métier.</li>
                                    <li>Intégration normes graphiques Energy Pool</li>
                                    <li>Test unitaires (Jasmine)</li>
                                    <li>Réecriture de controller Java en Kotlin</li>
                                </ul>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="2019" key="2">
                        <Row>
                            <Col>
                                <p>Avril - Septembre</p>
                                <p>Ingénieur Etudes et Développement à Adaming Conseil - Lyon.</p>
                                <p>Prestataire externe Adaming Conseil pour Sopra Steria Limonest.
                                    Département monétique pour le compte du Crédit Agricole</p>
                                <ul>
                                    <li>Développement COBOL/ Pacbase.</li>
                                    <li>Manipulation de base de données DB2 avec SQL et d'écrans CICS.
                                    </li>
                                    <li>Intégration de programmes.</li>
                                    <li>Débuggage et gestion du bon fonctionnement des programmes.</li>
                                    <li>Relation direct avec le client</li>
                                </ul>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="2018" key="3">
                        <Row>
                            <Col>
                                <p>Mars - Septembre</p>
                                <p>Rédacteur web à Bodas.net - Barcelone - Espagne.</p>
                                <ul>
                                    <li>Gestion des contenus visuels et textuels du site.</li>
                                    <li>Rédaction d'articles publicitaires destinés à promouvoir les
                                        entreprises des clients, optimisés pour Google Panda (SEO).
                                    </li>
                                    <li>Veiller à ce que les entreprises présentées respectent des
                                        critères de qualité élevés : retouches d'images (Gimp) et de
                                        textes.
                                    </li>
                                    <li>Renforcement de l'espagnol.</li>
                                </ul>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </Row>
        </div>
    )
}