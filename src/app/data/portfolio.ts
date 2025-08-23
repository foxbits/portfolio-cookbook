import { PortfolioItemCategory } from '../components/sections/portfolio/PortfolioSection';
import { getAge } from '../extensions/DateExtensions';

/**
 * Application Information - Version
 */
export const APP_VERSION = "2025.1";
/**
 * Application Information - Repository
 */
export const APP_REPO = "https://github.com/foxbits/portfolio-cookbook";
/**
 * Application Information - Copyright Holder
 */
export const COPYRIGHT_HOLDER = "foxbites";
/**
 * Application Information - Copyright Year
 */
export const COPYRIGHT_YEAR = new Date().getFullYear();

/**
 * Built from the above application information
 */
const metaData = {
  appVersion: APP_VERSION,
  appRepo: APP_REPO,
  copyrightYear: COPYRIGHT_YEAR,
  copyrightHolder: COPYRIGHT_HOLDER
};

// Reusable personal information
const age = getAge(1996, 8, 4);
const phoneNumber = "+40 75*-***-669";
const email = "marian@foxbites.net";
const cvPdf = "/files/CV.Marian.Focsa.EN.2022.1.pdf"; // recommended to use a different name on each change, for cache problems
const messengerLink = "https://m.me/marian.fx";
const linkedinLink = "https://www.linkedin.com/in/marianfx/";
const substackLink = "https://thefoxdiaries.substack.com/";

/**
 * List of "loves" - list that is displayed in the Home page as random "I Love <>"
 */
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

/**
 * List of social links displayed on the Home page.
 * The icons are from Font Awesome 4 - https://fontawesome.com/v4/icons/
 */
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
    url: substackLink,
    icon: "fa-pencil-square",
    title: "Substack"
  },
  {
    url: "#about-me",
    icon: "fa-globe",
    title: "CV / Portfolio",
    target: "_self"
  },
];

/**
 * Personal information displayed in the About Me -> Basic Information section.
 * "Value" supports custom HTML (links only recommended)
 */
