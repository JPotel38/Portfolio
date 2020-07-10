import React, {useState} from 'react'
import { Layout, Timeline, Typography, Row, Col, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Sider from './Sider'

const { Content} = Layout;
const {Title, Text} = Typography

function Education(props) {

  const [details, setDetails] = useState()

  function capsule() {
    setDetails(<Text>La Capsule est un bootcamp de code qui dure onze semaines. L'objectif de cette formation est de délivrer les notions de base pour être un développeur Javascript fullstack. L'apprentissage tournait autour de la réalisation de projets, afin d'effectuer une solide montée en compétence.
      <p>Les technologies vues sont :</p>
      <Row>
        
        <Col span={6}>
          <Title level={4}>En Front :</Title>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React.JS</li>
          <li>React Native via Expo</li>
        </ul>
        </Col>
        <Col span={6}>
        <Title level={4}>En Back :</Title>
        <ul>
        <li>Javascript</li>
          <li>Node.JS</li>
          <li>Express</li>
        </ul>
        </Col>
        <Col span={6}>
        <Title level={4}>Design et responsive :</Title>
        <ul>
        <li>Bootstrap</li>
          <li>Reactstrap</li>
          <li>Ant Design</li>
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
  <Sider/>
    <Layout style={{heigth : "auto"}}>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
    <Row><Col span={24}><Title> Education </Title></Col> </Row>
  <Row>
    <Col span={12}>
   
  <Timeline mode={"left"}>
    <Timeline.Item label="2020"><Text >Bootcamp Javascript Full stack à La Caspule</Text><Button style={{marginLeft:5}} onClick={() => {capsule()}}><SearchOutlined /></Button></Timeline.Item>
    <Timeline.Item label="2019"><Text >Formation ingénieur Etudes et Développement Mainframe</Text><Button style={{marginLeft:5}} onClick={() => {adaming()}}><SearchOutlined /></Button></Timeline.Item> 
    <Timeline.Item label="2017"><Text >Master 2 Relations Internationales spécialité Francophonie et Développement Durable</Text><Button style={{marginLeft:5}} onClick={() => {master2()}}><SearchOutlined /></Button></Timeline.Item>
    <Timeline.Item label="2014" ><Text  >Master 1 Histoire Moderne et Contemporaine</Text></Timeline.Item>
    <Timeline.Item label="2012" ><Text >Licence Histoire</Text></Timeline.Item>
    <Timeline.Item label="2008" ><Text  >Bac Economique et Social</Text></Timeline.Item>
  </Timeline>
  </Col>
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