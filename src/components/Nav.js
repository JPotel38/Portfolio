import React from 'react'
import {Layout, Menu} from 'antd';
import {HashLink} from "react-router-hash-link";
import {GithubFilled, LinkedinFilled} from "@ant-design/icons";

const {Header} = Layout;

export default function Nav() {
    return (
        <Header
            breakpoint="md"
            collapsedWidth={0}>
            <Menu mode="horizontal">
                <Menu.Item key="0"><HashLink smooth to='/Portfolio'>Home</HashLink>
                </Menu.Item>
                <Menu.Item key="1"><HashLink smooth to='/Portfolio#education'>Education</HashLink>
                </Menu.Item>
                <Menu.Item key="2"><HashLink smooth to='/Portfolio#projets'>Projets</HashLink>
                </Menu.Item>
                <Menu.Item key="3"><HashLink smooth to='/Portfolio#pro'>Emplois</HashLink>
                </Menu.Item>
                <Menu.Item key="4"><HashLink smooth to='/Portfolio#perso'>Projets personnels</HashLink>
                </Menu.Item>
                <Menu.Item key="5"><HashLink smooth to='/Portfolio#contact'>Contact</HashLink>
                </Menu.Item>
                <Menu.Item key="6">
                    <GithubFilled id="github-icon">
                        <a href="https://github.com/JPotel38" target="_blank" rel="noopener noreferrer"/>
                    </GithubFilled>
                </Menu.Item>
                <Menu.Item key="7">
                    <LinkedinFilled id="linkedin-icon">
                        <a href="https://www.linkedin.com/in/jérémy-potel/" target="_blank" rel="noopener noreferrer"/>
                    </LinkedinFilled>
                </Menu.Item>
            </Menu>
        </Header>
    );
}
