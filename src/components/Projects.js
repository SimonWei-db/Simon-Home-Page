import React, { useState, useEffect } from 'react';
import { Layout, Menu, Typography, Divider, BackTop, Drawer, Button, Select } from 'antd';
import { Link, Element } from 'react-scroll';
import { useIntl } from 'react-intl';
import './Projects.css';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Option } = Select;

const Projects = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const location = useLocation();

  // Dynamically import content based on locale
  const content = require(`../locales/projectsContent_${intl.locale.toUpperCase()}`).default;

  const getInitialProjectIndex = () => {
    const searchParams = new URLSearchParams(location.search);
    const projectIndex = parseInt(searchParams.get('project'), 10);
    return isNaN(projectIndex) ? 0 : projectIndex;
  };

  const [activeSection, setActiveSection] = useState('intro');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(getInitialProjectIndex());

  const currentProject = content.projects[currentProjectIndex];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const projectIndex = parseInt(searchParams.get('project'), 10);
    const index = isNaN(projectIndex) ? 0 : projectIndex;
    setCurrentProjectIndex(index);
    setActiveSection('intro');
  }, [intl.locale, location.search, content.projects]);

  const handleScroll = () => {
    const sections = Object.keys(currentProject).filter(key => key !== 'name');
    let active = 'intro';

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          active = section;
          break;
        }
      }
    }
    setActiveSection(active);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentProject]);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const handleProjectChange = (index) => {
    setCurrentProjectIndex(index);
    setActiveSection('intro'); // Reset to intro section on project change
    navigate(`?project=${index}`);
  };

  const renderSection = (section) => (
    <div key={section.title} className="section-card">
      <Title level={3} className="section-subTitle">{section.title}</Title>
      <Paragraph className="section-content">
        <div dangerouslySetInnerHTML={{ __html: section.content }} />
      </Paragraph>
      <Divider />
    </div>
  );

  return (
    <div className="projects-background">
      <div className="projects-sider ant-layout-sider-light" style={{ position: 'sticky', top: 0, alignSelf: 'flex-start', marginRight: '20px' }}>
        <span>{content.proContent}</span>
        <Menu
          mode="inline"
          selectedKeys={[activeSection]}
          style={{ height: '100%', borderRight: 0, marginTop: 20 }}
        >
          {Object.keys(currentProject).filter(key => key !== 'name').map(key => (
            <Menu.Item key={key}>
              <Link to={key} smooth={true} duration={500}>{currentProject[key].title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
      <div className="projects-overlay">
        <Button
          className="menu-button"
          type="primary"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        />
        <Drawer
          title={content.proContent}
          placement="left"
          closable={true}
          onClose={onClose}
          visible={drawerVisible}
        >
          <Menu
            mode="inline"
            selectedKeys={[activeSection]}
            style={{ height: '100%', borderRight: 0 }}
          >
            {Object.keys(currentProject).filter(key => key !== 'name').map(key => (
              <Menu.Item key={key}>
                <Link to={key} smooth={true} duration={500} onClick={onClose}>{currentProject[key].title}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
        <div className="project-select-sidebar" style={{ marginBottom: '20px' }}>
          <span>{content.dropdownPrompt}</span>
          <Select value={currentProjectIndex} style={{ width: '100%', marginTop: 10 }} onChange={handleProjectChange}>
            {content.projects.map((project, index) => (
              <Option key={index} value={index}>{project.name}</Option>
            ))}
          </Select>
        </div>
        <Content className="projects-content">
          <Title level={1} className="project-name">{currentProject.name}</Title>
          {Object.keys(currentProject).filter(key => key !== 'name').map(key => (
            <Element key={key} name={key} className="project-section" id={key}>
              <Title level={2} className="section-title">{currentProject[key].title}</Title>
              {currentProject[key].sections.map(renderSection)}
            </Element>
          ))}
        </Content>
        <BackTop />
      </div>
    </div>
  );
};

export default Projects;
