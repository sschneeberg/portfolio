import React, { Component } from 'react';

class BubbleSection extends Component {
    render() {
        return (
            <>
                {this.props.class ? (
                    <div className={`Bubble ${this.props.class}`} onClick={() => this.props.onClick(this.props.title)}>
                        <img src={this.props.img} alt={this.props.title} />
                        <h3>{this.props.title}</h3>
                    </div>
                ) : (
                    <div className="Bubble" onClick={() => this.props.onClick(this.props.title)}>
                        <img src={this.props.img} alt={this.props.title} />
                    </div>
                )}
            </>
        );
    }
}

export default BubbleSection;
