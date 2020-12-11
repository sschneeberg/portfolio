import { Link } from 'react-router-dom';

function ProjectDisp(props) {
    return (
        <div className="project">
            <Link to={`/projects/${props.img.linkname}`}>
                <img src={props.img.url} alt="IMAGE GOES HERE" />
            </Link>
            <Link to={`/projects/${props.img.linkname}`}>
                {props.img.title}
            </Link>
        </div>
    );
}

export default ProjectDisp;
