import Nav from './Nav';
import AboutMe from './AboutMe';
import Projects from './Project';
import Contact from './Contact';
import '../App.css';

function Home() {
    return (
        <>
            <Nav title={'SIMONE SCHNEEBERG'} initialState={'hidden'} />
            <AboutMe />
            <Projects />
            <Contact />
        </>
    );
}

export default Home;
