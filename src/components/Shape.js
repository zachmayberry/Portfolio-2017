import React, { Component } from 'react';
import SVG from 'svg.js';

class Shape extends Component {
  constructor(props, context) {
    super(props, context);

    this.expand = this.expand.bind(this);
  }

  componentDidMount() {
    this.draw = SVG(this.props.id).size(this.props.width, this.props.height);

    switch (this.props.type) {
      case 'rect':
        this.shape = this.draw.rect(this.props.width, this.props.height).attr({ fill: this.props.fill, rx: '1', ry: '1' });
        break;
      case 'triangle':
        this.shape = this.draw.polygon(this.props.definition).attr({ fill: this.props.fill });
        break;
      case 'circle':
        this.shape = this.draw.circle(this.props.width).attr({ fill: this.props.fill,});
        break;
        case 'polygon':
          this.shape = this.draw
          .path(this.props.definition)
          .attr({ fill: this.props.fill})
          .stroke({ color: this.props.fill, width: 3})
          .transform({ rotation: this.props.rotation });
          break;
        default:
        break;
      }
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.location} />
    );
  }

  expand() {
    this.draw.animate().size(window.innerWidth, window.innerHeight);
    this.shape.animate().size(window.innerWidth*2, window.innerHeight*2);
  }

  deflate() {
    this.draw.animate().size(this.props.size, this.props.size);
    this.shape.animate().size(this.props.size, this.props.size);
  }
}

export default Shape;
