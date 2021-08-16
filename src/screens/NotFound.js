import React from 'react'
import {Col, Layout, Row, Typography} from 'antd';
import Nav from './Nav'

const {Content} = Layout;
const {Title} = Typography;


export default function NotFound() {

    return (
        <Layout style={{height: "100vh"}}>
            <Nav/>
            <Content>
                <Row>
                    <Col span={24}>
                        <Title>Not found :(</Title>
                    </Col>
                    <Col xs={0} sm={0} md={23} offset={1}>
                        <img src="../404.png" style={{width: "500px"}}/>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}
