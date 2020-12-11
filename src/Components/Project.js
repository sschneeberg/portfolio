function Project(props) {
    return (
        <div>
            <img src={props.img.url} alt="IMAGE GOES HERE" />
            <h3>{props.img.title}</h3>
            <p>{props.img.blurb}</p>
            <div>{props.img.tags}</div>
        </div>
    );
}

export default Project;
