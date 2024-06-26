const content = {
    tabs: {
      education: "Education",
      workExperience: "Work Experience",
    },
    labels: {
      keyCourses: "Key Courses",
      specialization: "Specialized in",
      gpa: "GPA",
      academicAchievements: "Academic Achievements",
      projectFeatureExtraction: "Project: Feature Extraction and Evaluation of Images",
      courses: "Courses",
      campusActivities: "Campus Activities",
      productDevelopmentParticipation: "Product Development Participation",
      projectOverview: "Project Overview",
      technologyStack: "Technology Stack",
      roleProjectOwner: "Role: Project Owner",
      roleTechnicalDevelopmentEngineer: "Role: Technical Development Engineer",
      achievements: "Achievements",
    },
    education: {
      mcmaster: {
        title: "McMaster University, Ontario, Canada",
        degree: "Master of Engineering in Electrical and Computer Engineering",
        period: "Jan. 2024 - Present",
        keyCourses: "Machine Learning (A+), Coding Theory (A)"
      },
      cnu: {
        title: "Capital Normal University, Beijing, China",
        degree: "Master of Engineering in Computer Technology",
        period: "Sept. 2017 - Jun. 2020",
        specialization: "Computer Vision and Image Processing",
        gpa: "4.01/5 (Approximately 90.05/100; ranked in the top 2%)",
        achievements: `Published Research Paper\\: Published a research paper indexed by EI at ICPCSEE 2020, EI index number: 20203609129848.
  Secured Patent\\: Secured a patent for an image processing technology (Patent Number: ZL202010566088.9).
  Awarded Scholarships\\: Awarded scholarships 3 times.`,
        project: `Analyzed and processed extensive image data, including image denoising, binarization, and feature representation analysis.
  Spearheaded all image feature extraction experiments, independently designed and refined the algorithm, achieving 93.84% accuracy.
  Developed all image software tools in the project, including batch pre-processing tools and data annotation software.`
      },
      liu: {
        title: "Linköping University, Linköping, Sweden",
        degree: "International Exchange Student",
        period: "Aug. 2019 - Jan. 2020",
        keyCourses: "Inequality and Segregation, Religion and Politics, Uses of History in School and Society"
      },
      djtu: {
        title: "Dalian Jiaotong University, Dalian, Liaoning, China",
        degree: "Dual Degree: Bachelor of Engineering in Japanese + Software Engineering",
        period: "Sept. 2012 - Jul. 2017",
        gpa: "82.76/100 (ranked in the top 10%)",
        activities: `Served as Vice-Captain of the Debate Team at Dalian Jiaotong University.
  Achieved Runner-up and Top Ten Speaker accolades in the 2014 China Debate Master Competition.
  Garnered First Prize and a spot amongst the Top Ten Speakers at the 2016 China Open Debate Tournament.
  Awarded by China Debate Education Network as a World-Style Debate Judge at the 2015 Northeast Region Debate Tournament.
  Invited to preside as the Chief Judge at the China Open Debate Tournament.`
      }
    },
    workExperience: {
      bytedance: {
        title: "ByteDance, Beijing, China",
        position: "Software Engineer",
        period: "Nov. 2021 - Aug. 2022",
        participation: "Cookie Management Platform (CMP)",
        overview: "A Web Application, ensuring privacy compliance for TikTok and other ByteDance applications.",
        details: `Developed the CMP to capture server traffic and utilize crawler technology for automated webpage scanning. This process identifies and manages trackers, including cookies, SDKs, storages, and pixels, to generate customized cookie banners.`,
        techStack: "Specialized in backend development using Node.js, Golang, and Python, with additional experience in frontend development.",
        role: `Project Leadership\\: Led a multinational R&D team of four as project owner for the CMP, overseeing development timelines, reviewing requirements, and task delegation. Actively supported the team in addressing technical challenges, contributing to the successful release of four new CMP versions.
  Technical Enhancements\\: Responsible for the development of complex front-end and back-end requirements and bug fixes. For instance, I significantly enhanced the CMP’s concurrent processing capabilities from handling dozens to 50,000 concurrent tasks by proposing and implementing complex system optimization solutions.
  Cross-Team Coordination\\: As the head of CMP product development, coordinated with other ByteDance R&D teams that use the CMP. Developed necessary interfaces and responded to urgent technical issues encountered by various teams during the use of the CMP.
  Mentorship\\: Mentored an intern, guiding his transition to a full-time role within the company.`,
        achievements: "Awarded the highest performance rating (S) in Q3 2021 for exceptional contributions to the project."
      },
      qianxin: {
        title: "Qi An Xin Technology Group Inc., Beijing, China",
        position: "Software Engineer",
        period: "Jul. 2020 - Nov. 2021",
        participation: "Tianqing - Windows Endpoint Security Software",
        overview: "A comprehensive solution securing over 50 million terminals across sectors including the Chinese government, finance, banking, and others.",
        details: `Tianqing is an advanced Windows desktop endpoint security software. It features secure OS configuration, patch management, software installation compliance, real-time virus interception, endpoint control, auditing, data leak prevention, and comprehensive security management.`,
        techStack: "C++, Lua, QT, specializing in Windows desktop development.",
        role: `Software Development and Maintenance\\: Managed the development and maintenance of core infrastructure modules, including the installation and uninstallation of software, module management, updates, and client-server communications. Significantly expedited the development of software versions 4.3, 4.4, and 4.5.
  Emergency Response and Hotfix Deployment\\: Developed Windows DLL files and Lua scripts for urgent client batch operations and server-side execution on terminals. Also coded and released emergency patches for critical vulnerabilities, ensuring immediate remediation.
  Advanced Troubleshooting\\: Directed the resolution of complex issues escalated by customer support engineers, using tools like Windows Debug and Process Monitor for on-site or remote diagnosis. Due to my core infrastructure expertise, 70% of these cases were directed to me for bug identification and resolution, successfully resolving over 100 unique software exceptions.
  Tool Development and Efficiency Enhancement\\: Developed a universal coding tool using INI, XML, and JSON to streamline common functions, enhancing development efficiency across the team.
  Independent Application Development\\: Independently developed a QT-based Windows desktop application designed to facilitate the quick recording, organizing, searching, and summarizing of all customer cases handled by the development team. Upon its release, the application was immediately implemented and widely adopted throughout the entire department.`,
        achievements: "Awarded the highest performance rating (S) in Q3 2021 for exceptional contributions to the project."
      }
    },
    otherExperience: {
      title: "Other Experience",
      "labHomepage": {
    "title": "Laboratory Homepage and Management System Development",
    "institution": "McMaster University, Dr. Steve Hranilovic's Lab",
    "period": "May - July 2024  Hamilton, Ontario, Canada",
    "projectOverview": "\nDeveloped a comprehensive platform for Dr. Steve Hranilovic's lab, the Dean of the Graduate School at McMaster University, integrating features for showcasing research achievements, publishing news updates, sharing resources, and providing contact information. The platform also includes a robust management backend system supporting content management and system maintenance.\nThe project is divided into two versions: a full version with separated front-end and back-end, and a standalone management software for Windows.",
    "techStack": "\nFront-end: React, React Router, Ant Design, Axios, React Quill\nBack-end: Node.js, Express, SQLite, Sequelize ORM\nDeployment: AWS Elastic Beanstalk (automated deployment and management), AWS S3 (static resource storage), AWS CloudFront (global content delivery network)",
    "mainResponsibilities": "Main Responsibilities and Contributions",
    "completeVersion": "Front-end Development\\: Built the user interface using React, implemented responsive design and single-page application client routing. Integrated Ant Design for the user interface and used Axios for HTTP request management.\nBack-end Development\\: Developed a high-performance server-side application based on Node.js and Express framework, used SQLite as a lightweight relational database, and defined and manipulated data models through Sequelize ORM. Implemented a set of RESTful APIs for data interaction between the front-end and back-end.\nUser Authentication and Security\\: Used JWT for user authentication to ensure the security of user data. Implemented request validation and logging through middleware to prevent common web attacks such as SQL injection, XSS, and CSRF.\nDeployment and Maintenance\\: Deployed the back-end on AWS Elastic Beanstalk, achieving automated environment configuration, application deployment, and resource management. Stored front-end static resources on AWS S3 and accelerated global distribution through CloudFront, improving website access speed and performance.\nCloud Drive Sharing Feature\\: Implemented file upload and management functionality, supporting the generation of shareable URLs for uploaded files. Users can manage files in the system, perform operations such as copying URLs and deleting files, similar to cloud drive functionality, greatly facilitating resource sharing and management.\nWeb Blog Publishing Feature\\: Implemented webpage creation and blog publishing functionality, allowing users to create new web pages or blog posts through the management backend and generate corresponding URLs for sharing. Supported rich text editing, allowing the insertion of images, videos, code snippets, and other multimedia content, enhancing the flexibility and diversity of information publishing.",
    "standaloneVersion": "Local Management System Development\\: Developed a standalone management software for Windows platform using Electron framework to create a desktop application. This software allows users to manage and operate data locally, suitable for environments where back-end server deployment is not possible.\nData Export and Synchronization\\: Implemented one-click export functionality, allowing users to export local data in a package and synchronize it to the front-end static resource server without the need for back-end server support.\nFile Upload and Sharing\\: Integrated file upload functionality, supporting the generation of shareable URLs, achieving convenient resource management and distribution.\nContent Management Features\\: Provided webpage management, personal information editing, publication management, and other features, enhancing user experience and operational efficiency through an intuitive user interface.\nCloud Drive Sharing Feature\\: Implemented similar cloud drive file management functionality in the standalone version, allowing users to upload files and generate shareable URLs, facilitating local resource management and online sharing.\nWeb Blog Publishing Feature\\: Supported users in creating and managing web pages and blog posts locally, generating corresponding URLs for sharing, meeting the need for information publishing in offline environments.",
    "completeVersionText": "Full Version",
    "standaloneVersionText": "Standalone Management Software",
    "projectResults": "Successfully developed a comprehensive homepage and management system for the lab, enhancing online display and resource management capabilities. Both versions of the system flexibly adapted to different deployment environments, meeting the diverse needs of the lab.\nReceived high praise from the professor and lab members, with the system running stably, providing a good user experience, and greatly improving the lab's work efficiency and information dissemination capabilities.",
    "projectResultsText": "Project Results",
    "projectLink1": "./projects?project=0",
    "projectLinkText1": "Full Version Project Details",
    "projectLink2": "./projects?project=1",
    "projectLinkText2": "Standalone Version Project Details",
    projectAddress: "https://focal.simonoren.com/",
    projectAddressText: "Visit the project website",
  },
      teachingAssistant: {
        title: "Teaching Assistant",
        institution: "Capital Normal University, Beijing, China",
        period: "Mar. 2018 - Aug. 2018",
        details: `Enhanced the learning experience for two undergraduate-level computer courses.
  Managed course grades, provided feedback to students and instructors.
  Delivered presentations for improved group collaboration and research information gathering.
  Assisted students by understanding their needs and providing resources to overcome difficulties.`
      }
    },
    tooltips: {
        expand: "Click to expand and see more",
        collapse: "Click to collapse"
    }
  };
  
  export default content;
  