import React, {useState, useEffect} from 'react'
import { Layout, Row, Col, Button, Typography, Progress } from 'antd';
import { FilePdfOutlined, MailOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Flip from 'react-reveal/Flip';
import '../App.css';
import Nav from './Sider'


const { Title, Text } = Typography;
const { Content } = Layout;


function Home() {

const [html, setHtml] = useState(0);
const [css, setCss] = useState(0);
const [js, setJs] = useState(0);
const [antd, setAntd] = useState(0);
const [node, setNode] = useState(0);
const [react, setReact] = useState(0);

useEffect(() =>{
if(html < 70){
  setTimeout(function(){ setHtml(prevHtml => prevHtml + 1); }, 10);
};
}, [html]);

useEffect(() =>{
  if(css < 65){
    setTimeout(function(){ setCss(prevCss => prevCss + 1); }, 10);
  };
  }, [css]);

useEffect(() =>{
  if(js < 60){
    setTimeout(function(){ setJs(prevJs => prevJs + 1); }, 10);
  };
}, [js]);
useEffect(() =>{
  if(antd < 65){
    setTimeout(function(){ setAntd(prevAntd => prevAntd + 1); }, 10);
  };
}, [antd]);

useEffect(() =>{
  if(node < 50){
    setTimeout(function(){ setNode(prevNode => prevNode + 1); }, 10);
  };
}, [node]);

useEffect(() =>{
  if(react < 55){
    setTimeout(() => { setReact(prevReact => prevReact + 1); }, 10);
  };
}, [react]);

  return (
    <Layout style={{ height: "100vh" }}>
      <Nav />
      <Layout style={{ heigth: "auto" }}>
        <Content>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <div id="about-header" >
              <Row>
                <Col span={24}>
                  <Title> Jérémy Potel - Développeur web Fullstack junior - Javascript/ Node/ React.JS</Title>
                </Col>
              </Row>
              <Row>
                <Col offset={6} span={15}>
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <Flip left>
                    <img src="../photo.jpg" alt='Jérémy Potel' style={{ borderRadius: "50%", width: "100%" }} />
                  </Flip>
                </Col>
                <Col span={16} offset={2}>
                  <Text><p>Gravitant dans l'univers du code depuis 2019 à travers l'apprentissage du COBOL,
                  je viens d'achever une formation intensive Javascript fullstack à <a href="https://www.lacapsule.academy/fr/">La Capsule Academy</a> pour enrichir mes compétences <strong>HTML</strong>/ <strong>CSS</strong>/ <strong>Javascript</strong>/ <strong>React.JS</strong> et <strong>Node.JS</strong>. La Capsule propose un apprentissage à travers la réalisation de projets seuls ou en groupe.</p>
                    <p>Souhaitant continuer dans l'univers du Javascript, je suis en alternance avec School By Hi!t, chez Energy Pool en tant que développeur fullstack <strong>Java</strong>/ <strong>Angular</strong>.</p>
                  <p>Je parle couramment anglais et je possède un niveau conversationnel en espagnol.</p>
                  <p>Ce site a été réalisé en React et avec la librairie graphique Ant Design.</p>
                  </Text>
                </Col>
              </Row>
              {/* <Row>
                <Col xs={24} sm={24} md={16} offset={8}>
                  <Button className="button" shape="round"><a href="mailto:potel.jeremy@gmail.com"><MailOutlined style={{ fontSize: 30 }} />  Me contacter</a></Button>
                  <Button className="button" href="../CV.pdf" target="_blank" shape="round" style={{ fontSize: 30 }}> <FilePdfOutlined style={{ color: "red", fontSize: 30 }} />CV</Button>
                </Col>
              </Row> */}
            </div>
            <Row style={{marginTop: "50px"}}>
              <Col><Title level={2}>Mes compétences en développement web</Title></Col>
              </Row>
              <Row>
              <Col xs={24} sm={10} md={1} offset={1}>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    size="8x"
                    color="#EA5F25"
                    title="HTML"
                  />

                  <Progress
                    type="circle"
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#EA5F25',
                    }}
                    percent={html}
                    trailColor="#E5E5E5"
                  />
              </Col>

              <Col xs={24} sm={10} md={1} offset={3}>
  
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    size="8x"
                    color="#016EB6"
                    title="CSS"
                  />
                  <Progress
                    type="circle"
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#016EB6',
                    }}
                    percent={css}
                    trailColor="#E5E5E5"
                  />

              </Col>
              <Col xs={24} sm={10} md={1} offset={3}>
       
                  <FontAwesomeIcon
                    icon={faJs}
                    size="8x"
                    color="#ebe834"
                    title="Javascript"
                  />
                  <Progress
                    type="circle"
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#ebe834',
                    }}
                    percent={js}
                    trailColor="#E5E5E5"
                  />
       
              </Col>
              <Col xs={24} sm={10} md={1} offset={3}>
              <img src="../antd.svg" title='Ant Design' alt='Ant Design Jérémy Potel' style={{ minWidth: "98px", maxWidth: "98px", marginBottom:"8px" }} />
                  <Progress
                    type="circle"
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#563D7C',
                    }}
                    percent={antd}
                    trailColor="#E5E5E5"
                  />
     
              </Col>
              <Col xs={24} sm={10} md={1} offset={3}>
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    size="8x"
                    color="#90C53F"
                    title="Node.JS"
                  />
                  <Progress
                    type="circle"
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#90C53F',
                    }}
                    percent={node}
                    trailColor="#E5E5E5"
                  />
              </Col>
              <Col xs={24} sm={10} md={1} offset={3}>
                  <FontAwesomeIcon
                    icon={faReact}
                    size="8x"
                    color="#61DBFB"
                    title="React"
                  />
                  <Progress
                    type="circle"
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#61DBFB',
                    }}
                    percent={react}
                    trailColor="#E5E5E5"
                  />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home
