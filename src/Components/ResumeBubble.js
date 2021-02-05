import React, { Component } from 'react';
import './css/BubbleSection.css';

class BubbleSection extends Component {
    render() {
        console.log(this.props);
        const content2 = this.props.bullets.map((list, i) => {
            return (
                <li key={i}>
                    <i className="fas fa-angle-right fa-sm"></i> {list}
                </li>
            );
        });

        const content = this.props.bullets.map((list, i) => {
            return <li key={i}>{list}</li>;
        });

        const bubble = this.props.date ? (
            <>
                <h4>
                    {this.props.title} <span>{this.props.description}</span>
                    <span style={{ float: 'right' }}>{this.props.date}</span>
                </h4>
                <hr />
                <ul>{content}</ul>
                {this.props.links ? (
                    <div className="proj-links">
                        <a href={this.props.links[1]} target="_blank" rel="noreferrer">
                            View this project on Github
                        </a>
                        <a href={this.props.links[0]} target="_blank" rel="noreferrer">
                            {'Visit the live site '}
                            {this.props.credentials ? (
                                <>
                                    {'('}credentials: {this.props.credentials[0]}, password: {this.props.credentials[1]}
                                    {')'}
                                </>
                            ) : null}
                        </a>
                    </div>
                ) : null}
            </>
        ) : (
            <>
                <h4>{this.props.title}</h4>
                <hr />
                <ul>{content2}</ul>
            </>
        );
        return (
            <div className="Bubble Resume">
                <div>{bubble}</div>
            </div>
        );
    }
}

export default BubbleSection;
