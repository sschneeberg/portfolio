import React, { Component } from 'react';
import { statement1, statement2, statement3, statement4 } from '../Data/personalStatement';
import brand from '../Data/brandStatement';
import BubbleSection from './TextBubble';
import '../App.css';
import aboutMeImg from '../Data/aboutme.png';

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
        return (
            <section>
                <img className="aboutMe" src={aboutMeImg} alt="Simone Schneeberg Software Engineer" />
                <div className="AboutMe">
                    <h2>SIMONE SCHNEEBERG</h2>
                    <div>
                        <h4 style={{ color: 'rgb(107, 107, 107)' }}>
                            <em>Software Engineer</em>
                        </h4>
                        <p>{brand}</p>
                    </div>
                    <button type="button" onClick={() => this.toggleHide()}>
                        Personal Statement
                    </button>
                </div>
                <div className="statementGrid">
                    <BubbleSection data={statement1} hide={this.state.hide} delay="0" />
                    <BubbleSection data={statement2} hide={this.state.hide} delay="0.5s" />
                    <BubbleSection data={statement3} hide={this.state.hide} delay="1s" />
                    <BubbleSection data={statement4} hide={this.state.hide} delay="1.5s" />
                </div>
            </section>
        );
    }
}

export default AboutMe;
