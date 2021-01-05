import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Resume from './Pages/Resume';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path="/" exact component={Home} />
                <Route path="/resume" exact component={Resume} />
            </div>
        </BrowserRouter>
    );
}

export default App;
