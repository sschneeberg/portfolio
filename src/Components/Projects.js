import ProjectDisp from './ProjectDisp';

function Projects(props) {
    const projects = props.imgs.map((img) => {
        return <ProjectDisp img={img} />;
    });
    return (
        <>
            <p>Projects page</p>
            {projects}
        </>
    );
}

export default Projects;
