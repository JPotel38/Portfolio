import React from 'react'
import { Layout, Row, Typography, Col } from 'antd';
import Nav from './Sider'

const { Content } = Layout;
const { Title, Text } = Typography;


function Perso() {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Nav />
      <Layout style={{ heigth: "auto" }}>
        <Content>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Row>
              <Col span={8}>
                <Title>Projets personnels</Title>
              </Col>
            </Row>
              <div data-index="1">
                <Title level={2}>KultureMania</Title>
                <Row>
                <Col xs={0} sm={0} md={0} lg={10} xl={12}>
                    <img alt="KultureMania Jérémy Potel" src="../KultureMania.jpg" width="100%" height="350" />
                  </Col>
                  <Col xs={24} sm={24} md={8} lg={10} xl={11} offset={1}>
                    <Text><a href="https://kulturemania.blog/">KultureMania</a> est une webzine que j'ai créé en 2017. Je m'occupe de la rédaction d'articles sur les items de la culture contemporaine, ainsi que la communication sur les réseaux sociaux (Facebook, Twitter, Instagram). Nous réalisons des podcasts en duo disponibles sur Deezer.</Text>
                  </Col>
                </Row>
              </div>
              <div>
                <Title level={2}>Futuréel Festival</Title>
                <Row>
                <Col xs={0} sm={0} md={0} lg={10} xl={11}>
                    <img alt="Futuréel Jérémy Potel" src="../Futuréel.jpg" width="100%" height="350" />
                  </Col>
                  <Col xs={24} sm={24} md={0} lg={10} xl={11} offset={1}>
                    <Text> Le <a href="https://www.facebook.com/futureelfestival/">Futuréel Festival</a> est un festival de musique que nous avons réalisé en juillet 2017. Etant alors un des cofondateurs, j'ai pris en charge la communication, l'administratif, le lien avec les artistes et la gestion lors de l'événement.</Text>
                  </Col>
                </Row>
              </div>
              <div>
                <Title level={2}>Service civique à l'AFEV</Title>
                <Row>
                <Col xs={0} sm={0} md={0} lg={10} xl={12}>
                    <img alt="AFEV Jérémy Potel" src="../Afev.jpg" width="100%" height="350" />
                  </Col>
                  <Col xs={24} sm={24} md={8} lg={10} xl={11} offset={1}>
                    <Text> En 2016, j'ai effectué un service civique auprès de <a href="http://afev.org/">l'AFEV</a> en tant que "Ambassadeur du Livre" dans une école de Lyon 5ème. Il s'agissait de donner le goût de la lecture aux enfants qui n'avaient forcément la possiblité de lire chez eux.</Text>
                  </Col>
                </Row>
              </div>
              <div>
                <Title level={2}>Permis Vacances Travail en Nouvelle-Zélande</Title>
                <Row>
                <Col xs={0} sm={0} md={0} lg={10} xl={12}>
                    <img alt="Nouvelle-Zélande Jérémy Potel" src="../NZ.jpg" width="100%" height="350" />
                  </Col>
                  <Col xs={24} sm={24} md={0} lg={10} xl={11} offset={1}>
                    <Text>En 2014-2015, j'ai effectué un année de césure en Nouvelle-Zélande dans le cadre du permis Vacances-Travail. Cette expérience a participé à mon ouverture d'esprit et à une plus grande maturité. J'ai profité de ce séjour pour renforcer mon anglais, une langue que je pratique toujours au quotidien.</Text>
                  </Col>
                </Row>
              </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Perso