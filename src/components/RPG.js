import React from 'react'
import {Col, Layout, Row, Typography} from 'antd';
import {GithubFilled} from '@ant-design/icons';
import WimgmGames from '../images/WimgmGames.png';
import WimgmSignup from '../images/WimgmSignup.png';

const {Content} = Layout;
const {Title, Text} = Typography;

export default function Pokedex() {

    return (
        <Content style={{margin: '24px 16px 0'}}>
            <Row>
                <Col span={6}>
                    <Title>WhereIsMyGM</Title>
                </Col>
                <Col span={3} offset={3}>
                    <a href="https://github.com/JPotel38/WhereIsMyGM/tree/master/src" target="_blank"
                       rel="noopener noreferrer"
                       style={{color: '#92D050', fontSize: "50px"}}> <GithubFilled/></a>
                </Col>
            </Row>
            <Row>
                <Col>
                <Row>
                    <img alt="WIMGM Games" src={WimgmGames} width="100%" height="350"/>
                </Row>
                <Row>
                    <img alt="WIMGM Home" src={WimgmSignup} width="100%" height="350"/>
                </Row>
                </Col>
                <Col offset={1} span={8}>
                    <Text>RPG text</Text>
                </Col>
            </Row>
        </Content>
    )
}
