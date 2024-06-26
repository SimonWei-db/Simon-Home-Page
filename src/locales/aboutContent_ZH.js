const content = {
    tabs: {
        education: "教育背景",
        workExperience: "工作经历",
    },
    labels: {
        keyCourses: "核心课程",
        specialization: "专业方向",
        gpa: "平均绩点",
        academicAchievements: "学术成就",
        projectFeatureExtraction: "项目：图像特征提取与评价",
        courses: "课程",
        campusActivities: "校园活动",
        productDevelopmentParticipation: "产品开发参与",
        projectOverview: "项目概述",
        technologyStack: "技术栈",
        roleProjectOwner: "角色：项目负责人",
        roleTechnicalDevelopmentEngineer: "角色：软件开发工程师",
        achievements: "成就",
    },
    education: {
        mcmaster: {
            title: "麦克马斯特大学 加拿大，安大略",
            degree: "电子与计算机工程硕士",
            period: "2024年1月 - 现在",
            keyCourses: "机器学习 (A+), 编码理论 (A)"
        },
        cnu: {
            title: "首都师范大学 中国，北京",
            degree: "计算机技术工程硕士",
            period: "2017年9月 - 2020年6月",
            specialization: "计算机视觉与图像处理",
            gpa: "4.01/5 (约90.05/100，排名前2%)",
            achievements: `发表研究论文\\: 在ICPCSEE 2020发表一篇EI研究论文，EI检索号：20203609129848。
获得专利\\: 获得一项图像处理技术的专利（专利号：ZL202010566088.9）。
获得奖学金\\: 三次获得奖学金。`,
            project: `分析并处理大量图像数据，包括图像去噪、二值化和特征表示分析。
主导所有图像特征提取实验，独立设计和改进算法，达到93.84%的准确率。
开发项目中所有图像软件工具，包括批量预处理工具和数据标注软件。`
        },
        liu: {
            title: "林雪平大学 瑞典，林雪平",
            degree: "国际交换生",
            period: "2019年8月 - 2020年1月",
            keyCourses: "不平等与隔离，宗教与政治，历史在学校和社会中的应用"
        },
        djtu: {
            title: "大连交通大学 中国，辽宁大连",
            degree: "双学位(工学学士+文学学士)：日语 + 软件工程",
            period: "2012年9月 - 2017年7月",
            gpa: "82.76/100（排名前10%）",
            activities: `担任大连交通大学辩论队副队长。
在2014年中国辩论大师赛中获得亚军、十佳辩手。
在2016年中国公开辩论赛中获得一等奖、十佳辩手。
在2015年东北地区辩论赛中被CDEN评为国际辩论裁判。
受邀担任中国公开辩论赛的主裁判。`
        }
    },
    workExperience: {
        bytedance: {
            title: "字节跳动 中国，北京",
            position: "软件工程师",
            period: "2021年11月 - 2022年8月",
            participation: "Cookie 管理平台 (CMP)",
            overview: "一款Web应用程序，确保TikTok和其他字节跳动应用的隐私合规性。",
            details: `开发CMP以捕获服务器流量并利用爬虫技术进行自动网页扫描。此过程识别并管理追踪器，包括Cookie、SDK、存储和像素，以生成定制的Cookie横幅。`,
            techStack: "专注于使用Node.js、Golang和Python进行前端及后端开发。",
            role: `项目领导\\: 作为CMP项目负责人，领导一个由四人组成的跨国研发团队，监管开发周期，审查需求并分配任务。积极支持团队以解决技术难题，成功上线了四个新的CMP版本。
技术提升\\: 负责开发复杂的前后端需求和bug修复。例如，通过提出和实施复杂的系统优化解决方案，我显著提升了CMP的并发处理能力，从处理几十个任务提高到50,000个并发任务。
跨团队协调\\: 作为CMP产品开发负责人，与使用CMP的其他字节跳动研发团队协调。开发必要的接口，并响应各团队在使用CMP过程中遇到的紧急技术问题。
指导\\: 指导实习生，帮助其顺利过渡到全职角色。`,
        },
        qianxin: {
            title: "奇安信科技集团股份有限公司 中国，北京",
            position: "软件工程师",
            period: "2020年7月 - 2021年11月",
            participation: "天擎 - Windows 终端安全软件",
            overview: "一套全面的终端安全解决方案，为包括中国政府、金融、银行等在内的多个领域的超过5000万终端提供安全保障。",
            details: `天擎是一款高级的Windows桌面安全软件。它具备操作系统的安全配置、补丁管理、软件安装合规性、实时病毒拦截、终端控制、审计、数据泄漏防护和全面的安全管理功能。`,
            techStack: "C++，Lua，QT，Windows桌面开发。",
            role: `软件开发与维护\\: 管理核心基础设施模块的开发和维护，包括软件的安装和卸载、模块管理、更新和客户端-服务器通信。显著加快了4.3、4.4和4.5版本的软件开发。
应急响应和热修复部署\\: 为客户进行紧急批量需求开发，比如开发Windows DLL文件和Lua脚本，并在终端上执行服务器端操作。此外，编写和发布紧急补丁以修复关键漏洞，确保及时补救。
高级故障排除\\: 指导解决由客户支持工程师升级的复杂问题，使用Windows Debug和Process Monitor等工具进行现场或远程诊断。由于我对核心基础设施的深入了解，70%的此类问题被指派给我进行bug识别和解决，成功解决了超过100个独特的软件异常。
工具开发和效率提升\\: 开发了一款通用编码工具，使用INI、XML和JSON来简化常见功能，提高团队的开发效率。
独立应用开发\\: 独立开发了一款基于QT的Windows桌面应用，旨在快速记录、组织、搜索和总结开发团队处理的所有客户案例。发布后，该应用立即在整个部门内得到广泛应用。`,
            achievements: "在2021年第三季度获得部门最高绩效评级 (S)。"
        }
    },
    otherExperience: {
        title: "其他经历",
        labHomepage: {
            title: "实验室主页与管理系统开发",
            institution: "麦克马斯特大学, Dr. Steve Hranilovic 实验室",
            period: "2024年5月-7月， 加拿大，安大略省，汉密尔顿",
            projectOverview: "\n为麦克马斯特大学研究生院院长Dr. Steve Hranilovic的实验室开发了一个综合性平台，集成了展示研究成果、发布新闻动态、共享资源以及提供联系信息的功能，并包含一个强大的管理后台系统，支持内容管理和系统维护。\n项目分为两个版本：一个是前后端分离的完整版本，另一个是适用于Windows系统的单机版管理软件",
            techStack: "\n前端：React, React Router, Ant Design, Axios, React Quill\n后端：Node.js, Express, SQLite, Sequelize ORM\n部署：AWS Elastic Beanstalk (自动化部署和管理), AWS S3 (静态资源存储), AWS CloudFront (全球内容分发网络)",
            mainResponsibilities: "主要职责和贡献",
            completeVersion: "前端开发\\: 使用React构建用户界面，实现响应式设计和单页面应用客户端路由。集成Ant Design构建用户界面，使用Axios对HTTP请求管理。\n后端开发\\: 基于Node.js和Express框架构建高性能的服务器端，使用SQLite作为轻量级关系型数据库，并通过Sequelize ORM进行数据模型定义和操作。实现了一套RESTful API，用于前端与后端的数据交互。\n用户认证和安全性\\: 采用JWT进行用户身份验证，确保用户数据的安全性。通过中间件实现请求验证和日志记录，防止常见的Web攻击（如SQL注入、XSS和CSRF）。\n部署和运维\\: 将后端部署在AWS Elastic Beanstalk，实现环境配置、应用部署和资源管理的自动化。前端静态资源存储在AWS S3，通过CloudFront进行全球加速分发，提升网站访问速度和性能。\n云盘分享功能\\: 实现了文件上传与管理功能，支持将上传的文件生成可共享的URL。用户可以在系统中管理文件，进行复制URL、删除文件等操作，类似于云盘功能，极大地方便了资源共享和管理。\n网页博客发布功能\\: 实现了网页创建和博客发布功能，用户可以通过管理后台创建新网页或博客文章，并生成对应的URL进行分享。支持富文本编辑，允许插入图片、视频、代码片段等多媒体内容，提升了信息发布的灵活性和多样性。",
            standaloneVersion: "本地管理系统开发\\: 开发了基于Windows平台的单机管理软件，使用Electron框架实现桌面应用。该软件允许用户在本地进行数据管理和操作，适用于无法部署后端服务器的环境。\n数据导出与同步\\: 实现了一键导出功能，用户可将本地数据打包导出，并同步至前端静态资源服务器，无需后端服务器支持。\n文件上传与分享\\: 集成文件上传功能，支持生成可共享的URL，实现资源的便捷管理和分发。\n内容管理功能\\: 提供网页管理、个人信息编辑、出版物管理等功能，通过直观的用户界面提升用户体验和操作效率。\n云盘分享功能\\: 在单机版中实现了类似云盘的文件管理功能，用户可以上传文件并生成可共享的URL，便于资源的本地管理和在线分享。\n网页博客发布功能\\: 支持用户在本地创建和管理网页和博客文章，生成相应的URL进行分享，满足在无网络环境下的信息发布需求。",
            completeVersionText: "完整版本",
            standaloneVersionText: "单机版管理软件",
            projectResults: "成功为实验室开发了功能完善的主页和管理系统，提升了在线展示和资源管理能力。两个版本的系统灵活适应了不同的部署环境，满足了实验室多样化的需求。\n获得了教授和实验室成员的高度评价，系统运行稳定，用户体验良好，极大地提升了实验室的工作效率和信息传播能力。",
            projectResultsText:"项目成果",
            projectLink1: "./projects?project=0",
            projectLinkText1: "完整版本项目详情",
            projectLink2: "./projects?project=1",
            projectLinkText2: "单机版项目详情",
            projectAddress: "https://focal.simonoren.com/",
            projectAddressText: "访问项目网址",
          },
        teachingAssistant: {
            title: "助教",
            institution: "首都师范大学 中国，北京",
            period: "2018年3月 - 2018年8月",
            details: `为两门本科计算机课程提升学习体验。
管理课程成绩，向学生和教师提供反馈。
进行演讲以改进小组协作和研究信息收集。
通过了解学生需求并提供资源帮助他们克服困难。`
        }
    },
    tooltips: {
        expand: "点击展开查看更多",
        collapse: "点击收起"
    }
};

export default content;
