import React, {useState} from "react";
import {Button, Col, Form, Input, message, Row, Tooltip, Typography} from 'antd';
import * as emailjs from 'emailjs-com';
import {init} from 'emailjs-com';

const {Title} = Typography;

require('dotenv').config()
init('user_b1bVqK26JP7SBho787TKx');

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

        emailjs.send('service_ig47v2i', 'template_ffsce2q', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                {
                    success()
                }
            });
    };

    return (
        <div id="contact">
            <Row>
                <Col offset={1} span={12}>
                    <Title level={2}>Contact</Title>
                </Col>
            </Row>
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
<Row>
    <Col offset={1}>
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 14}}
            validateMessages={validateMessages}
        >
            <Form.Item
                label="Nom"
                name="nom"
                rules={[{required: true, message: 'Veuillez entrer votre nom.'}]}
            >
                <Input
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="Entreprise"
                name="entreprise"
            >
                <Input
                    onChange={(e) => setCompany(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{required: true, type: 'email', message: 'Veuillez renseigner un email.'}]}
            >
                <Input
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="Téléphone"
                name="téléphone"
            >
                <Input
                    onChange={(e) => setPhone(e.target.value)}
                />
            </Form.Item>

            <Form.Item name={'message'} label="Message"
                       rules={[{required: true, message: 'Veuillez écrire un message.'}]}
            >
                <Input.TextArea
                    onChange={(e) => setMessage(e.target.value)}
                />
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 4}}>
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                    Envoyer
                </Button>
            </Form.Item>
        </Form>
    </Col>
</Row>

        </div>
    );
};