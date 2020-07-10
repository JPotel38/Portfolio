import React from 'react'
import { Layout, Row, Col, Typography } from 'antd';
import { GithubFilled } from '@ant-design/icons';
import Sider from './Sider'

const { Content } = Layout;
const { Title } = Typography;

function Bikeshop(props) {

  return (

    <Layout style={{ height: "100vh" }}>
      <Sider />
      <Layout style={{ heigth: "auto" }}>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Row>
              <Col span={4}>
                <Title>Bike Shop</Title>
              </Col>
              <Col span={3} offset={3}>
                <a href="https://github.com/JPotel38" target="_blank" rel="noopener noreferrer" style={{ color: '#92D050', fontSize: "50px" }}> <GithubFilled /></a>
              </Col>
            </Row>

            <Row style={{ marginTop: 30 }}>
              <Col span={15}>
                <a href="https://bikeshop-69.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <img alt="Bike Shop" src="../Bikeshop.png" width="100%" />
                </a>
              </Col>
              <Col offset={2} span={7}>
                <p>Bike Shop est un projet qui simule un site d'achat de vélo. Le panier et la page d'accueil sont mis à jour grâce à l'utilisation du back-end.</p>
              </Col>
            </Row>

          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Bikeshop