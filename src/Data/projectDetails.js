import fruitrisBubble from './fruitrisMenu.png';
import fruitrisGrow from './fruitrisGrow.png';
import fruitrisTwoPlayer from './fruitrisTwoPlayer.png';
import trackerAppBubble from './trackerLanding.png';
import trackerAppHome from './trackerHome.png';
import trackerAppEdit from './trackerEdit.png';
import trackerAppAdvice from './trackerAdvice.png';
import pdrLanding from './pdrLanding.png';
import pdrAdmin from './pdrAdmin.png';
import pdrChat from './pdrChat.png';
import pdrDev from './pdrDev.png';
import pdrUser from './pdrUser.png';
import tbcreate from './tbcreate.png';
import tbbracket from './tbbracket.png';
import tblanding from './tblanding.png';
import tbpublic from './tbpublic.png';

const Fruitris = {
    title: 'Fruitris',
    img: fruitrisBubble,
    description:
        'Inspired by a childhood favorite, Fruitris is a tetris-like game based on the Neopets Game: GadGads Game.  Fruitris players can choose to play either as single player or multiplayer.  In single player, players can choose difficulties which will indicate the score to beat.  In two player mode, players switch off arranging peices on the same board, competeing to gain as many points as possible while ensuring they are not the one to fill the board.  Full game instructions can be found in the menu as well as in an in-game Help pop up.  Fruitris was built using vanilla Javascript DOM manipulation and HTML Canvas. The board is mapped to a 2D Array for easy collision, clearing, and win detection. Game physics rely on the asynchronous nature of Javascript.',
    userstories: '',
    tags: ['Javascript', 'HTML5', 'CSS3', 'HTML Canvas'],
    altImgs: [fruitrisBubble, fruitrisTwoPlayer, fruitrisGrow],
    link: 'https://sschneeberg.github.io/fruitris',
    github: 'https://github.com/sschneeberg/fruitris'
};
const TrackerApp = {
    title: 'Tracker',
    img: trackerAppBubble,
    description:
        'Tracker is intended to be a gender neutral period tracker that takes the focus away from pregnancy and allows you to record your own priorities. Tracker offers two key features not usually seen in a period tracker app. There is a summary page that allows you to search your own information and see trends in a centralized location.  There is also a section for medical advice, allowing users to search their period (or other) medications as well as access a symptom tracker should they want to affirm a new symptom is not out of the ordinary. Tracker is an Express application, using Sequelize to connect to PostgreSQL.  Javascript Date and Moment are used together to handle date storage, manipulation and display.',
    userstories:
        'As a user, I want to reliably track my period and related information, recording what I deem important.  I want to be able to see my predicted, upcoming start date as well as information regarding my typical cycle.  As a user, I want the ability to compare symptoms across periods and quickly access information from past dates.',
    tags: ['Node.js', 'Express', 'SQL', 'Sequelize', 'PostgreSQL', 'Passport', 'Javascipt', 'HTML5', 'CSS3'],
    altImgs: [trackerAppBubble, trackerAppHome, trackerAppEdit, trackerAppAdvice],
    link: 'https://periodtrackerapp.herokuapp.com',
    github: 'https://github.com/sschneeberg/tracker-app'
};
const PDR = {
    title: 'Pest Damage Report',
    img: pdrLanding,
    description:
        "Pest Damage Report (PDR) is a bug tracking website designed for software companies to utilize in place of creating their own tracking or support system.  A company can sign up an administrative user, then through the use of a UUID key, they can invite additional staff members to have admin or support accounts on PDR.  We offer a link to embed into their sites for easy customer access.  Customers can submit bug reports without logging in, or create an account to see their report's status and connect with comapny support.  Pest Damage Report is a MERN stack application, utilizing Mongoose to connect with MongoDB.  Notifications and chat features are implemented through the use of Socket.io.",
    userstories:
        'As a customer I want to log on and submit bug reports to the companies whose product that I use. I want to be able to see the tickets I have submitted, their current status, and any related comments.  As a software company I want to sign up users under my company name to manage and address customer submitted bug reports. I want to have admin users who can manage ticket assignment and support accounts who will address bugs, interact with the customer and close out tickets',
    tags: ['React', 'Express', 'Node.js', 'Socket.io', 'Javascript', 'HTML5', 'CSS3'],
    altImgs: [pdrLanding, pdrUser, pdrAdmin, pdrDev, pdrChat],
    link: 'https://pestdamagereport.herokuapp.com/',
    github: 'https://github.com/sschneeberg/pdr-frontend'
};
const TB = {
    title: 'Tier | Breaker',
    img: tbcreate,
    description:
        "Pest Damage Report (PDR) is a bug tracking website designed for software companies to utilize in place of creating their own tracking or support system.  A company can sign up an administrative user, then through the use of a UUID key, they can invite additional staff members to have admin or support accounts on PDR.  We offer a link to embed into their sites for easy customer access.  Customers can submit bug reports without logging in, or create an account to see their report's status and connect with comapny support.  Pest Damage Report is a MERN stack application, utilizing Mongoose to connect with MongoDB.  Notifications and chat features are implemented through the use of Socket.io.",
    userstories: '',
    tags: ['React', 'Node.js', 'Flask', 'MongoDB', 'Socket.io', 'Javascript', 'Python', 'HTML5', 'CSS3'],
    altImgs: [tbcreate, tblanding, tbpublic, tbbracket],
    link: 'https://tier-breaker.herokuapp.com/',
    github: 'https://github.com/sschneeberg/tierbreaker_backend'
};

const projectDetails = [TB, PDR, TrackerApp, Fruitris];

export default projectDetails;
