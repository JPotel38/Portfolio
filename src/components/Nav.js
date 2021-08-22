import React from 'react'
import {Layout, Menu} from 'antd';
import {HashLink} from "react-router-hash-link";

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
            </Menu>
        </Header>
    );
}
