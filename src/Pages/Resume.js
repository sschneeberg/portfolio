import BubbleSection from '../Components/ResumeBubble';
import { Projects, Jobs, Education, Skills } from '../Data/resume';
import '../Components/css/Resume.css';
import Nav from '../Components/Nav';
import pdf from '../Data/SimoneSchneebergResume.pdf';

function Resume() {
    const projectElements = Projects.map((project, i) => {
        return (
            <BubbleSection
                key={i}
                title={project.title}
                date={project.date}
                bullets={project.bullets}
                description={project.description}
                links={project.links}
                credentials={project.credentials}
            />
        );
    });
    const workElements = Jobs.map((job, i) => {
        return (
            <BubbleSection
                key={i}
                title={job.title}
                date={job.date}
                bullets={job.bullets}
                description={job.description}
            />
        );
    });
    const eduElements = Education.map((school, i) => {
        return (
            <BubbleSection
                key={i}
                title={school.title}
                date={school.date}
                bullets={school.bullets}
                description={school.description}
            />
        );
    });
    const skillElements = Skills.map((skill, i) => {
        return <BubbleSection key={i} title={skill.title} bullets={skill.bullets} />;
    });

    return (
        <>
            <Nav title={'RESUME'} initialState={'visible'} />
            <main>
                <div className="skills">
                    <h2>SKILLS</h2>
                    <div className="skillsGrid">{skillElements}</div>
                    <a className="download" href={pdf} target="_blank" rel="noreferrer">
                        DOWNLOAD RESUME
                    </a>
                </div>
                <div>
                    <h2>RECENT PROJECTS</h2>
                    {projectElements}
                    <h2>WORK EXPERIENCE</h2>
                    {workElements}
                    <h2>EDUCATION</h2>
                    {eduElements}
                </div>
            </main>
        </>
    );
}

export default Resume;
