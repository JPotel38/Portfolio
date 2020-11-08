import React from 'react'
import { Layout, Row, Typography, Col, Button } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import { AppleOutlined, FrownOutlined, DribbbleOutlined, QuestionOutlined} from '@ant-design/icons';
import Nav from './Sider';




const { Content } = Layout;
const { Title } = Typography;

function Game() {

  return (
    <Layout style={{ height: "100vh" }}>
      <Nav />
      <Layout style={{ heigth: "auto" }}>
        <Content>
          <div className="site-layout-background" style={{ padding: 24, height: "100%" }}>
            <Row>
              <Col span={24}>
                <Title>Game Zone</Title>
                <Title level={3}>Plus de surprises à venir...</Title>
              </Col>
            </Row>
            <Row >
              <Col xs={0} sm={0} md={11} lg={11} xl={11}>
                <Button className="button" shape="round" target="_blank" style={{ fontSize: 30, backgroundColor:"#E5E5E5" }}><a href="../snake/snake.html"><img src="../apple.png"/> Snake</a></Button>
              <p style={{marginTop : 15}}>Snake est un jeu originellement paru en 1976, puis remis au gôut du jour en 1998 grâce aux Nokia, dans lesquels il était préinstallé.</p>
              </Col>
              <Col xs={24} sm={24} md={11} lg={11} xl={11} offset={1}>
                <Button className="button" shape="round" target="_blank" style={{ fontSize: 30, backgroundColor:"#E5E5E5" }}><Link to="/pendu"><FrownOutlined style={{ color: "yellow", fontSize: 30 }} />  Pendu</Link></Button>
                <p style={{marginTop : 15}}>Les origines du jeu du pendu sont inconnues, mais une variante a été découverte dès 1894.</p>
              </Col>
            </Row>
            <Row>
            <Col xs={0} sm={0} md={11} lg={11} xl={11}>
                <Button className="button" shape="round" target="_blank" style={{ fontSize: 30, backgroundColor:"#E5E5E5" }}><Link to="/pingpong"><img src="../golf.png"/>Pingpong</Link></Button>
                <p style={{marginTop : 15}}> Ce sport d'origine britannique est pratiqué par des millions de personnes dans le monde. Saurez-vous vaincre votre adversaire ?</p>
              </Col>

              {/* <Col xs={0} sm={0} md={11} lg={11} xl={11} offset={1}>
                <Button className="button" shape="round" target="_blank" style={{ fontSize: 30 }}><Link to="/quizz"><QuestionOutlined style={{ color: "purple", fontSize: 30 }} />  Quizz</Link></Button>
                <p style={{marginTop : 15}}> Quiss culture générale</p>
              </Col> */}
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Game