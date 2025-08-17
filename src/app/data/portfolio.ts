import { PortfolioItemCategory } from '../components/sections/portfolio/PortfolioSection';
import { getAge } from '../extensions/DateExtensions';

export const APP_VERSION = 2025.1;

const age = getAge(1996, 8, 4);
const phoneNumber = "+40 75*-***-669";
const email = "contact@foxbites.net";
const messengerLink = "https://m.me/marian.fx";
const linkedinLink = "https://www.linkedin.com/in/marianfx/";

const loves = [
  {
    name: "Ideas"
  },
  {
    name: "Web Development"
  },
  {
    name: "Music"
  },
  {
    name: ".NET"
  },
  {
    name: "Unconventional Learning"
  },
  {
    name: "JavaScript"
  },
  {
    name: "Photography"
  },
  {
    name: "Good Books"
  },
  {
    name: "Movies"
  },
  {
    name: "Product Hunting"
  },
];

const socialLinks = [
  {
    url: linkedinLink,
    icon: "fa-linkedin-square",
    title: "Linkedin"
  },
  {
    url: "https://github.com/foxbits",
    icon: "fa-github-alt",
    title: "Github"
  },
  {
    url: "https://facebook.com/marian.fx",
    icon: "fa-facebook-square",
    title: "Facebook"
  },
  {
    url: messengerLink,
    icon: "fa-comments-o",
    title: "Messenger"
  },
  {
    url: "https://portfolio.foxbites.net#about-me",
    icon: "fa-globe",
    title: "CV / Portfolio",
    target: "_self"
  },
];

const infos = [
  {
    title: "Name",
    value: "Marian Focșa (FX)"
  },
  {
    title: "Email",
    value: '<a href="mailto:' + email + '">' + email + '</a>'
  },
  {
    title: "Phone",
    value: phoneNumber
  },
  {
    title: "Date of birth",
    value: '<a href="https://happyhappybirthday.net/en/1996/08/04?started_work=19&pension=65&life_expectancy=80" target="_black">04 Aug 1996 (' + age + ' years)</a>'
  },
  {
    title: "Address",
    value: "Iași, România"
  },
  {
    title: "Nationality",
    value: "Român"
  },
  {
    title: "Languages",
    value: "Română, English"
  }
];

const profiFile = {
  description: `Sassy software expert with great skills of communication, attention to details & architectural thinking. 
  Based on my fast learning algorithm and team choreography understanding, I'm looking forward to growing myself into the better professional by tackling difficult projects and coming front with innovative solutions. Open-minded, I'll be always looking for a new challenge to take on.
  
  With a verifiable experience in developing web applications with(but not limited to) the .NET tech stack and various front- end goodies(from plain JS up to Angular and React), and a born ability to track and fix problems, build tools, and test new technologies, I am ready to expose to you the secrets of high- quality software development.`,
  links: [
    {
      title: "Linkedin (Web)",
      link: "https://www.linkedin.com/in/marianfx/"
    },
    {
      title: "Europass (PDF, full)",
      link: "/files/CV.Marian.Focsa.EN.pdf"
    },
    {
      title: "Portfolio website (this)",
      link: "#"
    }
  ]
};

