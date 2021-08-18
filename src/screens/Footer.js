import {Col, Layout, Row} from 'antd';
import {GithubFilled, LinkedinFilled} from "@ant-design/icons";
import React from "react";

const { Footer} = Layout;

export default function MyFooter() {

    return (
        <Footer id='footer'>
            <Row>
                <Col offset={12} span={12}>
                <GithubFilled id="github-icon"/>
                <a href="https://github.com/JPotel38" target="_blank" rel="noopener noreferrer">Github</a>
                <LinkedinFilled id="linkedin-icon"/>
                <a href="https://www.linkedin.com/in/jérémy-potel/" target="_blank" rel="noopener noreferrer">
                    LinkedIn</a>
                </Col>
            </Row>
        </Footer>
    )
}


