import React, { useState, useEffect } from 'react';
import { Typography, Input, Row, Col, Button, Layout, Modal } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Nav from './Sider';
import { SettingTwoTone } from '@ant-design/icons';

const { Title } = Typography;
const { Sider, Content } = Layout;


function Pendu() {

  const [points, setPoints] = useState(10);
  const [word, setWord] = useState('');
  const [hidden, setHidden] = useState();;
  const [valid, setValid] = useState(false);
  const [letter, setLetter] = useState('');
  const [finish, setFinish] = useState(false);

  var wordToFind = [];
  var splitWord;

  useEffect(() => {
    
    if (points == 0) {
      setFinish(true)
      Modal.error({
        content: 'Perdu !',
      })
}
  }, [points]);

  useEffect(() => {

    if(hidden != undefined && JSON.stringify(word) == JSON.stringify(hidden)){
          Modal.success({
            content: 'Gagné !'
          })
    }
  }, [letter]);

  

  function validWord() {
    if (word.length == 0) {
      alert("Choisissez un mot !");
    } else {
      splitWord = word.split("");
      setWord(splitWord)
      for (var i = 0; i < splitWord.length; i++) {
        wordToFind.push('_ ');
        setHidden(wordToFind)
      }
      setValid(true)
    }
  }

  function validLetter() {
      var index = word.indexOf(letter)
      if (index !== -1) {
        hidden.splice(index, 1, letter);
        console.log(hidden)
      } else {
        setPoints(points - 1)
      }
      setLetter('')
  }


  if (valid == true) {
    return (

        <Layout style={{ height: "100vh" }}>
          <Nav />
          <Layout style={{ heigth: "auto" }}>
            <Content style={{ margin: '24px 16px 0' }}>
              <div className="site-layout-background" style={{ padding: 24, height: "100%" }}>
                <Row>
                  <Col span={24}>
                    <Title>Pendu</Title>
                    <Title level={3}>Au deuxième joueur de deviner !</Title>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>Mot à trouver : {hidden.toString()}</p>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                  <Input type="text" maxLength="1" placeholder="Votre lettre" onChange={(e) => setLetter(e.target.value.toUpperCase())}
                    value={letter} />
                    <Button type="submit" style={{ marginTop: 20 }} onClick={() => validLetter()}>  Ok</Button>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                  <p>Points : {points}</p>
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
      )

  } else if( finish == true) {
    return (
      <Layout style={{ height: "100vh" }}>
          <Nav />
          <Layout style={{ heigth: "auto" }}>
            <Content style={{ margin: '24px 16px 0' }}>
              <div className="site-layout-background" style={{ padding: 24, height: "100%" }}>
                <Row>
                  <Col span={24}>
                  <Button className="button" shape="round" target="_blank" style={{ marginTop: 30, fontSize: 30 }}><Link to="/pendu">  Recommencer</Link></Button>
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
    )
} else {

    return (
      <Layout style={{ height: "100vh" }}>
          <Nav />
          <Layout style={{ heigth: "auto" }}>
            <Content style={{ margin: '24px 16px 0' }}>
              <div className="site-layout-background" style={{ padding: 24, height: "100%" }}>
                <Row>
                  <Col span={24}>
                    <Title>Pendu</Title>
                    <Title level={3}>Le premier joueur doit choisir le mot</Title>
                  </Col>
                </Row>
                <Row >
                  <Col span={6}>
                  <Input type="text" placeholder="Mot" onChange={(e) => setWord(e.target.value.toUpperCase())}
                value={word} />
                    <Button type="submit" style={{ marginTop: 20 }} onClick={() => validWord()}>  Ok</Button>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                  <p style={{ marginTop: 20 }}>Points : {points}</p>
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
    );
  }
}
export default Pendu;