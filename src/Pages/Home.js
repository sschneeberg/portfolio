import Nav from '../Components/Nav';
import AboutMe from '../Components/AboutMe';
import Projects from '../Components/Project';
import Contact from '../Components/Contact';
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
