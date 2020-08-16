import React from 'react'
import { Layout, Row, Typography, Col, Button } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import { AppleOutlined, FrownOutlined} from '@ant-design/icons';
import Nav from './Sider';




const { Content } = Layout;
const { Title } = Typography;

function Game() {

  return (
    <Layout style={{ height: "100vh" }}>
      <Nav />
      <Layout style={{ heigth: "auto" }}>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, height: "100%" }}>
            <Row>
              <Col span={24}>
                <Title>Game Zone</Title>
                <Title level={3}>Plus de surprises à venir...</Title>
              </Col>
            </Row>
            <Row >
              <Col span={12}>
                <Button className="button" shape="round" target="_blank" style={{ fontSize: 30 }}><a href="../snake.html"><AppleOutlined style={{ color: "red", fontSize: 30 }} />  Snake</a></Button>
              </Col>
              <Col span={12}>
                <Button className="button" shape="round" target="_blank" style={{ fontSize: 30 }}><Link to="/pendu"><FrownOutlined style={{ color: "yellow", fontSize: 30 }} />  Pendu</Link></Button>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Game