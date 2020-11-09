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
                  <Button className="button" shape="round" style={{ fontSize: 30 }}>
                  <Link to="/">
                  Go Home
                  </Link>
                    </Button>
                
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>

  )
}

export default NotFound