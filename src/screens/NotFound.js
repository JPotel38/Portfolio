import React from 'react'
import { Layout, Row, Typography, Col, Button } from 'antd';
import { BrowserRouter as Link } from 'react-router-dom'
import Nav from './Sider'

const { Content } = Layout;
const { Title } = Typography;


function NotFound() {

  return (
    <Layout style={{ height: "100vh" }}>
      <Nav />
      <Layout style={{ heigth: "auto" }}>
        <Content>
          <div className="site-layout-background" style={{ padding: 24, height: "100%" }}>
            <Row>
            <Col span={24}>
                <Title>Not found :(</Title>
                  </Col>
                  <Col xs={0} sm={0} md={23} offset={1}>
                    <img src="../404.png" style={{width: "500px"}}/>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>

  )
}

export default NotFound