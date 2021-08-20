import React, {useEffect, useState} from "react";
import {Col, Progress, Row, Typography} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCss3Alt, faHtml5, faJs, faNodeJs, faReact} from "@fortawesome/free-brands-svg-icons";
import Angular from "../images/Angular.svg";

const {Title} = Typography;

export default function Skills() {
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [js, setJs] = useState(0);
    const [angular, setAngular] = useState(0);
    const [node, setNode] = useState(0);
    const [react, setReact] = useState(0);

    useEffect(() => {
        if (html < 70) {
            setTimeout(function () {
                setHtml(prevHtml => prevHtml + 1);
            }, 10);
        }
    }, [html]);

    useEffect(() => {
        if (css < 50) {
            setTimeout(function () {
                setCss(prevCss => prevCss + 1);
            }, 10);
        }
    }, [css]);

    useEffect(() => {
        if (js < 70) {
            setTimeout(function () {
                setJs(prevJs => prevJs + 1);
            }, 10);
        }
    }, [js]);
    useEffect(() => {
        if (angular < 70) {
            setTimeout(function () {
                setAngular(prevAntd => prevAntd + 1);
            }, 10);
        }
    }, [angular]);

    useEffect(() => {
        if (node < 40) {
            setTimeout(function () {
                setNode(prevNode => prevNode + 1);
            }, 10);
        }
    }, [node]);

    useEffect(() => {
        if (react < 50) {
            setTimeout(() => {
                setReact(prevReact => prevReact + 1);
            }, 10);
        }
    }, [react]);

    return (
        <div>
            <Row>
                <Col><Title level={2}>Technologies : </Title></Col>
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
                        strokeColor='#EA5F25'
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
                        strokeColor='#016EB6'
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
                        strokeColor='#ebe834'
                        percent={js}
                        trailColor="#E5E5E5"
                    />

                </Col>
                <Col xs={24} sm={10} md={1} offset={3}>
                    <img src={Angular} title='Angular' alt='Angular Jérémy Potel'
                         style={{width: '8em'}}/>
                    <Progress
                        type="circle"
                        strokeColor='#d70622'
                        percent={angular}
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
                        strokeColor='#90C53F'
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
                        strokeColor='#61DBFB'
                        percent={react}
                        trailColor="#E5E5E5"
                    />
                </Col>
            </Row>
        </div>
    )
}