const cards = [
  {
    title: "Professional Skills",
    data: [
      {
        title: "Web Development",
        value: 96,
        tooltip: "Designing and creating APIs; consuming them through different web frameworks. Knowledge of core concepts that I can apply to any other framework"
      },
      {
        title: ".NET Development",
        value: 93,
        tooltip: "Web, Services or Desktop, with insights into latest versions of .NET"
      },
      {
        title: "OOP / S.O.L.I.D. Programming",
        value: 93
      },
      {
        title: "Architecture",
        value: 86,
        tooltip: "Technical design of solutions fitting the business needs"
      },
      {
        title: "Front-End Development",
        value: 85,
        tooltip: "with or without a framework"
      },
      {
        title: "Relational Databases",
        value: 75,
        tooltip: "Manage, Query, Procedural Programming"
      },
      {
        title: "Data Structures & Algorithms",
        value: 70
      },
      {
        title: "Mentorship",
        value: 70,
        tooltip: "Ability to teach knowledge from all these fields to others"
      }
    ]
  },
  {
    title: "Personal Skills",
    data: [
      {
        title: "Confidence",
        value: 92
      },
      {
        title: "Organizational Skills Suite",
        value: 90
      },
      {
        title: "Attention to Details",
        value: 90
      },
      {
        title: "Leadership",
        value: 85
      },
      {
        title: "Architectural Thinking",
        value: 82
      },
      {
        title: "Team Coreography",
        value: 82
      },
      {
        title: "Communication",
        value: 80
      },
      {
        title: "Fast Learning algorithm",
        value: 75
      }
    ]
  },
  {
    title: "Technologies Mastered",
    data: [{
      title: "ASP.NET (+Core) & Related",
      value: 92,
      tooltip: "Includes ASP.NET (MVC, Web API), .NET Core alternatives and many Nu-Get libraries for any usecase"
    },
    {
      title: "Front-End Frameworks & Libs",
      value: 85,
      tooltip: "React, Angular (5+), Material UI, Unit Testing with Jest, jQuery, Vue.JS, Bootstrap, Material Design Frameworks (Angular Material, Materialize), PrimeNG, Chart.JS, etc"
    },
    {
      title: "Databases / ORMs",
      value: 82,
      tooltip: "Includes Postgres / SQL Server / MariaDB / Oracle knowledge, advanced query writing, query building mechanisms, Entity Framework (Core) proficiency with extras like EFPlus (batch) and LINQ, that can be adapted easily to other ORMs"
    },
    {
      title: "Docker & The Cloud",
      value: 79,
      tooltip: "Working scenarios and application deployments through docker containers to the cloud (AWS / Azure)"
    },
    {
      title: "Enterprise patterns",
      value: 78,
      tooltip: "Defining choreographies between microservices using HTTP and/or exchanges/queues (RabbitMQ) according to business needs"
    },
    {
      title: "Agile & Customs",
      value: 70
    },
    {
      title: "Async programming",
      value: 70
    },
    {
      title: "Old School .NET Framework",
      value: 69,
      tooltip: "Refers to other .NET Framework knowledge, like WCF, WFA, WPF"
    },
    {
      title: "Node.js & Frameworks",
      value: 60,
      tooltip: "Never used in professional environment, only as test-playground"
    },
    {
      title: "Functional Programming",
      value: 55,
      tooltip: "Applied with JavaScript mostly, and a long time ago with Python"
    },
    {
      title: "Regular Expressions",
      value: 55,
      tooltip: "Includes basic knowledge, mostly used when searching in files and when validating data"
    },
    ]
  },
  {
    title: "Languages (Programming)",
    data: [{
      title: "C#",
      value: 95
    },
    {
      title: "JavaScript (ES6+ +/- TypeScript)",
      value: 92
    },
    {
      title: "SQL (PL/SQL, T-SQL, MySQL)",
      value: 80
    },
    {
      title: "VB.NET",
      value: 50
    },
    {
      title: "Python",
      value: 50
    },
    {
      title: "C/C++",
      value: 30
    },
    {
      title: "Java",
      value: 30
    },
    ]
  },
];

