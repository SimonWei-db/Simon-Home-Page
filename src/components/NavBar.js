import React from 'react';
import { Menu, Layout, Dropdown, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { GlobalOutlined } from '@ant-design/icons';
import { useIntl } from 'react-intl';
import { useLanguage } from '../i18n';

const { Header } = Layout;

const NavBar = () => {
  const intl = useIntl();
  const { switchLanguage, locale } = useLanguage();
  const location = useLocation();
  
  const getSelectedKey = () => {
    switch (location.pathname) {
      case '/about':
        return '2';
      case '/projects':
        return '3';
      case '/contact':
        return '4';
      default:
        return '1';
    }
  };

  const languageMenu = (
    <Menu>
      <Menu.Item key="en" onClick={() => switchLanguage('en')}>English</Menu.Item>
      <Menu.Item key="zh" onClick={() => switchLanguage('zh')}>中文</Menu.Item>
    </Menu>
  );

  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal" selectedKeys={[getSelectedKey()]} style={{ flex: 1 }}>
        <Menu.Item key="1">
          <Link to="/">{intl.formatMessage({ id: 'nav.home' })}</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">{intl.formatMessage({ id: 'nav.about' })}</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/projects">{intl.formatMessage({ id: 'nav.projects' })}</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/contact">{intl.formatMessage({ id: 'nav.contact' })}</Link>
        </Menu.Item>
      </Menu>
      <Dropdown overlay={languageMenu} placement="bottomRight">
        <Button type="text" icon={<GlobalOutlined style={{ fontSize: '18px' }} />} style={{ marginLeft: 'auto' }}>
          {locale.toUpperCase()}
        </Button>
      </Dropdown>
    </Header>
  );
};

export default NavBar;
