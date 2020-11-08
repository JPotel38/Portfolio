import React, {useState} from 'react'
import { Layout, Timeline, Typography, Row, Col, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Nav from './Sider'

const { Content} = Layout;
const {Title, Text} = Typography

function Education() {

  const [details, setDetails] = useState(null)

  function capsule() {
    setDetails(<Text>La Capsule est un bootcamp de code qui dure onze semaines. L'objectif de cette formation est de délivrer les notions de base pour être un développeur Javascript fullstack. L'apprentissage tournait autour de la réalisation de projets, afin d'effectuer une solide montée en compétence.
      <p>Les technologies vues sont :</p>
      <Row>
        
        <Col span={8}>
          <Title level={4}>En Front-end :</Title>
        <ul>
          <li><strong>HTML</strong></li>
          <li><strong>CSS</strong></li>
          <li><strong>Javascript</strong></li>
          <li><strong>React.JS</strong></li>
          <li><strong>React Native et Expo</strong></li>
        </ul>
        </Col>
        <Col span={8}>
        <Title level={4}>En Back-end :</Title>
        <ul>
          <li><strong>Node.JS</strong></li>
          <li><strong>Express</strong></li>
        </ul>
        </Col>
        <Col span={8}>
        <Title level={4}>Design et responsive :</Title>
        <ul>
          <li><strong>Bootstrap</strong></li>
          <li><strong>Reactstrap</strong></li>
          <li><strong>Ant Design</strong></li>
        </ul>
        </Col>
     </Row>
      </Text>)
  }
  function adaming() {
    setDetails(<Text> Durant onze semaines, j'ai suivi la formation délivrée par Adaming Conseil. Nous avons autant travaillé sur la pratique que sur la théorie du développement informatique.
      Durant cette formation, j'ai pu apprendre le développement en COBOL, la création et la manipulation d'écrans CICS et l'utilisation de base de données SQL. Les journées alliaient cours le matin et exercices pratiques l'après midi.
    
    </Text>)
  }
  function master2() {
    setDetails(<Text> Mention assez bien. Mémoire sur les thèmes de l'agriculture biologique, du commerce équitable, des énergies renouvelables et de l'économie circulaire, leurs applications et leurs potentiels.
  </Text>)
  }


return (
   <Layout style={{height : "100vh"}}>
  <Nav/>
    <Layout style={{heigth : "auto"}}>
      <Content>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
    <Row><Col span={24}><Title> Education </Title></Col> </Row>
  <Row>

   
  <Timeline mode={"left"}>
    <Timeline.Item label="2020"><Text >Bootcamp Javascript Full stack à La Caspule, Lyon.</Text><Button style={{marginLeft:5}} onClick={() => {capsule()}}><SearchOutlined /></Button></Timeline.Item>
    <Timeline.Item label="2019"><Text >Formation ingénieur Etudes et Développement Mainframe - Adaming Conseil, Lyon.</Text><Button style={{marginLeft:5}} onClick={() => {adaming()}}><SearchOutlined /></Button></Timeline.Item> 
    <Timeline.Item label="2017"><Text >Master 2 Relations Internationales spécialité Francophonie et Développement Durable - Lyon 3.</Text><Button style={{marginLeft:5}} onClick={() => {master2()}}><SearchOutlined /></Button></Timeline.Item>
    <Timeline.Item label="2014"><Text >Master 1 Histoire Moderne et Contemporaine - Lyon 2.</Text></Timeline.Item>
    <Timeline.Item label="2012"><Text >Licence Histoire - Université Pierre Mendès France, Grenoble.</Text></Timeline.Item>
    <Timeline.Item label="2008"><Text >Bac Economique et Social - Lycée Champollion, Grenoble.</Text></Timeline.Item>
  </Timeline>

  <Col>
      {details}
  </Col>
  </Row>
        </div>
      </Content>
    </Layout>
  </Layout>
)
}

export default Education