import React, { Component } from 'react';
import ProjectBubble from './ProjectBubble';
import projectDetails from '../Data/projectDetails';
import './css/BubbleSection.css';
import './css/Project.css';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: '', all: '', class: '', grid: '', display: 'display' };
    }

    componentDidMount() {
        let allProjects = {};
        projectDetails.forEach((project) => {
            allProjects[project.title] = {
                img: project.img,
                description: project.description,
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
                <div className="projectHighlight">
                    <div className={this.state.display}>
                        <div className="imgGrid">
                            {this.state.selected.altImgs.map((img, i) => {
                                return <img key={i} src={img} alt={this.state.selected.title} />;
                            })}
                        </div>
                        <p>{this.state.selected.description}</p>
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
                </div>
            );
        }

        return (
            <section>
                <div className={`ProjectDisplay ${this.state.grid}`}>{projects}</div>
                {this.state.selected ? projectHighlight : null}
            </section>
        );
    }
}

export default Project;
