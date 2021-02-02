import React, { Component } from 'react';
import { statement1, statement2, statement3, statement4 } from '../Data/personalStatement';
import brand from '../Data/brandStatement';
import BubbleSection from './TextBubble';
import aboutMeImg from '../Data/aboutme.png';
import testimonials from '../Data/testimonials';
import '../App.css';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: 'hide'
        };
    }

    toggleHide() {
        this.state.hide === 'hide' ? this.setState({ hide: 'animate' }) : this.deanimate();
    }

    deanimate = () => {
        this.setState({ hide: 'deanimate' });
        setTimeout(() => {
            this.setState({ hide: 'hide' });
        }, 3050);
    };

    render() {
        const refs = testimonials.map((ref, i) => {
            return (
                <div className="testimonial" key={i}>
                    <p>{ref.msg}</p>
                    <p className="testimonialName">
                        - {ref.name} <span>{ref.title}</span>
                    </p>
                </div>
            );
        });

        return (
            <section>
                <div className="aboutme-header">
                    <img className="aboutMe" src={aboutMeImg} alt="Simone Schneeberg Software Engineer" />

                    <div className="AboutMe">
                        <h2>SIMONE SCHNEEBERG</h2>
                        <div>
                            <h4 style={{ color: 'rgb(107, 107, 107)' }}>
                                <em>Software Engineer</em>
                            </h4>
                            <p className="brand">{brand}</p>
                        </div>
                        <button type="button" onClick={() => this.toggleHide()}>
                            Personal Statement
                        </button>
                    </div>
                </div>
                <div className="statementGrid">
                    <BubbleSection data={statement1} hide={this.state.hide} delay="0" />
                    <BubbleSection data={statement2} hide={this.state.hide} delay="0.5s" />
                    <BubbleSection data={statement3} hide={this.state.hide} delay="1s" />
                    <BubbleSection data={statement4} hide={this.state.hide} delay="1.5s" />
                </div>
                <div className="testimonials">{refs}</div>
            </section>
        );
    }
}

export default AboutMe;