const jobs = [
  {
    title: "💺 Technical Lead",
    location: "Ness Digital Engineering",
    startDate: new Date(2021, 6, 1),
    endDate: undefined,
    description: `Solving business problems and architectural challenges on a transport intelligence product while leading a scrum-based team towards sprint goals in an Agile environment with other engineers and product representatives across UK and France.

      <br/><br/>
      <b>Activities:</b> system design, architecture, team choreography, providing technical solutions for business requirements, software development, code reviews, mentorship
      <br/>
      <b>Related projects:</b> 
          <a class="color__projects" href="#project-24">Flowbird - ABT</a>`,
    tags: ["Leadership", "Business value", "Web Development", "ASP.NET", "Architecture", "Transportation"]
  },
  {
    title: "🚌 Senior Software Engineer",
    location: "Ness Digital Engineering",
    startDate: new Date(2020, 6, 1),
    endDate: new Date(2021, 5, 30),
    description: `Creative software engineer working on a transport intelligence product in a scrum-based large team, with a tech-stack floating around .NET (Core) and React, collaborating in an Agile environment with other engineers and product representatives across UK and France.

      <br/><br/>
      <b>Activities:</b> software development & maintenance, bug tracking, architecture, API Design, providing technical solutions for business requirements, code reviews, writing technical documentation, investigating tech news & solutions and presenting them to the team, mentorship (interns, new joiners)
      <br/>
      <b>Related projects:</b> 
          <a class="color__projects" href="#project-24">Flowbird - ABT</a>
      <br/><br/>
      <b>Tech stack:</b> .NET Core, ASP.NET (Core) WebApi, Entity Framework (Core), Redis, RabbitMQ, Keycloak (Identity Provider), Hangfire, MSUnit
      <br/>
      <b>UI:</b> React, Material UI, HTML, CSS, SCSS, JSS, JEST
      <br/>
      <b>Languages:</b> C#, JavaScript, LINQ, SQL (flavors: PostgreSQL)
      <br/>
      <b>Environment:</b> Visual Studio, Visual Studio Code, docker, Jenkins, AWS, DBeaver, GIT (Bitbucket), Postman, Jira, Confluence, LucidChart
      <br/>
      <b>Other:</b> EasyNetQ, EFPlus (batch queries), RestSharp, Automapper, custom react libraries, custom nuget, npm & docker repositories`,
    tags: ["Web Development", "ASP.NET", "Architecture", "React", "Transportation", "Message brokers"]
  },
  {
    title: "🍹 Lead Software Developer",
    location: "KireyEst",
    startDate: new Date(2017, 7, 1),
    endDate: new Date(2020, 5, 30),
    description: `Team leader/lead developer of a continuously growing team, working with a tech-stack floating around .NET (Core) and Angular, collaborating in an Agile environment with clients and managers.

      <br/><br/>
      <b>Activities:</b> software development & maintenance, writing technical documentation, API design, technical decisions based on requirements, software architecture, planning & estimates, mentorship (<i>planning & implementation of training sessions on .NET, Angular & related</i>)
      <br/>
      <b>Related projects:</b> 
          <a class="color__projects" href="#project-23">K-Value | KG Talent Platform</a>,
          <a class="color__projects" href="#project-22">GDM</a>,
          <a class="color__projects" href="#project-21">Kaly</a>,
          <a class="color__projects" href="#project-20">Risk Asset Manager</a>,
          <a class="color__projects" href="#project-15">Promis - Oil&Gas PM</a>
      <br/><br/>
      <b>Frameworks:</b> .NET Framework / Core, ASP.NET (Core) MVC / WebApi, Entity Framework (Core), Angular, MSUnit
      <br/>
      <b>Languages:</b> C#, TypeScript, JavaScript, LINQ, SQL (flavors: T-SQL, MySQL, PostgreSQL)
      <br/>
      <b>Environment:</b> Visual Studio, Visual Studio Code, docker, Jenkins, SQL Server Management Studio, DBeaver, GIT (Bitbucket), Postman, Jira, Citrix Workspace
      <br/>
      <b>Other:</b> HTML, CSS, jQuery, Chart.JS, Angular Material, PrimeNG, Bootstrap, ASP.NET Core DI, Autofac, Enterprise Library, Automapper, EPPlus (Excel), NPOI (Excel), EFPlus (batch queries), SqlKata (query builder), PDFSharp, SSO, Office365 / Teams integrations`,
    tags: ["Leadership", "Web Development", "ASP.NET", "Architecture", "Angular"]
  },
  {
    title: "🍷 .NET Software Developer",
    location: "KireyEst",
    startDate: new Date(2015, 9, 1),
    endDate: new Date(2017, 6, 31),
    description: `Worked part-time, while also studying at university, alongside both junior and experienced developers, on a various set of technologies, in order to gain experience.

      <br/><br/>
      <b>Related projects:</b> 
          <a class="color__projects" href="#project-1">Anti-fraud - Fraud & Risk Management</a>,
          <a class="color__projects" href="#project-4">"Vittoria's Secrets" - Automated Tests & Tools</a>,
          <a class="color__projects" href="#project-8">""Product Factory" - Banking Product Management</a>
      <br/>
      <b>Frameworks:</b> .NET Framework, ASP.NET WebForms, WPF (MVVM), Entity Framework, Spring.NET, Telerik
      <br/>
      <b>Languages:</b> C#, VB.NET, T-SQL flavor, LINQ, XAML
      <br/>
      <b>Environment:</b> Visual Studio, SQL Server Management Studio, TFS, SVN (Tortoise), Citrix
      <br/>
      <b>Other:</b> HTML, CSS, jQuery, Bootstrap`,
    tags: ["C# / VB.NET", "ASP.NET", ".NET Framework", "WPF - MVVM", "Team Work"]
  },
  {
    title: "🍼 .NET Intern",
    location: "KireyEst",
    startDate: new Date(2015, 6, 1),
    endDate: new Date(2015, 8, 30),
    description: `Trained by a supervisor in a long list of .NET Technologies by realizing small projects (enum: C#, VB.NET, ASP.NET WebForms, ASP.NET MVC, ADO.NET, Entity Framework, WPF – MVVM, WFC, Spring.NET, T-SQL, Javascript & jQuery, HTML, CSS...).`,
    tags: ["Training"]
  }
];

