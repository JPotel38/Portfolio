import React from 'react'
import {Col, Layout, Row, Typography} from 'antd';
import {GithubFilled} from '@ant-design/icons';
import Sider from './Nav'

const {Content} = Layout;
const {Title} = Typography;

export default function Weatherapp() {

    return (
        <Layout style={{height: "100vh"}}>
            <Sider/>
            <Content style={{margin: '24px 16px 0'}}>
                <Row>
                    <Col span={6}>
                        <Title>My Moviz</Title>
                    </Col>
                    <Col span={3} offset={3}>
                        <a href="https://github.com/JPotel38/WeatherApp" target="_blank"
                           rel="noopener noreferrer" style={{color: '#92D050', fontSize: "50px"}}>
                            <GithubFilled/></a>
                    </Col>
                </Row>
                <Row style={{marginTop: 30}}>
                    <Col span={15}>
                        <img alt="WeatherApp" src="../Weatherapp.png" width="100%"/>
                    </Col>
                    <Col offset={2} span={7}>
                        <p>Weather App est une application qui fait intervenir plusieurs outils. La map est
                            chargée avec LeafLet, une librairie open source. Couplé à l'utilisation d'un
                            webservice, ici l'API Open Weather Map, nous avons à la fois la météo en temps réel
                            de la ville recherchée ainsi qu'un marqueur sur la carte.</p>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}