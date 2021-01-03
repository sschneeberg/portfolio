import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Contact from './Components/Contact';
import Resume from './Pages/Resume';
import Nav from './Components/Nav';
import AboutMe from './Components/AboutMe';
import Projects from './Pages/Projects';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <AboutMe />
                <Projects />
                <Contact />
                <Route path="/" exact component={AboutMe} />
                <Route path="/resume" component={Resume} />
            </div>
        </BrowserRouter>
    );
}

export default App;
