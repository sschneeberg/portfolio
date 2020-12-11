import Projects from './Projects';
import { statement1, statement2 } from '../Data/personalStatement';
import brand from '../Data/brandStatement';

function AboutMe() {
    return (
        <>
            <section>
                <p>About: Simone Schneeberg</p>
                <p>{brand}</p>
                <p>{statement1}</p>
                <br />
                <p>{statement2}</p>
            </section>
            <section>
                <Projects />
            </section>
        </>
    );
}

export default AboutMe;
