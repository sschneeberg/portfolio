import React, { Component } from 'react';
import './css/BubbleSection.css';

class BubbleSection extends Component {
    render() {
        return (
            <div className={`Bubble ${this.props.hide}`} style={{ animationDelay: this.props.delay }}>
                <div>
                    <p className="header">{this.props.header}</p>
                    <p>{this.props.data}</p>
                </div>
            </div>
        );
    }
}

export default BubbleSection;
