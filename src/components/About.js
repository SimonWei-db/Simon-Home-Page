import React, { useState } from 'react';
import { Card, Row, Col, Typography, Divider, Tabs, Button, Tooltip } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { useIntl } from 'react-intl';
import './About.css';

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

const About = () => {
  const [isProjectCollapsed, setIsProjectCollapsed] = useState(true);
  const [isAchievementsCollapsed, setIsAchievementsCollapsed] = useState(true);
  const [isCampusActivitiesCollapsed, setIsCampusActivitiesCollapsed] = useState(true);
  const [isByteDanceCollapsed, setIsByteDanceCollapsed] = useState(true);
  const [isQiAnXinCollapsed, setIsQiAnXinCollapsed] = useState(true);
  const [isTeachingAssistantCollapsed, setIsTeachingAssistantCollapsed] = useState(true);
  const [isLabHomepageCollapsed, setIsLabHomepageCollapsed] = useState(true);
  const [isStandaloneCollapsed, setIsStandaloneCollapsed] = useState(true);

  const intl = useIntl();

  // Dynamically import content based on locale
  const content = require(`../locales/aboutContent_${intl.locale.toUpperCase()}`).default;

  const toggleProjectCollapse = () => {
    setIsProjectCollapsed(!isProjectCollapsed);
  };

  const toggleAchievementsCollapse = () => {
    setIsAchievementsCollapsed(!isAchievementsCollapsed);
  };

  const toggleCampusActivitiesCollapse = () => {
    setIsCampusActivitiesCollapsed(!isCampusActivitiesCollapsed);
  };

  const toggleByteDanceCollapse = () => {
    setIsByteDanceCollapsed(!isByteDanceCollapsed);
  };

  const toggleQiAnXinCollapse = () => {
    setIsQiAnXinCollapsed(!isQiAnXinCollapsed);
  };

  const toggleTeachingAssistantCollapse = () => {
    setIsTeachingAssistantCollapsed(!isTeachingAssistantCollapsed);
  };

  const toggleLabHomepageCollapse = () => {
    setIsLabHomepageCollapsed(!isLabHomepageCollapsed);
  };

  const toggleStandaloneCollapse = () => {
    setIsStandaloneCollapsed(!isStandaloneCollapsed);
  };

  const collapsibleSection = (title, isCollapsed, toggleCollapse, content_show) => (
    <div className="custom-collapse">
      <Tooltip title={isCollapsed ? content.tooltips.expand : content.tooltips.collapse} placement="topLeft">
        <div className="custom-collapse-header" onClick={toggleCollapse}>
          <Paragraph>
            <span><strong>{title}</strong></span>
            <Button type="link" icon={isCollapsed ? <DownOutlined /> : <UpOutlined />} />
          </Paragraph>
        </div>
      </Tooltip>
      {!isCollapsed && (
        <div className="custom-collapse-content">
          {content_show.split('\n').map((line, index) => {
            const parts = line.split('\\: ');
            return (
              <React.Fragment key={index}>
                <div>
                  {parts.length > 1 ? (
                    <>
                      <Text strong>{parts[0]}:</Text> {parts.slice(1).join(': ')}
                    </>
                  ) : (
                    <span>{line}</span>
                  )}
                </div>
                {index < content_show.split('\n').length - 1 && <Divider className="custom-divider" />}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <div className="about-page">
      <div className="about-background-container">
        <div className="about-content-container">
          <Row justify="center">
            <Col span={24}>
              <Tabs defaultActiveKey="1" centered>
                <TabPane tab={content.tabs.education} key="1">
                  <div className="about-tab-content">
                    <Card className="about-card" bordered={false}>
                      <Title level={4} className="about-title-with-logo">
                        <img src="mcmaster_university_logo.jpg" alt="McMaster University" className="about-school-logo" /> {content.education.mcmaster.title}
                      </Title>
                      <Paragraph>
                        <Text strong italic>{content.education.mcmaster.degree}</Text> ({content.education.mcmaster.period})
                      </Paragraph>
                      <Paragraph>
                        <strong>{content.labels.keyCourses}:</strong> {content.education.mcmaster.keyCourses}
                      </Paragraph>
                      <Divider />
                      <Title level={4} className="about-title-with-logo">
                        <img src="cnu.jpg" alt="Capital Normal University" className="about-school-logo" /> {content.education.cnu.title}
                      </Title>
                      <Paragraph>
                        <Text strong italic>{content.education.cnu.degree}</Text> ({content.education.cnu.period})
                      </Paragraph>
                      <Paragraph>{content.labels.specialization}: <strong>{content.education.cnu.specialization}</strong></Paragraph>
                      <Paragraph><strong>{content.labels.gpa}:</strong> {content.education.cnu.gpa}</Paragraph>
                      {collapsibleSection(
                        content.labels.academicAchievements,
                        isAchievementsCollapsed,
                        toggleAchievementsCollapse,
                        content.education.cnu.achievements
                      )}
                      {collapsibleSection(
                        content.labels.projectFeatureExtraction,
                        isProjectCollapsed,
                        toggleProjectCollapse,
                        content.education.cnu.project
                      )}
                      <Divider />
                      <Title level={4} className="about-title-with-logo">
                        <img src="liu.jpg" alt="Linköping University" className="about-school-logo" /> {content.education.liu.title}
                      </Title>
                      <Paragraph>
                        <Text strong italic>{content.education.liu.degree}</Text> ({content.education.liu.period})
                      </Paragraph>
                      <Paragraph>
                        <strong>{content.labels.courses}:</strong> {content.education.liu.keyCourses}
                      </Paragraph>
                      <Divider />
                      <Title level={4} className="about-title-with-logo">
                        <img src="djtu.jpg" alt="Dalian Jiaotong University" className="about-school-logo" /> {content.education.djtu.title}
                      </Title>
                      <Paragraph>
                        <Text strong italic>{content.education.djtu.degree}</Text> ({content.education.djtu.period})
                      </Paragraph>
                      <Paragraph><strong>{content.labels.gpa}:</strong> {content.education.djtu.gpa}</Paragraph>
                      {collapsibleSection(
                        content.labels.campusActivities,
                        isCampusActivitiesCollapsed,
                        toggleCampusActivitiesCollapse,
                        content.education.djtu.activities
                      )}
                    </Card>
                  </div>
                </TabPane>
                <TabPane tab={content.tabs.workExperience} key="2">
                  <div className="about-tab-content">
                    <Card className="about-card" bordered={false}>
                      <Title level={4} className="about-title-with-logo">
                        <img src="bytedance_logo.jpg" alt="ByteDance" className="about-company-logo" /> {content.workExperience.bytedance.title}
                      </Title>
                      <Paragraph>
                        <Text strong italic>{content.workExperience.bytedance.position}</Text> ({content.workExperience.bytedance.period})
                      </Paragraph>
                      <Paragraph><strong>{content.labels.productDevelopmentParticipation}:</strong> {content.workExperience.bytedance.participation}</Paragraph>
                      <Paragraph><Text italic>{content.workExperience.bytedance.overview}</Text></Paragraph>
                      <Paragraph><strong>{content.labels.projectOverview}:</strong> {content.workExperience.bytedance.details}</Paragraph>
                      <Paragraph><strong>{content.labels.technologyStack}:</strong> {content.workExperience.bytedance.techStack}</Paragraph>
                      {collapsibleSection(
                        content.labels.roleProjectOwner,
                        isByteDanceCollapsed,
                        toggleByteDanceCollapse,
                        content.workExperience.bytedance.role
                      )}
                      <Divider />
                      <Title level={4} className="about-title-with-logo">
                        <img src="qi_an_xin_group_logo.jpg" alt="Qi An Xin Technology Group" className="about-company-logo" /> {content.workExperience.qianxin.title}
                      </Title>
                      <Paragraph>
                        <Text strong italic>{content.workExperience.qianxin.position}</Text> ({content.workExperience.qianxin.period})
                      </Paragraph>
                      <Paragraph><strong>{content.labels.productDevelopmentParticipation}:</strong> {content.workExperience.qianxin.participation}</Paragraph>
                      <Paragraph><Text italic>{content.workExperience.qianxin.overview}</Text></Paragraph>
                      <Paragraph><strong>{content.labels.projectOverview}:</strong> {content.workExperience.qianxin.details}</Paragraph>
                      <Paragraph><strong>{content.labels.technologyStack}:</strong> {content.workExperience.qianxin.techStack}</Paragraph>
                      {collapsibleSection(
                        content.labels.roleTechnicalDevelopmentEngineer,
                        isQiAnXinCollapsed,
                        toggleQiAnXinCollapse,
                        content.workExperience.qianxin.role
                      )}
                      <Paragraph><strong>{content.labels.achievements}:</strong> {content.workExperience.qianxin.achievements}</Paragraph>
                    </Card>
                    <Divider />
                    <Title level={4}><span style={{ color: '#007BFF', textAlign: 'left' }}>{content.otherExperience.title}</span></Title>
                    <Card className="about-card" bordered={false}>
                      <Title level={4} className="about-title-with-logo">
                        {content.otherExperience.labHomepage.title}
                      </Title>
                      <Paragraph>
                        <Text italic>{content.otherExperience.labHomepage.institution}</Text> ({content.otherExperience.labHomepage.period})
                      </Paragraph>
                      <Paragraph><a href={content.otherExperience.labHomepage.projectAddress} target="_blank">{content.otherExperience.labHomepage.projectAddressText}</a></Paragraph>
                      <Paragraph><strong>{content.labels.projectOverview}:</strong> {content.otherExperience.labHomepage.projectOverview.split('\n')[0]}</Paragraph>
                      <Paragraph>{content.otherExperience.labHomepage.projectOverview.split('\n')[1]}</Paragraph>
                      <Paragraph>{content.otherExperience.labHomepage.projectOverview.split('\n')[2]}</Paragraph>
                      <Paragraph><strong>{content.labels.technologyStack}:</strong> {content.otherExperience.labHomepage.techStack.split('\n')[0]}</Paragraph>
                      <Paragraph>{content.otherExperience.labHomepage.techStack.split('\n')[1]}</Paragraph>
                      <Paragraph>{content.otherExperience.labHomepage.techStack.split('\n')[2]}</Paragraph>
                      <Paragraph>{content.otherExperience.labHomepage.techStack.split('\n')[3]}</Paragraph>
                      <Paragraph><strong>{content.otherExperience.labHomepage.mainResponsibilities}:</strong></Paragraph>
                      {collapsibleSection(
                        content.otherExperience.labHomepage.completeVersionText,
                        isLabHomepageCollapsed,
                        toggleLabHomepageCollapse,
                        content.otherExperience.labHomepage.completeVersion
                      )}
                      {collapsibleSection(
                        content.otherExperience.labHomepage.standaloneVersionText,
                        isStandaloneCollapsed,
                        toggleStandaloneCollapse,
                        content.otherExperience.labHomepage.standaloneVersion
                      )}
                      <Paragraph><strong>{content.otherExperience.labHomepage.projectResultsText}:</strong> {content.otherExperience.labHomepage.projectResults}</Paragraph>
                      <Paragraph><a href={content.otherExperience.labHomepage.projectLink1} target="_blank">{content.otherExperience.labHomepage.projectLinkText1}</a></Paragraph>
                      <Paragraph><a href={content.otherExperience.labHomepage.projectLink2} target="_blank">{content.otherExperience.labHomepage.projectLinkText2}</a></Paragraph>
                    </Card>
                    <Card className="about-card" bordered={false}>
                      <Title level={4} className="about-title-with-logo">
                        {content.otherExperience.teachingAssistant.title}
                      </Title>
                      {collapsibleSection(
                        <>
                          <Text italic>{content.otherExperience.teachingAssistant.institution} ({content.otherExperience.teachingAssistant.period})</Text>
                        </>,
                        isTeachingAssistantCollapsed,
                        toggleTeachingAssistantCollapse,
                        content.otherExperience.teachingAssistant.details
                      )}
                    </Card>
                  </div>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
