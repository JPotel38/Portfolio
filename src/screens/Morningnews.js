import React from 'react'
import {Col, Layout, Row, Typography} from 'antd';
import {GithubFilled} from '@ant-design/icons';
import Sider from './Nav'

const {Content} = Layout;
const {Title} = Typography;

export default function Morningnews() {

    return (
        <Layout style={{height: "100vh"}}>
            <Sider/>
            <Layout style={{heigth: "auto"}}>
                <Content style={{margin: '24px 16px 0'}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <Row>
                            <Col span={6}>
                                <Title>Morning News</Title>
                            </Col>
                            <Col span={3} offset={3}>
                                <a href="https://github.com/JPotel38/MorningNews" target="_blank"
                                   rel="noopener noreferrer" style={{color: '#92D050', fontSize: "50px"}}>
                                    <GithubFilled/></a>
                            </Col>
                        </Row>

                        <Row style={{marginTop: 30}}>
                            <Col span={14}>
                                <a href="https://morning-news69.herokuapp.com" target="_blank"
                                   rel="noopener noreferrer">
                                    <img alt="Morningnews" src="../Morningnews.png" width="100%"/>
                                </a>
                            </Col>
                            <Col offset={1} span={8}>
                                <p>Morning News affiche les nouvelles des plus grands journaux français grâce à un appel
                                    en back-end de NewsAPI. Un changement d'état permet de générer ces sources en
                                    français ou en anglais. Une fois une source choisie, les articles du jour
                                    s'affichent, que l'on peut enregistrer ou lire via l'ouverture d'une mondal par
                                    clique.</p>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}