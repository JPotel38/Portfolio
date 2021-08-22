import React from 'react'
import {Col, Layout, Row, Typography} from 'antd';
import {GithubFilled} from '@ant-design/icons';
import pokemon from '../images/pokemon.png';

const {Content} = Layout;
const {Title, Text} = Typography;

export default function Pokedex() {

    return (
        <Content style={{margin: '24px 16px 0'}}>
            <Row>
                <Col span={6}>
                    <Title>Pokedex</Title>
                </Col>
                <Col span={3} offset={3}>
                    <a href="https://github.com/JPotel38/pokedex" target="_blank" rel="noopener noreferrer"
                       style={{color: '#92D050', fontSize: "50px"}}> <GithubFilled/></a>
                </Col>
            </Row>
            <Col span={14}>
                    <img alt="Pokedex" src={pokemon} width="100%" height="350"/>
            </Col>
            <Row style={{marginTop: 30}}>
                <Col offset={1} span={8}>
                    <Text>Pokedex text</Text>
                </Col>
            </Row>
        </Content>
    )
}
