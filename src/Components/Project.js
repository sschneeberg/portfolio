import React, { Component } from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import ProjectBubble from './ProjectBubble';
import projectDetails from '../Data/projectDetails';
import './css/BubbleSection.css';
import './css/Project.css';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            all: '',
            class: '',
            grid: '',
            display: 'display'
        };
    }

    componentDidMount() {
        let allProjects = {};
        projectDetails.forEach((project) => {
            allProjects[project.title] = {
                img: project.img,
                description: project.description,
                userstories: project.userstories,
                tags: project.tags,
                altImgs: project.altImgs,
                link: project.link,
                github: project.github,
                title: project.title
            };
        });
        this.setState({ all: allProjects });
    }

    toggleSelected = (title) => {
        //if initial state, then change to show
        //if show, change selected
        //if show and selected, back to initial state
        if (this.state.grid) {
            //in selected mode
            if (this.state.all[title] === this.state.selected) {
                this.setState({ display: 'undisplay', grid: '', class: '' });
                setTimeout(() => {
                    this.setState({ selected: '', display: 'display' });
                }, 1050);
            } else {
                this.setState({ selected: this.state.all[title] });
            }
        } else {
            this.setState({ class: 'thumbnail', selected: this.state.all[title], grid: 'show' });
        }
    };

    render() {
        const projects = projectDetails.map((project, i) => {
            if (project.title === this.state.selected.title) {
                return (
                    <ProjectBubble
                        title={project.title}
                        key={i}
                        img={project.img}
                        tags={project.tags}
                        onClick={this.toggleSelected}
                        class={this.state.class}
                    />
                );
            } else {
                return (
                    <ProjectBubble
                        title={project.title}
                        key={i}
                        img={project.img}
                        tags={project.tags}
                        onClick={this.toggleSelected}
                    />
                );
            }
        });

        let projectHighlight = null;

        if (this.state.selected) {
            projectHighlight = (
                <>
                    <div className={`projectHighlight ${this.state.display}`}>
                        <SimpleReactLightbox>
                            <SRLWrapper>
                                <div className="imgGrid">
                                    {this.state.selected.altImgs.map((img, i) => {
                                        return (
                                            <a key={i} href={img}>
                                                <img src={img} alt={this.state.selected.title} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </SRLWrapper>
                        </SimpleReactLightbox>

                        <div className="projectInfo">
                            <div className="projectLinks">
                                <a href={this.state.selected.github} target="_blank" rel="noreferrer">
                                    <i className="fab fa-github fa-lg"></i>
                                </a>
                                <a href={this.state.selected.link} target="_blank" rel="noreferrer">
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                            <div className="projectText">
                                <p className="projectDescription">{this.state.selected.description}</p>
                                <p className="userStories">{this.state.selected.userstories}</p>
                            </div>
                        </div>

                        <div className="tags">
                            {this.state.selected.tags.map((tag, i) => {
                                return (
                                    <p key={i} className="tag">
                                        {tag.toUpperCase()}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </>
            );
        }

        return (
            <section className="ProjectSection" style={{ backgroundColor: 'rgb(224, 237, 238)' }}>
                <h2>PROJECTS</h2>
                <div className={`ProjectDisplay ${this.state.grid}`}>{projects}</div>
                {this.state.selected ? projectHighlight : null}
            </section>
        );
    }
}

export default Project;
