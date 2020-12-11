import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Nav from './Components/Nav';
import AboutMe from './Components/About Me';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <Route path="/" exact component={AboutMe} />
                <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
                {/* gotta find the right one and pass it in, probably have to lift up state again */}
                <Route path="/project/:name" component={Contact} />
            </div>
        </BrowserRouter>
    );
}

export default App;
