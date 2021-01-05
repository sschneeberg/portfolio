import { Link } from 'react-router-dom';
import './css/Quicklinks.css';

function QuickLinks() {
    return (
        <div className="QuickLinks">
            <a href="https://www.linkedin.com/in/simone-schneeberg/" target="_blank" rel="noreferrer">
                <i class="fab fa-linkedin-in fa-lg"></i>
            </a>
            <a href="https://github.com/sschneeberg" target="_blank" rel="noreferrer">
                <i class="fab fa-github fa-lg"></i>
            </a>
            <Link to="/resume" target="_blank" rel="noreferrer">
                <i class="far fa-file-alt fa-lg"></i>
            </Link>
        </div>
    );
}

export default QuickLinks;
