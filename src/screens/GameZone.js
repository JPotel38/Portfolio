import React from 'react'
import { Layout, Card, Row, Typography, Col, Button } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Sider from './Sider'




const { Content } = Layout;
const { Title } = Typography;

function Game() {

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider />
      <Layout style={{ heigth: "auto" }}>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, height: "100%" }}>
            <Row>
              <Col span={24}>
                <Title>Jeux</Title>
              </Col>
            </Row>
            <Row >
              <Col span={12}>
                <Button className="button" shape="round" target="_blank"><a href="../snake.html">Snake</a></Button>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Game