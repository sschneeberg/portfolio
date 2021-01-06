import React, { Component } from 'react';
import './css/BubbleSection.css';

class BubbleSection extends Component {
    render() {
        const content = this.props.bullets.map((list, i) => {
            return <li key={i}>{list}</li>;
        });

        const title = this.props.date ? (
            <h3>
                {this.props.title} <span>{this.props.description}</span>
                <span>{this.props.date}</span>
            </h3>
        ) : (
            <h3>{this.props.title}</h3>
        );
        return (
            <div className="Bubble Resume">
                <div>
                    {title}
                    <hr />
                    <ul>{content}</ul>
                </div>
            </div>
        );
    }
}

export default BubbleSection;
