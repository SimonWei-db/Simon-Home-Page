import React from 'react';
import { Menu } from 'antd';
import './Header.css';  // 确保路径正确

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Xingchen Wei</div>
      <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
        <Menu.Item key="2"><a href="/about">About</a></Menu.Item>
        <Menu.Item key="3"><a href="/projects">Projects</a></Menu.Item>
        <Menu.Item key="4"><a href="/contact">Contact</a></Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
