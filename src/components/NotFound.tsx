import React from 'react'
import {Col, Layout, Row, Typography} from 'antd';

const {Content} = Layout;
const {Title} = Typography;

export default function NotFound() {

    return (
        <Content>
            <Row>
                <Col span={24}>
                    <Title>Not found :(</Title>
                </Col>
            </Row>
        </Content>
    )
}
