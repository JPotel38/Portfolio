import React from 'react'
import { Menu, Layout } from 'antd';
import { EuroCircleOutlined, BookOutlined, DesktopOutlined, HomeOutlined, RocketOutlined, GithubFilled, LinkedinFilled } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const { Sider } = Layout;

function Nav() {

  return (
    <Sider
      width="220"
      breakpoint="lg"
      collapsedWidth="0"
    >
      <Menu theme="dark" mode="inline" style={{ paddingTop: 70, width: 220, height: 680 }}>
        <Menu.Item key="0" style={{ height: "50px", marginBottom: 110 }} icon={<HomeOutlined style={{ fontSize: '50px' }} />}>
          <Link to='/' />
        </Menu.Item>
        <Menu.Item key="1" icon={<BookOutlined style={{ fontSize: "25px" }} />} style={{ height: "75px", fontSize: '20px' }}  >
          <Link to='/education'>Education</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined style={{ fontSize: "25px" }} />} style={{ height: "75px", fontSize: "20px" }}>
          <Link to='/projets'>Projets</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<EuroCircleOutlined style={{ fontSize: "25px" }} />} style={{ height: "100px", fontSize: "20px", paddingBottom: 30 }}>
          <Link to='/pro'>Expériences <br />professionnelles</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<RocketOutlined style={{ fontSize: "25px" }} />} style={{ height: "75px", fontSize: "20px" }}  >
          <Link to='/perso'>Expériences <br /> personnelles</Link>
        </Menu.Item>
      </Menu>
      <div style={{ marginLeft: 30 }}>
        <a href="https://github.com/JPotel38" target="_blank" rel="noopener noreferrer"><GithubFilled style={{ color: '#92D050', fontSize: 60, marginRight: 20 }} /></a>
        <a href="https://www.linkedin.com/in/jérémy-potel/" target="_blank" rel="noopener noreferrer"><LinkedinFilled style={{ color: 'blue', fontSize: 60 }} /></a>
      </div>
    </Sider>
  );
}

export default Nav