const info = [
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

/**
 * A personal introduction and list of CV links displayed in the About Me -> Professional Profile section
 */
const profile = {
  description: `Sassy and creative software expert with great skills of communication, attention to details & architectural thinking. 
  Based on my fast learning algorithm and team choreography understanding, I'm looking forward to growing myself into the better professional by tackling difficult projects and coming front with innovative solutions. Open-minded, I'll be always looking for a new challenge to take on. With a verifiable experience in developing web applications with (but not limited to) the .NET tech stack and various front-end goodies (from plain JS up to Angular and React), and a born ability to track and fix problems, build tools, and test new technologies, I am ready to expose to you the secrets of high-quality software development.`,
  links: [
    {
      title: "This page (complete)",
      link: "#"
    },
    {
      title: "Europass (PDF, standardized)",
      link: cvPdf
    },
    {
      title: "Linkedin (Web, minimal)",
      link: "https://www.linkedin.com/in/marianfx/"
    }
  ]
};

/**
 * Main skills with their percentages (0 - 100), grouped in dynamic categories (recommended 4), displayed in the Skills section
 */
const skills = [
  {
    title: "Professional Skills",
    data: [
      {
        title: "Web Development",
        value: 96,
        tooltip: "Designing & creating APIs, sync or async; consuming them through different web frameworks. Knowledge of core concepts that I can apply to any other framework"
      },
      {
        title: ".NET Development",
        value: 93,
        tooltip: "Libraries, APIs or Desktop, with insights into latest versions of .NET"
      },
      {
        title: "OOP / S.O.L.I.D.",
        value: 93
      },
      {
        title: "Data Structures & Algorithms",
        value: 90
      },
      {
        title: "Technical Design",
        value: 86,
        tooltip: "Technical design and optimization of solutions fitting the business needs"
      },
      {
        title: "Front-End Development",
        value: 85,
        tooltip: "with or without a framework"
      },
      {
        title: "Enterprise patterns",
        value: 78,
        tooltip: "Choreographies between (micro)services using HTTP and/or exchanges/event queues for optimal problem solving"
      },
      {
        title: "AI (of course)",
        value: 76,
        tooltip: "The best skill of an experienced developer is googling; now it's the ability to use AI for googling. Master of Perplexity and Copilot"
      },
      {
        title: "Databases",
        value: 75,
        tooltip: "Mostly relational: Manage, Query, sometimes even Procedural Programming"
      },
      {
        title: "Mentorship",
        value: 70,
        tooltip: "Ability to teach knowledge from all these fields to others, provide guidance to interns and peers etc."
      }
    ]
  },
  {
    title: "Personal Skills",
    data: [
      {
        title: "Problem Solving",
        value: 99
      },
      {
        title: "Organizational Suite",
        value: 95,
        tooltip: "Bringing order into chaos - task management, documentation, code - everything must be organized!"
      },
      {
        title: "Confidence",
        value: 92
      },
      {
        title: "Attention to Details",
        value: 90,
        tooltip: "A very keen eye, being able to spot details and figure out what's wrong with lightspeed"
      },
      {
        title: "Creativity",
        value: 88,
        tooltip: "A great software creator needs creativity, imagination, and the ability to think outside the box in order to come forth with innovative solutions"
      },
      {
        title: "Fast Learning algorithm",
        value: 86,
        tooltip: "Quick grasp of new concepts and technologies; practical sense of how things work and cross-applying concepts"
      },
      {
        title: "Architectural Mind",
        value: 84,
        tooltip: "Abstract concepts feel easy as a breeze"
      },
      {
        title: "Leadership & Team Choreography",
        value: 82,
        tooltip: "Ability to lead teams, as a technical leader not as a manager, to help them grow, to provide guidance and support and, on top of all, a lot of fun"
      },
      {
        title: "Communication",
        value: 80,
        tooltip: "Easy to communicate with, thanks to a strong passion for human psychology"
      },
      {
        title: "Interviewing",
        value: 80,
        tooltip: "Developed an algorithm for conversational interviews to figure out the technical & psychological match of candidates with the team/project"
      }
    ]
  },
  {
    title: "Technologies Mastered",
    data: [{
      title: "ASP.NET",
      value: 92,
      tooltip: "Includes ASP.NET (MVC, Web API) and many Nu-Get libraries for any usecase"
    },
    {
      title: "Front-End Frameworks & Libs",
      value: 85,
      tooltip: "React, Angular, Unit Testing, jQuery, Vue.JS, Bootstrap, Material Design Frameworks (Angular Material, Materialize, Material UI), PrimeNG, Ionic, etc"
    },
    {
      title: "Databases / ORMs",
      value: 82,
      tooltip: "Includes Postgres / SQL Server / MariaDB knowledge, query writing, query building, Entity Framework proficiency (+- EFPlus, LINQ), adaptable to other ORMs"
    },
    {
      title: "Docker & The Cloud",
      value: 80,
      tooltip: "Working scenarios and application build & deployment through docker containers to the cloud (AWS / Azure), recently also through kubernetes"
    },
    {
      title: "Application Security",
      value: 77,
      tooltip: "Expertise with secure coding practices, application auth* and vulnerability assessments"
    },
    {
      title: "CI / CD",
      value: 75,
      tooltip: "Worked with various pipelines for CI/CD: Jenkins, GitHub Actions, GitLab, Bitbucket Pipelines, TeamCity"
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
      title: "Old .NET Framework",
      value: 69,
      tooltip: "Refers to other .NET Framework knowledge, like WCF, WFA, WPF"
    },
    {
      title: "Cross-platform web",
      value: 60,
      tooltip: "Experience with building cross-platform desktop/mobile applications using Electron, Cordova, Ionic"
    }
    ]
  },
  {
    title: "Languages (Programming)",
    data: [
      {
        title: "C#",
        value: 95
      },
      {
        title: "TypeScript",
        value: 94
      },
      {
        title: "JavaScript",
        value: 92
      },
      {
        title: "SQL",
        value: 80
      },
      {
        title: "Python",
        value: 70
      },
      {
        title: "Scripting (others)",
        value: 60
      },
      {
        title: "VB.NET",
        value: 40
      },
      {
        title: "Java",
        value: 30
      },
      {
        title: "C/C++",
        value: 30
      }
    ]
  },
];

/**
 * List of jobs, displayed in the Experience section as a Timeline
 * "Location", "Description" support custom HTML code.
 * "endDate" is optional and will mark the job as active.
 * If you want to reference a project in the description, add a link tag with href="#project-<id>", where the id is the id you define in the projects list
 * The jobs are not automatically ordered, they are displayed in the custom order defined here
 */
const jobs = [
  {
    title: "🚀 Freelance Technical Professional",
    location: "<span style='text-transform: none'>side-projects, self-employed, <a href='https://connect.foxbites.net' target='_blank'>foxbites.net</a></span>",
    startDate: new Date(2025, 5, 1),
    endDate: undefined,
    description: `Software Development is about discovering that you are actually a god and you can create literally anything, you are limited only by your imagination (or at least this is the reason why I initially got into it).
     Therefore I started investing more time into personal projects:
     <ul>
      <li>- Writer at <a href='https://thefoxdiaries.substack.com' target='_blank'>thefoxdiaries.substack.com</a></li>
      <li>- Creator of two brand-new secret projects</li>
      <li>- Creator of <a href='https://connect.foxbites.net' target='_blank'>connect.foxbites.net</a> (CV / Portfolio Website)</li>
      <li>- Self-hoster at foxbites.net</li>
      <li>- Seldom GitHub contributor</li>
     </ul>
    Details can be found in the Projects section.
    <br/><br/>
    <b>Related projects:</b> 
    <a class="color__projects" href="#project-25">The Fox Diaries Substack</a>,
    <a class="color__projects" href="#project-26">Secret Projects #1</a>,
    <a class="color__projects" href="#project-28">CV / Portfolio Website</a>,
    <a class="color__projects" href="#project-29">Self-Hosting</a>,
    <a class="color__projects" href="#project-30">GitHub* Contributor (seldom)</a>`,
    tags: ["Side-projects", "GitHub", "Substack", "Self-hosting"]
  },
  {
    title: "💺 Technical Lead",
    location: '<a href="https://www.ness.com" target="_blank">Ness Digital Engineering</a>',
    startDate: new Date(2021, 6, 1),
    endDate: undefined,
    description: `Solving business problems and architectural challenges on a transport intelligence product while leading a scrum team towards sprint goals in an Agile environment, visibly reducing their stress, helping them learn, be productive and never forget that humor is important -  all through a philosophy of building trust, based on professionalism and saying "no" when needed, with other engineers and product representatives across UK and France.

      <br/><br/>
      <b>Responsibilities:</b> system design, architecture, team choreography, technical solutions design, software development, code reviews, mentorship, interviews
      <br/><br/>

      <b>Activities:</b> Business Capping Rule Engine (re)design and expansion (e.g. concessions) to match custom transportation rules; Multi-Tenancy migration challenges analysis, change design and implementation; Notifications System (email + sms), Identity Validation (IDNow), Payment Processors & 3rd parties integration (e.g. Google Wallet, NMI), two production launches extended support (Sherlock Holmes + bugfixing); documentation guru; tooling management delegate (.NET 6 + .NET 8 + React upgrades, dev environment setup with docker compose, Jenkins scripting, Rancher Desktop migration, UI unit tests introduction); Settings management (upgrade settings storage and documentation); diagramming; Re-Captcha (brute-force attack mitigation); internal reusable generic mechanisms (e.g. redis caching, requeue for out-of-order messages, identity middlewares);
      <br/><br/>

      <b>Highlights:</b> Ness Internal Partnership & Collaboration Award in 2022 for outstanding teamwork; opened the "Behind the Ness Scenes" program in 2024 (
      <a href="https://www.linkedin.com/posts/ness-digital-engineering-romania_voices-rewardsandrecognition-innovation-activity-7155202769992200192-PPSs" target="_blank" >social 1</a>, 
      <a href="https://www.facebook.com/iasi.ness/videos/900454821625042" target="_blank" >social 2</a>
      ) for outstanding customer satisfaction
      <br/>
      <b>Related projects:</b> 
      <a class="color__projects" href="#project-24">Flowbird - ABT</a>
      <br/><br/>
      <b>Tech stack</b>: similar to the previous position, with the addition of more cloud tools, bits of kubernetes and third party integrations - Google Wallet, IDNow, AWS (S3, SNS, SMS, Glacier, Elastic, RDS)`,
    tags: ["Leadership", "Business value", "Web Development", "ASP.NET", "Architecture", "Transportation"]
  },
  {
    title: "🚌 Senior Software Engineer",
    location: '<a href="https://www.ness.com" target="_blank">Ness Digital Engineering</a>',
    startDate: new Date(2020, 6, 1),
    endDate: new Date(2021, 5, 30),
    description: `Creative software engineer working on a transport intelligence product in a scrum-based large team, with a tech-stack floating around .NET (Core) and React, collaborating in an Agile environment with other engineers and product representatives across UK and France.

      <br/><br/>
      <b>Activities:</b> software development & maintenance, bug tracking, architecture, API Design, providing technical solutions for business requirements, code reviews, writing technical documentation, investigating tech news & solutions and presenting them to the team, mentorship (interns, new joiners)
      <br/>
      <b>Related projects:</b> 
          <a class="color__projects" href="#project-24">Flowbird - ABT</a>
      <br/><br/>
      <b>Back-end:</b> .NET Core, ASP.NET (Core) WebApi, Entity Framework (Core), Redis, RabbitMQ, Keycloak (Identity Provider), Hangfire, MSUnit
      <br/>
      <b>UI:</b> React, Material UI, HTML, CSS, SCSS, JSS, JEST
      <br/>
      <b>Languages:</b> C#, JavaScript, LINQ, SQL (flavors: PostgreSQL)
      <br/>
      <b>Environment:</b> Visual Studio, Visual Studio Code, SonarQube, docker, Jenkins, AWS, DBeaver, GIT (Bitbucket), Postman, Jira, Confluence, LucidChart, DataDog, ElasticSearch + Kibana
      <br/>
      <b>Other:</b> EasyNetQ, EFPlus (batch queries), RestSharp, Automapper, custom react libraries, custom nuget, npm & docker repositories`,
    tags: ["Web Development", "ASP.NET", "React", "Transportation", "Full-Stack"]
  },
  {
    title: "🍹 Lead Software Developer",
    location: '<a href="https://www.kireygroup.com" target="_blank">Kirey Group</a>',
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
    location: '<a href="https://www.kireygroup.com" target="_blank">Kirey Est</a>',
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
    location: '<a href="https://www.kireygroup.com" target="_blank">Kirey Est</a>',
    startDate: new Date(2015, 6, 1),
    endDate: new Date(2015, 8, 30),
    description: `Trained by a supervisor in a long list of .NET Technologies by realizing small projects (enum: C#, VB.NET, ASP.NET WebForms, ASP.NET MVC, ADO.NET, Entity Framework, WPF – MVVM, WFC, Spring.NET, T-SQL, Javascript & jQuery, HTML, CSS...).`,
    tags: ["Training"]
  }
];

/**
 * List of interests, passions and hobbies, displayed in the Interests section.
 * Each entry includes a title, a link, and an icon (from Font Awesome 4 - https://fontawesome.com/v4/icons/).
 * Links are optional, but can be used in a playful manner to showcase some of your online / hobby presence
 * Recommended to use a number that looks good on your desired screen size.
 */
const interests = {
  description: '"We don\'t read and write poetry because it\'s cute. We read and write poetry because we are members of the human race. And the human race is filled with passion. And medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for."',
  caption: "- Robin Williams in ‘Dead Poets Society’",
  data: [
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
      link: substackLink,
      icon: "fa-pencil-square"
    },
    {
      title: "Money",
      link: "https://revolut.me/mfx",
      icon: "fa-money"
    },
    {
      title: "Photography",
      link: "https://gurushots.com/foxbites",
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
      link: "https://backloggd.com/u/foxbites/",
      icon: "fa-gamepad"
    },
    {
      title: "Shopping",
      link: "https://www.vinted.ro/member/170366344-foxietamine",
      icon: "fa-shopping-bag"
    },
  ]
};