const interestsIntro = {
  description: '"We don\'t read and write poetry because it\'s cute. We read and write poetry because we are members of the human race. And the human race is filled with passion. And medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for."',
  caption: "- Robin Williams in ‘Dead Poets Society’"
};

const interestsData = [
  {
    title: "Movies",
    link: "https://letterboxd.com/cinemarrian",
    icon: "fa-film"
  },
  {
    title: "Music",
    link: "https://stats.fm/foxbites",
    icon: "fa-music"
  },
  {
    title: "Books",
    link: "https://www.goodreads.com/cinemarrian",
    icon: "fa-book"
  },
  {
    title: "Writing",
    link: "https://foxietamine.substack.com/",
    icon: "fa-pencil-square"
  },
  {
    title: "Money",
    link: "https://revolut.me/mfx",
    icon: "fa-money"
  },
  {
    title: "Photography",
    link: "https://gurushots.com/foxietamine",
    icon: "fa-photo"
  },
  {
    title: "Art",
    link: "https://www.cosmos.so/foxbites/artistic-habits",
    icon: "fa-paint-brush"
  },
  {
    title: "Humour",
    link: "https://comedybox.ro",
    icon: "fa-graduation-cap"
  },
  {
    title: "Video Games",
    link: "https://backloggd.com/u/foxie",
    icon: "fa-gamepad"
  },
  {
    title: "Shopping",
    link: "https://www.vinted.ro/member/170366344-foxietamine",
    icon: "fa-shopping-bag"
  },
];

