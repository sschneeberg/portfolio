import { Link } from 'react-router-dom';
import './css/Quicklinks.css';

function QuickLinks(props) {
    return (
        <div className="QuickLinks">
            {props.title === 'RESUME' ? (
                <Link to="/" rel="noreferrer">
                    <i className="fas fa-home fa-lg"></i>
                </Link>
            ) : null}
            <a href="https://www.linkedin.com/in/simone-schneeberg/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
            <a href="https://github.com/sschneeberg" target="_blank" rel="noreferrer">
                <i className="fab fa-github fa-lg"></i>
            </a>
            {props.title !== 'RESUME' ? (
                <Link to="/resume" target="_blank" rel="noreferrer">
                    <i className="far fa-file-alt fa-lg"></i>
                </Link>
            ) : null}
        </div>
    );
}

export default QuickLinks;