/**
 * List of educational experiences, displayed in the Education section as a Timeline.
 * Same format and comments as for the jobs timeline
 */
const education = [
  {
    title: "🍉 The Principal Developer Masterclass",
    location: '<a href="https://certs.principal.dev/14x/U03NTA03VUN" target="_blank">Certificate</a>',
    startDate: new Date(2022, 6, 1),
    endDate: new Date(2022, 6, 4),
    description: `Attended a great training - <a href="https://principal.dev" target="_blank">The Principal Dev"</a> by <a href="https://twitter.com/eduardsi" target="_blank">Eduards Sizovs</a> - in order to better understand the psychology of teams and how to add value and technical excellence to my work gang. A great course with a lot of new ideas to apply.`,
    tags: ["Technical Lead", "principal.dev"]
  },
  {
    title: "🌞 Udemy - Courses",
    location: "[certificates in description]",
    startDate: new Date(2019, 3, 1),
    endDate: new Date(2021, 11, 30),
    description: `Took a series of courses on Udemy to expand my knowledge:
    <ul>
      <li>- <b>React - Full Guide & Redux Saga</b>: needed for work. See <a href="https://github.com/foxbits/playground-reactjs-redux-saga" target="_blank">GitHub</a></li>

      <li>- <b>Vue JS 2 - The Complete Guide</b>: learned to keep-up with the ongoing progress of front-end technologies and to do some comparisons with Angular. See <a href="http://ude.my/UC-7PPSDK51" target="_blank">Certificate</a>
      and <a href="https://github.com/foxbits/vue-udemy" target="_blank">GitHub</a></li>

      <li>- <b>DevOps Essentials</b>: core DevOps ecosystem notions by The Linux Academy. See <a href="http://ude.my/UC-NY1A7VGY" target="_blank">Certificate</a>
      and <a href="https://github.com/foxbits/devops-essentials-sample-app" target="_blank">GitHub</a></li>

      <li>- <b>Agile Project Management: Scrum Cert. Prep</b>: It includes 2 courses: Scrum Certification Prep + Scrum Master + Agile Scrum Training && Agile Project Management: Scrum Step by Step. I took this set of courses in order to clarify my notions about Agile methodologies and the Scrum framework. See <a href="http://ude.my/UC-30XT1MAU" target="_blank">Certificate</a></li>

      <li>- <b>Angular - The Complete Guide</b>: used for rooting my knowledge on Angular after already working on it for some months. See <a href="http://ude.my/UC-4GREQAHJ" target="_blank">Certificate</a>
      and <a href="https://github.com/foxbits/ng-udemy-files" target="_blank">GitHub</a></li>
    </ul>
    <br/>
    <b>Related projects:</b>
    <a class="color__projects" href="#project-27">Learning Curve #2</a>`,
    tags: ["Angular", "React", "Vue", "DevOps", "Agile"]
  },
  {
    title: "🎓 Faculty of Computer Science, „Alexandru Ioan Cuza” University, Iași",
    location: "<a href='https://www.info.uaic.ro' target='_blank'>!Bachelor's Degree, Computer Science</a>",
    startDate: new Date(2014, 9, 1),
    endDate: new Date(2017, 5, 15),
    description: `Status: finished, no license.<br/> 
      Three years of learning more or less useful knowledge (presented in a more or less optimized fashion), meeting new people and discovering new ideas about my future self. Topics studied added as tags.
      <br/><br/>
      <b>Highlights:</b>
      <ul>
        <li><b>Online International Olympiad of Mathematics MO-Ariel 2015</b>: Participated at MO-Ariel (online international olympiad of Mathematics) in 2015, alongside 3 teammates, guided by Mr.
        Florin Iacob (FII). Advanced to the finals, in the online Mathematics „Championship”.
        Won a bronze medal.
        </li></ul>
      <br/>
      <b>Related projects:</b>
      <a class="color__projects" href="#project-3">Fun Web / Solution1</a>,
      <a class="color__projects" href="#project-14">Learning Curve - University</a>`,
    tags: ["Web Technologies", "Cloud Computing", ".NET", ".NET Advanced", "OOP", "Programming Engineering", "Computer Networks", "Databases &amp; DBMS Practice", "Operating Systems - Linux", "Python", "Game design &amp; Development", "Computer Graphics", "Regular Expressions / Formal Languages", "Mathematics", "Logics for Computer Science", "Machine Learning", "Artificial Intelligence", "Data Structures", "Algorithms Design", "Java"]
  },
  {
    title: "🎒 „Ștefan Procopiu” High-School, Vaslui",
    location: "<a href='http://lspvs.ro' target='_blank'>High School Diploma in Mathematics and Computer Science</a>",
    startDate: new Date(2010, 8, 15),
    endDate: new Date(2014, 5, 30),
    description: `Also obtained <i>Professional Certificate</i>, <i>Baccalaureate Diploma</i> and <i>English Certificate</i>. 
          <hr>
          Baccalaureate - Jun 2014. Avg: <b>9.86</b> <br/> 
          ⭐ Mathematics: <b>10</b> <br/>
          ⭐ Computer Science (C/C++) : <b>10</b> <br/>
          ⭐ Romanian Language &amp; Literature: <b>9.6</b>.

          <br/><br/>
          <b>Highlights:</b>
          <ul>
            <li><b>- IT Marathon, 2014</b>: Participated alongside a friend in this contest, organized by AC Iași. The main goal of the contest was to build in a day (6-8 hours) a desktop LAN chat client. Finished 3rd place.
            </li>
            <li><b>- O.T.I. 2011, 2012, 2014</b>: Participated at O.T.I. ("Olimpiada de Tehnologia Informației" ~ Competition of Informatics Technology, formerly known as C.I.A.).<br/>
            2014: Domain was C#. 2nd place county level.<br/>
            2012: Domain was Web / Microsoft Office / General Computer Knowledge. 1st place county level, nothing national level<br/>
            2011: Domain was Web / Microsoft Office / General Computer Knowledge. 1st place county level, Silver national level
            </li>
            <li><b>- Mathematics Olympiad</b>: Participated in a mathematics club and competed in the county level competitions.
            </li>
            <li><b>- Computer Science Olympiad</b>: Participated in a CS club and competed in the county level competitions.
            </li>
          </ul>
          <br/>`,
    tags: ["Mathematics", "Computer Science", "Romanian Language &amp; Literature", "English Language"]
  },
  {
    title: "👶 Elementary School & Secondary Education",
    location: "Life++",
    startDate: new Date(2002, 8, 15),
    endDate: new Date(2010, 5, 15),
    description: `Does anybody remember something from this forgotten times?`,
    tags: ["Life Experience"]
  }
];

