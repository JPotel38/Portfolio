import React from "react";
import {Col, Row, Tooltip} from 'antd';
import {init} from 'emailjs-com';

init('user_b1bVqK26JP7SBho787TKx');

export default function Contact() {

    return (
        <div id="contact">
            <Row>
                <Col offset={1} span={12}>
                    <Tooltip title="Ecrivez-moi !">
                        <address>
                            <a href="mailto:potel.jeremy@gmail.com">potel.jeremy@gmail.com</a>
                        </address>
                    </Tooltip>
                    <p>+33782736832</p>
                </Col>
            </Row>

        </div>
    );
};
