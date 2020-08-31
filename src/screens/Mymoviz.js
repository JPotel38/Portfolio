import React from 'react'
import { Layout, Row, Col, Typography } from 'antd';
import { GithubFilled } from '@ant-design/icons';

import Sider from './Sider'

const { Content } = Layout;
const { Title, Text } = Typography;

function Mymoviz() {

  return (

    <Layout style={{ height: "100vh" }}>
      <Sider />
      <Layout style={{ heigth: "auto" }}>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Row>
              <Col span={3}>
                <Title>My Moviz</Title>
              </Col>
              <Col span={3} offset={3}>
                <a href="https://github.com/JPotel38/My-Moviz" target="_blank" rel="noopener noreferrer" style={{ color: '#92D050', fontSize: "50px" }}> <GithubFilled /></a>
              </Col>
            </Row>

            <Row style={{ marginTop: 30 }}>
              <Col span={14}>
                <a href="https://mymoviz-69.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <img alt="MyMoviz" src="../Mymoviz.png" width="100%" height="350" />
                </a>
              </Col>
              <Col offset={1} span={8}>
                <Text>My Moviz est un projet React.js qui affiche dynamiquement les résultats d'un appel à l'API The Movie Database réalisé en back-end. Ici, il s'agit des films français sortis le 23/06/2020. Le projet permet d'enregistrer ses films favoris dans une whishlist, ainsi que de noter les films, mettant ainsi directement à jour la moyenne via reverse data flow.</Text>
              </Col>
            </Row>

          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Mymoviz