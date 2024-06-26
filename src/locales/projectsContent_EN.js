const ProjectContent = {
    dropdownPrompt: "Please select a project to view:",
    proContent: "Contents",
    projects: [
      {
        name: "Dr. Steve Hranilovic's Lab Homepage and Management System",
        intro: {
          title: "Introduction",
          sections: [
            {
              title: "Project Overview",
              content: `
                <p>From May to July 2024, this short-term contract project was initiated to develop a comprehensive lab homepage and content management system for Dr. Steve Hranilovic, the Dean of the Graduate School at <strong>McMaster University in Canada</strong>. The primary goal of this project is to create a robust platform that highlights Dr. Hranilovic's research accomplishments, provides timely news updates, facilitates resource sharing, and offers clear contact information.</p>
                <p>In addition to the public-facing website, the project includes a sophisticated backend management system. This system allows the professor or designated administrators to perform real-time updates and maintenance of the website content efficiently. The architecture of the project is designed with a clear separation between the front-end and back-end. The front-end is developed using the React framework, ensuring a dynamic and responsive user experience. The back-end is built with Node.js and Express, providing a powerful and scalable foundation, while SQLite is used for reliable data storage.</p>
                <p><strong>You can visit the project homepage to view the front-end and try the management system:</strong></p>
                <p><strong><a href="https://focal.simonoren.com/" target="_blank" class="project-link">https://focal.simonoren.com/</a></strong></p>
              `,
            },
            {
              title: "Tech Stack",
              content: `
                <p>The main technologies used in this project include:</p>
                <ul>
                  <li>Backend:</li>
                  <ul>
                    <li>Node.js: Used for server-side development, offering efficient non-blocking I/O operations, suitable for handling numerous concurrent requests.</li>
                    <li>Express: A web application framework for Node.js, simplifying API development and providing powerful middleware support and routing management.</li>
                    <li>SQLite: A lightweight relational database, suitable for the professor's needs. It offers simple file storage for easy deployment and maintenance, with performance and functionality adequate for the project.</li>
                    <li>Sequelize: An ORM framework for Node.js, simplifying database operations and providing model definitions and data validation.</li>
                  </ul>
                  <li>Frontend:</li>
                  <ul>
                    <li>React: Used for building user interfaces, offering a component-based development mode for responsive and efficient front-end experiences.</li>
                    <li>React Router Dom: Enables client-side routing for single-page applications, managing page navigation and URL state.</li>
                    <li>Ant Design (Antd): A UI framework for React, providing consistent and aesthetically pleasing UI components, reducing UI development time, and enhancing user experience.</li>
                    <li>Axios: Handles HTTP requests, simplifying interactions with the back-end server.</li>
                    <li>React Quill: A rich text editor offering robust text editing capabilities.</li>
                  </ul>
                  <li>Deployment and Operations:</li>
                  <ul>
                    <li>AWS Elastic Beanstalk: Automates backend deployment and management, streamlining the deployment process and environment configuration.</li>
                    <li>AWS S3: Used for storing and hosting front-end static resources, offering high availability and reliability.</li>
                    <li>AWS CloudFront: A content delivery network (CDN) to enhance site access speed and performance, providing fast global content distribution.</li>
                  </ul>
                </ul>
              `,
            },
            {
              title: "Reasons for Choosing These Technologies",
              content: `
                <p>The reasons for choosing these technologies are as follows:</p>
                <ul>
                  <li>Node.js and Express offer high-performance, scalable server-side solutions, suitable for handling numerous concurrent requests, and share the same language as the front-end JavaScript code, reducing development complexity.</li>
                  <li>SQLite, as a lightweight database, facilitates rapid iterations during development and testing stages. Its single-file storage method simplifies management and migration, with sufficient performance and functionality for the professor's needs, and its simplicity and lightweight nature make maintenance easier.</li>
                  <li>React offers a component-based development mode, making front-end development more modular and maintainable, with its virtual DOM mechanism enhancing rendering performance.</li>
                  <li>React Router Dom provides simple client-side routing management, ensuring smooth navigation in single-page applications.</li>
                  <li>Ant Design provides consistent and aesthetically pleasing UI components, reducing UI development time and enhancing user experience.</li>
                  <li>Axios simplifies interactions with the back-end server, offering a straightforward method for handling HTTP requests.</li>
                  <li>React Quill offers robust rich text editing capabilities, supporting various text formats and editing needs.</li>
                  <li>AWS services provide stable, efficient cloud services, supporting automated deployment and global distribution, ensuring high availability and performance. Elastic Beanstalk simplifies backend application deployment and management, while S3 and CloudFront ensure efficient distribution and rapid loading of front-end resources.</li>
                </ul>
              `,
            },
          ],
        },
        projectStructure: {
          title: "Project Structure",
          sections: [
            {
              title: "Directory Structure",
              content: `
                <p>The project adopts a front-end and back-end separation architecture, with independent directories for storing front-end and back-end code. The main directory and file structure are as follows:</p>
                <ul>
                  <li>Root Directory</li>
                  <ul>
                    <li>.env: Environment variable file.</li>
                    <li>.gitattributes: Git attributes file.</li>
                    <li>.gitignore: Git ignore file.</li>
                    <li>client: Front-end code directory.</li>
                    <li>focal_database.sqlite: SQLite database file.</li>
                    <li>logs: Log file directory.</li>
                    <li>package-lock.json: Node.js dependency lock file.</li>
                    <li>package.json: Node.js dependency file.</li>
                    <li>server: Back-end code directory.</li>
                  </ul>
                  <li>Backend (server) Directory</li>
                  <ul>
                    <li>.ebextensions: AWS Elastic Beanstalk configuration file directory.</li>
                    <li>.env: Backend environment variable file.</li>
                    <li>checkEnv.js: Environment variable check script.</li>
                    <li>config: Configuration file directory, including database configuration and other application configuration files.</li>
                    <li>db.js: Database connection file.</li>
                    <li>index.js: Entry file for the back-end application.</li>
                    <li>logger.js: Logging module.</li>
                    <li>logs: Directory for storing log files.</li>
                    <li>middleware: Directory for middleware files, including custom middleware for request processing and validation.</li>
                    <li>models: Directory for database models, defining data models and relationships.</li>
                    <li>routes: Directory for routes, defining API routes and request handling logic.</li>
                    <li>services: Directory for service layers, including business logic and data processing functions.</li>
                    <li>uploads: Directory for storing uploaded files.</li>
                  </ul>
                  <li>Frontend (client) Directory</li>
                  <ul>
                    <li>public: Public resource directory, including static files such as HTML templates and icons.</li>
                    <li>src: Source code directory.</li>
                    <ul>
                      <li>assets: Resource directory, including font files and image files.</li>
                      <li>components: Component directory.</li>
                      <ul>
                        <li>common: Common component directory.</li>
                        <li>layout: Layout component directory.</li>
                      </ul>
                      <li>config: Configuration file directory, including text content configuration files.</li>
                      <li>pages: Page component directory, defining independent pages such as the homepage, news page, and about us page.</li>
                      <li>services: Service layer directory, encapsulating interaction logic with back-end APIs.</li>
                      <li>utils: Utility function directory, providing general helper functions such as API clients and URL builders.</li>
                    </ul>
                  </ul>
                </ul>
              `,
            },
            {
              title: "Key Components",
              content: `
                <p>Key components include:</p>
                <ul>
                  <li>Backend Key Components:</li>
                  <ul>
                    <li><code>index.js</code>: Entry file for the application, setting up the Express server and starting the application.</li>
                    <li><code>db.js</code>: Database connection module, configuring and initializing the SQLite database.</li>
                    <li>models: Database model definitions, using Sequelize to define data structures and relationships.</li>
                    <li>routes: API route definitions, handling client requests and returning appropriate data.</li>
                    <li>middleware: Middleware modules, handling request validation, logging, etc.</li>
                    <li>services: Service layer modules, encapsulating business logic and data processing functions.</li>
                  </ul>
                  <li>Frontend Key Components:</li>
                  <ul>
                    <li><code>AppRouter.js</code>: Application routing component, defining the front-end routing structure.</li>
                    <li>components/common: Common components such as buttons and input fields.</li>
                    <li>components/layout: Layout components such as the navigation bar and footer.</li>
                    <li>pages: Page components, defining independent pages such as the homepage, news page, and about us page.</li>
                    <li>services: Service layer components, encapsulating interaction logic with back-end APIs.</li>
                    <li>utils: Utility functions, providing general helper functions such as API clients and URL builders.</li>
                  </ul>
                </ul>
              `,
            },
          ],
        },
        backendDevelopment: {
          title: "Backend Development",
          sections: [
            {
              title: "Node.js and Express Setup",
              content: `
                <p>The backend of the project is developed using Node.js and the Express framework, offering efficient non-blocking I/O operations suitable for handling numerous concurrent requests. The Express framework simplifies API development, providing robust middleware support and routing management.</p>
                <ul>
                  <li>Entry File <code>index.js</code>: This is the main entry file for the application, responsible for setting up the Express server and starting the application. It configures basic middleware such as CORS, body-parser, and morgan for handling cross-origin requests, parsing request bodies, and logging. Additionally, it sets up static file services and imports route files.</li>
                </ul>
              `,
            },
            {
              title: "Database Design",
              content: `
                <p>The project uses SQLite, a lightweight relational database, suitable for development and testing environments. SQLite offers simple file storage, facilitating management and migration. For the professor's actual needs, SQLite's performance and functionality are sufficient, and its simplicity and lightweight characteristics make maintenance easier.</p>
                <ul>
                  <li>Database Connection File <code>db.js</code>: Configures and initializes the SQLite database connection, using the Sequelize ORM framework to simplify database operations. Sequelize allows the definition of data models and relationships, providing data validation and migration capabilities.</li>
                </ul>
              `,
            },
            {
              title: "Configuration Files",
              content: `
                <p>The project's configuration files are stored in the <code>config</code> directory, mainly including various application configurations such as database and server configurations. These configuration files dynamically read environment variables, ensuring application portability across different environments.</p>
                <ul>
                  <li>Database Configuration: Defines the storage path and basic configuration parameters for the SQLite database.</li>
                </ul>
              `,
            },
            {
              title: "API Development",
              content: `
                <p>The backend follows RESTful API design principles, providing a series of API endpoints for front-end and server interactions. The main APIs include user management, news management, and resource management. All API route files are stored in the <code>routes</code> directory.</p>
                <ul>
                  <li>User Route <code>routes/userRouter.js</code>: Defines user-related API routes and request handling logic, including user registration, login, and user information retrieval.</li>
                  <li>News Route <code>routes/newsRouter.js</code>: Defines news-related API routes, handling news creation, update, deletion, and retrieval.</li>
                  <li>Resource Route <code>routes/fileRouter.js</code>: Handles resource upload, download, and management functions.</li>
                  <li>About Us Route <code>routes/aboutMeRouter.js</code>: Manages the display and management of About Us information.</li>
                  <li>Email Route <code>routes/emailRouter.js</code>: Handles contact form email sending and recording.</li>
                  <li>Image Upload Route <code>routes/imageUploadRouter.js</code>: Manages image upload and management functions.</li>
                  <li>Page Route <code>routes/pageRouter.js</code>: Manages the display and management of dynamic page content.</li>
                  <li>Publications Route <code>routes/publicationsRouter.js</code>: Manages and displays publication content.</li>
                  <li>Team Route <code>routes/teamRouter.js</code>: Manages and displays team member information.</li>
                </ul>
              `,
            },
            {
              title: "Data Validation",
              content: `
                <p>The backend uses the Sequelize ORM framework to define database models and implement data validation and constraints through model definitions. All data models are stored in the <code>models</code> directory.</p>
                <ul>
                  <li>User Model <code>models/userModel.js</code>: Defines the structure and relationships of user data, including username, password, and timestamps.</li>
                  <li>News Model <code>models/newsModel.js</code>: Defines the structure of news data, including title, content, author, and timestamps.</li>
                  <li>Resource Model <code>models/newsLinksModel.js</code>: Defines the structure of resource data, including file names, paths, upload times, etc.</li>
                  <li>About Us Model <code>models/aboutMeModel.js</code>: Defines the structure of About Us information.</li>
                  <li>Email Model <code>models/emailModel.js</code>: Defines the structure of email records.</li>
                  <li>Password Reset Model <code>models/passwordResetModel.js</code>: Defines the structure of password reset tokens and related information.</li>
                  <li>Page Model <code>models/pageModel.js</code>: Defines the structure of dynamic page data.</li>
                  <li>Publications Category Model <code>models/publications_categoriesModel.js</code>: Defines the structure of publication categories.</li>
                  <li>Publications Item Model <code>models/publications_itemsModel.js</code>: Defines the structure of individual publication items.</li>
                  <li>Team Model <code>models/teamModel.js</code>: Defines the structure of team member information.</li>
                </ul>
              `,
            },
            {
              title: "Middleware",
              content: `
                <p>Custom middleware is used to handle request validation, logging, etc., ensuring the application's security and maintainability. Middleware files are stored in the <code>middleware</code> directory.</p>
                <ul>
                  <li>Logging Middleware <code>middleware/logger.js</code>: Records request logs for debugging and error tracking.</li>
                  <li>Authentication Middleware <code>middleware/auth.js</code>: Handles user authentication, ensuring that only authorized users can access protected APIs.</li>
                </ul>
              `,
            },
            {
              title: "Service Layer",
              content: `
                <p>The service layer encapsulates business logic and data processing functions, ensuring code modularity and maintainability. Service layer files are stored in the <code>services</code> directory.</p>
                <ul>
                  <li>User Service <code>services/userService.js</code>: Handles user-related business logic, including user authentication, retrieving user information, and updating user information.</li>
                  <li>News Service <code>services/newsService.js</code>: Handles news-related business logic, including creating, updating, deleting, and retrieving news.</li>
                  <li>Resource Service <code>services/utilsService.js</code>: Handles resource-related business logic, including file upload, download, and management.</li>
                  <li>About Us Service <code>services/aboutMeService.js</code>: Manages the display and management of About Us information.</li>
                  <li>Email Service <code>services/emailService.js</code>: Handles contact form email sending and recording.</li>
                  <li>Authentication Service <code>services/authService.js</code>: Handles user authentication and authorization.</li>
                  <li>Page Service <code>services/pageService.js</code>: Manages the display and management of dynamic page content.</li>
                  <li>Publications Category Service <code>services/publicationsCategoriesService.js</code>: Manages publication categories.</li>
                  <li>Publications Item Service <code>services/publicationsItemsService.js</code>: Manages individual publication items.</li>
                  <li>Team Service <code>services/teamService.js</code>: Manages and displays team member information.</li>
                </ul>
              `,
            },
            {
              title: "Performance Optimization and Security",
              content: `
                <p>Various optimization measures and security strategies were implemented to ensure the project's high performance and security.</p>
                <h4>Performance Optimization:</h4>
                <ul>
                  <li>Database Optimization: Improved data query efficiency by using appropriate indexes and optimizing query statements.</li>
                  <li>Code Optimization: Enhanced code execution efficiency by reducing unnecessary computations and memory consumption through code review and refactoring.</li>
                  <li>Caching Mechanism: Introduced caching mechanisms in appropriate places to reduce database query times and improve response speed.</li>
                </ul>
                <h4>Security:</h4>
                <ul>
                  <li>Password Encryption: Encrypted user passwords before storage to prevent password leaks.</li>
                  <li>Authentication: Used JWT for user authentication, ensuring that only authorized users can access protected resources.</li>
                  <li>Data Validation: Implemented strict data validation during data storage and processing to prevent malicious data input.</li>
                  <li>Protection Measures: Implemented common security protection measures such as preventing SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).</li>
                </ul>
              `,
            },
          ],
        },
        frontendDevelopment: {
          title: "Frontend Development",
          sections: [
            {
              title: "React Setup",
              content: `
                <p>The front-end of the project is developed using the React framework, offering a component-based development mode for responsive and efficient front-end experiences. React Router is used to manage client-side routing for single-page applications, ensuring smooth navigation between different pages.</p>
                <ul>
                  <li>Entry File <code>src/index.js</code>: This is the entry file for the React application, responsible for initializing the application and mounting it to the DOM.</li>
                  <li>Application Router <code>src/AppRouter.js</code>: Defines the application's routing structure, including route configurations for different pages.</li>
                </ul>
              `,
            },
            {
              title: "Component Design",
              content: `
                <p>The front-end code structure is clear, separating common components from layout components to ensure code modularity and maintainability.</p>
                <ul>
                  <li>Common Components <code>src/components/common</code>: Stores common UI components such as buttons and input fields (currently empty, may be supplemented in future project development).</li>
                  <li>Layout Components <code>src/components/layout</code>: Stores layout-related components such as the navigation bar and footer.</li>
                  <li>Navigation Bar <code>src/components/layout/Navbar.js</code>: Implements the site's navigation functionality, including navigation links and responsive design.</li>
                  <li>Footer <code>src/components/layout/CustomFooter.js</code>: Implements the site's footer, including copyright information and relevant links.</li>
                </ul>
              `,
            },
            {
              title: "Page Components",
              content: `
                <p>Page components are stored in the <code>src/pages</code> directory, with each page having its own directory and files to ensure code modularity and maintainability.</p>
                <ul>
                  <li>About Us Page <code>src/pages/AboutMe</code>: Displays the professor's personal information and research areas.</li>
                  <ul>
                    <li><code>AboutMe.js</code>: Main implementation file for the page.</li>
                    <li><code>AboutMe.css</code>: Style file for the page.</li>
                  </ul>
                  <li>Admin Panel Pages <code>src/pages/Admin</code>: Used for managing website content, including multiple subpages and functions.</li>
                  <ul>
                    <li><code>AdminDashboard.js</code>: Dashboard for the admin panel.</li>
                    <li><code>EditAboutMe</code>: Edit the About Us content.</li>
                    <li><code>EditNews</code>: Edit news content.</li>
                    <li><code>EditPublications</code>: Edit publication content.</li>
                    <li><code>EditTeam</code>: Edit team member information.</li>
                    <li><code>ManageWebPages.js</code>: Manage web page content.</li>
                    <li><code>UploadAndShare.js</code>: Upload and share resources.</li>
                  </ul>
                  <li>Contact Us Page <code>src/pages/ContactUs</code>: Provides contact information and a contact form.</li>
                  <ul>
                    <li><code>ContactUs.js</code>: Main implementation file for the page.</li>
                    <li><code>ContactUs.css</code>: Style file for the page.</li>
                  </ul>
                  <li>Content Display Page <code>src/pages/ContentPage</code>: Dynamically displays various content.</li>
                  <ul>
                    <li><code>ContentPage.js</code>: Main implementation file for the page.</li>
                    <li><code>ContentPage.css</code>: Style file for the page.</li>
                  </ul>
                  <li>Homepage <code>src/pages/Home</code>: Main page of the site, displaying primary information and navigation links.</li>
                  <ul>
                    <li><code>Home.js</code>: Main implementation file for the page.</li>
                    <li><code>Home.css</code>: Style file for the page.</li>
                  </ul>
                  <li>Login Page <code>src/pages/Login</code>: Handles user login, password reset, and forgot password functionality.</li>
                  <ul>
                    <li><code>Login.js</code>: Implementation file for the login page.</li>
                    <li><code>ForgotPassword.js</code>: Implementation file for the forgot password page.</li>
                    <li><code>ResetPassword.js</code>: Implementation file for the reset password page.</li>
                    <li><code>Login.css</code>: Style file for the page.</li>
                  </ul>
                  <li>News Page <code>src/pages/News</code>: Displays news lists and news details.</li>
                  <ul>
                    <li><code>News.js</code>: Main implementation file for the page.</li>
                    <li><code>News.css</code>: Style file for the page.</li>
                  </ul>
                  <li>404 Page <code>src/pages/NotFound</code>: Handles cases where the page is not found.</li>
                  <ul>
                    <li><code>NotFound.js</code>: Main implementation file for the page.</li>
                    <li><code>NotFound.css</code>: Style file for the page.</li>
                  </ul>
                  <li>Publications Page <code>src/pages/Publications</code>: Displays the professor's publications list and details.</li>
                  <ul>
                    <li><code>Publications.js</code>: Main implementation file for the page.</li>
                    <li><code>Publications.css</code>: Style file for the page.</li>
                  </ul>
                  <li>Team Page <code>src/pages/Team</code>: Displays information about the professor's team members.</li>
                  <ul>
                    <li><code>Team.js</code>: Main implementation file for the page.</li>
                    <li><code>Team.css</code>: Style file for the page.</li>
                  </ul>
                </ul>
              `,
            },
            {
              title: "State Management",
              content: `
                <p>The front-end project uses React's state management mechanism, managing application state through component states and props passing.</p>
              `,
            },
            {
              title: "Style Design",
              content: `
                <p>The project adopts modular CSS design, with each component and page having independent CSS files to ensure style isolation and maintainability.</p>
              `,
            },
            {
              title: "Service Layer",
              content: `
                <p>The service layer encapsulates the interaction logic with back-end APIs, ensuring clarity and maintainability of front-end code. All service layer files are stored in the <code>src/services</code> directory.</p>
                <ul>
                  <li>About Us Service <code>services/aboutMeService.js</code>: Handles data interaction for the About Us page.</li>
                  <li>Contact Us Service <code>services/contactUsService.js</code>: Handles data interaction for the contact form.</li>
                  <li>Footer Service <code>services/footerService.js</code>: Handles data interaction for the footer content.</li>
                  <li>News Service <code>services/newsService.js</code>: Handles data interaction for news content.</li>
                  <li>Page Service <code>services/pageService.js</code>: Handles data interaction for dynamic pages.</li>
                  <li>Publications Service <code>services/publicationsService.js</code>: Handles data interaction for publication content.</li>
                  <li>Team Service <code>services/teamService.js</code>: Handles data interaction for team member information.</li>
                  <li>User Service <code>services/userService.js</code>: Handles user data and authentication.</li>
                  <li>Utility Service <code>services/utilsService.js</code>: Provides general utility functions.</li>
                </ul>
              `,
            },
            {
              title: "Utility Functions",
              content: `
                <p>Utility function files are stored in the <code>src/utils</code> directory, providing general helper functions.</p>
                <ul>
                  <li><code>AuthRoute.js</code>: Handles protected routes, ensuring that only authenticated users can access them.</li>
                  <li><code>apiClient.js</code>: Encapsulates general request logic with back-end APIs.</li>
                  <li><code>urlBuilder.js</code>: Provides URL construction functionality, simplifying API request URL assembly.</li>
                </ul>
              `,
            },
            {
              title: "Configuration Files",
              content: `
                <p>Configuration files are stored in the <code>src/config</code> directory, mainly including text content configurations.</p>
                <ul>
                  <li><code>textContent.js</code>: Defines the text content used in the application, facilitating internationalization and multilingual support.</li>
                </ul>
              `,
            },
          ],
        },
        featuresAndFunctions: {
          title: "Features and Functions",
          sections: [
            {
              title: "User Authentication",
              content: `
                <p>The project implements a comprehensive user authentication system, ensuring that only authorized users can access and operate management backend functions. Main features include:</p>
                <ul>
                  <li>User Registration: Allows new users to register accounts, storing usernames and encrypted passwords.</li>
                  <li>User Login: Users can log in with their usernames and passwords, and the system will verify user credentials and generate a JWT (JSON Web Token) for session management.</li>
                  <li>Password Reset: Implements password reset functionality, allowing users to receive password reset links via their registered email addresses and reset their passwords to ensure account security.</li>
                </ul>
              `,
            },
            {
              title: "Content Management",
              content: `
                <p>The management backend provides a series of content management functions, facilitating administrators to perform CRUD operations on website content. Main features include:</p>
                <ul>
                  <li>About Us Management: Administrators can edit and update About Us information, displaying the professor's personal profile and research areas.</li>
                  <li>News Management: Administrators can create, edit, delete, and view news entries, ensuring timely updates of website news content.</li>
                  <li>Resource Management: Supports file upload, download, and management functions, allowing administrators to upload and share various resource files.</li>
                  <li>Publication Management: Administrators can manage the professor's publication information, including publication categories and specific entries.</li>
                  <li>Team Management: Administrators can manage team member information, displaying the professor's team members and their respective research directions.</li>
                </ul>
              `,
            },
            {
              title: "Rich Text Editor",
              content: `
                <p>The front-end integrates a rich text editor that supports various text formats and styles, facilitating administrators in formatting and setting content while editing. The rich text editor also supports embedding images and videos, making the content more diverse and vivid.</p>
              `,
            },
            {
              title: "File Upload and Management",
              content: `
                <p>Implements file upload and management functions, allowing users to select and upload files to the server through the upload interface. After the file is uploaded, the system generates a unique file path and returns it to the user. Administrators can view uploaded files in the backend and perform management operations such as deletion or renaming.</p>
              `,
            },
            {
              title: "Responsive Design",
              content: `
                <p>The project adopts responsive design, ensuring a good user experience on different devices and screen sizes. By using Ant Design and custom CSS styles, the project achieves adaptive layout and responsive display of components.</p>
              `,
            },
            {
              title: "Dynamic Content Display",
              content: `
                <p>Supports dynamic content display, with the front-end fetching content data from the back-end API and rendering it on the page. Main dynamic content includes:</p>
                <ul>
                  <li>News Page: Displays the latest news list and detailed content, supporting pagination display.</li>
                  <li>Publications Page: Displays the professor's publication list and detailed information, categorized by type.</li>
                  <li>Team Page: Displays team member information, including names, positions, and research directions.</li>
                </ul>
              `,
            },
            {
              title: "Contact Form",
              content: `
                <p>Implements a contact form function, allowing users to send messages to administrators through the contact form. The system records the user's contact information and message content and sends it to the administrator via email, ensuring timely communication and feedback.</p>
              `,
            },
            {
              title: "Logging",
              content: `
                <p>The backend implements logging functionality, recording detailed information of all requests and error logs for debugging and error tracking. The middleware logs requests, ensuring that all request information is recorded for future analysis and maintenance.</p>
              `,
            },
            {
              title: "Security",
              content: `
                <p>The project considers security at multiple levels, ensuring the security of user data and the system. Main measures include:</p>
                <ul>
                  <li>Password Encryption: Encrypts user passwords before storage to prevent password leaks.</li>
                  <li>Authentication: Uses JWT for user authentication, ensuring that only authorized users can access protected resources.</li>
                  <li>Data Validation: Performs strict data validation during data storage and processing to prevent malicious data input.</li>
                  <li>Protection Measures: Implements common security protection measures such as preventing SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).</li>
                </ul>
              `,
            },
            {
              title: "Performance Optimization",
              content: `
                <p>To ensure the project's high performance, various optimization measures were implemented:</p>
                <ul>
                  <li>Frontend Performance Optimization: Reduces initial load time and improves page response speed through code splitting and lazy loading. For example, by using React's React.lazy and Suspense components to load pages and components on demand.</li>
                  <li>Backend Performance Optimization: Improves data query efficiency through optimized database queries and appropriate indexes. Uses Sequelize ORM framework's query optimization techniques to reduce unnecessary data loading.</li>
                  <li>Caching Mechanism: Reduces database query times and improves response speed through HTTP caching headers and memory caching strategies.</li>
                </ul>
              `,
            },
          ],
        },
        deployment: {
          title: "Deployment",
          sections: [
            {
              title: "Deployment Environment",
              content: `
                <p>The project is deployed on Amazon Web Services (AWS), utilizing various services for efficient, stable, and scalable application deployment. Main services include AWS Elastic Beanstalk, AWS S3, and AWS CloudFront.</p>
              `,
            },
            {
              title: "Backend Deployment",
              content: `
                <p><strong>AWS Elastic Beanstalk</strong>: Automates backend deployment and management. Elastic Beanstalk provides automated environment configuration, application deployment, and resource management, significantly simplifying the deployment process. Through the Elastic Beanstalk console, users can easily create and manage application environments, monitor application health, and performance metrics.</p>
                <ul>
                  <li>Environment Configuration: Configures necessary environment variables and security groups in the Elastic Beanstalk environment to ensure the application's normal operation and security. Environment variables include database connection strings, JWT keys, and other sensitive information.</li>
                  <li>CI/CD Pipeline: Integrates a CI/CD pipeline using GitHub Actions or AWS CodePipeline for automatic code building, testing, and deployment. Each code commit triggers the automatic build and deployment process, ensuring timely release and version control.</li>
                </ul>
              `,
            },
            {
              title: "Frontend Deployment",
              content: `
                <p><strong>AWS S3</strong>: Used for storing and hosting front-end static resources. S3 offers high availability and reliability, supporting static website hosting. Upload the built front-end files to an S3 bucket, and provide web services directly through S3's static website hosting feature.</p>
                <p><strong>AWS CloudFront</strong>: A content delivery network (CDN) to accelerate global content delivery. CloudFront caches static resources and distributes them to edge locations worldwide, enhancing site access speed and performance. Configure a CloudFront distribution and point it to the S3 bucket, enabling users to access front-end resources through CloudFront.</p>
              `,
            },
            {
              title: "Database Management",
              content: `
                <p>SQLite Database: As an SQLite database is a file-based database, special attention is required for database file backup and recovery during deployment. Persistent storage volumes can be mounted through Elastic Beanstalk's environment configuration to ensure the persistence and consistency of database files across different application versions.</p>
              `,
            },
            {
              title: "Load Balancing and Auto Scaling",
              content: `
                <p>Load Balancing: Elastic Beanstalk integrates the Elastic Load Balancing (ELB) service, automatically distributing incoming application traffic across multiple instances, ensuring high availability and reliability.</p>
                <p>Auto Scaling: Configures auto-scaling policies to automatically adjust instance numbers based on traffic and load conditions, ensuring the application can handle large numbers of requests during peak periods and save resources and costs during off-peak periods.</p>
              `,
            },
            {
              title: "Security Configuration",
              content: `
                <p><strong>SSL Certificates</strong>: Configures SSL/TLS certificates through AWS Certificate Manager (ACM) to provide HTTPS access, ensuring data transmission security and integrity.</p>
                <p><strong>Security Groups</strong>: Configures security groups in the Elastic Beanstalk environment to control incoming and outgoing traffic and restrict unauthorized access.</p>
                <p><strong>IAM Roles</strong>: Configures IAM roles and policies to ensure secure interactions between applications and services and control access permissions for different services.</p>
              `,
            },
            {
              title: "Logging and Monitoring",
              content: `
                <p><strong>Log Management</strong>: Uses Elastic Beanstalk's integrated log management feature to send application logs and server logs to Amazon CloudWatch Logs for centralized management and real-time monitoring.</p>
                <p><strong>Performance Monitoring</strong>: Uses Amazon CloudWatch to monitor application performance metrics such as CPU utilization, memory usage, and response time. Configures alert policies to notify operations personnel when performance metrics exceed thresholds for performance tuning.</p>
              `,
            },
          ],
        },
        performanceOptimization: {
          title: "Performance Optimization",
          sections: [
            {
              title: "Database Optimization",
              content: `
                <p>During the project development process, various methods were used to optimize database performance, ensuring system efficiency and response speed.</p>
                <ul>
                  <li><strong>Sequelize ORM</strong>: Uses the Sequelize ORM framework to manage database operations, avoiding handwritten SQL queries and enhancing code maintainability and security. Sequelize improves data access efficiency by caching model definitions and query results.</li>
                  <li><strong>Indexes</strong>: Creates database indexes for commonly queried fields, reducing query time. For example, creates an index for the username field in the user model to speed up the user login verification process.</li>
                  <li><strong>Connection Pool</strong>: Configures a database connection pool, reducing the overhead of establishing and destroying database connections and enhancing concurrency handling capabilities.</li>
                </ul>
              `,
            },
            {
              title: "Backend Performance Optimization",
              content: `
                <p>Backend code optimization improved server processing capacity and response speed.</p>
                <ul>
                  <li><strong>Middleware</strong>: Uses efficient middleware to handle HTTP requests and responses. Logs requests using the morgan middleware for debugging and performance monitoring.</li>
                  <li><strong>Caching Mechanism</strong>: Introduces caching mechanisms in appropriate places to reduce database query times. Uses memory caching to store frequently used data, avoiding frequent database access. For example, caches user information for a certain period after user authentication, reducing repeated queries.</li>
                  <li><strong>Asynchronous Processing</strong>: Extensively uses asynchronous processing techniques to avoid blocking operations. Node.js natively supports asynchronous I/O operations, enhancing server concurrency handling capabilities through asynchronous functions and the Promise mechanism.</li>
                </ul>
              `,
            },
            {
              title: "Frontend Performance Optimization",
              content: `
                <p>Front-end code and resource load optimization improved page load speed and user experience.</p>
                <ul>
                  <li><strong>Code Splitting and Lazy Loading</strong>: Utilizes React's React.lazy and Suspense components to achieve code splitting and lazy loading. Delays unnecessary code loading, reducing initial page load time and improving page response speed.</li>
                  <li><strong>Static Resource Optimization</strong>: Optimizes front-end static resources, including compressing JavaScript and CSS files to reduce file size. Enables code compression and removes redundant code during Webpack packaging.</li>
                  <li><strong>Image Optimization</strong>: Optimizes project images, including compressing images and using appropriate image formats. Implements image lazy loading through CSS, reducing initial page load time.</li>
                  <li><strong>HTTP Caching</strong>: Utilizes browser HTTP caching mechanisms, setting appropriate caching headers to reduce repeated loading of static resources and improve page load speed.</li>
                </ul>
              `,
            },
            {
              title: "Network Performance Optimization",
              content: `
                <p>Network performance optimization improved overall system response speed and user experience.</p>
                <ul>
                  <li><strong>CDN (Content Delivery Network)</strong>: Uses AWS CloudFront as a CDN to distribute front-end static resources to edge locations worldwide, reducing resource load latency and improving global user access speed.</li>
                  <li><strong>HTTPS</strong>: Configures SSL/TLS certificates to encrypt data transmission through HTTPS, ensuring data transmission security and integrity. HTTPS also enables HTTP/2, further enhancing page load speed.</li>
                </ul>
              `,
            },
            {
              title: "Performance Monitoring and Analysis",
              content: `
                <p>Real-time monitoring and analysis of system performance promptly identify and resolve performance bottlenecks and issues.</p>
                <ul>
                  <li><strong>Log Recording and Analysis</strong>: Logs requests using the morgan middleware and manages and analyzes logs centrally through Amazon CloudWatch. Identifies performance bottlenecks and abnormal requests by analyzing log data, optimizing promptly.</li>
                  <li><strong>Performance Monitoring</strong>: Uses Amazon CloudWatch to monitor system performance metrics, including CPU utilization, memory usage, and response time. Configures alert policies to notify operations personnel when performance metrics exceed thresholds for performance tuning.</li>
                </ul>
              `,
            },
          ],
        },
        securityConsiderations: {
          title: "Security Considerations",
          sections: [
            {
              title: "User Authentication and Authorization",
              content: `
                <p>The project uses JWT for user authentication, ensuring that only authorized users can access protected resources.</p>
                <ul>
                  <li><strong>JWT (JSON Web Token)</strong>: After a successful user login, the system generates a JWT, which the client includes in the HTTP header for subsequent requests. The backend verifies the JWT to ensure that only authorized users can access protected resources.</li>
                  <li><strong>Middleware Verification</strong>: Implements a custom authentication middleware that verifies the JWT before processing each request, ensuring that unauthenticated requests cannot access protected APIs.</li>
                </ul>
              `,
            },
            {
              title: "Data Protection",
              content: `
                <p>The project takes various measures to protect user data during storage and processing.</p>
                <ul>
                  <li><strong>Password Encryption</strong>: Encrypts user passwords before storage using the bcrypt library, preventing password leaks through salt hashing.</li>
                  <li><strong>Environment Variables</strong>: Manages sensitive information such as database connection strings and JWT keys through environment variables, avoiding hardcoding in the code, enhancing application security.</li>
                </ul>
              `,
            },
            {
              title: "Data Validation",
              content: `
                <p>Strict data validation is performed when handling user input to prevent malicious data input.</p>
                <ul>
                  <li><strong>Input Validation</strong>: Ensures that stored data conforms to expected formats and constraints through Sequelize's model definitions and validation features.</li>
                  <li><strong>Email Service</strong>: Validates the email addresses and message content provided by users when handling contact forms, ensuring data validity and security.</li>
                </ul>
              `,
            },
            {
              title: "Protection Against Common Attacks",
              content: `
                <p>The project implements various protection measures to prevent common web attacks.</p>
                <ul>
                  <li><strong>Prevent SQL Injection</strong>: Reduces the risk of SQL injection attacks by using the Sequelize ORM framework, avoiding manual construction of SQL queries.</li>
                  <li><strong>Prevent XSS (Cross-Site Scripting)</strong>: Escapes and filters user input data during processing and rendering to prevent malicious script injection.</li>
                  <li><strong>Prevent CSRF (Cross-Site Request Forgery)</strong>: Uses CSRF tokens to ensure that form submission requests come from legitimate users, preventing attackers from exploiting the user's identity for malicious operations.</li>
                </ul>
              `,
            },
            {
              title: "Security Configuration",
              content: `
                <p>The project takes various security measures during deployment and configuration.</p>
                <ul>
                  <li><strong>HTTPS</strong>: Deploys the project on AWS and configures SSL/TLS certificates through AWS Certificate Manager to provide HTTPS access, ensuring data transmission security and integrity.</li>
                  <li><strong>Security Groups and IAM Roles</strong>: Configures security groups and IAM roles in the AWS environment to strictly control incoming and outgoing traffic and resource access permissions, ensuring secure interactions between applications and services.</li>
                </ul>
              `,
            },
          ],
        },
        challengesAndSolutions: {
          title: "Challenges and Solutions",
          sections: [
            {
              title: "User Authentication and Authorization",
              content: `
                <p>Ensuring the security and reliability of the system, especially in user authentication and authorization, is a key challenge for the project. A secure, reliable, and efficient user authentication system is needed to ensure that only authorized users can access protected resources.</p>
                <p><strong>Solution:</strong> Adopts JWT (JSON Web Token) for user authentication. After a successful user login, the system generates a JWT, which the client includes in the HTTP header for subsequent requests. The backend verifies the JWT to ensure that only authorized users can access protected resources. To further enhance security, a custom authentication middleware is implemented to verify the JWT before processing each request.</p>
              `,
            },
            {
              title: "Data Protection and Security",
              content: `
                <p>How to protect user data, especially the security of user passwords, is an important challenge in the project. It is necessary to ensure that even if the database is breached, attackers cannot directly obtain users' plain text passwords.</p>
                <p><strong>Solution:</strong> Uses the bcrypt library to perform salt hashing on user passwords before storage, enhancing password security. Even if attackers obtain the hash value, it is difficult to restore the plain text password. Additionally, manages sensitive information through environment variables, avoiding hardcoding in the code, enhancing application security.</p>
              `,
            },
            {
              title: "Frontend and Backend Data Interaction",
              content: `
                <p>How to efficiently and reliably perform frontend and backend data interaction is a technical difficulty in the project. It is necessary to ensure the integrity and security of data transmission while ensuring high performance and low latency.</p>
                <p><strong>Solution:</strong> The frontend uses the Axios library to interact with the backend through promises for asynchronous requests. The backend API design follows RESTful principles to ensure clear and easy-to-use interfaces. Uses JWT for authentication to ensure the security of data interaction. Introduces data caching mechanisms to optimize performance, reducing database query times and improving response speed.</p>
              `,
            },
            {
              title: "Dynamic Content Management",
              content: `
                <p>The project needs to support dynamic content management and display, such as news, publications, team information, etc. This requires the system to be flexible and scalable, facilitating administrators to perform CRUD operations on content.</p>
                <p><strong>Solution:</strong> Implements a comprehensive content management system, using a rich text editor (such as React Quill) to support various text formats and styles, facilitating administrators in editing content. The backend provides rich API interfaces to support dynamic content management operations. The frontend dynamically fetches and displays content by calling these API interfaces.</p>
              `,
            },
            {
              title: "Responsive Design Across Devices",
              content: `
                <p>Ensuring a good user experience on different devices and screen sizes is an important user experience challenge. It is necessary to implement responsive design so that the website can be displayed and operated normally on mobile phones, tablets, and desktop devices.</p>
                <p><strong>Solution:</strong> Uses Ant Design and custom CSS styles to achieve adaptive layout and responsive display of components. Through media queries and Flexbox technology, ensures that page elements are well displayed and arranged on different screen sizes.</p>
              `,
            },
            {
              title: "AWS Cloud Service Configuration and Deployment",
              content: `
                <p>How to efficiently and stably deploy and manage applications on the AWS cloud platform is an operational challenge in the project. It is necessary to ensure the high availability and scalability of applications while simplifying the deployment process.</p>
                <p><strong>Solution:</strong> Deploys the backend on AWS Elastic Beanstalk, utilizing its automated deployment and management features to simplify environment configuration and resource management. Frontend static resources are stored on AWS S3 and globally distributed through AWS CloudFront, enhancing content loading speed and user experience. Configures a CI/CD pipeline to automate code building, testing, and deployment, ensuring timely release and version control.</p>
              `,
            },
            {
              title: "Implementing Security Mechanisms",
              content: `
                <p>How to prevent common web attacks, such as SQL injection, XSS, and CSRF, is a security challenge in the project. It is necessary to ensure the security and reliability of the system against various attacks.</p>
                <p><strong>Solution:</strong> Uses the Sequelize ORM framework to avoid manually constructing SQL queries, reducing the risk of SQL injection attacks. Strictly validates and escapes user input data to prevent XSS attacks. Uses CSRF tokens in form submissions to prevent CSRF attacks. Configures HTTPS to ensure the security and integrity of data transmission.</p>
              `,
            },
          ],
        },
        futureEnhancements: {
          title: "Future Enhancements",
          sections: [
            {
              title: "Planned Features",
              content: `
                <p>The project has currently implemented many basic functions, but to further enhance the user experience and system functionality, the following new features and improvements are planned for the future:</p>
                <ul>
                  <li><strong>Advanced User Management:</strong> Adds user roles and permissions management functions, supporting multi-level permission control, ensuring that different roles of users can access and manage content within their permission range.</li>
                  <li><strong>Content Version Control:</strong> Implements content version control functions, supporting content history version tracking and recovery, preventing data loss and erroneous content publishing due to misoperations.</li>
                  <li><strong>Site-wide Search Function:</strong> Adds a site-wide search function, allowing users to quickly search for news, publications, team members, and resources on the website through keywords.</li>
                  <li><strong>Multi-language Support:</strong> Implements multi-language support for the website, facilitating users from different language backgrounds to access and use the website content.</li>
                  <li><strong>Interactive Charts and Data Visualization:</strong> Adds interactive chart and data visualization functions to display the professor's research achievements and data analysis results, enhancing content display effects and user experience.</li>
                </ul>
              `,
            },
            {
              title: "Scalability Considerations",
              content: `
                <p>To ensure that the system can handle future growth and changes, the following scalability aspects were considered during design and implementation:</p>
                <ul>
                  <li><strong>Load Balancing and Auto Scaling:</strong> Uses AWS Elastic Beanstalk's load balancing and auto-scaling features to automatically adjust instance numbers based on traffic changes, ensuring that the system can handle large numbers of requests during peak periods and save resources during off-peak periods.</li>
                  <li><strong>Database Scalability:</strong> Although SQLite is currently used, future needs may require migration to more powerful relational databases (such as Amazon RDS) or NoSQL databases (such as Amazon DynamoDB) to handle larger data volumes and higher concurrent access.</li>
                  <li><strong>Microservices Architecture:</strong> The current monolithic application can be gradually split into a microservices architecture in the future, enhancing system maintainability and scalability through independent deployment and scaling of each service.</li>
                </ul>
              `,
            },
            {
              title: "Reasons for Unimplemented Features",
              content: `
                <p>Due to the relatively small traffic on the professor's homepage, the current system can already meet daily access needs and functional requirements. Therefore, some advanced features and scalability designs have not yet been implemented. Specific reasons include:</p>
                <ul>
                  <li><strong>Low Traffic:</strong> The professor's homepage has relatively small traffic, and the current system architecture and functions can already meet existing needs, making it unnecessary to implement more complex expansions and optimizations for now.</li>
                  <li><strong>Resource and Cost Considerations:</strong> Implementing some advanced features and scalability designs requires more development resources and costs. The current development team and budget are limited, so priority is given to implementing basic functions to ensure system stability and reliability.</li>
                  <li><strong>Demand Priority:</strong> Based on user and administrator feedback, the current system functions can already meet most usage needs. New features and improvements will be gradually added based on actual needs and feedback in the future.</li>
                </ul>
              `,
            },
          ],
        },
        codeSnippetsAndReferences: {
          title: "Code Snippets and References",
          sections: [
            {
              title: "Code Snippets",
              content: `
                <p>In various project files, many key code snippets were used to implement core functions. Here are descriptions of some example code snippets:</p>
                <h4>User Authentication:</h4>
                <p>Uses JWT for user authentication, verifying the JWT in requests through <code>authMiddleware.js</code> to ensure that only authorized users can access protected resources.</p>
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
                <h4>Password Encryption:</h4>
                <p>In <code>userService.js</code>, uses bcrypt to perform salt hashing on user passwords, ensuring password security.</p>
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
                <h4>File Upload:</h4>
                <p>Implements file upload functionality in <code>fileRouter.js</code>, using the Multer middleware to handle uploaded files.</p>
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
              title: "References",
              content: `
                <p>During the project development process, the following references and resources were consulted:</p>
                <ul>
                  <li><a href="https://sequelize.org/" target="_blank" rel="noopener noreferrer">Sequelize Documentation</a>: For understanding and implementing database operations and ORM framework-related functions.</li>
                  <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express Documentation</a>: For understanding and implementing web server and API routing-related functions.</li>
                  <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React Documentation</a>: For understanding and implementing front-end components and state management-related functions.</li>
                  <li><a href="https://aws.amazon.com/documentation/" target="_blank" rel="noopener noreferrer">AWS Documentation</a>: For understanding and implementing AWS service configurations and deployments, such as Elastic Beanstalk, S3, and CloudFront.</li>
                </ul>
              `,
            },
          ],
        },
      },
      {
        name: "Focal Homepage Standalone Management Software for Windows",
        overviewAndRequirements: {
          title: "Overview and System Requirements",
          sections: [
            {
              title: "Project Overview",
              content: `
               <p>From May to July 2024, this short-term contract project was initiated to develop a comprehensive lab homepage and content management system for Dr. Steve Hranilovic, the Dean of the Graduate School at <strong>McMaster University in Canada</strong>. The primary goal of this project is to create a robust platform that highlights Dr. Hranilovic's research accomplishments, provides timely news updates, facilitates resource sharing, and offers clear contact information.</p>
                <p>To address the issue of servers that cannot support backend deployment, the project specifically developed a standalone content management system that can run on Windows systems. This system allows users to manage and operate backend functions locally, making it particularly suitable for environments with network restrictions or where only the frontend can be deployed. After modifying the content locally, users can export all data with one click, and simply sync this exported data to the frontend static resource server, eliminating the need for backend server deployment.</p>
               <img src="./image1.png" alt="Overview Image" style="max-width: 100%; height: auto;">
              `,
            },
            {
              title: "System Requirements",
              content: `
                <p>The software is compatible with the following system requirements:</p>
                <ul>
                  <li>Operating System: Windows 64-bit</li>
                  <li>Memory: Minimum 2GB RAM</li>
                  <li>Storage: Minimum 800MB free disk space</li>
                </ul>
              `,
            },
          ],
        },
        installationAndUsage: {
          title: "Installation and Usage",
          sections: [
            {
              title: "Installation Steps",
              content: `
                <ol>
                  <li>Download the installer from the official website. <a href="https://drive.google.com/file/d/17tr7TUyXXlFW_9LGZqDw4D5Ukl52tqn7/view?usp=sharing" target="_blank">Download</a></li>
                  <li>Double-click the installer file and follow the on-screen instructions to complete the installation.</li>
                  <li>After installation, launch the application from the desktop shortcut.</li>
                </ol>
                </div>
                <div style="text-align: center;">
                <img src="./image2.png" alt="Installation Steps Image">
                </div>
              `,
            },
            {
              title: "Usage Instructions",
              content: `
                <ol>
                  <li>Open the application and log in with your credentials.</li>
                  <li>Navigate through the dashboard to access different management features.</li>
                  <li>Make necessary changes and save your updates.</li>
                  <li>Use the export feature to generate a deployment package if needed.</li>
                </ol>
              `,
            },
            {
              title: "Download Links",
              content: `
                <ul>
                  <li><a href="https://drive.google.com/file/d/17tr7TUyXXlFW_9LGZqDw4D5Ukl52tqn7/view?usp=sharing" target="_blank">Download Software ZIP</a></li>
                  <li><a href="Focal Homepage & Software User Guide.pdf" download>Download Focal Homepage & Software User Guide (PDF)</a></li>
                </ul>
              `,
            },
          ],
        },
        featuresAndFunctions: {
          title: "Features and Functions",
          sections: [
            {
              title: "Software Features",
              content: `
                <ul>
                  <li>Preview and modify frontend content</li>
                  <li>Upload files to the local storage</li>
                  <li>Publish new web pages and blogs</li>
                  <li>One-click export for deployment packages</li>
                </ul>
              `,
            },
          ],
        },
        uploadAndShare: {
          title: "Upload & Share Feature Overview",
          sections: [
            {
              title: "Feature Introduction",
              content: `
                <p>Click <code>Upload & Share</code> to enter this feature page. On this page, you can upload various types of files. This page acts like a cloud drive, storing the files you want to share and generating a URL that can be shared on the internet.</p>
                <img src="./image3.png" alt="Upload and Share Image" style="max-width: 100%; height: auto;">
              `,
            },
            {
              title: "Use Cases",
              content: `
                <ul>
                  <li>Paper Sharing: Upload your paper PDF file and insert the generated URL into the Link area of the <code>Publication</code> page so others can download your paper by clicking the link.</li>
                  <li>Resource Sharing: Add uploaded files to the Link area of the <code>Resources</code> page, making it easy for others to download resources you uploaded to the server.</li>
                  <li>News Resources: When posting news on the <code>News</code> page, you can insert resource download links so readers can download related resources.</li>
                  <li>Direct Sharing: You can also directly share the complete URL with others to access your shared resources via the internet.</li>
                </ul>
              `,
            },
            {
              title: "Uploading Files",
              content: `
                <p>Click the <code>Upload File</code> button to upload a new file. The uploaded file will automatically generate a URL that can be shared on the internet.</p>
              `,
            },
            {
              title: "File Management",
              content: `
                <p>Each file in the list has two action buttons:</p>
                <ul>
                  <li><code>Copy URL</code>: Copy the URL of the uploaded file.</li>
                  <li><code>Delete File</code>: Click the delete button to remove the file if you want to stop sharing it.</li>
                </ul>
              `,
            },
            {
              title: "URL Types",
              content: `
                <ul>
                  <li><code>Full URL</code>: Includes the full website domain, suitable for sharing directly with people on the internet. You need to replace 'https://www.example.com/SteveHranilovic' with the actual address of your homepage.</li>
                  <li><code>Relative URL</code>: Omits the domain part, suitable for pasting into the Link areas of the <code>Publication</code>, <code>News</code>, and <code>Resources</code> pages.</li>
                </ul>
              `,
            },
          ],
        },
        manageWebPages: {
          title: "Manage Web Pages Feature Overview",
          sections: [
            {
              title: "Feature Introduction",
              content: `
                <p>Click <code>Manage Web Pages</code> to enter this feature page. The <code>Manage Web Pages</code> feature allows you to easily create a new web page, similar to posting a blog, and generate a URL for this new web page.</p>
                <img src="./image4.png" alt="Upload and Share Image" style="max-width: 100%; height: auto;">
                `,
            },
            {
              title: "Use Cases",
              content: `
                <ul>
                  <li>Research Progress: Publish your latest research progress to expand your influence.</li>
                  <li>Academic Lectures: Publish a web page to share information about academic lectures and share the URL on LinkedIn, Facebook, and other platforms. People can read your new article and may click other tabs on the page to view more information about your homepage, thereby expanding your academic influence.</li>
                  <li>Long-Form News: If you need a long-form web page to record news, use this feature to publish a news web page and insert it into the <code>News</code> page. People can click the link to directly jump to the web page.</li>
                  <li>Course Information: If you have a new course, use this feature to publish course information.</li>
                  <li>Publication Display: Insert this web page link into the <code>Publications</code> page to display new publication content.</li>
                  <li>Resource Page: Insert the newly created web page into the <code>Resources</code> page for easy sharing of new resources.</li>
                </ul>
              `,
            },
            {
              title: "URL Types",
              content: `
                <ul>
                  <li><code>Full URL</code>: Suitable for sharing directly on internet platforms like LinkedIn and Facebook.</li>
                  <li><code>Relative URL</code>: Omits the domain part, suitable for pasting into the Link areas of the <code>Publication</code>, <code>News</code>, and <code>Resources</code> pages.</li>
                </ul>
              `,
            },
            {
              title: "Usage Instructions",
              content: `
                <ol>
                  <li>Click the <code>Create New Web Page</code> button.</li>
                  <li>Enter the title and content to publish the page. The content area supports inserting images, videos, code snippets, adjusting paragraph separators, and setting font size and color.</li>
                  <li>Several sample pages are pre-written in the <code>Web Pages List</code> for reference.</li>
                  <li>Each web page has four buttons:</li>
                  <ul>
                    <li><code>Preview</code>: View the published appearance of the article.</li>
                    <li><code>Edit</code>: Modify the web page.</li>
                    <li><code>Delete</code>: Remove the web page.</li>
                    <li><code>Copy URL</code>: Copy the full or relative URL.</li>
                  </ul>
                </ol>
              `,
            },
          ],
        },
        editAboutMe: {
          title: "Edit About Me Feature Overview",
          sections: [
            {
              title: "Feature Introduction",
              content: `
                <p>The <code>Edit About Me</code> page allows users to edit and manage personal information and various sections on their homepage. Users can update personal information, add and edit multiple sections, and manage subsections within each section. This page is designed to help users create a detailed and professional personal profile page, showcasing their academic background and research interests.</p>
              `,
            },
            {
              title: "Page Structure",
              content: `
                <p>The <code>Edit About Me</code> page is divided into multiple sections:</p>
                <ul>
                  <li><code>Profile Information</code>: Personal information section where you can modify your degree, profile image, and introduction.</li>
                  <li><code>Sections</code>: Multiple optional sections with the same structure, such as Biography, Research Interests, etc.</li>
                </ul>
                <div style="text-align: center;">
                <img src="./image5.png" alt="Upload and Share Image" style="max-width: 100%; height: auto;">
                </div>
              `,
            },
            {
              title: "Profile Information Management",
              content: `
                <ul>
                  <li><code>Degree</code>: Edit and update your degree information.</li>
                  <li><code>Profile Image</code>: Upload or replace your profile image.</li>
                  <li><code>Introduction</code>: Edit your personal introduction.</li>
                </ul>
              `,
            },
            {
              title: "Sections Management",
              content: `
                <p>Each custom section structure includes:</p>
                <ul>
                  <li><code>Edit Section</code>: Click the <code>Edit</code> button next to each section title to edit the section's title and description.</li>
                  <li><code>Delete Section</code>: Click the <code>Delete</code> button next to each section title to delete the section.</li>
                  <li><code>Add Section</code>: Click the <code>Add Section</code> button at the bottom of the page to add more sections.</li>
                </ul>
                <p>Within each section, you can have multiple optional subsections:</p>
                <ul>
                  <li><code>Add Subsection</code>: Click the <code>Add Subsection</code> button at the bottom of each section to add a new subsection.</li>
                  <li><code>Edit Subsection</code>: Click the <code>Edit</code> button next to each subsection to edit the subsection's title, description, image (optional), and multiple points (optional).</li>
                  <li><code>Add Point</code>: Click the <code>Add Point</code> button at the bottom of each subsection to add more points.</li>
                  <li><code>Delete Subsection</code>: Click the <code>Delete</code> button next to each subsection title to delete the subsection.</li>
                </ul>
                <div style="text-align: center;">
                <img src="./image6.png" alt="Upload and Share Image" style="max-width: 100%; height: auto;">
                </div>
              `,
            },
            {
              title: "Save Edits",
              content: `
                <p>After completing all operations, click the <code>Save</code> button at the bottom of the page to save all changes.</p>
              `,
            },
          ],
        },
        editPublications: {
          title: "Edit Publications Feature Overview",
          sections: [
            {
              title: "Feature Introduction",
              content: `
                <p>The <code>Edit Publications</code> feature allows users to manage and display a list of the professor's publications. Users can add, edit, and delete multiple categories and their corresponding publication entries on this page. This feature is designed to help professors systematically showcase their academic achievements and research work.</p>
              `,
            },
            {
              title: "Adding and Managing Categories",
              content: `
                <ol>
                  <li><code>Add Category</code>: Click the <code>Add Publication Category</code> button at the bottom of the page to add a new category.</li>
                  <li><code>Adjust Category Order</code>: Click the up and down buttons next to each category title to adjust the display order of the categories.</li>
                  <li><code>Edit Category Name</code>: Click the <code>Edit</code> button next to each category title to modify the category name.</li>
                  <li><code>Delete Category</code>: Click the <code>Delete</code> button next to each category title to delete the entire category.</li>
                </ol>
              `,
            },
            {
              title: "Adding and Managing Publication Items",
              content: `
                <ol>
                  <li><code>Add Item</code>: In each category, click the <code>Add Item</code> button to add a new publication item.</li>
                  <li><code>Adjust Item Order</code>: Click the up and down buttons next to each entry to adjust the display order of the publications.</li>
                  <li><code>Edit Item</code>: Click the <code>Edit</code> button next to each item to edit the publication item.</li>
                  <li><code>Delete Item</code>: Click the <code>Delete</code> button next to each item to delete the publication item.</li>
                </ol>
              `,
            },
            {
              title: "Editing Publication Entries",
              content: `
                <p>Each publication entry has four buttons: move up, move down, edit, and delete. Click the <code>Edit</code> button to edit the following content:</p>
                <ul>
                  <li><code>Title</code>: A required field, the title of the publication item.</li>
                  <li><code>Description</code>: An optional field. If filled in, it will be displayed in bold as the title, followed by the description separated by a comma.</li>
                  <li><code>Image</code>: An optional field. If an image is uploaded, it will be displayed on the left side of the item.</li>
                  <li><code>Links</code>: An optional field. You can add multiple links. Each link is divided into <code>Text</code> and <code>URL</code>:</li>
                  <ul>
                    <li><code>Text</code>: The content to be displayed.</li>
                    <li><code>URL</code>: The link that the displayed content jumps to when clicked. There are two types of links:</li>
                    <ul>
                      <li><code>Full URL</code>: A complete URL starting with HTTP or HTTPS, which can insert any URL shared on the internet.</li>
                      <li><code>Relative URL</code>: Can insert relative URLs created on the <code>Upload & Share</code> page or the <code>Manage Web Page</code> page of this site.</li>
                    </ul>
                  </ul>
                </ul>
                 <div style="text-align: center;">
                <img src="./image7.png" alt="Upload and Share Image" style="max-width: 100%; height: auto;">
                </div>
                 <div style="text-align: center;">
                <img src="./image8.png" alt="Upload and Share Image" style="max-width: 100%; height: auto;">
                </div>
              `,
            },
            {
              title: "Adding Meta Data",
              content: `
                <p>Click the <code>Add Metadata Item</code> button at the bottom to add an attribute. The name and content of the attribute can be edited. You can add any custom fields such as Authors, Journal, Conference, etc.</p>
              `,
            },
            {
              title: "Save Edits",
              content: `
                <p>After completing all content editing, click the <code>Save</code> button at the bottom of the page to save all changes.</p>
              `,
            },
          ],
        },
        editTeam: {
          title: "Edit Team Feature Overview",
          sections: [
            {
              title: "Feature Introduction",
              content: `
                <p>The <code>Edit Team</code> feature allows users to manage team member information and display it on the webpage. Users can add, edit, and delete team members and their groups on this page, displaying team member information in a card format.</p>
              `,
            },
            {
              title: "Page Structure and Usage",
              content: `
                <p>The <code>Edit Team</code> page is divided into sections representing different groups of team members. Each section can contain multiple personnel information and will be displayed in a card format.</p>
              `,
            },
            {
              title: "Section Management",
              content: `
                <ol>
                  <li><code>Add Section</code>: Click the <code>Add Section</code> button to add a new section (team member group).</li>
                  <li><code>Edit Section Title</code>: Click the <code>Edit</code> button next to each section title to edit the section's title.</li>
                  <li><code>Delete Section</code>: Click the <code>Delete</code> button next to each section title to delete the section.</li>
                  <li><code>Adjust Section Order</code>: Click the up and down buttons next to each section title to adjust the display order between sections.</li>
                </ol>
              `,
            },
            {
              title: "Team Member Management",
              content: `
                <ol>
                  <li><code>Add Member</code>: In each section, click the <code>Add People</code> button to add a team member.</li>
                  <li><code>Manage Member Information</code>: Each member has four buttons on the right: move up, move down, edit, and delete. Click the <code>Edit</code> button to edit member information, including multiple fields:</li>
                  <ul>
                    <li><code>Name</code>: A required field that displays the team member's name.</li>
                    <li><code>Degree</code>: An optional field. If left blank, this attribute will not be displayed. If filled in, it will be displayed as a colored tag. You can select the tag color by editing the <code>Degree Tag Color</code>. Eight recommended colors are pre-set, and you can also use the color picker to customize any color (it is recommended to use the same color tag for the same degree).</li>
                    <li><code>Custom Attributes</code>: Click the <code>Add Metadata Item</code> button at the bottom to add and customize other attributes. The names and contents of custom attributes are editable. You can add custom fields such as Topic, Position, etc.</li>
                  </ul>
                </ol>
                 <div style="text-align: center;">
                <img src="./image9.png" alt="Upload and Share Image" style="max-width: 100%; height: auto;">
                </div>
              `,
            },
            {
              title: "Save Edits",
              content: `
                <p>After completing all operations, click the <code>Save</code> button at the bottom of the page to save all changes.</p>
              `,
            },
          ],
        },
        editNews: {
          title: "Edit News Feature Overview",
          sections: [
            {
              title: "Page Structure",
              content: `
                <p>The <code>Edit News and Resources</code> page is divided into two tabs: <code>Edit News</code> and <code>Edit Resources</code>.</p>
              `,
            },
            {
              title: "Feature Introduction",
              content: `
                <p>In the <code>Edit News</code> tab, you can publish news cards, edit news cards, and delete news cards. All news cards are arranged in chronological order, with the latest news displayed at the top.</p>
              `,
            },
            {
              title: "Use Cases",
              content: `
                <ul>
                  <li>Publish Short News: For example, the latest research developments or newly released course information.</li>
                  <li>Publish Long-Form News: If you want to publish a long-form news article, it is recommended to use the <code>Manage Web Pages</code> page to publish a webpage and insert the link into this news.</li>
                </ul>
              `,
            },
            {
              title: "Feature Details",
              content: `
                <ul>
                  <li><code>Publish News</code>: Click the <code>Publish News</code> button to publish new news.</li>
                  <li><code>Edit News</code>: Click the <code>Edit</code> button under each news card to edit the news content. The editing fields include:</li>
                  <ul>
                    <li><code>Title</code>: The news title.</li>
                    <li><code>Description</code>: The news description.</li>
                    <li><code>Date</code>: The news date, which can be modified. The display order of the news will be affected by the modified date.</li>
                    <li><code>Image</code>: The news image, an optional field. You can delete the default news image, use or replace it with a random default image, or upload a custom image.</li>
                    <li><code>Links</code>: An optional field where you can add multiple links. Each link is divided into <code>Text</code> and <code>URL</code>:</li>
                    <ul>
                      <li><code>Text</code>: The displayed content.</li>
                      <li><code>URL</code>: The link that the displayed content jumps to when clicked. There are two types of links:</li>
                      <ul>
                        <li><code>Full URL</code>: A complete URL starting with HTTP or HTTPS, which can insert any URL shared on the internet.</li>
                        <li><code>Relative URL</code>: Can insert relative URLs created on the <code>Upload & Share</code> page or the <code>Manage Web Page</code> page of this site.</li>
                      </ul>
                    </ul>
                  </ul>
                </ul>
                <li><code>Delete News</code>: Click the <code>Delete</code> button on each news card to delete the news.</li>
                <li><code>Time Sorting</code>: All news is arranged in chronological order, with the latest news at the top. The latest news and news within three months will display a red <code>New</code> tag.</li>
                 <div style="text-align: center;">
                <img src="./image10.png" alt="Upload and Share Image" style="max-width: 100%; height: auto;">
                </div>
                `,
            },
            {
              title: "Save Edits",
              content: `
                <p>After completing all operations, click the <code>Save</code> button at the bottom of the page to save all changes.</p>
              `,
            },
          ],
        },
        editResources: {
          title: "Edit Resources Feature Overview",
          sections: [
            {
              title: "Page Structure",
              content: `
                <p>The <code>Edit News and Resources</code> page is divided into two tabs: <code>Edit News</code> and <code>Edit Resources</code>.</p>
              `,
            },
            {
              title: "Feature Introduction",
              content: `
                <p>In the <code>Edit Resources</code> tab, you can publish new resources, edit resources, and delete resources. All resources are arranged in chronological order, with the latest resources displayed at the top.</p>
              `,
            },
            {
              title: "Use Cases",
              content: `
                <ul>
                  <li>Display Experimental Data, Course Files, etc.: Resources you want to make publicly downloadable can be added to this tab.</li>
                </ul>
              `,
            },
            {
              title: "Feature Details",
              content: `
                <ul>
                  <li><code>Publish Resources</code>: Click the <code>Publish Resources</code> button to publish new resources.</li>
                  <li><code>Edit Resources</code>: Click the <code>Edit</code> button under each resource to edit the resource content. The editing fields include:</li>
                  <ul>
                    <li><code>Title</code>: The resource title.</li>
                    <li><code>Description</code>: The resource description.</li>
                    <li><code>Date</code>: The resource date, which can be modified. The display order of the resources will be affected by the modified date.</li>
                    <li><code>Image</code>: The resource image, an optional field. You can delete the image, use a random image, or upload a custom image.</li>
                    <li><code>Links</code>: An optional field where you can add multiple links. Each link is divided into <code>Text</code> and <code>URL</code>:</li>
                    <ul>
                      <li><code>Text</code>: The displayed content.</li>
                      <li><code>URL</code>: The link that the displayed content jumps to when clicked. There are two types of links:</li>
                      <ul>
                        <li><code>Full URL</code>: A complete URL starting with HTTP or HTTPS, which can insert any URL shared on the internet.</li>
                        <li><code>Relative URL</code>: Can insert relative URLs created on the <code>Upload & Share</code> page or the <code>Manage Web Page</code> page of this site.</li>
                      </ul>
                    </ul>
                  </ul>
                </ul>
                <li><code>Delete Resources</code>: Click the <code>Delete</code> button under each resource to delete the resource.</li>
                <li><code>Time Sorting</code>: All resources are arranged in chronological order, with the latest resources at the top. The latest resources and resources within three months will display a red <code>New</code> tag.</li>
               <div style="text-align: center;">
                <img src="./image11.png" alt="Upload and Share Image" style="max-width: 100%; height: auto;">
                </div>
                `,
            },
            {
              title: "Save Edits",
              content: `
                <p>After completing all operations, click the <code>Save</code> button at the bottom of the page to save all changes.</p>
              `,
            },
          ],
        },
        changePassword: {
          title: "Change Password Feature",
          sections: [
            {
              title: "Feature Introduction",
              content: `
                <p>The change password feature allows users to update their account passwords to ensure account security.</p>
              `,
            },
            {
              title: "Usage Instructions",
              content: `
                <ol>
                  <li>Enter Current Password: Enter the current password in the specified field.</li>
                  <li>Enter New Password: Enter the new password in the new password field and confirm it by entering it again in the confirm new password field. The two entries must match.</li>
                  <li>Password Strength Prompt: The system will provide a prompt on the strength of the new password. It cannot be too simple; a complex password is recommended to enhance security.</li>
                  <li>Change Password: After entering the information, click the <code>Change Password</code> button to submit the change request.</li>
                </ol>
                <h4>Default Password Usage Prompt</h4>
                <p>If the user is using the default password and has not changed it, they will be automatically redirected to the change password page upon logging in. It is recommended to update the password immediately to ensure account security.</p>
                <h4>Success Prompt</h4>
                <p>When the password is successfully changed, the system will display a confirmation prompt indicating the password has been updated successfully.</p>
              `,
            },
          ],
        },
        oneClickExport: {
          title: "One-Click Export Feature",
          sections: [
            {
              title: "Feature Introduction",
              content: `
                <p>The one-click export feature allows users to export all data to a folder, enabling them to update all local modifications to the school's static server.</p>
              `,
            },
            {
              title: "Usage Instructions",
              content: `
                <h5>Save Changes Reminder</h5>
                <ol>
                  <li>After editing on each <code>Edit</code> page (e.g., <code>Edit About Me</code>, <code>Edit Publications</code>, <code>Edit Team</code>, etc.), be sure to click the <code>Save</code> button to save changes.</li>
                  <li>If changes are not saved, a yellow prompt will appear at the top of each <code>Edit</code> page indicating 'You have unsaved changes'.</li>
                  <li>Note: Ensure all changes are saved before using the one-click export feature. Unsaved data will not be exported.</li>
                </ol>
                 <div style="text-align: center;">
                <img src="./image12.png" alt="Upload and Share Image" style="max-width: 100%; height: auto;">
                </div>
                <h5>Export Data</h5>
                <ol>
                  <li>Under the welcome message on the page, there is an <code>Export All Data</code> button.</li>
                  <li>Click the <code>Export All Data</code> button to export all data to a folder.</li>
                </ol>
                <h5>Display Export Path</h5>
                <ol>
                  <li>After the data is exported, the system will display the path of the export folder.</li>
                  <li>You can copy this path and paste it into the address bar of the file system and press Enter to open the folder.</li>
                  <li>In the folder, you will see a folder named <code>upload_files</code>.</li>
                </ol>
                 <div style="text-align: center;">
                <img src="./image13.png" alt="Upload and Share Image" style="max-width: 100%; height: auto;">
                </div>
                <h5>Update Website Content</h5>
                <ol>
                  <li>Copy the <code>upload_files</code> folder and replace the folder with the same name in the frontend.</li>
                </ol>
                <h5>Testing and Deployment Steps</h5>
                <ol>
                  <li><strong>Local Testing</strong></li>
                  <ol>
                    <li>After exporting the data, replace all contents of the <code>upload_files</code> folder in the <code>Frontend/build</code> directory.</li>
                    <li>Run the <code>frontend_test.bat</code> script to ensure that the local test displays as expected.</li>
                  </ol>
                  <li><strong>Deployment to Server</strong></li>
                  <ol>
                    <li>After passing local testing, replace all contents of the <code>upload_files</code> folder with the corresponding location on the server.</li>
                  </ol>
                </ol>
              `,
            },
          ],
        },
        QandA: {
          title: "Q&A",
          sections: [
            {
              title: "Frequently Asked Questions",
              content: `
                <p><strong>Q: Why is my <code>Upload_files</code> folder so large?</strong></p>
                <p>A: This folder contains all your modified data, including all files you uploaded to the cloud. These files are bundled in the <code>Upload_files</code> folder to be deployed to the school's static resource server for user downloads.</p>
                <br/>
                <p><strong>Q: How do I synchronize old data to a new computer?</strong></p>
                <p>A: Follow these steps:</p>
                <ol>
                  <li>On the old computer, find the <code>C:\\Program Files\\Focal\\resources</code> folder and copy it to a portable storage device (e.g., USB drive).</li>
                  <li>Install the Focal software on the new computer.</li>
                  <li>Copy the <code>resources</code> folder from the portable storage device to the <code>C:\\Program Files\\Focal</code> directory on the new computer, overwriting the existing <code>resources</code> folder.</li>
                  <li>Note: <code>C:\\Program Files\\Focal\\resources</code> is the default installation path. If you did not change the path during installation, it should be in this location. If unsure, right-click the Focal software icon on the desktop and select “Open file location” to check your installation directory.</li>
                </ol>
                <br/>
                <p><strong>Q: What should I do if the software has issues?</strong></p>
                <p>A: The running logs of the software are stored in the following locations:</p>
                <ul>
                  <li>In the installation directory under <code>C:\\Program Files\\Focal\\resources\\logs</code></li>
                  <li><code>C:\\Users\\<Your Username>\\AppData\\Roaming\\focal\\focal_client.log</code></li>
                </ul>
                <p>Quick Access Method: Enter <code>%AppData%\\focal\\focal_client.log</code> in the address bar of the file explorer and press Enter to open the log file directly.</p>
                <p>If you have technical skills, you can check the logs to troubleshoot. If the issue persists, please collect all logs and contact me at weixingchensimon@gmail.com.</p>
                <br/>
                <p><strong>Q: Why can't I run the bat frontend test script or install the Focal management software, or why is it running improperly?</strong></p>
                <p>A: Please ensure your operating system is a Windows 64-bit version, as the software currently only supports this system. Additionally, make sure your user account has administrator permissions. During operation, if a permission request or network access prompt appears, please agree to ensure the software runs properly. If you still encounter issues, please check the running logs or contact technical support.</p>
                <br/>
                <p><strong>Q: How do I ensure all changes are saved?</strong></p>
                <p>A: After editing on each <code>Edit</code> page (e.g., <code>Edit About Me</code>, <code>Edit Publications</code>, <code>Edit Team</code>, etc.), be sure to click the <code>Save</code> button to save changes. If changes are not saved, a yellow prompt will appear at the top of each <code>Edit</code> page indicating 'You have unsaved changes'. Please ensure all changes are saved before performing the one-click export operation.</p>
                <br/>
                <p><strong>Q: How do I test my website locally?</strong></p>
                <p>A: Open the <code>Frontend</code> folder and double-click the <code>frontend_test.bat</code> script. The script will start and automatically deploy a local static resource server. Open a browser and visit <code>http://localhost:1005/</code> to view the static web page. After viewing, close the DOS window to shut down the local static resource server.</p>
                <br/>
                <p><strong>Q: What are relative URLs and full URLs?</strong></p>
                <p>A:</p>
                <ul>
                  <li><code>Full URL</code>: A complete URL starting with HTTP or HTTPS, which can insert any URL shared on the internet.</li>
                  <li><code>Relative URL</code>: Can insert relative URLs created on the <code>Upload & Share</code> page or the <code>Manage Web Page</code> page of this site.</li>
                </ul>
                <br/>
                <p><strong>Q: How do I export and deploy my website data?</strong></p>
                <p>A: Click the <code>Export All Data</code> button under the welcome message on the page to export all data to a folder. The system will display the path of the export folder. Copy the <code>upload_files</code> folder and replace the folder with the same name in the frontend <code>build</code> folder. For deployment to the school server, replace the <code>upload_files</code> folder with the corresponding location on the server.</p>
              `,
            },
          ],
        },
      },
  
      // More projects can be added here
      
    ],
  };
  
  export default ProjectContent;
  