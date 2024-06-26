import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { useIntl } from 'react-intl';
import './Home.css';
import profileImage from '../assets/images/profile.jpg';
import profileImage1 from '../assets/images/profile1.jpg';
import profileImage2 from '../assets/images/profile2.jpg';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const intl = useIntl();

  const showModal = () => {
    setIsModalVisible(true);
    setCurrentImageIndex(1);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(currentImageIndex === 1 ? 2 : 1);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(currentImageIndex === 1 ? 2 : 1);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentImageIndex(1);
  };

  return (
    <div className="home-container-custom">
      <div className="background-image-container-custom">
        <div className="background-content-custom">
          <h1 className="home-title-custom">
            {intl.formatMessage({ id: 'home.title' })}
          </h1>
          <div className="intro-container-custom">
            <img src={profileImage} alt="Profile" className="profile-image-custom" onClick={showModal} />
            <div className="intro-text-custom">
              <p className="home-paragraph-custom">
                {intl.formatMessage({ id: 'home.intro' })}
              </p>
            </div>
          </div>
          <div className="icon-container-custom">
            <Button shape="circle" icon={<GithubOutlined />} size="large" href="https://github.com/SimonWei-db" target="_blank" style={{ margin: '0 10px' }} />
            <Button shape="circle" icon={<LinkedinOutlined />} size="large" href="https://www.linkedin.com/in/xingchen-wei-732436308" target="_blank" style={{ margin: '0 10px' }} />
          </div>
        </div>
      </div>
      <div className="card-container">
        <Row justify="center" gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col xs={24} sm={12} md={8}>
            <Link to="/projects">
              <Card
                hoverable
                cover={<img alt="Projects" src="1.jpg" className="card-image-custom" />}
                className="custom-card-custom"
              >
                <Card.Meta title={intl.formatMessage({ id: 'home.projects' })} description={intl.formatMessage({ id: 'home.projects.description' })} />
              </Card>
            </Link>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Link to="/about">
              <Card
                hoverable
                cover={<img alt="About Me" src="2.jpg" className="card-image-custom" />}
                className="custom-card-custom"
              >
                <Card.Meta title={intl.formatMessage({ id: 'home.about' })} description={intl.formatMessage({ id: 'home.about.description' })} />
              </Card>
            </Link>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Link to="/contact">
              <Card
                hoverable
                cover={<img alt="Contact" src="3.jpg" className="card-image-custom" />}
                className="custom-card-custom"
              >
                <Card.Meta title={intl.formatMessage({ id: 'home.contact' })} description={intl.formatMessage({ id: 'home.contact.description' })} />
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <div style={{ textAlign: 'center' }}>
          {currentImageIndex === 1 ? (
            <div>
              <img src={profileImage1} alt="Profile" style={{ width: '100%' }} />
              <Button onClick={handleNextImage} size="large" style={{ marginTop: '10px', backgroundColor: '#1890ff', color: 'white', border: 'none' }}>
                {intl.formatMessage({ id: 'home.modal.next' })}
              </Button>
            </div>
          ) : (
            <div>
              <h2 style={{ marginBottom: '10px', fontSize: '24px', fontWeight: 'bold' }}>{intl.formatMessage({ id: 'home.modal.dog' })}</h2>
              <img src={profileImage2} alt="Profile" style={{ width: '100%' }} />
              <Button onClick={handlePrevImage} size="large" style={{ marginTop: '10px', backgroundColor: '#1890ff', color: 'white', border: 'none' }}>
                {intl.formatMessage({ id: 'home.modal.prev' })}
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Home;
