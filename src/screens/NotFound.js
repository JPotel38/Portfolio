import React from 'react'
import { Layout, Row, Typography, Col } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Nav from './Sider'

const { Content } = Layout;
const { Title } = Typography;


function NotFound() {

  return (
<Layout style={{ height: "100vh" }}>
      <Nav />
      <Layout style={{ heigth: "auto" }}>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, height: "100%" }}>
            <Row>
            <Col span={24}>
                <Title>Not found :(</Title>
              </Col>
     </Row>
     </div>
     </Content>
    </Layout>
  </Layout>

  )
}

export default NotFound