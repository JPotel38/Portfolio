import React from 'react'
import {Layout, Menu} from 'antd';
import {
    BookOutlined,
    DesktopOutlined,
    EuroCircleOutlined,
    GithubFilled,
    HomeOutlined,
    LinkedinFilled,
    RocketOutlined,
    ThunderboltOutlined
} from '@ant-design/icons';
import {Link} from 'react-router-dom'

const {Sider} = Layout;

export default function Nav() {

    return (
        <Sider
            breakpoint="md"
            collapsedWidth={0}>
            <Menu theme="dark" mode="inline" style={{paddingTop: 60, width: '100%'}}>
                <Menu.Item key="0" style={{height: 50, marginBottom: 50}} icon={<HomeOutlined style={{fontSize: 50}}/>}>
                    <Link to='/Portfolio'/>
                </Menu.Item>
                <Menu.Item key="1" icon={<BookOutlined style={{fontSize: 25}}/>}>
                    <Link to='/education'>Education</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined style={{fontSize: 25}}/>}>
                    <Link to='/projets'>Projets</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<EuroCircleOutlined style={{fontSize: 25}}/>}>
                    <Link to='/pro'>Emplois</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<RocketOutlined style={{fontSize: 25}}/>}>
                    <Link to='/perso'>Projets personnels</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<ThunderboltOutlined style={{fontSize: 25}}/>}
                           style={{height: 50, fontSize: 15}}>
                    <Link to='/game'>Game Zone</Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <a href="https://github.com/JPotel38" target="_blank" rel="noopener noreferrer">
                        <GithubFilled style={{color: '#92D050', fontSize: 25, marginTop: 10, marginBottom: 10}}/>Github</a>
                </Menu.Item>
                <Menu.Item key="7">
                    <a href="https://www.linkedin.com/in/jérémy-potel/" target="_blank" rel="noopener noreferrer">
                        <LinkedinFilled style={{color: 'blue', fontSize: 25, marginTop: 10,}}/>LinkedIn</a>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}
