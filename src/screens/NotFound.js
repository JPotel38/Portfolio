import React from 'react'
import {Col, Layout, Row, Typography} from 'antd';
import Nav from './Nav';
import notfound from '../images/404.png'

const {Content} = Layout;
const {Title} = Typography;

export default function NotFound() {

    return (
        <Layout>
            <Content>
                <Row>
                    <Col span={24}>
                        <Title>Not found :(</Title>
                    </Col>
                    <Col xs={0} sm={0} md={23} offset={1}>
                        <img src={notfound} style={{width: "500px"}} alt="404"/>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}
