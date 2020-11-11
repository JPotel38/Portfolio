import React from 'react'
import { Layout, Typography, Tabs, Row, Col } from 'antd';
import Nav from './Sider'

const { Content } = Layout;
const { Title, Text } = Typography
const { TabPane } = Tabs;

function Pro() {

  return (
    <Layout style={{ height: "100vh" }}>
      <Nav />
      <Layout style={{ heigth: "auto" }}>
        <Content>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Row><Col span={24}><Title>Expériences professionnelles</Title></Col></Row>
            <Row>
              <Tabs defaultActiveKey="1" centered size="large" keyboard tabBarGutter={400} >
                <TabPane tab="2019" key="1">
                  <Row>
                    <Col>
                      <Text>
                        <p>Avril - Décembre</p>
                        <p>Ingénieur Etudes et Développement à Adaming Conseil - Lyon.</p>
                        <p>Prestataire externe Adaming Conseil pour Sopra Steria Limonest. Département monétique pour le compte du Crédit Agricole - Avril/ Septembre</p>
                        <ul>
                          <li>Développement COBOL/ Pacbase.</li>
                          <li>Manipulation de base de données DB2 avec SQL et d'écrans CICS.</li>
                          <li>Intégration de programmes.</li>
                          <li>Débuggage et gestion du bon fonctionnement des programmes.</li>
                          <li>Relation direct avec le client</li>
                        </ul>

                      </Text>
                    </Col>

                  </Row>

                </TabPane>
                <TabPane tab="2018" key="2">
                  <Row>
                    <Col>
                      <Text>
                        <p>Mars - Septembre</p>
                        <p>Rédacteur web à Bodas.net - Barcelone - Espagne.</p>
                        <ul>
                          <li>Gestion des contenus visuels et textuels du site.</li>
                          <li>Rédaction d'articles publicitaires destinés à promouvoir les entreprises des clients, optimisés pour Google Panda (SEO).</li>
                          <li>Veiller à ce que les entreprises présentées respectent des critères de qualité élevés : retouches d'images (Gimp) et de textes.</li>
                          <li>Renforcement de l'espagnol.</li>
                        </ul>

                      </Text>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="2017" key="3">
                  <Row>
                    <Col>
                      <Text>
                        <p>Mai - Aout : Epicier à l'Epicerie Equitable (stage Master 2) - Lyon.</p>
                        <ul>
                          <li>Accueil et conseil client sur des produits issus de l'agriculure biologique et du commerce équitable.</li>
                          <li>Encaissement.</li>
                          <li>Communication digitale et participation à l'oganisation d'événements.</li>
                        </ul>
                        <p> Septembre 2016 - Mai 2017 : Assistant d'éducation au lycée Jacques Brel - Vénissieux.</p>
                        <ul>
                          <li>Veiller au bien-être et à la sécurité des élèves.</li>
                          <li>Surveillance d'épreuves.</li>
                          <li>Tâches administratives.</li>
                        </ul>
                      </Text>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="Avant 2016" key="4">
                  <Row>
                    <Col>
                      <Text>
                        <ul>

                          <li>2015 : Horticulteur à PF Holsen à Blenheim - Nouvelle-Zélande</li>
                          <li>2015 : Commis de Cuisine au Pig and Whistle à Queenstown - Nouvelle-Zélande</li>
                          <li>2014 : Equipier à McDonald's Bellecour - Lyon</li>
                          <li>2014 : Animateur MJC et colonie de vacance à l'Arche de Noé - Lyon</li>
                          <li> Avant 2013 : Emplois d'été à la CERP, à la mairie de St Egreve (38), à Geodis ...</li>
                        </ul>
                      </Text>
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Pro