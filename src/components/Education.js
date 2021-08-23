import React, {useState} from 'react'
import {Button, Col, Modal, Row, Timeline, Typography} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

const {Title} = Typography;

export default function Education() {

    const [details, setDetails] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const schoolByHiit = () => {
        setIsModalVisible(true);
        setDetails(<p>Douze semaines de cours centrées sur Java et Angular. Réalisation de TP hebdomadaires.
            Projet fil rouge final en deux semaines intensives : création d'une plate-forme pour les promos suivantes.
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
        <div id="education">
            <Row>
                <Col span={24}>
                    <Title>Education</Title>
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
                       footer={[
                           <Button key="back" onClick={() => {
                               setIsModalVisible(false);
                           }}>
                               Return
                           </Button>
                       ]}>
                    {details}
                </Modal>
            </Row>
        </div>
    )
}