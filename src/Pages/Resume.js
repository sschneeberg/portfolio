import BubbleSection from '../Components/BubbleSection2';
import { Projects, Jobs, Education, Skills } from '../Data/resume';
import '../Components/css/Resume.css';

function Resume() {
    const projectElements = Projects.map((project, i) => {
        return (
            <BubbleSection
                key={i}
                title={project.title}
                date={project.date}
                bullets={project.bullets}
                description={project.description}
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
            <h2>Resume</h2>
            <main>
                <aside>
                    <h2>SKILLS</h2>
                    {skillElements}
                </aside>
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
