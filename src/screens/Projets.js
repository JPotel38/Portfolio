import React from 'react'
import { Layout, Card, Row, Typography, Col } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Sider from './Sider'




const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

function Projet(props) {

  console.log(Card)
  console.log(props)

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider />
      <Layout style={{ heigth: "auto" }}>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, height: "100%" }}>
            <Row>
              <Col spn={24}>
                <Title>Projets</Title>
                <Title level={2}> Cliquez sur un projet pour en savoir plus </Title>
                <Title level={4}> Vous pourrez retrouver l'ensemble des projets sur GitHub</Title>
              </Col>
            </Row>
            <Row gutter={[16, 24]}>
              <Col span={12}>
                <Fade left>
                  <Link to="/Masques">

                    <Card
                      hoverable
                      style={{ width: "100%", height: "100%" }}
                      cover={<img alt="masques" src="Masques.png" />}
                    >
                      <Meta style={{ fontSize: "20px" }} title="Masques.org" description=" Masques.org est le projet final du bootcamp La Capsule." />
                    </Card>
                  </Link>
                </Fade>
              </Col>
              <Col span={12}>
                <Fade right>
                  <Link to="/Morningnews">
                    <Card
                      hoverable
                      style={{ width: "100%", height: "100%" }}
                      cover={<img alt="Morningnews" src="Morningnews.png" />}
                    >
                      <Meta style={{ fontSize: "20px" }} title="MorningNews" description="MorningNews fait appel à une API pour obtenir les nouvelles du monde entier." />
                    </Card>
                  </Link>
                </Fade>
              </Col>
              <Col span={12}>
                <Fade left>
                  <Link to="/Blackboard">
                    <Card
                      hoverable
                      style={{ width: "100%", height: "100%" }}
                      cover={<img alt="BlackBoard" src="../Blackboard.png" />}
                    >
                      <Meta style={{ fontSize: "20px" }} title="BlackBoard" description="BlackBoard est l'outil idéal pour réaliser des Dataviz !" />
                    </Card>
                  </Link>
                </Fade>
              </Col>
              <Col span={12}>
                <Fade right>
                  <Link to="/Mymoviz">
                    <Card
                      hoverable
                      style={{ width: "100%", height: "100%" }}
                      cover={<img alt="Mymoviz" src="../Mymoviz.png" />}
                    >
                      <Meta style={{ fontSize: "20px" }} title="MyMoviz" description="My Moviz permet de voir les dernières sorties ainsi que noter et enregistre les films." />
                    </Card>
                  </Link>
                </Fade>
              </Col>
              <Col span={12}>
                <Fade left>
                  <Link to="/Ticketac">
                    <Card
                      hoverable
                      style={{ width: "100%", height: "100%" }}
                      cover={<img alt="Ticketac" src="../Ticketac.png" />}
                    >
                      <Meta style={{ fontSize: "20px" }} title="Ticketac" description="Ticketac est le projet réalisé dans le terme d'un hackathon, en duo sur trois jours." />
                    </Card>
                  </Link>
                </Fade>
              </Col>
              <Col span={12}>
                <Fade right>
                  <Link to="/Bikeshop">
                    <Card
                      hoverable
                      style={{ width: "100%", height: "100%" }}
                      cover={<img alt="Bikeshop" src="../Bikeshop.png" />}
                    >
                      <Meta style={{ fontSize: "20px" }} title="Bike Shop" description="Bike Shop a été le premier projet réalisé à La Capsule." />
                    </Card>
                  </Link>
                </Fade>
              </Col>
              <Col span={12}>
                <Fade left>
                  <Link to="/Weatherapp">
                    <Card
                      hoverable
                      style={{ width: "100%", height: "100%" }}
                      cover={<img alt="Weatherapp" src="../Weatherapp.png" />}
                    >
                      <Meta style={{ fontSize: "20px" }} title="Weatherapp" description="Weather App permet de connaître la température d'une ville en temps réel. " />
                    </Card>
                  </Link>
                </Fade>
              </Col>
            </Row>

          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Projet