import React from 'react'
import {Col, Layout, Row, Typography} from 'antd';
import notfound from '../images/404.png'

const {Content} = Layout;
const {Title} = Typography;

export default function NotFound() {

    return (
        <Content>
            <Row>
                <Col span={24}>
                    <Title offset={1} span={21}>Not found :(</Title>
                </Col>
                <Col xs={0} sm={0} md={23} offset={1}>
                    <img src={notfound} style={{width: "500px"}} alt="404"/>
                </Col>
            </Row>
        </Content>
    )
}
