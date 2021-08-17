import React from 'react'
import {Col, Layout, Row, Typography} from 'antd';
import {GithubFilled} from '@ant-design/icons';
import SchoolByHiit from '../images/SchoolByHiit.png'

const {Content} = Layout;
const {Title} = Typography;

export default function FilRouge() {

    return (
        <Layout>
            <Content style={{margin: '24px 16px 0'}}>
                <Row>
                    <Col span={12}>
                        <Title>Projet final School By Hi!t</Title>
                    </Col>
                    <Col span={3} offset={3}>
                        <a href="https://github.com/JPotel38/final-project-school-by-hiit" target="_blank"
                           rel="noopener noreferrer" style={{color: '#92D050', fontSize: "50px"}}>
                            <GithubFilled/></a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={0} sm={0} md={15}>
                        <img alt="SchoolByHiit" src={SchoolByHiit} width="100%" height="350"/>
                    </Col>
                    <Col offset={2} xs={22} sm={22} md={7}>
                        <p>Projet final de l'alternance proposée par School By Hiit. Réalisation d'une plate-forme
                        pour les prochains étudiants. Back en Java et Spring (Security notamment), front en Angular
                        avec Ionic. Utilisation de Docker pour faciliter et harmonsier la connexion à la base de données
                        MySQL.</p>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}