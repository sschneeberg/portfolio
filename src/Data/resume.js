const Projects = [
    {
        title: 'Tier | Breaker ',
        description: 'Flask/React Application',
        date: 'January 2020',
        bullets: [
            'Designed database models and created a fully tested Flask API with Socket.io integration as Backend Engineer',
            'Supported frontend team through thoughtful api design, Created React components and CSS stylesheets as needed',
            'Taught myself Flask, MongoEngine, and Python Socketio to create a full stack application in less than one week'
        ],
        links: ['https://tier-breaker.herokuapp.com/', 'https://github.com/sschneeberg/tierbreaker_backend'],
        credentials: ''
    },
    {
        title: 'Pest Damage Report ',
        description: 'MERN Stack Application',
        date: 'December 2020',
        bullets: [
            'Lead team of four to create full stack application in ten days, Maintained group repository and development schedule',
            'Spearheaded back end api and database development in Express with MongoDB, Implemented Socket.io functionality',
            'Instated user authentication with tiered permissions to allow multifunctional use of the app with varied api access'
        ],
        links: ['https://pestdamagereport.herokuapp.com/', 'https://github.com/sschneeberg/pdr-frontend'],
        credentials: ['customer@email.com', 'password']
    },
    {
        title: 'Tracker App ',
        description: 'Express Web Application',
        date: 'December 2020',
        bullets: [
            'Designed personalized, neutral period tracker with focus on baseline functionality and user designated priorities',
            'Managed an eight model SQL database, implementing both the Sequelize ORM and raw SQL queries',
            'Organized project into controllers, views, and specialized middleware to maintain DRY and MVC strategies'
        ],
        links: ['https://periodtrackerapp.herokuapp.com', 'https://github.com/sschneeberg/tracker-app'],
        credentials: ['user', 'password']
    },
    {
        title: 'Fruitris ',
        description: 'Client Side Javascript Game',
        date: 'November 2020',
        bullets: [
            'In one week, designed an enhanced Tetris-like game using HTML Canvas and Javascript DOM manipulation',
            'Implemented MVC strategies to efficiently execute and track gameplay',
            'Leveraged Javascript’s asynchronous functionality to simulate physics and control game logic'
        ],
        links: ['https://sschneeberg.github.io/fruitris', 'https://github.com/sschneeberg/fruitris'],
        credentials: ''
    }
];

const Jobs = [
    {
        title: 'Software Engineering Fellow',
        description: 'General Assembly, Remote',
        date: 'Oct 2020 - Present',
        bullets: [
            'Tackled daily MVP assignments, covering full stack development of web applications',
            'Completed and deployed three, week-long projects involving the ideation and creation of web apps from scratch',
            'Aided other cohort members with the understanding of new concepts, took lead in pair programming exercises and group projects'
        ]
    },
    {
        title: 'Senior Coordinator',
        description: 'SKA Custom Robots & Machines, Remote',
        date: 'July 2020 - Present',
        bullets: [
            'Mobilized stalled website development within one week as acting project manager working with a contractor',
            'Slashed time spent on project tracking by 50% through implementing Salesforce to Quickbooks Integrations',
            'Initialized new strategies for networking and increasing sales in the newly virtual landscape of industry events',
            'Independently manage administrative tasks, including legal processes for the development of the business'
        ]
    },
    {
        title: 'Assistant Technical Director/Apprentice',
        description: 'Studio Theatre, Washington D.C.',
        date: 'July 2019 - June 2020',
        bullets: [
            'Trimmed costs to fit within $6000 budget by ideating alternatives without sacrificing any design elements',
            'Engineered and drafted technical drawings optimized for efficient use of construction time and materials',
            'Performed structural analysis for cantilevered concrete deck with welded steel structure',
            'Created flexible build schedule to ensure project completion in under a month as the Acting Technical Director',
            'Collaborated across departments and worked closely with designers to ensure full execution of creative vision'
        ]
    }
];

const Education = [
    {
        title: 'General Assembly',
        description: 'Software Engineering Immersive, Remote',
        date: 'January 2021',
        bullets: []
    },
    {
        title: 'Carnegie Mellon University',
        description: 'BS Mechanical Engineering, Pittsburgh, PA',
        date: 'May 2019',
        bullets: ['University Honors']
    }
];

const Skills = [
    {
        title: 'Languages',
        bullets: ['Javascript/Node.js', 'CSS3 + HTML5', 'Python', 'Matlab', 'Arduino', 'SQL']
    },
    {
        title: 'Databases',
        bullets: ['Mongo DB', 'PostgreSQL']
    },
    {
        title: 'Libraries + Frameworks',
        bullets: ['React JS', 'Express JS', 'Bootstrap', 'Django', 'Sequelize', 'Mongoose', 'Socket.io', 'Mocha JS']
    },
    {
        title: 'Tools',
        bullets: ['Github', 'Slack', 'Mongo Atlas', 'Trello', 'Heroku', 'Salesforce', 'Zapier']
    },
    {
        title: 'Methodologies',
        bullets: ['Responsive Design', 'REST', 'MVC', 'OOP']
    },
    {
        title: 'Miscellaneous',
        bullets: ['Carpentry', 'Metalwork', 'MIG/TIG Welding', 'Rapid Prototyping', 'Vectorworks/CAD']
    }
];

export { Projects, Jobs, Education, Skills };
