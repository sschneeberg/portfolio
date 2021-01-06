import fruitrisBubble from './fruitrisMenu.png';
import trackerAppBubble from './trackerLanding.png';

const Fruitris = {
    title: 'Fruitris',
    img: fruitrisBubble,
    description: 'this will be text',
    tags: ['Javascript', 'HTML5', 'CSS3', 'HTML Canvas'],
    altImgs: [],
    link: 'https://sschneeberg.github.io/fruitris',
    github: 'https://github.com/sschneeberg/fruitris'
};
const TrackerApp = {
    title: 'Tracker App',
    img: trackerAppBubble,
    description: 'this will be text',
    tags: ['Node.js', 'Express', 'SQL', 'Sequelize', 'PostgreSQL', 'Passport', 'Javascipt', 'HTML5', 'CSS3'],
    altImgs: [],
    link: 'https://trackerapp.herokuapp.com',
    github: 'https://github.com/sschneeberg/tracker-app'
};
const PDR = {
    title: 'Pest Damage Report',
    img: '',
    description: 'this will be text',
    tags: ['React', 'Express', 'Node.js', 'Socket.io', 'Javascript', 'HTML5', 'CSS3'],
    altImgs: [],
    link: 'https://pestdamagereport.herokuapp.com/',
    github: 'https://github.com/sschneeberg/pdr-frontend'
};

const projectDetails = [PDR, TrackerApp, Fruitris];

export default projectDetails;