const edus = [
  {
    title: "🍉 The Principal Developer Masterclass",
    location: '<a href="https://certs.principal.dev/14x/U03NTA03VUN" target="_blank">Certificate</a>',
    startDate: new Date(2022, 6, 1),
    endDate: new Date(2022, 6, 4),
    description: `Attended a great training - <a href="https://principal.dev" target="_blank">The Principal Dev"</a> by <a href="https://twitter.com/eduardsi" target="_blank">Eduards Sizovs</a> - in order to better understand the psychology of teams and how to add value and technical excellence to my work gang. A great course with a lot of new ideas to apply.`,
    tags: ["Technical Lead", "principal.dev"]
  },
  {
    title: "🌞 Udemy - Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)",
    location: '<a href="http://ude.my/UC-7PPSDK51" target="_blank">Certificate</a>',
    startDate: new Date(2019, 8, 1),
    endDate: new Date(2019, 11, 31),
    description: `I took this complete course about Vue.js in order to prepare for a set of work-related projects and to keep up with the ongoing progress of front-end technologies. Coming from an Angular background, many terms here are familiar; as a result, it was easy to learn and interesting to compare the two tools.
      <br/>This course is presented by <a href="https://www.udemy.com/user/maximilian-schwarzmuller/" target="_blank">Maximilian Schwarzmüller</a>, the same awesome person from which I learned Angular. All problems tackled in the course can be found on my <a href="https://github.com/marianfx/vue-udemy" target="_blank">GitHub</a>.`,
    tags: ["VueJS"]
  },
  {
    title: "🌞 Udemy - DevOps Essentials",
    location: '<a href="http://ude.my/UC-NY1A7VGY" target="_blank">Certificate</a>',
    startDate: new Date(2019, 8, 1),
    endDate: new Date(2019, 8, 11),
    description: `I took this course in order to learn the core notion of what DevOps ecosystem means. It is presented by The Linux Academy. After learning it, I prepared some CI/CD environments using docker and Jenkins`,
    tags: ["DevOps"]
  },
  {
    title: "🌞 Udemy - Agile Project Management: Scrum Cert. Prep",
    location: '<a href="http://ude.my/UC-30XT1MAU" target="_blank">Certificate</a>',
    startDate: new Date(2019, 7, 1),
    endDate: new Date(2019, 7, 31),
    description: `It includes 2 courses: Scrum Certification Prep + Scrum Master + Agile Scrum Training && Agile Project Management: Scrum Step by Step. <br/>
      I took this set of courses in order to clarify my notions about Agile methodologies and the Scrum framework. Throughout the courses, I learned about Scrum Theory, Scrum Team Roles, Scrum Events, Scrum Artifacts, Scrum of Scrums, with practical exercises and questions about real-world scenarios.`,
    tags: ["Agile", "Scrum"]
  },
  {
    title: "🌞 Udemy - Angular (Angular 2+) - The Complete Guide",
    location: '<a href="http://ude.my/UC-4GREQAHJ" target="_blank">Certificate</a>',
    startDate: new Date(2019, 3, 1),
    endDate: new Date(2019, 6, 30),
    description: `I took this course after already working with Angular a few months, for rooting my knowledge on the subject. This complete guide is presented by Maximilian Schwarzmüller. <br/>
      All problems tackled in the course can be found on my <a href="https://github.com/marianfx/ng-udemy-files" target="_blank">GitHub</a>. <br/>
      Based on this course, I then prepared a restructured & optimized set of classes that I presented, with additional explanations, to a set of juniors`,
    tags: ["Angular"]
  },
  {
    title: "🎓 Faculty of Computer Science, „Alexandru Ioan Cuza” University, Iași",
    location: "!Bachelor's Degree, Computer Science",
    startDate: new Date(2014, 9, 1),
    endDate: new Date(2017, 5, 15),
    description: `Status: finished, no license.<br/> 
      Three years of learning more or less useful knowledge (presented in a more or less optimized fashion), meeting new people and discovering new ideas about my future self. Topics studied added as tags.`,
    tags: ["Web Technologies", "Cloud Computing", ".NET", ".NET Advanced", "OOP", "Programming Engineering", "Computer Networks", "Databases &amp; DBMS Practice", "Operating Systems - Linux", "Python", "Game design &amp; Development", "Computer Graphics", "Regular Expressions / Formal Languages", "Mathematics", "Logics for Computer Science", "Machine Learning", "Artificial Intelligence", "Data Structures", "Algorithms Design", "Java"]
  },
  {
    title: "🎒 „Ștefan Procopiu” High-School, Vaslui",
    location: "High School Diploma in Mathematics and Computer Science",
    startDate: new Date(2010, 8, 15),
    endDate: new Date(2014, 5, 30),
    description: `Also obtained <i>Professional Certificate</i>, <i>Baccalaureate Diploma</i> and <i>English Certificate</i>. 
          <hr>
          Baccalaureate - Jun 2014. Avg: <b>9.86</b> <br/> 
          ⭐ Mathematics: <b>10</b> <br/>
          ⭐ Computer Science (C/C++) : <b>10</b> <br/>
          ⭐ Romanian Language &amp; Literature: <b>9.6</b>.`,
    tags: ["Mathematics", "Computer Science", "Romanian Language &amp; Literature", "English Language"]
  },
  {
    title: "👶 Elementary School &amp; Secondary Education",
    location: "Life++",
    startDate: new Date(2002, 8, 15),
    endDate: new Date(2010, 5, 15),
    description: `Does anybody remember something from this forgotten times?`,
    tags: ["Life Experience"]
  }
];

