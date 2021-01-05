import { useEffect, useState } from 'react';
import QuickLinks from './QuickLinks';
import './css/Quicklinks.css';
import './css/Nav.css';

function Nav(props) {
    const [hide, setHide] = useState(props.initialState);

    const handleScroll = () => {
        setHide('visible');
        if (window.scrollY === 0 && props.initialState !== 'visible') setHide('hidden');
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="Nav">
            <h4 className="Nav" style={{ visibility: hide }}>
                {props.title}
            </h4>
            <QuickLinks />
        </div>
    );
}

export default Nav;
