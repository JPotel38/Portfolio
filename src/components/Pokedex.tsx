import React from 'react'
import {Col, Layout, Row, Typography} from 'antd';
import {GithubFilled} from '@ant-design/icons';

const {Content} = Layout;
const {Title} = Typography;

export default function Pokedex() {

    return (
        <Layout>
            <Content style={{margin: '24px 16px 0'}}>
                <Row>
                    <Col span={12}>
                        <Title>Pokedex</Title>
                    </Col>
                    <Col span={3} offset={3}>
                        <a href="https://github.com/JPotel38/pokedex" target="_blank" rel="noopener noreferrer"
                           style={{color: '#92D050', fontSize: "50px"}}> <GithubFilled/></a>
                    </Col>
                </Row>
                <Row>
                    <Col offset={2} xs={22} sm={22} md={7}>
                        <p>Projet front-end Angular pour pratiquer tout les principes fondamentaux du framework :
                        resolvers, services, guards, interceptors, pipes, tests etc...</p>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}
