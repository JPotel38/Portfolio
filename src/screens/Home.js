import React, {useState, useEffect} from 'react'
import { Layout, Divider, Row, Col, Button, Typography, Progress } from 'antd';
import { FilePdfOutlined, MailOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3Alt, faBootstrap, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import '../App.css';
import Nav from './Sider'


const { Title, Text } = Typography;
const { Content } = Layout;


function Home() {

const [html, setHtml] = useState(0);
const [css, setCss] = useState(0);
const [js, setJs] = useState(0);
const [boot, setBoot] = useState(0);
const [node, setNode] = useState(0);
const [react, setReact] = useState(0);

useEffect(() =>{
    
    const interval = setInterval(() => {
      setHtml(html => html + 5);
    }, 200);
      setTimeout(function( ) { clearInterval( interval ); }, 2800);
 
}, []);
console.log(html)

  return (
    <Layout style={{ height: "100vh" }}>
      <Nav />
      <Layout style={{ heigth: "auto" }}>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <div id="about-header" >
              <Row>
                <Col span={20}>
                  <Title> Jérémy Potel - Développeur web Fullstack junior</Title>
                </Col>
              </Row>
              <Row>
                <Col offset={6} span={15}>
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <Flip left>
                    <img src="../photo.jpg" alt='My face' style={{ borderRadius: "50%", width: "100%" }} />
                  </Flip>
                </Col>

                <Col span={16} offset={2}>
                  <Text><p>Gravitant dans l'univers du code depuis 2019 à travers l'apprentissage du COBOL,
                  je viens d'achever une formation intensive Javascript fullstack à <a href="https://www.lacapsule.academy/fr/">La Capsule Academy</a> pour enrichir mes compétences sur ce language qui me passionne. La Capsule propose un apprentissage à travers la réalisation de projets seuls ou en groupe.</p>
                    <p>Souhaitant continuer dans l'univers du Javascript, je suis à la recherche d'un stage ou d'un emploi en tant que Développeur full stack junior afin de gagner en autonomie.</p>
                  <p>Je parle couramment anglais et je possède un niveau conversationnel en espagnol.</p>
                  Ce site a été réalisé avec React et la librairie graphique Ant Design.
                  </Text>
                </Col>
              </Row>
              <Row>
                <Col span={16} offset={8}>
                  <Button className="button" shape="round"><a href="mailto:potel.jeremy@gmail.com"><MailOutlined style={{ fontSize: 30 }} />Me contacter</a></Button>
                </Col>
                </Row>
                <Row>
                <Col span={16} offset={8}>
                  <Button className="button" href="../CV.pdf" target="_blank" shape="round" style={{ fontSize: 30 }}> <FilePdfOutlined style={{ color: "red", fontSize: 30 }} />CV</Button>
                </Col>
              </Row>

            </div>
            <Divider />
            <Row>
              <Col span={3}>
                <Fade bottom>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    size="8x"
                    color="#EA5F25"
                    title="HTML"
                    marginLeft="5px"
                  />

                  <Progress
                    type="circle"
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#EA5F25',
                    }}
                    percent={html}
                  />
                </Fade>
              </Col>

              <Col span={3} offset={1}>
                <Fade bottom>
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
                    percent={65}
                  />
                </Fade>
              </Col>
              <Col span={3} offset={1}>
                <Fade bottom>
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
                    percent={60}
                  />
                </Fade>
              </Col>
              <Col span={3} offset={1}>
                <Fade bottom>
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    size="8x"
                    color="#563D7C"
                    title="Bootstrap"
                  />
                  <Progress
                    type="circle"
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#563D7C',
                    }}
                    percent={70}
                  />
                </Fade>
              </Col>
              <Col span={3} offset={1}>
                <Fade bottom>
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
                    percent={50}
                  />
                </Fade>
              </Col>
              <Col span={3} offset={1}>
                <Fade bottom>
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
                    percent={65}
                  />
                </Fade>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home
