import React from 'react'
import { Layout, Row, Col, Typography } from 'antd';
import { GithubFilled } from '@ant-design/icons';
import Sider from './Sider'

const { Content } = Layout;
const { Title, Text } = Typography;

function Ticketac(props) {

  return (

    <Layout style={{ height: "100vh" }}>
      <Sider />
      <Layout style={{ heigth: "auto" }}>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Row>
              <Col span={3}>
                <Title>Ticketac </Title>
              </Col>
              <Col span={3} offset={3}>
                <a href="https://github.com/JPotel38/Hackaton" target="_blank" rel="noopener noreferrer" style={{ color: '#92D050', fontSize: "50px" }}> <GithubFilled /></a>
              </Col>
            </Row>

            <Row style={{ marginTop: 30 }}>
              <Col span={14}>
                <a href="https://ticetac-69.herokuapp.com/ " target="_blank" rel="noopener noreferrer">
                  <img alt="Ticketac" src="../Ticketac.png" width="100%" height="350" />
                </a>
              </Col>
              <Col offset={1} span={8}>
                <Text style={{ fontSize: 20 }}>Ticketac est notre premier projet réalisé de manière intensive. En duo, nous avions quatre jours pour réaliser un site de réservation de ticket de train, proposant panier et récapitulatif des commandes passées et des trajets à venir.
          <p>Les technologies utilisées en back-end sont Node.js et Express. En front-end, il s'agit d'un usage de HTML, CSS, Javascript et Jquery. Le site est responsive grâce à l'utilisation de Bootstrap.</p></Text>
              </Col>
            </Row>

          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Ticketac