/**
 * List of projects, displayed in the Portfolio section.
 * Each project has an id, which can be referenced in links with #project-<id>
*  "Description" support custom HTML code.
* "endDate" is optional and will mark the project as active, which will make it visible in the Active filter
* The "category" enum defines the filters from the page and links each project to a filter category ("Active" is an extra category defined through the "endDate" as mentioned above, "All" is also an implicit category)
* The "url" can have an actual url inside or not (e.g. private projects would not, projects with multiple links can have them in the description, up to each one's preference)
 */
const projects = [
  {
    id: 26,
    category: PortfolioItemCategory.Side,
    startDate: new Date(2025, 7, 15),
    status: "Side Project / In Progress",
    title: "Secret projects #1",
    description: "Working on a mobile application around building healthy hobbies and meeting people (with a twist) and a game with quizzes, similar to the former QuizzUp, but with a lovely twist.",
    url: {
      title: "Private work"
    },
    image: "./img/portfolio/secret-projects-1.jpg"
  },
  {
    id: 29,
    category: PortfolioItemCategory.Side,
    startDate: new Date(2024, 6, 1),
    status: "Side Project / In Progress",
    title: "Self-Hosting",
    description: "Home server, first for multimedia (Plex), then extended for photos (immich), cloud (nextcloud), development (jenkins, gitlab) & app deployments (e.g. portfolio website). Protected with tailscale & cloudflare zerotrust. Wrote about it on <a href='https://thefoxdiaries.substack.com' target='_blank'>substack</a>",
    url: {
      title: "View GitHub",
      url: "https://github.com/foxbits/self-hosting-cookbook"
    },
    image: "./img/portfolio/home-lab.jpg"
  },
  {
    id: 25,
    category: PortfolioItemCategory.Side,
    startDate: new Date(2022, 6, 1),
    status: "Side Project / In Progress",
    title: "The Fox Diaries Substack",
    description: "A technical blog (migrated from Medium) where I write about tips and tricks on technical topics (most famous until now are a migration from Docker to Rancher and a Plex Server setup guide)",
    url: {
      title: "View Substack",
      url: "https://thefoxdiaries.substack.com"
    },
    image: "./img/portfolio/foxdiaries.jpg"
  },
  {
    id: 28,
    category: PortfolioItemCategory.Side,
    startDate: new Date(2021, 2, 21),
    status: "Side Project / In Progress",
    title: "CV / Portfolio Website",
    description: "A personal website written in React and deployed with docker to showcase my CV and portfolio - <a href='https://connect.foxbites.net' target='_blank'>connect.foxbites.net</a>",
    url: {
      title: "View GitHub",
      url: "https://github.com/foxbits/portfolio-cookbook"
    },
    image: "./img/portfolio/portfolio-web.jpg"
  },
  {
    id: 30,
    category: PortfolioItemCategory.Side,
    startDate: new Date(2021, 0, 1),
    status: "Side Project / In Progress",
    title: "GitHub* Contributor (seldom)",
    description: `Created:
    <a href='https://github.com/foxbits/fx-core' target='_blank'>fx-core</a>,
    <a href='https://github.com/foxbits/portfolio-cookbook' target='_blank'>portfolio-cookbook</a>,
    <a href='https://github.com/foxbits/self-hosting-cookbook' target='_blank'>self-hosting-cookbook</a>
    and others, and contributed to:
    <a href='https://github.com/arvvoid/plugin.video.hbogoeu' target='_blank'>plugin.video.hbogoeu</a>,
    <a href='https://github.com/Jackett/Jackett' target='_blank'>Jackett</a>
    `,
    url: {
      title: "GitHub profile",
      url: "https://github.com/foxbits"
    },
    image: "./img/portfolio/github.jpg"
  },
  {
    id: 24,
    category: PortfolioItemCategory.Work,
    startDate: new Date(2020, 6, 1),
    endDate: new Date(2025, 6, 1),
    status: "Work / In Progress",
    title: "Flowbird - ABT",
    description: "Account Based Ticketing (ABT) is an open-payment transport intelligence solution for making public transport easier (tap your card & no cares). It Reacts to the users when viewing their journeys data & uses the cloud to choreograph its workflows through RabbitMQ & ASP.NET",
    url: {
      title: "More details",
      url: "https://www.flowbird.com/our-solutions/transport-solutions/transport-fare-collection-platform/"
    },
    image: "./img/portfolio/flowbird-abt.jpg"
  },
  {
    id: 23,
    category: PortfolioItemCategory.Work,
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
    category: PortfolioItemCategory.Work,
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
    category: PortfolioItemCategory.Work,
    startDate: new Date(2019, 9, 1),
    endDate: new Date(2020, 5, 30),
    status: "Work / Abandoned",
    title: "Kaly",
    description: "Web application, Spring + Angular, for managing a corporation's internal resources and workflows (employees, timesheets, holidays). I helped reengineer it (from performance and code-quality standpoint) and further build of advanced modules.",
    url: {
      title: "Private work"
    },
    image: "./img/portfolio/kaly.jpg"
  },
  {
    id: 27,
    category: PortfolioItemCategory.Learning,
    startDate: new Date(2019, 3, 1),
    status: "Learning / Solo",
    title: "Learning Curve #2",
    description: `Took different courses to learn new technologies and documented the process on GitHub, for example:
    <a href='https://github.com/foxbits/devops-essentials-sample-app' target='_blank'>devops</a>,
    <a href='https://github.com/foxbits/ng-udemy-files' target='_blank'>angular</a>,
    <a href='https://github.com/foxbits/vue-udemy' target='_blank'>vue</a>,
    <a href='https://github.com/foxbits/playground-reactjs-redux-saga' target='_blank'>react</a>
    `,
    url: {
      title: "View on GitHub",
      url: "https://github.com/stars/foxbits/lists/learning-curve"
    },
    image: "./img/portfolio/learning-curve-2.jpg"
  },
  {
    id: 19,
    category: PortfolioItemCategory.Side,
    startDate: new Date(2018, 7, 1),
    endDate: new Date(2020, 7, 31),
    status: "Side Project / Solo / Abandoned",
    title: "Replay.NET",
    description: "Web application integrating many existing movie engines (IMDb, Trakt, Taste) for creating an one-place streaming experience.  Includes: ASP.NET Core, automation with Puppeteer, streaming from HTTP and P2P, WebTorrent, Electron.",
    url: {
      title: "Private work"
    },
    image: "./img/portfolio/replay.jpg"
  },
  {
    id: 20,
    category: PortfolioItemCategory.Work,
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
    category: PortfolioItemCategory.Side,
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
    category: PortfolioItemCategory.Work,
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
    category: PortfolioItemCategory.Work,
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
    category: PortfolioItemCategory.Learning,
    startDate: new Date(2016, 10, 1),
    endDate: new Date(2017, 4, 31),
    status: "Uni / Team Player",
    title: "Learning Curve - University",
    description: `This 'project' lists all the interesting projects worked on in years 2 and 3 of university:
      <a target="_blank" href='https://bitbucket.org/javafxteam/cn-labs'>Numerical Calculus</a>,
      <a target="_blank" href='https://bitbucket.org/javafxteam/cg-labs'>Computer Graphics</a>,
      <a target="_blank" href='https://bitbucket.org/marianfx/cc-labs'>Cloud Computing</a>,
      <a target="_blank" href='https://github.com/foxbits/python-labs'>Python</a>,
      <a target="_blank" href='https://github.com/foxbits/ai-labs'>Artificial Intelligence</a>,
      <a target="_blank" href='https://github.com/foxbits/dotnet-core-labs'>.NET Core</a>,
      `,
    url: {
      title: "Links in description"
    },
    image: "./img/portfolio/labs-cn.jpg"
  },
  {
    id: 4,
    category: PortfolioItemCategory.Work,
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
    category: PortfolioItemCategory.Learning,
    startDate: new Date(2016, 2, 1),
    endDate: new Date(2017, 1, 28),
    status: "Uni / Team Player",
    title: "Fun Web / Solution1 - Learning Multiplayer",
    description: `Fun educational app for learning courses, gaining XP, and competing in multiplayer Q&A. Transformed afterward in assignment upload/grade management. Check:
      <a target="_blank" href='https://github.com/foxbits/team-7-fun-web'>here</a>,
      <a target="_blank" href='https://github.com/tabby336/Solution1'>here</a>,
      `,
    url: {
      title: "Links in description"
    },
    image: "./img/portfolio/fun-web.png"
  },
  {
    id: 2,
    category: PortfolioItemCategory.Learning,
    startDate: new Date(2016, 0, 1),
    endDate: new Date(2019, 2, 30),
    status: "Learning / Solo",
    title: "Learning Curve #1",
    description: `Small applications built for wanting to try out different technologies:
      <a target="_blank" href='https://github.com/foxbits/change-notifier'>Change Notifier</a>,
      <a target="_blank" href='https://github.com/foxbits/solver-codingame'>CodinGame Problem Solver</a>,
      <a target="_blank" href='https://github.com/foxbits/solver-leetcode'>Leetcode Problem Solver</a>,
      <a target="_blank" href='https://github.com/foxbits/com.fx.Id3Helper'>ID3 ML Helper</a>,
      `,
    url: {
      title: "Links in description"
    },
    image: "./img/portfolio/tech-test.jpg"
  },
  {
    id: 1,
    category: PortfolioItemCategory.Work,
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

/**
 * Contact information displayed in the contact section
 * The email is used for the email form
 */
const contactData = {
  address: `Iași, România`,
  phone: phoneNumber,
  mails: [email],
  whentocontact: ["Week: 09:00 - 19:00", "Weekend: 11:00 - 14:00"],
  messengerLink: messengerLink,
  linkedinMessengerLink: linkedinLink
};

/**
 * Cards displayed in the statistics section
 * Recommended to be a multiple of 2
 */
const stats = [
  {
    title: "Projects",
    count: projects.length
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


export const portfolioData = {
  loves,
  socialLinks,
  info,
  profile,
  stats,
  skills,
  jobs,
  interests,
  education,
  projects,
  contactData,
  metaData
};
