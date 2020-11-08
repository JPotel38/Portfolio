import React from 'react'
import { Menu, Layout } from 'antd';
import { EuroCircleOutlined, BookOutlined, DesktopOutlined, ThunderboltOutlined, HomeOutlined, RocketOutlined, GithubFilled, LinkedinFilled } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom'


const { Sider } = Layout;

function Nav() {

  return (
    <Sider
    breakpoint ="md"
    collapsedWidth = {0}

    >
      <Menu theme="dark" mode="inline" style={{ paddingTop: 60, width: 200}}>
        
        <Menu.Item key="0" style={{ height: 50, marginBottom: 70 }} icon={<HomeOutlined style={{ fontSize: 50 }} />}>
          <Link to='/' />
        </Menu.Item>
        <Menu.Item key="1" icon={<BookOutlined style={{ fontSize: 25}} />} style={{ height: 75, fontSize: 20 }}  >
          <Link to='/education'>Education</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined style={{ fontSize: 25 }} />} style={{ height: 75, fontSize: 20 }}>
          <Link to='/projets'>Projets</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<EuroCircleOutlined style={{ fontSize: 25 }} />} style={{ height: 100, fontSize: 20}}>
          <Link to='/pro'>Expériences <br />professionnelles</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<RocketOutlined style={{ fontSize: 25 }} />} style={{ height: 100, fontSize: 20 }}  >
          <Link to='/perso'>Expériences <br /> personnelles</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<ThunderboltOutlined style={{ fontSize: 25 }} />} style={{ height: 50, fontSize: 20 }}  >
          <Link to='/game'>Game Zone</Link>
        </Menu.Item>
        <Menu.Item key="6" >
         <a href="https://github.com/JPotel38" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20 }}><GithubFilled style={{ color: '#92D050', fontSize: 40, marginBottom: 10 }} />Github</a>
         </Menu.Item>
         <Menu.Item key="7" >
        <a href="https://www.linkedin.com/in/jérémy-potel/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20 }}><LinkedinFilled style={{ color: 'blue', fontSize: 40 }} />LinkedIn</a>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Nav