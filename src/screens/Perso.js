import React from 'react'
import { Layout, Row, Typography, Col } from 'antd';
import Nav from './Sider'

const { Content } = Layout;
const { Title, Text } = Typography;


function Perso() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Nav />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Row>
              <Col span={8}>
                <Title>Projets personnels</Title>
              </Col>
            </Row>

            <Title level={2}>KultureMania</Title>
            <Row gutter={[16, 24]}>
              <Col xs={0} sm={0} md={0} lg={10} xl={12}>
                <img alt="KultureMania" src="../KultureMania.jpg" width="100%" height="350" />
              </Col>
              <Col xs={24} sm={24} md={8} lg={10} xl={11} offset={1}>
                <Text>KultureMania est une webzine que j'ai créé en 2017. Je m'occupe de la rédaction d'articles sur les items de la culture contemporaine, ainsi que la communication sur les réseaux sociaux (Facebook, Twitter, Instagram). Nous réalisons des podcasts en duo disponibles sur Deezer.</Text>
              </Col>
            </Row>

            <Title level={2}>Futuréel Festival</Title>
            <Row gutter={[16, 24]}>
              <Col xs={0} sm={0} md={0} lg={10} xl={11}>
                <img alt="Futuréel" src="../Futuréel.jpg" width="100%" height="350" />
              </Col>
              <Col xs={24} sm={24} md={0} lg={10} xl={11} offset={1}>
                <Text> Le Futuréel Festival est un festival de musique que nous avons réalisé en juillet 2017. Etant alors un des cofondateurs, j'ai pris en charge la communication, l'administratif, le lien avec les artistes et la gestion lors de l'événement.</Text>
              </Col>
            </Row>

            <Title level={2}>Service civique à l'AFEV</Title>
            <Row gutter={[16, 24]}>
              <Col xs={0} sm={0} md={0} lg={10} xl={12}>
                <img alt="AFEV" src="../Afev.jpg" width="100%" height="350" />
              </Col>
              <Col xs={24} sm={24} md={8} lg={10} xl={11} offset={1}>
                <Text> En 2016, j'ai effectué un service civique auprès de l'AFEV en tant que "Ambassadeur du Livre" dans une école de Lyon 5ème. Il s'agissait de donner le goût de la lecture aux enfants qui n'avaient forcément la possiblité de lire chez eux.</Text>
              </Col>
            </Row>

            <Title level={2}>Permis Vacances Travail en Nouvelle-Zélande</Title>
            <Row gutter={[16, 24]}>
              <Col xs={0} sm={0} md={0} lg={10} xl={12}>
                <img alt="NZ" src="../NZ.jpg" width="100%" height="350" />
              </Col>
              <Col xs={24} sm={24} md={0} lg={10} xl={11} offset={1}>
                <Text>En 2014-2015, j'ai effectué un année de césure en Nouvelle-Zélande dans le cadre du permis Vacances-Travail. Cette expérience a participé à mon ouverture d'esprit et à une plus grande maturité. J'ai profité de ce séjour pour renforcer mon anglais, une langue que je pratique toujours au quotidien.</Text>
              </Col>
            </Row>
          </div>
        </Content>
    </Layout>
  )
}

export default Perso