import React, { Component } from 'react';

class BubbleSection extends Component {
    render() {
        return (
            <>
                {this.props.class ? (
                    <div
                        style={{ textAlign: 'center' }}
                        className={`Bubble ${this.props.class} Project`}
                        onClick={() => this.props.onClick(this.props.title)}>
                        <h4>{this.props.title.toUpperCase()}</h4>
                    </div>
                ) : (
                    <div className="Bubble Project" onClick={() => this.props.onClick(this.props.title)}>
                        <img src={this.props.img} alt={this.props.title} />
                    </div>
                )}
            </>
        );
    }
}

export default BubbleSection;
