import Projects from './Projects';
import { statement1, statement2 } from '../Data/personalStatement';
import brand from '../Data/brandStatement';
import QuickLinks from './QuickLinks';

const projectDetails = [
    {
        name: 'example project',
        url: '',
        linkname: 'example-project',
        tags: [],
        description: ''
    }
];

function AboutMe() {
    return (
        <>
            <section>
                <p>About: Simone Schneeberg</p>
                <QuickLinks />
                <p>{brand}</p>
                {/* Have these statements be collapsible so only brand always shows*/}
                <p>{statement1}</p>
                <br />
                <p>{statement2}</p>
            </section>
            <section>
                <Projects imgs={projectDetails} />
            </section>
        </>
    );
}

export default AboutMe;
