import React, { useState } from 'react';
import { Card, Row, Col, Typography, Form, Input, Button, Tooltip, message, Divider } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, LinkedinOutlined, GithubOutlined, CopyOutlined } from '@ant-design/icons';
import { useIntl } from 'react-intl';
import { useLanguage } from '../i18n'; // 引入 useLanguage 钩子
import './Contact.css';

const { Title, Paragraph } = Typography;

const Contact = () => {
  const [loading, setLoading] = useState(false); // 定义 loading 状态
  const intl = useIntl();
  const { locale } = useLanguage(); // 获取当前语言代码

  const copyToClipboard = (text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        message.success(intl.formatMessage({ id: 'contact.copySuccess' }));
      }).catch(err => {
        console.error('Failed to copy: ', err);
        message.error(intl.formatMessage({ id: 'contact.copyFailure' }));
      });
    } else {
      // Fallback method
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        message.success(intl.formatMessage({ id: 'contact.copySuccess' }));
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        message.error(intl.formatMessage({ id: 'contact.copyFailure' }));
      }
      document.body.removeChild(textArea);
    }
  };

  const handleFormSubmit = async (values) => {
    setLoading(true); // 设置 loading 状态为 true
    try {
      const response = await fetch('https://api.focal.simonoren.com/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, language: locale }), // 发送语言代码
      });

      const result = await response.json();

      if (response.ok) {
        const maxEmailsSent = result.emailCountByIp > result.emailCountByEmail ? result.emailCountByIp : result.emailCountByEmail;
        const messageKey = result.emailCountByIp > result.emailCountByEmail ? 'contact.ipEmailLimitMessage' : 'contact.addressEmailLimitMessage';
        message.success(`${intl.formatMessage({ id: 'contact.sendSuccess' })} ${intl.formatMessage({ id: messageKey }, { count: maxEmailsSent })}`);
      } else {
        const errorMsg = result.code ? intl.formatMessage({ id: `error.${result.code}` }) : result.message;
        message.error(errorMsg);
      }
    } catch (error) {
      message.error(intl.formatMessage({ id: 'contact.sendFailure' }));
    } finally {
      setLoading(false); // 设置 loading 状态为 false
    }
  };

  const handleFormSubmitFailed = (errorInfo) => {
    if (errorInfo.errorFields.some(field => field.name.includes('email'))) {
      message.error(intl.formatMessage({ id: 'contact.emailError' }));
    } else {
      message.error(intl.formatMessage({ id: 'contact.formError' }));
    }
  };
  const googleMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11562.098244554012!2d-79.7182822897376!3d43.4880379825551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b61f2250866ed%3A0x2e2e2a79c2e6c73c!2s348%20Wheat%20Boom%20Dr%2C%20Oakville%2C%20ON%20L6H3V6!5e0!3m2!1sen!2sca!4v1621364136782!5m2!1sen!2sca&hl=${locale === 'zh' ? 'zh-CN' : 'en'}`;


  return (
    <div className="contact-page">
      <div className="contact-background-container">
        <div className="contact-content-container">
          <Row justify="center" gutter={[16, 16]}>
            <Col xs={24} md={24} className="contact-title-container">
              <Title level={3} className="contact-title">{intl.formatMessage({ id: 'contact.title' })}</Title>
            </Col>
            <Col xs={24} md={12}>
              <Card className="contact-info-card" bordered={false}>
                <Title level={4} className="contact-info-title">
                  <MailOutlined className="contact-icon" /> {intl.formatMessage({ id: 'contact.email' })}
                  <Tooltip title={intl.formatMessage({ id: 'contact.copyEmail' })}>
                    <Button
                      type="link"
                      icon={<CopyOutlined />}
                      onClick={() => copyToClipboard('weixingchensimon@gmail.com')}
                    />
                  </Tooltip>
                </Title>
                <Paragraph>
                  <a href="mailto:weixingchensimon@gmail.com">weixingchensimon@gmail.com</a>
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="contact-info-card" bordered={false}>
                <Title level={4} className="contact-info-title">
                  <PhoneOutlined className="contact-icon" /> {intl.formatMessage({ id: 'contact.phone' })}
                </Title>
                <Paragraph>+1 (437) 878-0601</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="contact-info-card" bordered={false}>
                <Title level={4} className="contact-info-title">
                  <LinkedinOutlined className="contact-icon" /> {intl.formatMessage({ id: 'contact.linkedin' })}
                </Title>
                <Paragraph>
                  <a href="https://www.linkedin.com/in/xingchen-wei-732436308" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/xingchen-wei-732436308
                  </a>
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="contact-info-card" bordered={false}>
                <Title level={4} className="contact-info-title">
                  <GithubOutlined className="contact-icon" /> {intl.formatMessage({ id: 'contact.github' })}
                </Title>
                <Paragraph>
                  <a href="https://github.com/SimonWei-db" target="_blank" rel="noopener noreferrer">
                    github.com/SimonWei-db
                  </a>
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24}>
              <Divider />
            </Col>
            <Col xs={24} md={12}>
              <Card className="contact-form-card" bordered={false}>
                <Title level={4} className="contact-form-title">{intl.formatMessage({ id: 'contact.sendMessage' })}</Title>
                <Form
                  name="contact-form"
                  layout="vertical"
                  className="contact-form"
                  onFinish={handleFormSubmit}
                  onFinishFailed={handleFormSubmitFailed}
                >
                  <Form.Item
                    name="name"
                    label={intl.formatMessage({ id: 'contact.name' })}
                    rules={[{ required: true, message: intl.formatMessage({ id: 'contact.formError' }) }]}
                  >
                    <Input placeholder={intl.formatMessage({ id: 'contact.namePlaceholder' })} />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label={intl.formatMessage({ id: 'contact.email' })}
                    rules={[
                      { required: true, message: intl.formatMessage({ id: 'contact.formError' }) },
                      { type: 'email', message: intl.formatMessage({ id: 'contact.emailError' }) },
                    ]}
                  >
                    <Input type="email" placeholder={intl.formatMessage({ id: 'contact.emailPlaceholder' })} />
                  </Form.Item>
                  <Form.Item
                    name="message"
                    label={intl.formatMessage({ id: 'contact.message' })}
                    rules={[{ required: true, message: intl.formatMessage({ id: 'contact.formError' }) }]}
                  >
                    <Input.TextArea rows={6} placeholder={intl.formatMessage({ id: 'contact.messagePlaceholder' })} />
                  </Form.Item>
                  <Form.Item>
                    <Tooltip title={intl.formatMessage({ id: 'contact.sendMessage' })} placement="topLeft">
                      <Button type="primary" htmlType="submit" loading={loading}>
                        {intl.formatMessage({ id: 'contact.send' })}
                      </Button>
                    </Tooltip>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="contact-map-card" bordered={false}>
                <Title level={4} className="contact-info-title">
                  <EnvironmentOutlined className="contact-icon" /> {intl.formatMessage({ id: 'contact.address' })}
                  <Tooltip title={intl.formatMessage({ id: 'contact.copyAddress' })}>
                    <Button
                      type="link"
                      icon={<CopyOutlined />}
                      onClick={() => copyToClipboard('348 Wheat Boom Drive, Oakville, ON, L6H3V6')}
                    />
                  </Tooltip>
                </Title>
                <Paragraph>
                  348 Wheat Boom Drive, Oakville, ON, L6H3V6
                </Paragraph>
                <div className="map-container">
                  <iframe
                    src={googleMapUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Contact;
