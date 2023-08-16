import React from 'react'
import {Col, Layout, Row, Typography} from 'antd';
import {GithubFilled} from '@ant-design/icons';
import blackboard from '../images/BlackBoard.png';

const {Content} = Layout;
const {Title} = Typography;

export default function Blackboard() {

    return (
        <Layout>
            <Content style={{margin: '24px 16px 0'}}>
                <Row>
                    <Col span={12}>
                        <Title>Black Board</Title>
                    </Col>
                    <Col span={3} offset={3}>
                        <a href="https://github.com/JPotel38/BlackBoard" target="_blank"
                           rel="noopener noreferrer" style={{color: '#92D050', fontSize: "50px"}}>
                            <GithubFilled/></a>
                    </Col>
                </Row>

                <Row>
                    <Col xs={0} sm={0} md={15}>
                        <a href="https://blackboard-69.herokuapp.com/Blackboard.tsx" target="_blank"
                           rel="noopener noreferrer">
                            <img alt="BlackBoard" src={blackboard} width="100%"/>
                        </a>
                    </Col>
                    <Col offset={2} xs={22} sm={22} md={7}>
                        <p>Black Board est un projet qui met en place la data vision. Ce projet a necéssité
                            l'utilisation de clés étrangères/ sous-documents, ainsi que l'agrégation de données.</p>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}
