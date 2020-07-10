import React from 'react'
import { Layout, Row, Typography, Col } from 'antd';
import Sider from './Sider'
import Slider from "react-slick";

const { Content } = Layout;
const { Title, Text } = Typography;


function Perso(props) {

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
      <Sider />
      <Layout style={{ heigth: "auto" }}>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Row>
              <Col span={8}>
                <Title>Projets personnels</Title>
              </Col>
            </Row>
            <Slider {...settings}>
              <div data-index="1">
                <Title level={2}>KultureMania</Title>
                <Row>
                  <Col span={14}>

                    <img alt="KultureMania" src="../KultureMania.jpg" width="100%" height="350" />
                  </Col>
                  <Col span={8} offset={1}>
                    <Text>KultureMania est une webzine que j'ai créé en 2017. Je m'occupe de la rédaction d'articles sur les items de la culture contemporaine, ainsi que la communication sur les réseaux sociaux qui va avec (Facebook, Twitter, Instagram). Nous réalisions des podcasts en duo disponibles sur Deezer.</Text>
                  </Col>
                </Row>
              </div>
              <div>
                <Title level={2}>Futuréel Festival</Title>
                <Row>
                  <Col span={10}>
                    <img alt="Futuréel" src="../Futuréel.jpg" width="100%" height="350" />
                  </Col>
                  <Col span={8} offset={5}>
                    <Text> Le Futuréel Festival est un festival de musique que nous avons réalisé en juillet 2017. Etant alors un des cofondateurs, j'ai pris en charge la communication, l'administratif, le lien avec les artistes et la gestion lors de l'événement.</Text>
                  </Col>
                </Row>
              </div>
              <div>
                <Title level={2}>Service civique à l'AFEV</Title>
                <Row>
                  <Col span={12}>
                    <img alt="AFEV" src="../Afev.jpg" width="100%" height="350" />
                  </Col>
                  <Col span={8} offset={1}>
                    <Text> En 2016, j'ai effectué un service civique auprès de l'AFEV en tant que "Ambassadeur du Livre" dans une école de Lyon 5ème. Il s'agissait de donner le goût de la lecture aux enfants qui n'avaient forcément la possiblité de lire chez eux.</Text>
                  </Col>
                </Row>
              </div>
              <div>
                <Title level={2}>Permis Vacances Travail en Nouvelle-Zélande</Title>
                <Row>
                  <Col span={12}>
                    <img alt="NZ" src="../NZ.jpg" width="100%" height="350" />
                  </Col>
                  <Col span={8} offset={1}>
                    <Text>En 2014-2015, j'ai effectué un année de césure en Nouvelle-Zélande dans le cadre du permis Vacances-Travail. Cette expérience a participé à mon ouverture d'esprit et à une plus grande maturité. J'ai profité de ce séjour pour renforcer mon anglais, une langue que je pratique toujours au quotidien.</Text>
                  </Col>
                </Row>
              </div>
            </Slider>


          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Perso