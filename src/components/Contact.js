import React, {useState} from "react";
import {Button, Col, Form, Input, message, Row, Tooltip, Typography} from 'antd';
import * as emailjs from 'emailjs-com';
import {init} from 'emailjs-com';

const {Title} = Typography;

require('dotenv').config()
init(process.env.REACT_APP_EMAILJS_USERID);

const success = () => {
    message.success('Message envoyé');
};

export default function Contact() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const templateParams = {
            name,
            company,
            phone,
            email,
            message,
        };

        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAILJS_TEMPLATEID, templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                {
                    success()
                }
            });
    };

    return (
        <div id="contact">
            <Title>Contact</Title>
            <Row>
                <Col offset={8} span={4}>
                    <Tooltip title="Write to me !">
                        <address>
                            <a href="mailto:potel.jeremy@gmail.com">potel.jeremy@gmail.com</a>
                        </address>
                    </Tooltip>
                    <p>+33782736832</p>
                </Col>
            </Row>

            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 6}}
                validateMessages={validateMessages}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{required: true, message: 'Please input your name!'}]}
                >
                    <Input
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Company"
                    name="company"
                >
                    <Input
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{required: true, type: 'email', message: 'Please input your email!'}]}
                >
                    <Input
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="phone"
                >
                    <Input
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Item>

                <Form.Item name={'message'} label="Message"
                           rules={[{required: true, message: 'Entre a message'}]}
                >
                    <Input.TextArea
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 4}}>
                    <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};