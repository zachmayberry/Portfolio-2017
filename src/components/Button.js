import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <div>
        <a className="button" href={this.props.href} id={this.props.id}>{this.props.text}</a>
      </div>
    );
  }
}

export default Button;
