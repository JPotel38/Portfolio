import React from 'react'
import { Layout, Row, Col, Typography } from 'antd';
import { GithubFilled } from '@ant-design/icons';
import Sider from './Sider'

const { Content } = Layout;
const { Title } = Typography;

function Blackboard(props) {

  return (

    <Layout style={{ height: "100vh" }}>
      <Sider />
      <Layout style={{ heigth: "auto" }}>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Row>
              <Col span={4}>
                <Title>Black Board</Title>
              </Col>
              <Col span={3} offset={3}>
                <a href="https://github.com/JPotel38/BlackBoard" target="_blank" rel="noopener noreferrer" style={{ color: '#92D050', fontSize: "50px" }}> <GithubFilled /></a>
              </Col>
            </Row>

            <Row style={{ marginTop: 30 }}>
              <Col span={15}>
                <a href="https://blackboard-69.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <img alt="BlackBoard" src="../BlackBoard.png" width="100%" />
                </a>
              </Col>
              <Col offset={2} span={7}>
                <p>Black Board est un projet qui met en place la data vision. Ce projet a necéssité l'utilisation de clés étrangères/ Sous-documents, ainsi que l'agrégation de données pour des résultats corrects et clair. Ce fut aussi l'occasion de nous familisariser avec les dates.</p>
              </Col>
            </Row>

          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Blackboard