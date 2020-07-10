import React from 'react'
import { Layout, Row, Col, Typography } from 'antd';
import { GithubFilled } from '@ant-design/icons';
import Sider from './Sider'

const { Content } = Layout;
const { Title, Text } = Typography;
function Masques(props) {

  return (

    <Layout style={{ height: "100vh" }}>
      <Sider />
      <Layout style={{ heigth: "auto" }}>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Row>
              <Col span={4}>
                <Title>Masques.org</Title>
              </Col>
              <Col span={3} offset={3}>
                <a href="https://github.com/ChristopheApp/masques.org" target="_blank" rel="noopener noreferrer" style={{ color: '#92D050', fontSize: "50px" }}> <GithubFilled /></a>
              </Col>
            </Row>

            <Row style={{ marginTop: 30 }}>
              <Col span={15}>
                <iframe src="https://player.vimeo.com/video/431216403" title="video masques.org" width="100%" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              </Col>
              <Col offset={1} span={7}>
                <Text style={{ fontSize: 16 }}>Masques.org est le projet final réalisé à La Caspule, en l'espace de dix jours en trio. Le site utilise toutes les notions vues pendant la formation. Le front-end est réalisé avec React.JS et Ant Design tandis que le serveur est développé en Express, framework de Node.JS.
        <p>Nous avons utilisé un système de géoloclisation par Google Map, où chaque vendeur de masques est représenté par un marqueur. L'ensemble du site est dynamique (panier, personnalisation des masques, page profil etc.). Le module de paiement est Stripe. Les commandes, les articles et les utilisateurs sont hebergés sur une base de données MongoDB.</p>
                  <p>Vous retrouverez le parcours utilisateur ci-contre.</p>
                </Text>
              </Col>
            </Row>

          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Masques