const allProjects = [
  {
    id: 24,
    category: PortfolioItemCategory.WorkProjects,
    startDate: new Date(2020, 6, 1),
    endDate: new Date(2025, 6, 1),
    status: "Work / In Progress",
    title: "Flowbird - ABT",
    description: "Account Based Ticketing (ABT) is an open-payment transport intelligence solution for making public transport easier (tap your card & no cares). It Reacts to the users when viewing their journeys data & uses the cloud to choreograph its workflows through RabbitMQ & ASP.NET",
    url: {
      title: "Private work"
    },
    image: "./img/portfolio/flowbird-abt.jpg"
  },
  {
    id: 23,
    category: PortfolioItemCategory.WorkProjects,
    startDate: new Date(2019, 9, 1),
    endDate: new Date(2020, 5, 30),
    status: "Work / Abandoned",
    title: "K-Value | KG Talent Platform",
    description: "K-Value aggregates employee & implements a feedback system for employees, based on various business indicators, in order to provide a strong overview of a company's workforce. It is written with Spring and Angular, using Office365 and Teams web integrations.",
    url: {
      title: "Private work"
    },
    image: "./img/portfolio/k-value.png"
  },
  {
    id: 22,
    category: PortfolioItemCategory.WorkProjects,
    startDate: new Date(2019, 8, 1),
    endDate: new Date(2020, 5, 30),
    status: "Work / Abandoned",
    title: "GDM",
    description: "Part of the maintenance and evolutionary requests management team for GDM - an application constructed out of a set of services, with a web application on top of them, that handles document management (at multiple layers).",
    url: {
      title: "Private work"
    },
    image: "./img/portfolio/gdm.png"
  },
  {
    id: 21,
    category: PortfolioItemCategory.WorkProjects,
    startDate: new Date(2019, 9, 1),
    endDate: new Date(2020, 5, 30),
    status: "Work / Abandoned",
    title: "Kaly",
    description: "Web application, written in Spring and Angular, for the management of a corporation's internal resources and workflows (e.g. employee management, timesheets, holidays, etc.). I helped reengineer it (from performance and code-quality standpoint) and further build of advanced modules.",
    url: {
      title: "Private work"
    },
    image: "./img/portfolio/kaly.jpg"
  },
  {
    id: 19,
    category: PortfolioItemCategory.SideProjects,
    startDate: new Date(2018, 7, 1),
    status: "Side Project / Solo / On Hold",
    title: "Replay.NET - Streaming Playground",
    description: "Web application which tries to integrate many existing movie engines (IMDb, Trakt, Taste) for creating awesome movie / one-place streaming experience.  Includes: ASP.NET Core, automation with Puppeteer, streaming from HTTP and P2P, WebTorrent, Electron.",
    url: {
      title: "Private work"
    },
    image: "./img/portfolio/replay.jpg"
  },
  {
    id: 20,
    category: PortfolioItemCategory.WorkProjects,
    startDate: new Date(2018, 4, 1),
    endDate: new Date(2019, 7, 31),
    status: "Work / Finished",
    title: "Risk Asset Manager",
    description: "Web application, reengineered after an old Desktop app, with ASP.NET Core &amp; Angular, which does banking workflows, algorithms and management of assets.",
    url: {
      title: "Private work"
    },
    image: "./img/portfolio/ramnet.jpg"
  },
  {
    id: 18,
    category: PortfolioItemCategory.SideProjects,
    startDate: new Date(2018, 8, 1),
    endDate: new Date(2018, 10, 30),
    status: "Side Project / Solo / Finished",
    title: "Autofiller - Gurushots Automation Bot",
    description: "Created as a side project in order to test if Gurushots' voting and friend search can be automated using Puppeteer and .NET Core",
    url: {
      title: "Private work"
    },
    image: "./img/portfolio/gurushots.jpg"
  },
  {
    id: 15,
    category: PortfolioItemCategory.WorkProjects,
    startDate: new Date(2017, 7, 1),
    endDate: new Date(2018, 3, 30),
    status: "Work / Finished",
    title: "Promis - Oil&Gas Project Management",
    description: "Web application, ASP.NET MVC &amp; (*FE libs) of which purpose is the management of huge oil&gas project's construction and resources",
    url: {
      title: "Private work"
    },
    image: "./img/portfolio/promisnet.jpg"
  },
  {
    id: 8,
    category: PortfolioItemCategory.WorkProjects,
    startDate: new Date(2016, 10, 1),
    endDate: new Date(2017, 7, 31),
    status: "Work / Finished",
    title: "'Product Factory' - Banking product management",
    description: "Developed WPF Desktop application, with an internal MVVM framework, following best practices, adding ideas and testing.",
    url: {
      title: "Private work"
    },
    image: "./img/portfolio/product-placement.jpg"
  },
  {
    id: 14,
    category: PortfolioItemCategory.UniProjects,
    startDate: new Date(2016, 10, 1),
    endDate: new Date(2017, 4, 31),
    status: "Uni / Team Player",
    title: "Learning Curve - University",
    description: `This 'project' lists all the interesting projects worked on in years 2 and 3 of university:
      <a href='https://bitbucket.org/javafxteam/cn-labs'>Numerical Calculus</a>,
      <a href='https://bitbucket.org/javafxteam/cg-labs'>Computer Graphics</a>,
      <a href='https://bitbucket.org/marianfx/cc-labs'>Cloud Computing</a>,
      <a href='https://github.com/marianfx/python-labs'>Python</a>,
      <a href='https://github.com/marianfx/ai-labs'>Artificial Intelligence</a>,
      <a href='https://github.com/marianfx/dotnet-core-labs'>.NET Core</a>,
      `,
    url: {
      title: "Links in description"
    },
    image: "./img/portfolio/labs-cn.jpg"
  },
  {
    id: 4,
    category: PortfolioItemCategory.WorkProjects,
    startDate: new Date(2016, 5, 1),
    endDate: new Date(2016, 10, 30),
    status: "Work / Finished",
    title: "'Vittoria's Secrets' - Automated Tests & Tools",
    description: "Developed tools for the automated testing of a banking website (C#); also executed and maintained a set of tests (Telerik).",
    url: {
      title: "Private work"
    },
    image: "./img/portfolio/tests.jpg"
  },
  {
    id: 3,
    category: PortfolioItemCategory.UniProjects,
    startDate: new Date(2016, 2, 1),
    endDate: new Date(2017, 1, 28),
    status: "Uni / Team Player",
    title: "Fun Web / Solution1 - Learning / Multiplayer / Assignments",
    description: `Fun educational app for learning courses, gaining XP, and then competing in multiplayer Q&A competitions. Transformed afterward in assignment upload/grade management. Check:
      <a href='https://github.com/marianfx/team-7-fun-web'>here</a>,
      <a href='https://github.com/tabby336/Solution1'>here</a>,
      `,
    url: {
      title: "Links in description"
    },
    image: "./img/portfolio/fun-web.png"
  },
  {
    id: 2,
    category: PortfolioItemCategory.SideProjects,
    startDate: new Date(2016, 0, 1),
    time: "Jan. 2016 - ?",
    status: "Side Project / Solo",
    title: "Technology Testing",
    description: `Small applications built for wanting to try out different technologies:
      <a href='https://github.com/marianfx/change-notifier'>Change Notifier</a>,
      <a href='https://github.com/marianfx/solver-codingame'>CodinGame Problem Solver</a>,
      <a href='https://github.com/marianfx/solver-leetcode'>Leetcode Problem Solver</a>,
      <a href='https://github.com/marianfx/com.fx.Id3Helper'>ID3 ML Helper</a>,
      `,
    url: {
      title: "Links in description"
    },
    image: "./img/portfolio/tech-test.jpg"
  },
  {
    id: 1,
    category: PortfolioItemCategory.WorkProjects,
    startDate: new Date(2015, 9, 1),
    endDate: new Date(2016, 5, 30),
    status: "Work / Finished",
    title: "'Anti-fraud' - Fraud Management System",
    description: "Web application /w ASP.NET Web Forms. Entered the project when it was in progress and developed different functionalities.",
    url: {
      title: "Private work"
    },
    image: "./img/portfolio/anti-fraud.jpg"
  }
];

const contactData = {
  address: `Iași, România`,
  phone: phoneNumber,
  mails: [email],
  whentocontact: ["Week: 09:00 AM - 19:00 PM", "Weekend: 11 AM - 2 PM"],
  messengerLink: messengerLink,
  linkedinMessengerLink: linkedinLink
};

const numbersData = [
  {
    title: "Projects",
    count: allProjects.length
  },
  {
    title: "Cups of coffee",
    count: Infinity
  },
  {
    title: "Years of experience",
    count: new Date().getFullYear() - jobs[jobs.length - 1].startDate.getFullYear()
  },
  {
    title: "Glasses of wine",
    count: 1996
  },
];


export let portfolioData = {
  loves,
  socialLinks,
  infos,
  profiFile,
  numbersData,
  cards,
  jobs,
  interestsIntro,
  interestsData,
  edus,
  allProjects,
  contactData
};
