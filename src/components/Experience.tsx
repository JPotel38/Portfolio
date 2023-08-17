import React, {useState} from 'react'
import {Button, Col, Modal, Row, Tabs, Timeline, Typography} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import TabPane from "antd/lib/tabs/TabPane";

const {Title} = Typography;

export default function Experience() {

    const [details, setDetails] = useState(<p></p>)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const schoolByHiit = () => {
        setIsModalVisible(true);
        setDetails(<p>Douze semaines de cours centrées sur Java et Angular. Réalisation de TP hebdomadaires.
            Projet fil rouge final en deux semaines intensives :
            création d'une plate-forme pour les promotions suivantes en Java en back et Angular en front.
            <Title level={2}>Technologies:</Title>
            <Row>
                <Col span={8}>
                    <Title level={4}>Front-end :</Title>
                    <ul>
                        <li><strong>Angular</strong></li>
                    </ul>
                </Col>
                <Col span={8}>
                    <Title level={4}>Design et responsive :</Title>
                    <ul>
                        <li><strong>Ionic</strong></li>
                    </ul>
                </Col>
                <Col span={8}>
                    <Title level={4}>Back-end :</Title>
                    <ul>
                        <li><strong>Java</strong></li>
                        <li><strong>Spring</strong></li>
                    </ul>
                </Col>
                <Col span={8}>
                    <Title level={4}>Base de données:</Title>
                    <ul>
                        <li><strong>MySql</strong></li>
                        <li><strong>Hibernate</strong></li>
                    </ul>
                </Col>
                <Col span={8}>
                    <Title level={4}>Outils:</Title>
                    <ul>
                        <li><strong>Docker</strong></li>
                        <li><strong>Kubernetes</strong></li>
                        <li><strong>ElasticSearch</strong></li>
                    </ul>
                </Col>
                <Col span={8}>
                    <Title level={4}>Cloud:</Title>
                    <ul>
                        <li><strong>Amazon Web Service</strong></li>
                    </ul>
                </Col>
            </Row>
        </p>)
    }

    const capsule = () => {
        setIsModalVisible(true);
        setDetails(<p>Bootcamp de onze semaines React/ React Native/ NodeJS/ MongoDB. Réalisation de projets
            hebdomadaires et d'un projet final en intensif.
            <Title level={2}>Technologies:</Title>
            <Row>
                <Col span={8}>
                    <Title level={4}>Front-end :</Title>
                    <ul>
                        <li><strong>HTML</strong></li>
                        <li><strong>CSS</strong></li>
                        <li><strong>Javascript</strong></li>
                        <li><strong>React.JS</strong></li>
                        <li><strong>React Native et Expo</strong></li>
                    </ul>
                </Col>
                <Col span={8}>
                    <Title level={4}>Back-end :</Title>
                    <ul>
                        <li><strong>Node.JS</strong></li>
                        <li><strong>Express</strong></li>
                    </ul>
                </Col>
                <Col span={8}>
                    <Title level={4}>Design et responsive :</Title>
                    <ul>
                        <li><strong>Bootstrap</strong></li>
                        <li><strong>Reactstrap</strong></li>
                        <li><strong>Ant Design</strong></li>
                    </ul>
                </Col>
            </Row>
        </p>)
    }


    const adaming = () => {
        setIsModalVisible(true);
        setDetails(<p> Durant onze semaines, j'ai suivi la formation délivrée par Adaming Conseil. Nous avons
            autant
            travaillé sur la pratique que sur la théorie du développement informatique.
            Durant cette formation, j'ai pu apprendre le développement en COBOL, la création et la
            manipulation
            d'écrans
            CICS et l'utilisation de base de données SQL. Les journées alliaient cours le matin et
            exercices
            pratiques
            l'après midi.
        </p>)
    }

    const master2 = () => {
        setIsModalVisible(true);
        setDetails(<p> Mention assez bien. Mémoire sur les thèmes de l'agriculture biologique, du commerce équitable,
            des énergies renouvelables et de l'économie circulaire, leurs applications et leurs potentiels.
        </p>)
    }

    return (
        <>
            <div id="pro">
                <Row>
                    <Col offset={1} span={21}>
                        <Title level={2}>Expériences professionnelles</Title>
                    </Col>
                </Row>
                <Row>
                    <Col offset={3}>
                        <Tabs defaultActiveKey="1">
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
                    </Col>
                </Row>
            </div>
            <div id="education">
                <Row>
                    <Col offset={1} span={21}>
                        <Title level={2}>Education</Title>
                    </Col>
                </Row>
                <Row>
                    <Timeline mode={"left"}>
                        <Timeline.Item label="2021"><p>Alternance à School By Hi!t,
                            Lyon.</p><Button style={{marginLeft: 5}}
                                             onClick={schoolByHiit}><SearchOutlined/></Button></Timeline.Item>
                        <Timeline.Item label="2020"><p>Bootcamp Javascript Full stack à La Caspule,
                            Lyon.</p><Button style={{marginLeft: 5}}
                                             onClick={capsule}><SearchOutlined/></Button></Timeline.Item>
                        <Timeline.Item label="2019"><p>Formation ingénieur Etudes et Développement Mainframe
                            - Adaming Conseil, Lyon.</p><Button style={{marginLeft: 5}}
                                                                onClick={adaming}><SearchOutlined/></Button></Timeline.Item>
                        <Timeline.Item label="2017"><p>Master 2 Relations Internationales spécialité
                            Francophonie et Développement Durable - Lyon 3.</p><Button
                            style={{marginLeft: 5}} onClick={master2}><SearchOutlined/></Button></Timeline.Item>
                        <Timeline.Item label="2014"><p>Master 1 Histoire Moderne et Contemporaine - Lyon
                            2.</p></Timeline.Item>
                    </Timeline>
                    <Modal visible={isModalVisible}
                           onCancel={() => setIsModalVisible(false)}
                           footer={[
                               <Button key="back" onClick={() => setIsModalVisible(false)}>
                                   Retour
                               </Button>
                           ]}>
                        {details}
                    </Modal>
                </Row>
            </div>
        </>
    )
}
