import React from 'react'
import {Col, Layout, Row, Typography} from 'antd';
import {GithubFilled} from '@ant-design/icons';
import WimgmGames from '../images/WimgmGames.png';
import WimgmSignup from '../images/WimgmSignup.png';

const {Content} = Layout;
const {Title} = Typography;

export default function Pokedex() {

    return (
        <Layout>
            <Content style={{margin: '24px 16px 0'}}>
                <Row>
                    <Col span={12}>
                        <Title>WhereIsMyGM</Title>
                    </Col>
                    <Col span={3} offset={3}>
                        <a href="https://github.com/JPotel38/WhereIsMyGM/tree/master/src" target="_blank"
                           rel="noopener noreferrer"
                           style={{color: '#92D050', fontSize: "50px"}}> <GithubFilled/></a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={0} sm={0} md={15}>
                        <Row>
                            <img alt="WIMGM Games" src={WimgmGames} width="100%" height="350"/>
                        </Row>
                        <Row>
                            <img alt="WIMGM Home" src={WimgmSignup} width="100%" height="350"/>
                        </Row>
                    </Col>
                    <Col offset={2} xs={22} sm={22} md={7}>
                        <p>Projet stack MERN. Plate-forme pour trouver un maître du jeu par géolocalisation et/ ou
                        par jeu. Large choix de jeux trouvables par genre/ titre ou aléatoirement.</p>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}
