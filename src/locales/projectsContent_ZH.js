const ProjectContent = {
  dropdownPrompt: "请选择一个项目进行查看：",
  proContent: "项目目录",
  projects: [
    {
      name: "Dr. Steve Hranilovic 实验室主页与管理系统",
      intro: {
        title: "简介",
        sections: [
          {
            title: "项目概述",
            content: `
            <p>2024年5月至7月期间，这个短期合同项目旨在为加拿大麦克马斯特大学研究生院院长Dr. Steve Hranilovic开发一个综合的实验室主页和内容管理系统。该项目的主要目标是创建一个强大的平台，展示Hranilovic教授的研究成就，提供及时的新闻更新，促进资源共享，并提供清晰的联系信息。</p>
            <p>除了面向公众的网站之外，该项目还包括一个复杂的后台管理系统。这个系统允许教授或指定的管理员高效地实时更新和维护网站内容。该项目的架构设计明确分离了前端和后端。前端采用React框架开发，确保用户体验动态且响应迅速。后端使用Node.js和Express构建，提供强大且可扩展的基础，而数据存储则使用可靠的SQLite。</p>
  
            <p><strong>您可以访问项目主页查看前端并试用管理系统：</strong></p>
              <p><strong><a href="https://focal.simonoren.com/" target="_blank" class="project-link">https://focal.simonoren.com/</a></strong></p>
            `,
        },
          {
            title: "技术栈",
            content: `
              <p>本项目使用的主要技术栈包括：</p>
              <ul>
                <li>后端技术：</li>
                <ul>
                  <li>Node.js：用于服务器端开发，提供高效的非阻塞I/O操作，适合处理大量并发请求。</li>
                  <li>Express：Node.js的Web应用框架，用于简化API的开发，提供强大的中间件支持和路由管理。</li>
                  <li>SQLite：轻量级关系型数据库，适用于教授的实际需求。SQLite提供了简单的文件存储方式，便于快速部署和维护，同时其性能和功能足以满足项目的需求。</li>
                  <li>Sequelize：Node.js的ORM框架，简化了数据库操作，提供模型定义和数据验证功能。</li>
                </ul>
                <li>前端技术：</li>
                <ul>
                  <li>React：用于构建用户界面，提供组件化开发模式，实现响应式和高效的前端体验。</li>
                  <li>React Router Dom：用于实现单页面应用的客户端路由，管理页面导航和URL状态。</li>
                  <li>Ant Design (Antd)：React的UI框架，提供了一致且美观的用户界面组件，减少了UI开发的时间成本，并提升了用户体验。</li>
                  <li>Axios：用于处理HTTP请求，简化了与后端服务器的交互。</li>
                  <li>React Quill：用于富文本编辑，提供强大的文本编辑功能。</li>
                </ul>
                <li>部署和运维：</li>
                <ul>
                  <li>AWS Elastic Beanstalk：用于后端的自动化部署和管理，简化了应用的部署流程和环境配置。</li>
                  <li>AWS S3：用于前端静态资源的存储和托管，提供高可用性和可靠性的存储服务。</li>
                  <li>AWS CloudFront：用于内容分发网络（CDN），提高网站的访问速度和性能，提供全球范围内的快速内容分发。</li>
                </ul>
              </ul>
            `,
          },
          {
            title: "选择这些技术的原因",
            content: `
              <p>选择这些技术的原因如下：</p>
              <ul>
                <li>Node.js 和 Express 提供了高性能和可扩展的服务器端解决方案，适合处理大量并发请求，并且与JavaScript前端代码共享同一种语言，减少了开发复杂度。</li>
                <li>SQLite 作为轻量级数据库，便于开发和测试阶段的快速迭代，同时其单文件存储方式便于管理和迁移。对于教授的实际需求，SQLite的性能和功能已经足够，并且其简便性和轻量级特性使得维护更加容易。</li>
                <li>React 提供了组件化的开发模式，使前端开发更加模块化和可维护，React的虚拟DOM机制提升了渲染性能。</li>
                <li>React Router Dom 提供了简便的客户端路由管理，使单页面应用的导航更加流畅。</li>
                <li>Ant Design 提供了一致且美观的用户界面组件，减少了UI开发的时间成本，并提升了用户体验。</li>
                <li>Axios 简化了与后端服务器的交互，提供了简洁的HTTP请求处理方式。</li>
                <li>React Quill 提供了强大的富文本编辑功能，支持多种文本格式和编辑需求。</li>
                <li>AWS服务 提供了稳定、高效的云服务，支持自动化部署和全球分发，确保网站的高可用性和性能。Elastic Beanstalk简化了后端应用的部署和管理，S3和CloudFront则保证了前端资源的高效分发和快速加载。</li>
              </ul>
            `,
          },
        ],
      },
      projectStructure: {
        title: "项目结构",
        sections: [
          {
            title: "目录结构",
            content: `
              <p>项目采用前后端分离的架构，分别有独立的目录用于存放前端和后端代码。主要的目录和文件结构如下：</p>
              <ul>
                <li>根目录</li>
                <ul>
                  <li>.env：环境变量文件。</li>
                  <li>.gitattributes：Git属性文件。</li>
                  <li>.gitignore：Git忽略文件。</li>
                  <li>client：前端代码目录。</li>
                  <li>focal_database.sqlite：SQLite数据库文件。</li>
                  <li>logs：日志文件目录。</li>
                  <li>package-lock.json：Node.js依赖锁定文件。</li>
                  <li>package.json：Node.js依赖文件。</li>
                  <li>server：后端代码目录。</li>
                </ul>
                <li>后端（server）目录</li>
                <ul>
                  <li>.ebextensions：AWS Elastic Beanstalk配置文件目录。</li>
                  <li>.env：后端环境变量文件。</li>
                  <li>checkEnv.js：环境变量检查脚本。</li>
                  <li>config：配置文件目录，包含数据库配置和其他应用配置文件。</li>
                  <li>db.js：数据库连接文件。</li>
                  <li>index.js：后端应用的入口文件。</li>
                  <li>logger.js：日志记录模块。</li>
                  <li>logs：日志文件存放目录。</li>
                  <li>middleware：中间件文件目录，包含自定义中间件，用于请求处理和验证等。</li>
                  <li>models：数据库模型目录，定义数据库中的数据模型和关系。</li>
                  <li>routes：路由目录，定义API路由和请求处理逻辑。</li>
                  <li>services：服务层目录，包含业务逻辑和数据处理功能。</li>
                  <li>uploads：上传文件存放目录。</li>
                </ul>
                <li>前端（client）目录</li>
                <ul>
                  <li>public：公共资源目录，包含静态文件，如HTML模板和图标等。</li>
                  <li>src：源代码目录。</li>
                  <ul>
                    <li>assets：资源目录，包含字体文件和图像文件等。</li>
                    <li>components：组件目录。</li>
                    <ul>
                      <li>common：通用组件目录。</li>
                      <li>layout：布局组件目录。</li>
                    </ul>
                    <li>config：配置文件目录，包含文本内容配置文件。</li>
                    <li>pages：页面组件目录，定义各个独立的页面，如主页、新闻页面、关于我们页面等。</li>
                    <li>services：服务层目录，封装与后端API的交互逻辑。</li>
                    <li>utils：工具函数目录，提供通用的辅助功能，如API客户端、URL构建器等。</li>
                  </ul>
                </ul>
              </ul>
            `,
          },
          {
            title: "关键组件",
            content: `
              <p>关键组件包括：</p>
              <ul>
                <li>后端关键组件：</li>
                <ul>
                  <li><code>index.js</code>：应用入口文件，设置Express服务器并启动应用。</li>
                  <li><code>db.js</code>：数据库连接模块，配置并初始化SQLite数据库。</li>
                  <li>models：数据库模型定义，使用Sequelize定义数据结构和关系。</li>
                  <li>routes：API路由定义，处理客户端请求并返回相应数据。</li>
                  <li>middleware：中间件模块，处理请求验证、日志记录等功能。</li>
                  <li>services：服务层模块，封装业务逻辑和数据处理功能。</li>
                </ul>
                <li>前端关键组件：</li>
                <ul>
                  <li><code>AppRouter.js</code>：应用路由组件，定义前端路由结构。</li>
                  <li>components/common：通用组件，如按钮、输入框等。</li>
                  <li>components/layout：布局组件，如导航栏、页脚等。</li>
                  <li>pages：页面组件，定义各个独立的页面，如主页、新闻页面、关于我们页面等。</li>
                  <li>services：服务层组件，封装与后端API的交互逻辑。</li>
                  <li>utils：工具函数，提供通用的辅助功能，如API客户端、URL构建器等。</li>
                </ul>
              </ul>
            `,
          },
        ],
      },
      backendDevelopment: {
        title: "后端开发",
        sections: [
          {
            title: "Node.js 和 Express 设置",
            content: `
              <p>项目后端采用Node.js和Express框架开发，提供高效的非阻塞I/O操作，适合处理大量并发请求。通过Express框架简化了API的开发，提供了强大的中间件支持和路由管理。</p>
              <ul>
                <li>入口文件 <code>index.js</code>：这是应用的主要入口文件，负责设置Express服务器并启动应用。它配置了基本的中间件，如CORS、body-parser和morgan，用于处理跨域请求、解析请求体和日志记录。此外，它还设置了静态文件服务，并引入了路由文件。</li>
              </ul>
            `,
          },
          {
            title: "数据库设计",
            content: `
              <p>项目使用SQLite数据库，这是一种轻量级关系型数据库，适用于开发和测试环境。SQLite提供了简单的文件存储方式，便于管理和迁移。对于教授的实际需求，SQLite的性能和功能已经足够，并且其简便性和轻量级特性使得维护更加容易。</p>
              <ul>
                <li>数据库连接文件 <code>db.js</code>：配置并初始化SQLite数据库连接，使用Sequelize ORM框架简化数据库操作。Sequelize允许定义数据模型和关系，并提供了数据验证和迁移功能。</li>
              </ul>
            `,
          },
          {
            title: "配置文件",
            content: `
              <p>项目的配置文件存放在<code>config</code>目录中，主要包括应用的各类配置，如数据库配置、服务器配置等。这些配置文件通过读取环境变量进行动态配置，确保应用在不同环境下的可移植性。</p>
              <ul>
                <li>数据库配置：定义了SQLite数据库的存储路径和基本配置参数。</li>
              </ul>
            `,
          },
          {
            title: "API 开发",
            content: `
              <p>后端采用RESTful API设计原则，提供一系列API接口用于前端与服务器的交互。主要API包括用户管理、新闻管理、资源管理等。所有API路由文件都存放在<code>routes</code>目录中。</p>
              <ul>
                <li>用户路由 <code>routes/userRouter.js</code>：定义了用户相关的API路由和请求处理逻辑，包括用户注册、登录、获取用户信息等功能。</li>
                <li>新闻路由 <code>routes/newsRouter.js</code>：定义了新闻相关的API路由，处理新闻的创建、更新、删除和获取等操作。</li>
                <li>资源路由 <code>routes/fileRouter.js</code>：处理资源的上传、下载和管理等功能。</li>
                <li>关于我们路由 <code>routes/aboutMeRouter.js</code>：处理关于我们的信息展示和管理。</li>
                <li>邮件路由 <code>routes/emailRouter.js</code>：处理联系表单的邮件发送和记录。</li>
                <li>图片上传路由 <code>routes/imageUploadRouter.js</code>：处理图片的上传和管理。</li>
                <li>页面路由 <code>routes/pageRouter.js</code>：处理动态页面内容的展示和管理。</li>
                <li>出版物路由 <code>routes/publicationsRouter.js</code>：管理和展示出版物内容。</li>
                <li>团队路由 <code>routes/teamRouter.js</code>：管理和展示团队成员信息。</li>
              </ul>
            `,
          },
          {
            title: "数据验证",
            content: `
              <p>后端使用Sequelize ORM框架定义数据库模型，并通过模型定义实现数据验证和约束。所有数据模型都存放在<code>models</code>目录中。</p>
              <ul>
                <li>用户模型 <code>models/userModel.js</code>：定义了用户的数据结构和关系，包括用户名、密码和时间戳等字段。</li>
                <li>新闻模型 <code>models/newsModel.js</code>：定义了新闻的数据结构，包括标题、内容、作者和时间戳等字段。</li>
                <li>资源模型 <code>models/newsLinksModel.js</code>：定义了资源的数据结构，包括文件名、路径、上传时间等字段。</li>
                <li>关于我们模型 <code>models/aboutMeModel.js</code>：定义了关于我们的信息结构。</li>
                <li>邮件模型 <code>models/emailModel.js</code>：定义了邮件的记录结构。</li>
                <li>密码重置模型 <code>models/passwordResetModel.js</code>：定义了密码重置的令牌和相关信息。</li>
                <li>页面模型 <code>models/pageModel.js</code>：定义了动态页面的数据结构。</li>
                <li>出版物类别模型 <code>models/publications_categoriesModel.js</code>：定义了出版物类别的结构。</li>
                <li>出版物项目模型 <code>models/publications_itemsModel.js</code>：定义了具体出版物项目信息。</li>
                <li>团队模型 <code>models/teamModel.js</code>：定义了团队成员的信息结构。</li>
              </ul>
            `,
          },
          {
            title: "中间件",
            content: `
              <p>自定义中间件用于处理请求验证、日志记录等功能，确保应用的安全性和可维护性。中间件文件存放在<code>middleware</code>目录中。</p>
              <ul>
                <li>日志记录中间件 <code>middleware/logger.js</code>：记录请求日志，便于调试和错误追踪。</li>
                <li>身份验证中间件 <code>middleware/auth.js</code>：处理用户身份验证，确保只有授权用户才能访问受保护的API。</li>
              </ul>
            `,
          },
          {
            title: "服务层",
            content: `
              <p>服务层封装业务逻辑和数据处理功能，确保代码的模块化和可维护性。服务层文件存放在<code>services</code>目录中。</p>
              <ul>
                <li>用户服务 <code>services/userService.js</code>：处理用户相关的业务逻辑，包括用户认证、获取用户信息、更新用户信息等功能。</li>
                <li>新闻服务 <code>services/newsService.js</code>：处理新闻相关的业务逻辑，包括创建、更新、删除和获取新闻等操作。</li>
                <li>资源服务 <code>services/utilsService.js</code>：处理资源相关的业务逻辑，包括文件上传、下载和管理等功能。</li>
                <li>关于我们服务 <code>services/aboutMeService.js</code>：处理关于我们的信息展示和管理。</li>
                <li>邮件服务 <code>services/emailService.js</code>：处理联系表单的邮件发送和记录。</li>
                <li>认证服务 <code>services/authService.js</code>：处理用户的认证和授权。</li>
                <li>页面服务 <code>services/pageService.js</code>：处理动态页面内容的展示和管理。</li>
                <li>出版物类别服务 <code>services/publicationsCategoriesService.js</code>：管理出版物类别。</li>
                <li>出版物项目服务 <code>services/publicationsItemsService.js</code>：管理具体出版物项目信息。</li>
                <li>团队服务 <code>services/teamService.js</code>：管理和展示团队成员信息。</li>
              </ul>
            `,
          },
          {
            title: "性能优化和安全性",
            content: `
              <p>为了确保项目的高性能和安全性，进行了多方面的优化措施和安全策略。</p>
              <h4>性能优化：</h4>
              <ul>
                <li>数据库优化：通过使用适当的索引和优化查询语句，提升数据查询效率。</li>
                <li>代码优化：通过代码审查和重构，减少不必要的计算和内存消耗，提升代码执行效率。</li>
                <li>缓存机制：在适当的地方引入缓存机制，减少数据库查询次数，提高响应速度。</li>
              </ul>
              <h4>安全性：</h4>
              <ul>
                <li>密码加密：用户密码在存储前进行加密处理，防止密码泄露。</li>
                <li>身份验证：使用JWT进行用户身份验证，确保只有合法用户才能访问受保护的资源。</li>
                <li>数据验证：在数据存储和处理过程中，进行严格的数据验证，防止恶意数据输入。</li>
                <li>防护措施：实现了常见的安全防护措施，如防止SQL注入、跨站脚本攻击（XSS）和跨站请求伪造（CSRF）。</li>
              </ul>
            `,
          },
        ],
      },
      frontendDevelopment: {
        title: "前端开发",
        sections: [
          {
            title: "React 设置",
            content: `
              <p>项目的前端采用React框架开发，提供组件化开发模式，实现响应式和高效的前端体验。使用React Router实现单页面应用的客户端路由管理，确保用户在不同页面之间的导航流畅。</p>
              <ul>
                <li>入口文件 <code>src/index.js</code>：这是React应用的入口文件，负责初始化应用并挂载到DOM中。</li>
                <li>应用路由 <code>src/AppRouter.js</code>：定义了应用的路由结构，包含不同页面的路由配置。</li>
              </ul>
            `,
          },
          {
            title: "组件设计",
            content: `
              <p>前端代码结构清晰，将通用组件和布局组件分开，确保代码的模块化和可维护性。</p>
              <ul>
                <li>通用组件 <code>src/components/common</code>：存放通用的UI组件，如按钮、输入框等（当前该目录为空，可能在项目后续开发中补充）。</li>
                <li>布局组件 <code>src/components/layout</code>：存放布局相关的组件，如导航栏和页脚。</li>
                <li>导航栏 <code>src/components/layout/Navbar.js</code>：实现网站的导航功能，包含导航链接和响应式设计。</li>
                <li>页脚 <code>src/components/layout/CustomFooter.js</code>：实现网站的页脚，包含版权信息和相关链接。</li>
              </ul>
            `,
          },
          {
            title: "页面组件",
            content: `
              <p>页面组件存放在<code>src/pages</code>目录中，每个页面都有独立的目录和文件，确保代码的模块化和可维护性。</p>
              <ul>
                <li>关于我们页面 <code>src/pages/AboutMe</code>：展示教授的个人信息和研究领域。</li>
                <ul>
                  <li><code>AboutMe.js</code>：页面的主要实现文件。</li>
                  <li><code>AboutMe.css</code>：页面的样式文件。</li>
                </ul>
                <li>管理后台页面 <code>src/pages/Admin</code>：用于管理网站内容，包含多个子页面和功能。</li>
                <ul>
                  <li><code>AdminDashboard.js</code>：管理后台的仪表盘。</li>
                  <li><code>EditAboutMe</code>：编辑关于我们的内容。</li>
                  <li><code>EditNews</code>：编辑新闻内容。</li>
                  <li><code>EditPublications</code>：编辑出版物内容。</li>
                  <li><code>EditTeam</code>：编辑团队成员信息。</li>
                  <li><code>ManageWebPages.js</code>：管理网页内容。</li>
                  <li><code>UploadAndShare.js</code>：上传和共享资源。</li>
                </ul>
                <li>联系我们页面 <code>src/pages/ContactUs</code>：提供联系信息和联系表单。</li>
                <ul>
                  <li><code>ContactUs.js</code>：页面的主要实现文件。</li>
                  <li><code>ContactUs.css</code>：页面的样式文件。</li>
                </ul>
                <li>内容展示页面 <code>src/pages/ContentPage</code>：动态展示各种内容。</li>
                <ul>
                  <li><code>ContentPage.js</code>：页面的主要实现文件。</li>
                  <li><code>ContentPage.css</code>：页面的样式文件。</li>
                </ul>
                <li>主页 <code>src/pages/Home</code>：网站的首页，展示主要信息和导航链接。</li>
                <ul>
                  <li><code>Home.js</code>：页面的主要实现文件。</li>
                  <li><code>Home.css</code>：页面的样式文件。</li>
                </ul>
                <li>登录页面 <code>src/pages/Login</code>：处理用户登录、忘记密码和重置密码功能。</li>
                <ul>
                  <li><code>Login.js</code>：登录页面的实现文件。</li>
                  <li><code>ForgotPassword.js</code>：忘记密码页面的实现文件。</li>
                  <li><code>ResetPassword.js</code>：重置密码页面的实现文件。</li>
                  <li><code>Login.css</code>：页面的样式文件。</li>
                </ul>
                <li>新闻页面 <code>src/pages/News</code>：展示新闻列表和新闻详情。</li>
                <ul>
                  <li><code>News.js</code>：页面的主要实现文件。</li>
                  <li><code>News.css</code>：页面的样式文件。</li>
                </ul>
                <li>404页面 <code>src/pages/NotFound</code>：处理未找到页面的情况。</li>
                <ul>
                  <li><code>NotFound.js</code>：页面的主要实现文件。</li>
                  <li><code>NotFound.css</code>：页面的样式文件。</li>
                </ul>
                <li>出版物页面 <code>src/pages/Publications</code>：展示教授的出版物列表和详情。</li>
                <ul>
                  <li><code>Publications.js</code>：页面的主要实现文件。</li>
                  <li><code>Publications.css</code>：页面的样式文件。</li>
                </ul>
                <li>团队页面 <code>src/pages/Team</code>：展示教授的团队成员信息。</li>
                <ul>
                  <li><code>Team.js</code>：页面的主要实现文件。</li>
                  <li><code>Team.css</code>：页面的样式文件。</li>
                </ul>
              </ul>
            `,
          },
          {
            title: "状态管理",
            content: `
              <p>前端项目采用React的状态管理机制，通过组件的状态和属性传递来管理应用的状态。</p>
            `,
          },
          {
            title: "样式设计",
            content: `
              <p>项目采用CSS模块化设计，每个组件和页面都有独立的CSS文件，确保样式的隔离和可维护性。</p>
            `,
          },
          {
            title: "服务层",
            content: `
              <p>服务层封装了与后端API的交互逻辑，确保前端代码的清晰和可维护性。所有服务层文件都存放在<code>src/services</code>目录中。</p>
              <ul>
                <li>关于我们服务 <code>services/aboutMeService.js</code>：处理关于我们的数据交互。</li>
                <li>联系我们服务 <code>services/contactUsService.js</code>：处理联系表单的数据交互。</li>
                <li>页脚服务 <code>services/footerService.js</code>：处理页脚内容的数据交互。</li>
                <li>新闻服务 <code>services/newsService.js</code>：处理新闻内容的数据交互。</li>
                <li>页面服务 <code>services/pageService.js</code>：处理动态页面的数据交互。</li>
                <li>出版物服务 <code>services/publicationsService.js</code>：处理出版物内容的数据交互。</li>
                <li>团队服务 <code>services/teamService.js</code>：处理团队成员的数据交互。</li>
                <li>用户服务 <code>services/userService.js</code>：处理用户数据和身份验证。</li>
                <li>工具服务 <code>services/utilsService.js</code>：提供通用的工具函数。</li>
              </ul>
            `,
          },
          {
            title: "工具函数",
            content: `
              <p>工具函数文件存放在<code>src/utils</code>目录中，提供通用的辅助功能。</p>
              <ul>
                <li><code>AuthRoute.js</code>：用于处理受保护的路由，确保只有经过身份验证的用户才能访问。</li>
                <li><code>apiClient.js</code>：封装了与后端API的通用请求逻辑。</li>
                <li><code>urlBuilder.js</code>：提供URL构建功能，简化API请求的URL拼接。</li>
              </ul>
            `,
          },
          {
            title: "配置文件",
            content: `
              <p>配置文件存放在<code>src/config</code>目录中，主要包括文本内容配置。</p>
              <ul>
                <li><code>textContent.js</code>：定义了应用中使用的文本内容，方便国际化和多语言支持。</li>
              </ul>
            `,
          },
        ],
      },
      featuresAndFunctions: {
        title: "功能和特性",
        sections: [
          {
            title: "用户认证",
            content: `
              <p>项目实现了全面的用户认证系统，确保只有授权用户能够访问和操作管理后台功能。主要功能包括：</p>
              <ul>
                <li>用户注册：允许新用户注册账号，存储用户名和加密密码。</li>
                <li>用户登录：用户可以通过用户名和密码登录系统，系统会验证用户凭证并生成JWT（JSON Web Token）进行会话管理。</li>
                <li>密码重置：实现了密码重置功能，用户可以通过注册邮箱接收密码重置链接，重置密码以确保账号安全。</li>
              </ul>
            `,
          },
          {
            title: "内容管理",
            content: `
              <p>管理后台提供了一系列内容管理功能，便于管理员对网站内容进行增删改查操作。主要功能包括：</p>
              <ul>
                <li>关于我们管理：管理员可以编辑和更新关于我们的信息，展示教授的个人简介和研究领域。</li>
                <li>新闻管理：管理员可以创建、编辑、删除和查看新闻条目，确保网站新闻内容的及时更新。</li>
                <li>资源管理：支持文件上传、下载和管理功能，管理员可以上传和分享各类资源文件。</li>
                <li>出版物管理：管理员可以管理教授的出版物信息，包含出版物的分类和具体条目。</li>
                <li>团队管理：管理员可以管理团队成员信息，展示教授团队的成员和各自的研究方向。</li>
              </ul>
            `,
          },
          {
            title: "富文本编辑器",
            content: `
              <p>前端集成了富文本编辑器，支持多种文本格式和样式，便于管理员在编辑内容时进行排版和格式设置。富文本编辑器还支持图片和视频的嵌入，使内容更加丰富和生动。</p>
            `,
          },
          {
            title: "文件上传和管理",
            content: `
              <p>实现了文件上传和管理功能，用户可以通过上传界面选择文件并上传到服务器。文件上传后，系统会生成唯一的文件路径并返回给用户。管理员可以在后台查看已上传文件，并进行管理操作，如删除或重新命名。</p>
            `,
          },
          {
            title: "响应式设计",
            content: `
              <p>项目采用响应式设计，确保在不同设备和屏幕尺寸下都能有良好的用户体验。通过使用Ant Design和自定义CSS样式，实现了页面的自适应布局和组件的响应式显示。</p>
            `,
          },
          {
            title: "动态内容展示",
            content: `
              <p>支持动态内容展示，前端通过调用后端API获取内容数据，并在页面上进行渲染。主要包括：</p>
              <ul>
                <li>新闻页面：展示最新的新闻列表和详细内容，支持分页显示。</li>
                <li>出版物页面：展示教授的出版物列表和详细信息，按类别进行分类展示。</li>
                <li>团队页面：展示团队成员信息，包括姓名、职位和研究方向。</li>
              </ul>
            `,
          },
          {
            title: "联系我们表单",
            content: `
              <p>实现了联系表单功能，用户可以通过联系表单发送消息给管理员。系统会记录用户的联系方式和消息内容，并通过邮件发送给管理员，确保及时沟通和反馈。</p>
            `,
          },
          {
            title: "日志记录",
            content: `
              <p>后端实现了日志记录功能，记录所有请求的详细信息和错误日志，便于调试和错误追踪。通过中间件实现请求日志记录，确保所有请求信息都能被记录下来，方便后期分析和维护。</p>
            `,
          },
          {
            title: "安全性",
            content: `
              <p>项目在多个层面上考虑了安全性问题，确保用户数据和系统的安全性。主要措施包括：</p>
              <ul>
                <li>密码加密：用户密码在存储前进行加密处理，防止密码泄露。</li>
                <li>身份验证：使用JWT进行用户身份验证，确保只有合法用户才能访问受保护的资源。</li>
                <li>数据验证：在数据存储和处理过程中，进行严格的数据验证，防止恶意数据输入。</li>
                <li>防护措施：实现了常见的安全防护措施，如防止SQL注入、跨站脚本攻击（XSS）和跨站请求伪造（CSRF）。</li>
              </ul>
            `,
          },
          {
            title: "性能优化",
            content: `
              <p>为了确保项目的高性能，进行了多方面的优化措施：</p>
              <ul>
                <li>前端性能优化：通过代码拆分和懒加载，减少初始加载时间，提高页面响应速度。例如，利用React的React.lazy和Suspense组件，实现按需加载页面和组件。</li>
                <li>后端性能优化：通过优化数据库查询和使用适当的索引，提升数据查询效率。使用Sequelize ORM框架的查询优化技术，减少不必要的数据加载。</li>
                <li>缓存机制：利用HTTP缓存头和内存缓存策略，减少数据库查询次数，提高响应速度。</li>
              </ul>
            `,
          },
        ],
      },
      deployment: {
        title: "部署",
        sections: [
          {
            title: "部署环境",
            content: `
              <p>项目部署在Amazon Web Services (AWS)上，利用其多种服务实现高效、稳定和可扩展的应用部署。主要使用了AWS Elastic Beanstalk、AWS S3和AWS CloudFront。</p>
            `,
          },
          {
            title: "后端部署",
            content: `
              <p><strong>AWS Elastic Beanstalk</strong>：用于后端的自动化部署和管理。Elastic Beanstalk提供了自动化的环境配置、应用部署和资源管理功能，极大地简化了部署流程。通过Elastic Beanstalk控制台，可以轻松创建和管理应用环境，监控应用的健康状态和性能指标。</p>
              <ul>
                <li>环境配置：在Elastic Beanstalk环境中配置了必要的环境变量和安全组，以确保应用的正常运行和安全性。环境变量包括数据库连接字符串、JWT密钥和其他敏感信息。</li>
                <li>持续集成/持续部署 (CI/CD)：集成了CI/CD管道，使用GitHub Actions或AWS CodePipeline实现代码的自动构建、测试和部署。每次代码提交都会触发自动构建和部署流程，确保代码的及时发布和版本控制。</li>
              </ul>
            `,
          },
          {
            title: "前端部署",
            content: `
              <p><strong>AWS S3</strong>：用于前端静态资源的存储和托管。S3提供了高可用性和可靠性的存储服务，支持静态网站托管。将构建后的前端文件上传到S3存储桶，通过S3静态网站托管功能直接提供网页服务。</p>
              <p><strong>AWS CloudFront</strong>：作为内容分发网络 (CDN)，加速全球范围内的内容交付。CloudFront通过缓存静态资源，并将其分发到全球各地的边缘节点，提高了网站的访问速度和性能。配置CloudFront分配，并将其指向S3存储桶，使得用户可以通过CloudFront访问前端资源。</p>
            `,
          },
          {
            title: "数据库管理",
            content: `
              <p>SQLite数据库：由于SQLite数据库是一个文件存储数据库，因此在部署过程中需要特别注意数据库文件的备份和恢复。通过Elastic Beanstalk的环境配置，可以挂载持久化存储卷，以确保数据库文件在不同应用版本之间的持久性和一致性。</p>
            `,
          },
          {
            title: "负载均衡和自动扩展",
            content: `
              <p>负载均衡：Elastic Beanstalk集成了Elastic Load Balancing (ELB) 服务，自动分配传入的应用流量到多个实例，确保应用的高可用性和可靠性。</p>
              <p>自动扩展：配置了自动扩展策略，根据流量和负载情况自动调整实例数量，确保应用在高峰期能够处理大量请求，在低峰期节省资源和成本。</p>
            `,
          },
          {
            title: "安全配置",
            content: `
              <p><strong>SSL证书</strong>：通过AWS Certificate Manager (ACM) 配置SSL/TLS证书，为应用提供HTTPS访问，确保数据传输的安全性和完整性。</p>
              <p><strong>安全组</strong>：在Elastic Beanstalk环境中配置安全组，控制进出流量，限制未授权的访问。</p>
              <p><strong>IAM角色</strong>：配置IAM角色和策略，确保应用和服务之间的安全交互，控制不同服务的访问权限。</p>
            `,
          },
          {
            title: "日志和监控",
            content: `
              <p><strong>日志管理</strong>：通过Elastic Beanstalk集成的日志管理功能，将应用日志和服务器日志发送到Amazon CloudWatch Logs，便于集中管理和实时监控。</p>
              <p><strong>性能监控</strong>：使用Amazon CloudWatch 监控应用的性能指标，如CPU利用率、内存使用率、响应时间等。配置告警策略，在性能指标超出阈值时及时通知运维人员。</p>
            `,
          },
        ],
      },
      performanceOptimization: {
        title: "性能优化",
        sections: [
          {
            title: "数据库优化",
            content: `
              <p>在项目开发过程中，通过多种方法优化数据库性能，以确保系统的高效性和响应速度。</p>
              <ul>
                <li><strong>Sequelize ORM</strong>：使用Sequelize ORM框架来管理数据库操作，避免了手写SQL查询，提升了代码的可维护性和安全性。Sequelize通过缓存模型定义和查询结果，提高了数据访问效率。</li>
                <li><strong>索引</strong>：为常用查询字段创建数据库索引，减少查询时间。例如，在用户模型中为用户名字段创建索引，以加速用户登录验证过程。</li>
                <li><strong>连接池</strong>：配置了数据库连接池，减少了数据库连接的建立和销毁带来的开销，提高了并发处理能力。</li>
              </ul>
            `,
          },
          {
            title: "后端性能优化",
            content: `
              <p>通过对后端代码的优化，提高了服务器的处理能力和响应速度。</p>
              <ul>
                <li><strong>中间件</strong>：使用高效的中间件处理HTTP请求和响应。通过morgan中间件记录请求日志，便于调试和性能监控。</li>
                <li><strong>缓存机制</strong>：在合适的地方引入缓存机制，减少数据库查询次数。利用内存缓存存储常用数据，避免频繁访问数据库。例如，用户认证后，将用户信息缓存一段时间，减少重复查询。</li>
                <li><strong>异步处理</strong>：大量使用异步处理技术，避免阻塞操作。Node.js天然支持异步I/O操作，通过异步函数和Promise机制，提高了服务器的并发处理能力。</li>
              </ul>
            `,
          },
          {
            title: "前端性能优化",
            content: `
              <p>通过优化前端代码和资源加载，提高了页面的加载速度和用户体验。</p>
              <ul>
                <li><strong>代码拆分和懒加载</strong>：利用React的React.lazy和Suspense组件，实现代码拆分和懒加载。将不必要的代码延迟加载，减少初始页面加载时间，提高页面响应速度。</li>
                <li><strong>静态资源优化</strong>：对前端静态资源进行优化，包括压缩JavaScript和CSS文件，减少文件大小。使用Webpack进行打包时，启用代码压缩和去除冗余代码。</li>
                <li><strong>图片优化</strong>：对项目中使用的图片进行优化，包括压缩图片和使用适当的图片格式。通过CSS实现图片的懒加载，减少初始页面加载时间。</li>
                <li><strong>HTTP缓存</strong>：利用浏览器的HTTP缓存机制，设置合适的缓存头，减少静态资源的重复加载，提高页面加载速度。</li>
              </ul>
            `,
          },
          {
            title: "网络性能优化",
            content: `
              <p>通过优化网络性能，提高了整体系统的响应速度和用户体验。</p>
              <ul>
                <li><strong>CDN（内容分发网络）</strong>：使用AWS CloudFront作为CDN，将前端静态资源分发到全球各地的边缘节点，减少资源加载的延迟，提高全球用户的访问速度。</li>
                <li><strong>HTTPS</strong>：配置SSL/TLS证书，通过HTTPS加密数据传输，确保数据传输的安全性和完整性。HTTPS还可以启用HTTP/2，进一步提高页面加载速度。</li>
              </ul>
            `,
          },
          {
            title: "性能监控和分析",
            content: `
              <p>通过实时监控和分析系统性能，及时发现并解决性能瓶颈和问题。</p>
              <ul>
                <li><strong>日志记录和分析</strong>：通过morgan中间件记录请求日志，利用Amazon CloudWatch集中管理和分析日志。通过分析日志数据，识别性能瓶颈和异常请求，及时进行优化。</li>
                <li><strong>性能监控</strong>：使用Amazon CloudWatch监控系统性能指标，包括CPU利用率、内存使用率、响应时间等。配置告警策略，在性能指标超出阈值时及时通知运维人员，进行性能调优。</li>
              </ul>
            `,
          },
        ],
      },
      securityConsiderations: {
        title: "安全考虑",
        sections: [
          {
            title: "用户认证与授权",
            content: `
              <p>项目使用JWT进行用户身份验证，确保只有合法用户才能访问受保护的资源。</p>
              <ul>
                <li><strong>JWT（JSON Web Token）</strong>：用户登录成功后，系统会生成一个JWT，客户端在后续请求中将其包含在HTTP头中。后端通过验证JWT，确保只有合法用户才能访问受保护的资源。</li>
                <li><strong>中间件验证</strong>：项目实现了一个自定义的认证中间件，在处理每个请求之前对JWT进行验证，确保未认证的请求无法访问受保护的API。</li>
              </ul>
            `,
          },
          {
            title: "数据保护",
            content: `
              <p>项目在数据存储和处理过程中，采取了多种措施保护用户数据。</p>
              <ul>
                <li><strong>密码加密</strong>：用户密码在存储前进行加密处理，项目使用了bcrypt库对密码进行加盐哈希处理，防止密码泄露。</li>
                <li><strong>环境变量</strong>：敏感信息如数据库连接字符串和JWT密钥等通过环境变量进行管理，避免硬编码在代码中，提升了应用的安全性。</li>
              </ul>
            `,
          },
          {
            title: "数据验证",
            content: `
              <p>在处理用户输入的数据时，系统进行了严格的数据验证，防止恶意数据输入。</p>
              <ul>
                <li><strong>输入验证</strong>：通过Sequelize的模型定义和验证功能，确保存储到数据库中的数据符合预期格式和约束条件。</li>
                <li><strong>邮件服务</strong>：在处理用户提交的联系表单时，系统对用户输入的邮箱地址和消息内容进行验证，确保数据的有效性和安全性。</li>
              </ul>
            `,
          },
          {
            title: "常见攻击防护",
            content: `
              <p>项目实现了多种防护措施，防止常见的Web攻击。</p>
              <ul>
                <li><strong>防止SQL注入</strong>：通过使用Sequelize ORM框架，避免了手动构建SQL查询语句，降低了SQL注入攻击的风险。</li>
                <li><strong>防止XSS（跨站脚本攻击）</strong>：在处理和渲染用户输入的数据时，系统对数据进行了适当的转义和过滤，防止恶意脚本注入。</li>
                <li><strong>防止CSRF（跨站请求伪造）</strong>：通过使用CSRF令牌，确保表单提交的请求来自合法用户，防止攻击者利用用户的身份进行恶意操作。</li>
              </ul>
            `,
          },
          {
            title: "安全配置",
            content: `
              <p>项目在部署和配置过程中，采取了多种安全措施。</p>
              <ul>
                <li><strong>HTTPS</strong>：项目部署在AWS上，通过AWS Certificate Manager配置SSL/TLS证书，为应用提供HTTPS访问，确保数据传输的安全性和完整性。</li>
                <li><strong>安全组和IAM角色</strong>：在AWS环境中配置了安全组和IAM角色，严格控制进出流量和资源访问权限，确保应用和服务之间的安全交互。</li>
              </ul>
            `,
          },
        ],
      },
      challengesAndSolutions: {
        title: "挑战与解决方案",
        sections: [
          {
            title: "用户认证与授权",
            content: `
              <p>确保系统的安全性和可靠性，特别是在用户认证和授权方面，是项目的一个关键挑战。需要实现一个安全、可靠且高效的用户认证系统，确保只有合法用户才能访问受保护的资源。</p>
              <p><strong>解决方案：</strong>采用了JWT（JSON Web Token）进行用户认证。用户登录成功后，系统会生成一个JWT，客户端在后续请求中将其包含在HTTP头中。后端通过验证JWT，确保只有合法用户才能访问受保护的资源。为了进一步增强安全性，实现了自定义的认证中间件，在处理每个请求之前对JWT进行验证。</p>
            `,
          },
          {
            title: "数据保护与安全性",
            content: `
              <p>如何保护用户数据，特别是用户密码的安全性，是项目中的一个重要挑战。需要确保即使数据库被攻破，攻击者也无法直接获取用户的明文密码。</p>
              <p><strong>解决方案：</strong>在用户密码存储前，使用bcrypt库进行加盐哈希处理。通过加盐增强了密码的安全性，即使攻击者获得了哈希值，也难以还原明文密码。此外，使用环境变量管理敏感信息，避免硬编码在代码中，提升了应用的安全性。</p>
            `,
          },
          {
            title: "前后端数据交互",
            content: `
              <p>如何高效、可靠地进行前后端数据交互，是项目中的一个技术难点。需要确保数据传输的完整性和安全性，同时保证高性能和低延迟。</p>
              <p><strong>解决方案：</strong>前端采用Axios库与后端进行数据交互，通过Promise机制实现异步请求。后端API设计遵循RESTful规范，确保接口设计清晰、易用。通过使用JWT进行身份验证，确保数据交互的安全性。为了优化性能，引入了数据缓存机制，减少了数据库查询次数，提高了响应速度。</p>
            `,
          },
          {
            title: "动态内容管理",
            content: `
              <p>项目需要支持动态内容的管理和展示，如新闻、出版物、团队信息等。这要求系统具有良好的灵活性和可扩展性，便于管理员进行内容的增删改查操作。</p>
              <p><strong>解决方案：</strong>实现了一个综合的内容管理系统，使用富文本编辑器（如React Quill）支持多种文本格式和样式，便于管理员编辑内容。后端提供了丰富的API接口，支持对动态内容的管理操作。前端通过调用这些API接口，动态获取并展示内容。</p>
            `,
          },
          {
            title: "跨设备响应式设计",
            content: `
              <p>如何确保网站在不同设备和屏幕尺寸下都能有良好的用户体验，是一个重要的用户体验挑战。需要实现响应式设计，使得网站在手机、平板和桌面设备上都能正常显示和操作。</p>
              <p><strong>解决方案：</strong>采用了Ant Design和自定义CSS样式，实现了页面的自适应布局和组件的响应式显示。通过媒体查询（media queries）和弹性盒布局（Flexbox）技术，确保页面元素在不同屏幕尺寸下都能良好显示和排列。</p>
            `,
          },
          {
            title: "AWS云服务的配置与部署",
            content: `
              <p>如何在AWS云平台上高效、稳定地部署和管理应用，是项目中的一个运维挑战。需要确保应用的高可用性和可扩展性，同时简化部署流程。</p>
              <p><strong>解决方案：</strong>后端部署在AWS Elastic Beanstalk上，利用其自动化部署和管理功能，简化了环境配置和资源管理。前端静态资源存储在AWS S3，并通过AWS CloudFront进行全球分发，提升了内容的加载速度和用户体验。配置了CI/CD管道，实现了代码的自动构建、测试和部署，确保代码的及时发布和版本控制。</p>
            `,
          },
          {
            title: "实现安全机制",
            content: `
              <p>如何防止常见的Web攻击，如SQL注入、XSS和CSRF，是项目中的一个安全挑战。需要确保系统在各种攻击面前的安全性和可靠性。</p>
              <p><strong>解决方案：</strong>通过使用Sequelize ORM框架，避免手动构建SQL查询语句，降低SQL注入攻击的风险。对用户输入的数据进行严格的验证和转义，防止XSS攻击。在表单提交中使用CSRF令牌，防止CSRF攻击。配置HTTPS，确保数据传输的安全性和完整性。</p>
            `,
          },
        ],
      },
      futureEnhancements: {
        title: "未来的增强",
        sections: [
          {
            title: "计划中的功能",
            content: `
              <p>项目目前已经实现了许多基本功能，但为了进一步提升用户体验和系统的功能，未来计划增加以下新功能和改进：</p>
              <ul>
                <li><strong>高级用户管理：</strong>增加用户角色和权限管理功能，支持多级权限控制，确保不同角色的用户可以访问和管理各自权限范围内的内容。</li>
                <li><strong>内容版本控制：</strong>实现内容版本控制功能，支持内容的历史版本回溯和恢复，防止误操作导致的数据丢失和错误内容发布。</li>
                <li><strong>全站搜索功能：</strong>增加全站搜索功能，用户可以通过关键字快速搜索网站中的新闻、出版物、团队成员和资源等内容。</li>
                <li><strong>多语言支持：</strong>实现网站的多语言支持，方便不同语言背景的用户访问和使用网站内容。</li>
                <li><strong>交互式图表和数据可视化：</strong>增加交互式图表和数据可视化功能，展示教授的研究成果和数据分析结果，提升内容的展示效果和用户体验。</li>
              </ul>
            `,
          },
          {
            title: "可扩展性考虑",
            content: `
              <p>为了确保系统能够应对未来的增长和变化，在设计和实现过程中考虑了以下可扩展性方面：</p>
              <ul>
                <li><strong>负载均衡和自动扩展：</strong>通过使用AWS Elastic Beanstalk的负载均衡和自动扩展功能，系统可以根据访问量的变化自动调整实例数量，确保高峰期能够处理大量请求，而低峰期则减少资源使用，节省成本。</li>
                <li><strong>数据库扩展性：</strong>虽然目前使用的是SQLite数据库，但未来可以根据实际需求，迁移到更强大的关系型数据库（如Amazon RDS）或NoSQL数据库（如Amazon DynamoDB），以处理更大的数据量和更高的并发访问。</li>
                <li><strong>微服务架构：</strong>未来可以将当前的单体应用逐步拆分为微服务架构，通过独立部署和扩展各个服务，提升系统的可维护性和可扩展性。</li>
              </ul>
            `,
          },
          {
            title: "当前未实现的原因",
            content: `
              <p>由于教授主页的访问量相对较小，当前系统已经能够满足日常的访问需求和功能要求，因此一些高级功能和扩展性设计暂未实现。具体原因包括：</p>
              <ul>
                <li><strong>访问量小：</strong>教授主页的访问量相对较小，当前的系统架构和功能已经能够满足现有需求，暂时没有必要进行更复杂的扩展和优化。</li>
                <li><strong>资源和成本考虑：</strong>实现一些高级功能和扩展性设计需要更多的开发资源和成本，目前的开发团队和预算有限，因此优先实现基础功能，确保系统的稳定性和可靠性。</li>
                <li><strong>需求优先级：</strong>根据用户和管理员的反馈，当前的系统功能已经能够满足大部分使用需求，未来会根据实际需求和反馈逐步增加新功能和改进。</li>
              </ul>
            `,
          },
        ],
      },
      codeSnippetsAndReferences: {
        title: "代码片段及参考文献",
        sections: [
          {
            title: "代码片段",
            content: `
              <p>在项目的各个文件中，使用了许多关键代码片段来实现核心功能。以下是一些示例代码片段的描述：</p>
              <h4>用户认证：</h4>
              <p>使用JWT进行用户身份验证，通过authMiddleware.js验证请求中的JWT，确保只有合法用户才能访问受保护的资源。</p>
              <pre><code>
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (token) {
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        logger.error('Token verification failed', { error: err });
        return res.status(401).json({ success: false, message: 'Token is not valid' });
      }
      req.user = user;
      refreshToken(user, res);
      next();
    });
  } else {
    logger.warn('No token provided');
    res.status(401).json({ success: false, message: 'No token provided' });
  }
};
              </code></pre>
              <h4>密码加密：</h4>
              <p>在userService.js中，使用bcrypt对用户密码进行加盐哈希处理，确保密码的安全性。</p>
              <pre><code>
const authenticateUser = async (username, password, res) => {
  return new Promise((resolve, reject) => {
    getUserByUsername(username, async (err, user) => {
      if (err) {
        logger.error('Error fetching user by username:', err);
        reject(err);
      } else if (!user) {
        logger.warn('Invalid username or password for username:', username);
        resolve({ success: false, message: 'Invalid username or password' });
      } else {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          const token = signAndSetToken(user, res);
          logger.info('User authenticated successfully:', username);
          const passwordNotChanged = user.created_at === user.updated_at;
          resolve({ success: true, message: 'Login successful!', token, passwordNotChanged });
        } else {
          logger.warn('Invalid username or password for username:', username);
          resolve({ success: false, message: 'Invalid username or password' });
        }
      }
    });
  });
};
              </code></pre>
              <h4>文件上传：</h4>
              <p>在fileRouter.js中实现了文件上传功能，使用Multer中间件处理上传的文件。</p>
              <pre><code>
router.post('/upload', authenticateJWT, (req, res) => {
  uploadFileToDirectory(req, res, (result) => {
    if (result.success) {
      res.status(result.code).json({ success: true, fileUrl: result.fileUrl });
    } else {
      logger.error(result.message, result.error);
      res.status(result.code).json({ success: false, message: result.message });
    }
  });
});
              </code></pre>
            `,
          },
          {
            title: "参考文献",
            content: `
              <p>在开发项目的过程中，参考了以下文献和资源：</p>
             <ul>
              <li><a href="https://sequelize.org/" target="_blank" rel="noopener noreferrer">Sequelize文档</a>：用于理解和实现数据库操作和ORM框架的相关功能。</li>
              <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express文档</a>：用于理解和实现Web服务器和API路由的相关功能。</li>
              <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React文档</a>：用于理解和实现前端组件和状态管理的相关功能。</li>
              <li><a href="https://aws.amazon.com/documentation/" target="_blank" rel="noopener noreferrer">AWS文档</a>：用于理解和实现AWS服务的配置和部署，如Elastic Beanstalk、S3和CloudFront。</li>
            </ul>
            `,
          },
        ],
      },
    },

    {
      name: "Focal 主页 Windows 单机管理软件",
      overviewAndRequirements: {
        title: "概述和系统要求",
        sections: [
          {
            title: "项目概述",
            content: `
              <p>2024年5月至7月期间，这个短期合同项目旨在为加拿大麦克马斯特大学研究生院院长Dr. Steve Hranilovic开发一个综合的实验室主页和内容管理系统。该项目的主要目标是创建一个强大的平台，展示Hranilovic教授的研究成就，提供及时的新闻更新，促进资源共享，并提供清晰的联系信息。</p>
              <p>为了应对某些服务器无法支持后端部署的情况，项目特别开发了一款可以在Windows系统上运行的单机版内容管理系统。这个系统允许用户在本地进行后台功能的管理和操作，特别适用于有网络限制或只能部署前端的环境。用户在本地修改完内容后，可以一键导出所有数据，只需将这些导出数据同步到前端静态资源服务器上即可，无需部署后端服务器。</p>
               <img src="./image1.png" alt="概述图片" style="max-width: 100%; height: auto;">
            `,
          },
          {
            title: "系统要求",
            content: `
              <p>该软件兼容以下系统要求：</p>
              <ul>
                <li>操作系统：Windows 64位</li>
                <li>内存：最少 2GB RAM</li>
                <li>存储：最少 800MB 可用磁盘空间</li>
              </ul>
            `,
          },
        ],
      },
      installationAndUsage: {
        title: "安装和使用",
        sections: [
          {
            title: "安装步骤",
            content: `
              <ol>
                <li>从官方网站下载安装程序。<a href="https://drive.google.com/file/d/17tr7TUyXXlFW_9LGZqDw4D5Ukl52tqn7/view?usp=sharing" target="_blank">点击下载</a></li>
                <li>双击安装文件并按照屏幕上的指示完成安装。</li>
                <li>安装完成后，从桌面快捷方式启动应用程序。</li>
              </ol>
              <div style="text-align: center;">
                <img src="./image2.png" alt="安装步骤图片" style="max-width: 100%; height: auto;">
              </div>
            `,
          },
          {
            title: "使用说明",
            content: `
              <ol>
                <li>打开应用程序并使用您的凭证登录。</li>
                <li>通过仪表板导航访问不同的管理功能。</li>
                <li>进行必要的更改并保存您的更新。</li>
                <li>如果需要，使用导出功能生成部署包。</li>
              </ol>
            `,
          },
          {
            title: "下载链接",
            content: `
              <ul>
                <li><a href="https://drive.google.com/file/d/17tr7TUyXXlFW_9LGZqDw4D5Ukl52tqn7/view?usp=sharing" target="_blank">下载软件 ZIP</a></li>
                <li><a href="Focal Homepage & Software User Guide.pdf" download>下载 Focal 主页和软件用户指南 (英文版PDF)</a></li>
              </ul>
            `,
          },
        ],
      },
      featuresAndFunctions: {
        title: "功能和特点",
        sections: [
          {
            title: "软件功能",
            content: `
              <ul>
                <li>预览和修改前端内容</li>
                <li>将文件上传到本地存储</li>
                <li>发布新网页和博客</li>
                <li>一键导出部署包</li>
              </ul>
            `,
          },
        ],
      },
      uploadAndShare: {
        title: "上传与分享功能概述",
        sections: [
          {
            title: "功能介绍",
            content: `
              <p>点击<code>上传与分享</code>进入此功能页面。在此页面，您可以上传各种类型的文件。此页面类似于云盘，存储您要分享的文件并生成可以在互联网上共享的URL。</p>
              <img src="./image3.png" alt="上传与分享图片" style="max-width: 100%; height: auto;">
            `,
          },
          {
            title: "用例",
            content: `
              <ul>
                <li>论文分享：上传您的论文 PDF 文件，并将生成的 URL 插入到<code>出版物</code>页面的链接区域，这样其他人可以通过点击链接下载您的论文。</li>
                <li>资源分享：将上传的文件添加到<code>资源</code>页面的链接区域，使其他人可以轻松下载您上传到服务器的资源。</li>
                <li>新闻资源：在<code>新闻</code>页面发布新闻时，可以插入资源下载链接，让读者可以下载相关资源。</li>
                <li>直接分享：您还可以直接与他人分享完整的 URL，以便他们通过互联网访问您的共享资源。</li>
              </ul>
            `,
          },
          {
            title: "上传文件",
            content: `
              <p>点击<code>上传文件</code>按钮上传新文件。上传的文件将自动生成一个可以在互联网上共享的URL。</p>
            `,
          },
          {
            title: "文件管理",
            content: `
              <p>列表中的每个文件都有两个操作按钮：</p>
              <ul>
                <li><code>复制 URL</code>：复制上传文件的 URL。</li>
                <li><code>删除文件</code>：点击删除按钮，如果您想停止共享文件，请将其删除。</li>
              </ul>
            `,
          },
          {
            title: "URL 类型",
            content: `
              <ul>
                <li><code>完整 URL</code>：包含完整的网站域名，适合直接与互联网上的人共享。您需要将 'https://www.example.com/SteveHranilovic' 替换为您主页的实际地址。</li>
                <li><code>相对 URL</code>：省略域名部分，适合粘贴到<code>出版物</code>、<code>新闻</code>和<code>资源</code>页面的链接区域。</li>
              </ul>
            `,
          },
        ],
      },
      manageWebPages: {
        title: "管理网页功能概述",
        sections: [
          {
            title: "功能介绍",
            content: `
              <p>点击<code>管理网页</code>进入此功能页面。<code>管理网页</code>功能允许您轻松创建新网页，类似于发布博客，并生成此新网页的 URL。</p>
              <img src="./image4.png" alt="上传与分享图片" style="max-width: 100%; height: auto;">
            `,
          },
          {
            title: "用例",
            content: `
              <ul>
                <li>研究进展：发布您的最新研究进展以扩大您的影响力。</li>
                <li>学术讲座：发布网页以分享学术讲座信息，并在 LinkedIn、Facebook 等平台上分享 URL。人们可以阅读您的新文章，并可能点击页面上的其他标签以查看更多有关您主页的信息，从而扩大您的学术影响力。</li>
                <li>长篇新闻：如果需要发布长篇新闻页面，建议使用此功能发布新闻网页，并将链接插入到<code>新闻</code>页面。人们可以点击链接直接跳转到网页。</li>
                <li>课程信息：如果您有新课程，可以使用此功能发布课程信息。</li>
                <li>出版物展示：将此网页链接插入到<code>出版物</code>页面以展示新出版物内容。</li>
                <li>资源页面：将新创建的网页插入到<code>资源</code>页面，以便轻松分享新资源。</li>
              </ul>
            `,
          },
          {
            title: "URL 类型",
            content: `
              <ul>
                <li><code>完整 URL</code>：适合直接在 LinkedIn 和 Facebook 等互联网平台上共享。</li>
                <li><code>相对 URL</code>：省略域名部分，适合粘贴到<code>出版物</code>、<code>新闻</code>和<code>资源</code>页面的链接区域。</li>
              </ul>
            `,
          },
          {
            title: "使用说明",
            content: `
              <ol>
                <li>点击<code>创建新网页</code>按钮。</li>
                <li>输入标题和内容以发布页面。内容区域支持插入图片、视频、代码片段、调整段落分隔符和设置字体大小和颜色。</li>
                <li><code>网页列表</code>中预写了几个示例页面以供参考。</li>
                <li>每个网页有四个按钮：</li>
                <ul>
                  <li><code>预览</code>：查看文章的已发布外观。</li>
                  <li><code>编辑</code>：修改网页。</li>
                  <li><code>删除</code>：删除网页。</li>
                  <li><code>复制 URL</code>：复制完整或相对 URL。</li>
                </ul>
              </ol>
            `,
          },
        ],
      },
      editAboutMe: {
        title: "编辑关于我功能概述",
        sections: [
          {
            title: "功能介绍",
            content: `
              <p><code>编辑关于我</code>页面允许用户编辑和管理主页上的个人信息和各个章节。用户可以更新个人信息，添加和编辑多个章节，并管理每个章节中的子章节。该页面旨在帮助用户创建详细和专业的个人资料页面，展示他们的学术背景和研究兴趣。</p>
            `,
          },
          {
            title: "页面结构",
            content: `
              <p><code>编辑关于我</code>页面分为多个章节：</p>
              <ul>
                <li><code>个人信息</code>：个人信息章节，您可以修改学位、个人照片和介绍。</li>
                <li><code>章节</code>：多个可选章节，具有相同的结构，如传记、研究兴趣等。</li>
              </ul>
              <div style="text-align: center;">
                <img src="./image5.png" alt="上传与分享图片" style="max-width: 100%; height: auto;">
              </div>
            `,
          },
          {
            title: "个人信息管理",
            content: `
              <ul>
                <li><code>学位</code>：编辑和更新您的学位信息。</li>
                <li><code>个人照片</code>：上传或更换您的个人照片。</li>
                <li><code>介绍</code>：编辑您的个人介绍。</li>
              </ul>
            `,
          },
          {
            title: "章节管理",
            content: `
              <p>每个自定义章节的结构包括：</p>
              <ul>
                <li><code>编辑章节</code>：点击每个章节标题旁边的<code>编辑</code>按钮，编辑章节标题和描述。</li>
                <li><code>删除章节</code>：点击每个章节标题旁边的<code>删除</code>按钮删除章节。</li>
                <li><code>添加章节</code>：点击页面底部的<code>添加章节</code>按钮添加更多章节。</li>
              </ul>
              <p>在每个章节内，您可以有多个可选的子章节：</p>
              <ul>
                <li><code>添加子章节</code>：点击每个章节底部的<code>添加子章节</code>按钮，添加新子章节。</li>
                <li><code>编辑子章节</code>：点击每个子章节旁边的<code>编辑</code>按钮，编辑子章节的标题、描述、图片（可选）和多个要点（可选）。</li>
                <li><code>添加要点</code>：点击每个子章节底部的<code>添加要点</code>按钮添加更多要点。</li>
                <li><code>删除子章节</code>：点击每个子章节标题旁边的<code>删除</code>按钮删除子章节。</li>
              </ul>
              <div style="text-align: center;">
                <img src="./image6.png" alt="上传与分享图片" style="max-width: 100%; height: auto;">
              </div>
            `,
          },
          {
            title: "保存编辑",
            content: `
              <p>完成所有操作后，点击页面底部的<code>保存</code>按钮，保存所有更改。</p>
            `,
          },
        ],
      },
      editPublications: {
        title: "编辑出版物功能概述",
        sections: [
          {
            title: "功能介绍",
            content: `
              <p><code>编辑出版物</code>功能允许用户管理和展示教授的出版物列表。用户可以在此页面添加、编辑和删除多个类别及其相应的出版物条目。该功能旨在帮助教授系统地展示他们的学术成就和研究工作。</p>
            `,
          },
          {
            title: "添加和管理类别",
            content: `
              <ol>
                <li><code>添加类别</code>：点击页面底部的<code>添加出版物类别</code>按钮，添加新类别。</li>
                <li><code>调整类别顺序</code>：点击每个类别标题旁边的上移和下移按钮，调整类别的显示顺序。</li>
                <li><code>编辑类别名称</code>：点击每个类别标题旁边的<code>编辑</code>按钮，修改类别名称。</li>
                <li><code>删除类别</code>：点击每个类别标题旁边的<code>删除</code>按钮，删除整个类别。</li>
              </ol>
            `,
          },
          {
            title: "添加和管理出版物条目",
            content: `
              <ol>
                <li><code>添加条目</code>：在每个类别中，点击<code>添加条目</code>按钮，添加新出版物条目。</li>
                <li><code>调整条目顺序</code>：点击每个条目旁边的上移和下移按钮，调整出版物的显示顺序。</li>
                <li><code>编辑条目</code>：点击每个条目旁边的<code>编辑</code>按钮，编辑出版物条目。</li>
                <li><code>删除条目</code>：点击每个条目旁边的<code>删除</code>按钮，删除出版物条目。</li>
              </ol>
            `,
          },
          {
            title: "编辑出版物条目",
            content: `
              <p>每个出版物条目有四个按钮：上移、下移、编辑和删除。点击<code>编辑</code>按钮，编辑以下内容：</p>
              <ul>
                <li><code>标题</code>：必填字段，出版物条目的标题。</li>
                <li><code>描述</code>：可选字段。如果填写，将以粗体显示为标题，后面是用逗号分隔的描述。</li>
                <li><code>图片</code>：可选字段。如果上传了图片，它将显示在条目的左侧。</li>
                <li><code>链接</code>：可选字段。您可以添加多个链接。每个链接分为<code>文本</code>和<code>URL</code>：</li>
                <ul>
                  <li><code>文本</code>：要显示的内容。</li>
                  <li><code>URL</code>：点击显示内容时跳转的链接。有两种类型的链接：</li>
                  <ul>
                    <li><code>完整 URL</code>：以 HTTP 或 HTTPS 开头的完整 URL，可以插入互联网上共享的任何 URL。</li>
                    <li><code>相对 URL</code>：可以插入在<code>上传与分享</code>页面或本网站的<code>管理网页</code>页面创建的相对 URL。</li>
                  </ul>
                </ul>
              </ul>
              <div style="text-align: center;">
                <img src="./image7.png" alt="上传与分享图片" style="max-width: 100%; height: auto;">
              </div>
              <div style="text-align: center;">
                <img src="./image8.png" alt="上传与分享图片" style="max-width: 100%; height: auto;">
              </div>
            `,
          },
          {
            title: "添加元数据",
            content: `
              <p>点击页面底部的<code>添加元数据条目</code>按钮，添加属性。属性的名称和内容可以编辑。您可以添加任何自定义字段，如作者、期刊、会议等。</p>
            `,
          },
          {
            title: "保存编辑",
            content: `
              <p>完成所有内容编辑后，点击页面底部的<code>保存</code>按钮，保存所有更改。</p>
            `,
          },
        ],
      },
      editTeam: {
        title: "编辑团队功能概述",
        sections: [
          {
            title: "功能介绍",
            content: `
              <p><code>编辑团队</code>功能允许用户管理团队成员信息并将其显示在网页上。用户可以在此页面添加、编辑和删除团队成员及其组，以卡片格式显示团队成员信息。</p>
            `,
          },
          {
            title: "页面结构和使用",
            content: `
              <p><code>编辑团队</code>页面分为代表不同团队成员组的章节。每个章节可以包含多个人员信息，并以卡片格式显示。</p>
            `,
          },
          {
            title: "章节管理",
            content: `
              <ol>
                <li><code>添加章节</code>：点击<code>添加章节</code>按钮，添加新章节（团队成员组）。</li>
                <li><code>编辑章节标题</code>：点击每个章节标题旁边的<code>编辑</code>按钮，编辑章节标题。</li>
                <li><code>删除章节</code>：点击每个章节标题旁边的<code>删除</code>按钮，删除章节。</li>
                <li><code>调整章节顺序</code>：点击每个章节标题旁边的上移和下移按钮，调整章节之间的显示顺序。</li>
              </ol>
            `,
          },
          {
            title: "团队成员管理",
            content: `
              <ol>
                <li><code>添加成员</code>：在每个章节中，点击<code>添加人员</code>按钮，添加团队成员。</li>
                <li><code>管理成员信息</code>：每个成员右侧有四个按钮：上移、下移、编辑和删除。点击<code>编辑</code>按钮，编辑成员信息，包括多个字段：</li>
                <ul>
                  <li><code>姓名</code>：必填字段，显示团队成员的姓名。</li>
                  <li><code>学位</code>：可选字段。如果为空白，则不会显示此属性。如果填写，将以彩色标签显示。您可以通过编辑<code>学位标签颜色</code>选择标签颜色。预设了八种推荐颜色，您也可以使用颜色选择器自定义任何颜色（建议为相同学位使用相同颜色的标签）。</li>
                  <li><code>自定义属性</code>：点击页面底部的<code>添加元数据条目</code>按钮，添加和自定义其他属性。自定义属性的名称和内容可以编辑。您可以添加自定义字段，如主题、职位等。</li>
                </ul>
              </ol>
              <div style="text-align: center;">
                <img src="./image9.png" alt="上传与分享图片" style="max-width: 100%; height: auto;">
              </div>
            `,
          },
          {
            title: "保存编辑",
            content: `
              <p>完成所有操作后，点击页面底部的<code>保存</code>按钮，保存所有更改。</p>
            `,
          },
        ],
      },
      editNews: {
        title: "编辑新闻功能概述",
        sections: [
          {
            title: "页面结构",
            content: `
              <p><code>编辑新闻和资源</code>页面分为两个标签：<code>编辑新闻</code>和<code>编辑资源</code>。</p>
            `,
          },
          {
            title: "功能介绍",
            content: `
              <p>在<code>编辑新闻</code>标签中，您可以发布新闻卡片、编辑新闻卡片和删除新闻卡片。所有新闻卡片按时间顺序排列，最新新闻显示在顶部。</p>
            `,
          },
          {
            title: "用例",
            content: `
              <ul>
                <li>发布简短新闻：例如，最新研究进展或新发布的课程信息。</li>
                <li>发布长篇新闻：如果您想发布长篇新闻文章，建议使用<code>管理网页</code>页面发布网页，并将链接插入到此新闻中。</li>
              </ul>
            `,
          },
          {
            title: "功能细节",
            content: `
              <ul>
                <li><code>发布新闻</code>：点击<code>发布新闻</code>按钮，发布新新闻。</li>
                <li><code>编辑新闻</code>：点击每个新闻卡片下的<code>编辑</code>按钮，编辑新闻内容。编辑字段包括：</li>
                <ul>
                  <li><code>标题</code>：新闻标题。</li>
                  <li><code>描述</code>：新闻描述。</li>
                  <li><code>日期</code>：新闻日期，可以修改。新闻的显示顺序将受修改日期影响。</li>
                  <li><code>图片</code>：新闻图片，可选字段。您可以删除默认新闻图片，使用或更换为随机默认图片，或上传自定义图片。</li>
                  <li><code>链接</code>：可选字段，您可以添加多个链接。每个链接分为<code>文本</code>和<code>URL</code>：</li>
                  <ul>
                    <li><code>文本</code>：要显示的内容。</li>
                    <li><code>URL</code>：点击显示内容时跳转的链接。有两种类型的链接：</li>
                    <ul>
                      <li><code>完整 URL</code>：以 HTTP 或 HTTPS 开头的完整 URL，可以插入互联网上共享的任何 URL。</li>
                      <li><code>相对 URL</code>：可以插入在<code>上传与分享</code>页面或本网站的<code>管理网页</code>页面创建的相对 URL。</li>
                    </ul>
                  </ul>
                </ul>
              </ul>
              <li><code>删除新闻</code>：点击每个新闻卡片上的<code>删除</code>按钮，删除新闻。</li>
              <li><code>时间排序</code>：所有新闻按时间顺序排列，最新新闻显示在顶部。最新新闻和三个月内的新闻将显示红色<code>新</code>标签。</li>
              <div style="text-align: center;">
                <img src="./image10.png" alt="上传与分享图片" style="max-width: 100%; height: auto;">
              </div>
            `,
          },
          {
            title: "保存编辑",
            content: `
              <p>完成所有操作后，点击页面底部的<code>保存</code>按钮，保存所有更改。</p>
            `,
          },
        ],
      },
      editResources: {
        title: "编辑资源功能概述",
        sections: [
          {
            title: "页面结构",
            content: `
              <p><code>编辑新闻和资源</code>页面分为两个标签：<code>编辑新闻</code>和<code>编辑资源</code>。</p>
            `,
          },
          {
            title: "功能介绍",
            content: `
              <p>在<code>编辑资源</code>标签中，您可以发布新资源、编辑资源和删除资源。所有资源按时间顺序排列，最新资源显示在顶部。</p>
            `,
          },
          {
            title: "用例",
            content: `
              <ul>
                <li>展示实验数据、课程文件等：您想公开下载的资源可以添加到此标签。</li>
              </ul>
            `,
          },
          {
            title: "功能细节",
            content: `
              <ul>
                <li><code>发布资源</code>：点击<code>发布资源</code>按钮，发布新资源。</li>
                <li><code>编辑资源</code>：点击每个资源下的<code>编辑</code>按钮，编辑资源内容。编辑字段包括：</li>
                <ul>
                  <li><code>标题</code>：资源标题。</li>
                  <li><code>描述</code>：资源描述。</li>
                  <li><code>日期</code>：资源日期，可以修改。资源的显示顺序将受修改日期影响。</li>
                  <li><code>图片</code>：资源图片，可选字段。您可以删除图片，使用随机图片，或上传自定义图片。</li>
                  <li><code>链接</code>：可选字段，您可以添加多个链接。每个链接分为<code>文本</code>和<code>URL</code>：</li>
                  <ul>
                    <li><code>文本</code>：要显示的内容。</li>
                    <li><code>URL</code>：点击显示内容时跳转的链接。有两种类型的链接：</li>
                    <ul>
                      <li><code>完整 URL</code>：以 HTTP 或 HTTPS 开头的完整 URL，可以插入互联网上共享的任何 URL。</li>
                      <li><code>相对 URL</code>：可以插入在<code>上传与分享</code>页面或本网站的<code>管理网页</code>页面创建的相对 URL。</li>
                    </ul>
                  </ul>
                </ul>
              </ul>
              <li><code>删除资源</code>：点击每个资源下的<code>删除</code>按钮，删除资源。</li>
              <li><code>时间排序</code>：所有资源按时间顺序排列，最新资源显示在顶部。最新资源和三个月内的资源将显示红色<code>新</code>标签。</li>
              <div style="text-align: center;">
                <img src="./image11.png" alt="上传与分享图片" style="max-width: 100%; height: auto;">
              </div>
            `,
          },
          {
            title: "保存编辑",
            content: `
              <p>完成所有操作后，点击页面底部的<code>保存</code>按钮，保存所有更改。</p>
            `,
          },
        ],
      },
      changePassword: {
        title: "更改密码功能",
        sections: [
          {
            title: "功能介绍",
            content: `
              <p>更改密码功能允许用户更新其账户密码，以确保账户安全。</p>
            `,
          },
          {
            title: "使用说明",
            content: `
              <ol>
                <li>输入当前密码：在指定字段中输入当前密码。</li>
                <li>输入新密码：在新密码字段中输入新密码，并在确认新密码字段中再次输入以确认。两次输入必须一致。</li>
                <li>密码强度提示：系统会提供新密码强度提示。密码不能过于简单，建议使用复杂密码以增强安全性。</li>
                <li>更改密码：输入信息后，点击<code>更改密码</code>按钮提交更改请求。</li>
              </ol>
              <h4>默认密码使用提示</h4>
              <p>如果用户使用默认密码且未更改，登录后将自动重定向到更改密码页面。建议立即更新密码以确保账户安全。</p>
              <h4>成功提示</h4>
              <p>密码成功更改后，系统将显示确认提示，表明密码已成功更新。</p>
            `,
          },
        ],
      },
      oneClickExport: {
        title: "一键导出功能",
        sections: [
          {
            title: "功能介绍",
            content: `
              <p>一键导出功能允许用户将所有数据导出到一个文件夹，以便他们将所有本地修改更新到学校的静态服务器。</p>
            `,
          },
          {
            title: "使用说明",
            content: `
              <h5>保存更改提醒</h5>
              <ol>
                <li>在每个<code>编辑</code>页面（如<code>编辑关于我</code>、<code>编辑出版物</code>、<code>编辑团队</code>等）进行编辑后，请务必点击<code>保存</code>按钮保存更改。</li>
                <li>如果更改未保存，每个<code>编辑</code>页面顶部会出现黄色提示，提示“您有未保存的更改”。</li>
                <li>注意：在使用一键导出功能之前，请确保所有更改已保存。未保存的数据将不会导出。</li>
              </ol>
              <div style="text-align: center;">
                <img src="./image12.png" alt="上传与分享图片" style="max-width: 100%; height: auto;">
              </div>
              <h5>导出数据</h5>
              <ol>
                <li>在页面的欢迎消息下，有一个<code>导出所有数据</code>按钮。</li>
                <li>点击<code>导出所有数据</code>按钮，将所有数据导出到一个文件夹。</li>
              </ol>
              <h5>显示导出路径</h5>
              <ol>
                <li>数据导出后，系统将显示导出文件夹的路径。</li>
                <li>您可以复制此路径并将其粘贴到文件系统的地址栏中，按 Enter 键打开文件夹。</li>
                <li>在文件夹中，您将看到一个名为<code>upload_files</code>的文件夹。</li>
              </ol>
              <div style="text-align: center;">
                <img src="./image13.png" alt="上传与分享图片" style="max-width: 100%; height: auto;">
              </div>
              <h5>更新网站内容</h5>
              <ol>
                <li>复制<code>upload_files</code>文件夹，并替换前端中的同名文件夹。</li>
              </ol>
              <h5>测试和部署步骤</h5>
              <ol>
                <li><strong>本地测试</strong></li>
                <ol>
                  <li>导出数据后，替换<code>Frontend/build</code>目录中的<code>upload_files</code>文件夹的所有内容。</li>
                  <li>运行<code>frontend_test.bat</code>脚本，确保本地测试显示正确。</li>
                </ol>
                <li><strong>部署到服务器</strong></li>
                <ol>
                  <li>通过本地测试后，将<code>upload_files</code>文件夹的所有内容替换到服务器的相应位置。</li>
                </ol>
              </ol>
            `,
          },
        ],
      },
      QandA: {
        title: "常见问题",
        sections: [
          {
            title: "Q&A",
            content: `
              <p><strong>问：为什么我的<code>Upload_files</code>文件夹这么大？</strong></p>
              <p>答：该文件夹包含所有修改的数据，包括您上传到云端的所有文件。这些文件被打包在<code>Upload_files</code>文件夹中，以部署到学校的静态资源服务器供用户下载。</p>
              <br/>
              <p><strong>问：如何将旧数据同步到新电脑？</strong></p>
              <p>答：按照以下步骤操作：</p>
              <ol>
                <li>在旧电脑上，找到<code>C:\\Program Files\\Focal\\resources</code>文件夹，并将其复制到便携式存储设备（如 U 盘）上。</li>
                <li>在新电脑上安装 Focal 软件。</li>
                <li>将便携式存储设备中的<code>resources</code>文件夹复制到新电脑的<code>C:\\Program Files\\Focal</code>目录中，覆盖现有的<code>resources</code>文件夹。</li>
                <li>注意：<code>C:\\Program Files\\Focal\\resources</code>是默认安装路径。如果您在安装过程中未更改路径，它应位于此位置。如果不确定，请右键点击桌面上的 Focal 软件图标，选择“打开文件位置”以检查您的安装目录。</li>
              </ol>
              <br/>
              <p><strong>问：如果软件有问题，我该怎么办？</strong></p>
              <p>答：软件的运行日志存储在以下位置：</p>
              <ul>
                <li>在安装目录下的<code>C:\\Program Files\\Focal\\resources\\logs</code>中</li>
                <li><code>C:\\Users\\<Your Username>\\AppData\\Roaming\\focal\\focal_client.log</code></li>
              </ul>
              <p>快速访问方法：在文件资源管理器的地址栏中输入<code>%AppData%\\focal\\focal_client.log</code>并按 Enter 键，直接打开日志文件。</p>
              <p>如果您有技术技能，可以检查日志以进行故障排除。如果问题仍然存在，请收集所有日志并联系我 weixingchensimon@gmail.com。</p>
              <br/>
              <p><strong>问：为什么我无法运行 bat 前端测试脚本或安装 Focal 管理软件，或者运行不正常？</strong></p>
              <p>答：请确保您的操作系统为 Windows 64 位版本，因为目前软件仅支持该系统。此外，请确保您的用户账户具有管理员权限。在操作过程中，如果出现权限请求或网络访问提示，请同意以确保软件正常运行。如果您仍然遇到问题，请检查运行日志或联系技术支持。</p>
              <br/>
              <p><strong>问：如何确保所有更改都已保存？</strong></p>
              <p>答：在每个<code>编辑</code>页面（如<code>编辑关于我</code>、<code>编辑出版物</code>、<code>编辑团队</code>等）进行编辑后，请务必点击<code>保存</code>按钮保存更改。如果更改未保存，每个<code>编辑</code>页面顶部会出现黄色提示，提示“您有未保存的更改”。请确保所有更改已保存，然后再执行一键导出操作。</p>
              <br/>
              <p><strong>问：如何在本地测试我的网站？</strong></p>
              <p>答：打开<code>前端</code>文件夹，双击<code>frontend_test.bat</code>脚本。脚本将启动并自动部署本地静态资源服务器。打开浏览器，访问<code>http://localhost:1005/</code>以查看静态网页。查看后，关闭 DOS 窗口以关闭本地静态资源服务器。</p>
              <br/>
              <p><strong>问：什么是相对 URL 和完整 URL？</strong></p>
              <p>答：</p>
              <ul>
                <li><code>完整 URL</code>：以 HTTP 或 HTTPS 开头的完整 URL，可以插入互联网上共享的任何 URL。</li>
                <li><code>相对 URL</code>：可以插入在<code>上传与分享</code>页面或本网站的<code>管理网页</code>页面创建的相对 URL。</li>
              </ul>
              <br/>
              <p><strong>问：如何导出和部署我的网站数据？</strong></p>
              <p>答：点击页面欢迎消息下的<code>导出所有数据</code>按钮，将所有数据导出到一个文件夹。系统将显示导出文件夹的路径。复制<code>upload_files</code>文件夹，并替换前端<code>build</code>文件夹中的同名文件夹。要部署到学校服务器，请替换服务器上相应位置的<code>upload_files</code>文件夹。</p>
            `,
          },
        ],
      },
    },
    // 可以在这里添加更多项目
   
  ],
};

export default ProjectContent;
