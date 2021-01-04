import React, { Component } from 'react';
import { statement1, statement2, statement3, statement4 } from '../Data/personalStatement';
import brand from '../Data/brandStatement';
import BubbleSection from './BubbleSection1';
import '../App.css';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: 'hide'
        };
    }

    toggleHide() {
        this.state.hide === 'hide' ? this.setState({ hide: 'animate' }) : this.setState({ hide: 'hide' });
    }

    render() {
        return (
            <section>
                <img src="" alt="Simone Schneeberg Software Engineer" />
                <h2>Simone Schneeberg</h2>
                <h4>Software Developer</h4>
                <p>{brand}</p>
                <button type="button" onClick={() => this.toggleHide()}>
                    Personal Statement
                </button>
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
