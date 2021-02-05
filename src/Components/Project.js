import React, { Component } from 'react';
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
            display: 'display',
            next: 0
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

    next = () => {
        const next = (this.state.next + 1) % this.state.selected.altImgs.length;
        this.setState({ next });
    };

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
                this.setState({ selected: this.state.all[title], next: 0 });
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
                        <div className="tags">
                            {this.state.selected.tags.map((tag, i) => {
                                return (
                                    <p key={i} className="tag">
                                        {tag.toUpperCase()}
                                    </p>
                                );
                            })}
                        </div>

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
                                <div className="alt-links">
                                    <a href={this.state.selected.github} target="_blank" rel="noreferrer">
                                        View this project on Github
                                    </a>
                                    <a href={this.state.selected.link} target="_blank" rel="noreferrer">
                                        Visit the live site
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p style={{ textAlign: 'center', color: '#b5b5b5' }}>
                            Please use the arrows to navigate project images. Click a different project name to view it,
                            or click the same project title to close this section.
                        </p>
                        <div className="imgGrid">
                            <i
                                title="Previous Image"
                                onClick={() => this.next()}
                                className="slide fas fa-chevron-left fa-5x"></i>
                            <img src={this.state.selected.altImgs[this.state.next]} alt={this.state.selected.title} />
                            <i
                                title="Next Image"
                                onClick={() => this.next()}
                                className="slide fas fa-chevron-right fa-5x"></i>
                        </div>
                    </div>
                </>
            );
        }

        return (
            <section className="ProjectSection" style={{ backgroundColor: 'rgba(182, 221, 211, 0.534)' }}>
                <h2>PROJECTS</h2>
                <div className={`ProjectDisplay ${this.state.grid}`}>{projects}</div>
                {this.state.selected ? projectHighlight : null}
            </section>
        );
    }
}

export default Project;
