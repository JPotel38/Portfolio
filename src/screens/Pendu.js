import React, {useEffect, useState} from 'react';
import {Button, Col, Input, Layout, Modal, Row, Typography} from 'antd';
import {Link} from 'react-router-dom';
import Nav from './Nav';

const {Title} = Typography;
const {Content} = Layout;

export default function Pendu() {

    const [points, setPoints] = useState(10);
    const [word, setWord] = useState('');
    const [hidden, setHidden] = useState();
    const [addLetter, setAddLetter] = useState(0)
    const [valid, setValid] = useState(false);
    const [letter, setLetter] = useState('');
    const [finish, setFinish] = useState(false);
    const [tabLetters, setTabLetters] = useState([]);

    const wordToFind = [];
    let splitWord;

    useEffect(() => {
        function ifFinish() {
            if (hidden !== undefined && JSON.stringify(word) === JSON.stringify(hidden)) {
                setValid(false);
                setFinish(true);
                Modal.success({
                    content: 'Gagné :)'
                });
            } else if (points === 0) {
                setValid(false);
                setFinish(true);
                Modal.error({
                    content: 'Perdu :('
                });
            }
        }

        ifFinish()
    }, [addLetter]);

    const validWord = () => {
        if (word.length === 0) {
            alert("Choisissez un mot !");
        } else {
            splitWord = word.split("");
            setWord(splitWord)
            for (let i = 0; i < splitWord.length; i++) {
                switch (splitWord[i]) {
                    case "Ä":
                        splitWord[i] = "A";
                        break;
                    case "À":
                        splitWord[i] = "A";
                        break;
                    case "Â":
                        splitWord[i] = "A";
                        break;
                    case "É":
                        splitWord[i] = "E";
                        break;
                    case "È":
                        splitWord[i] = "E";
                        break;
                    case "Ë":
                        splitWord[i] = "E";
                        break;
                    case "Ê":
                        splitWord[i] = "E";
                        break;
                    case "Ü":
                        splitWord[i] = "U";
                        break;
                    case "Ù":
                        splitWord[i] = "U";
                        break;
                    case "Û":
                        splitWord[i] = "U";
                        break;
                    case "Ú":
                        splitWord[i] = "U";
                        break;
                    case "Ô":
                        splitWord[i] = "O";
                        break;
                    case "Ö":
                        splitWord[i] = "O";
                        break;
                    case "Ï":
                        splitWord[i] = "I";
                        break;
                }
                if (splitWord[i] === "'") {
                    wordToFind.push("'")
                } else if (splitWord[i] === "-") {
                    wordToFind.push("-")
                } else {
                    wordToFind.push('_ ');
                }
                setHidden(wordToFind)
            }
            setValid(true)
        }
    }


    const validLetter = () => {
        if (letter === "ä" || letter === "à" || letter === "â") {
            setLetter("a")
        }

        switch (letter) {
            case "Ä":
                setLetter("A")
                break;
            case "À":
                setLetter("A")
                break;
            case "Â":
                setLetter("A")
                break;
            case "É":
                setLetter("E")
                break;
            case "È":
                setLetter("E")
                break;
            case "Ë":
                setLetter("E")
                break;
            case "Ê":
                setLetter("E")
                break;
            case "Ü":
                setLetter("U")
                break;
            case "Ù":
                setLetter("U")
                break;
            case "Û":
                setLetter("U")
                break;
            case "Ú":
                setLetter("U")
                break;
            case "Ô":
                setLetter("O")
                break;
            case "Ö":
                setLetter("O")
                break;
            case "Ï":
                setLetter("I")
                break;
        }
        if (letter !== '') {
            setTabLetters([...tabLetters, letter + ' ']);
            for (let i = 0; i < word.length; i++) {
                if (word[i].indexOf(letter) === 0) {
                    hidden.splice(i, 1, letter);
                    setAddLetter(addLetter + 1);
                }
            }
            if (word.indexOf(letter) === -1) {
                setPoints(points - 1);
                setAddLetter(addLetter + 1)
            }
            setLetter('');
        }
    }

    const again = () => {
        setValid(false);
        setFinish(false);
        setHidden('');
        setWord('');
        setTabLetters([]);
        setPoints(10);
    }

    if (valid) {
        return (
            <Layout>
                <Nav/>
                <Content style={{margin: '24px 16px 0'}}>
                    <Row>
                        <Col>
                            <Title>Pendu</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16} offset={8}>
                            <Title level={2}>Au deuxième joueur de deviner !</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16} offset={8}>
                            <p style={{fontSize: 30}}>Mot à trouver : {hidden.toString()}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16} offset={8}>
                            <p style={{fontSize: 30}}>Lettres utilisées : {tabLetters}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} offset={8}>
                            <Input type="text" maxLength="1" placeholder="Votre lettre"
                                   onChange={(e) => setLetter(e.target.value.toUpperCase())}
                                   value={letter}/>
                            <Button type="submit" style={{marginTop: 20}}
                                    onClick={validLetter}> Ok</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16} offset={8}>
                            <p style={{fontSize: 30}}>Points : {points}</p>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )

    } else if (finish) {
        return (
            <Layout style={{height: "100vh"}}>
                <Nav/>
                <Content style={{margin: '24px 16px 0'}}>
                    <Row>
                        <Col span={16} offset={8}>
                            <Button className="button" shape="round" target="_blank"
                                    style={{marginTop: 30, fontSize: 30}} onClick={again}><Link
                                to="/pendu"> Recommencer</Link></Button>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    } else {
        return (
            <Layout style={{height: "100vh"}}>
                <Nav/>
                <Content style={{margin: '24px 16px 0'}}>
                    <Row>
                        <Col>
                            <Title>Pendu</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={16} offset={8}>
                            <Title level={2}>Le premier joueur doit choisir le mot</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} offset={8}>
                            <Input type="text" placeholder="Mot"
                                   onChange={(e) => setWord(e.target.value.toUpperCase())}
                                   value={word}/>
                            <Button type="submit" style={{marginTop: 20}}
                                    onClick={validWord}> Ok</Button>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}