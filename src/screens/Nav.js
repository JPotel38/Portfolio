import React from 'react'
import {Layout, Menu} from 'antd';
import {HomeOutlined, GithubFilled, LinkedinFilled} from '@ant-design/icons';
import {Link} from 'react-router-dom'

const {Header} = Layout;

export default function Nav() {

    return (
        <Header
            breakpoint="md"
            collapsedWidth={0}>
            <Menu mode="horizontal">
                <Menu.Item key="0" icon={<HomeOutlined/>}>
                    <Link to='/Portfolio'/>
                </Menu.Item>
                <Menu.Item key="1"><Link to='/education'>Education</Link>
                </Menu.Item>
                <Menu.Item key="2"><Link to='/projets'>Projets</Link>
                </Menu.Item>
                <Menu.Item key="3"><Link to='/pro'>Emplois</Link>
                </Menu.Item>
                <Menu.Item key="4"><Link to='/perso'>Projets personnels</Link>
                </Menu.Item>
                <Menu.Item key="5"><Link to='/game'>Game Zone</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
}
