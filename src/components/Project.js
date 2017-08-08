import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

import Shape from './Shape.js';

class Project extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {expanded: false};

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  render() {
    const expanded = this.state.expanded;
    const shapeList = this.createShapeList();
    const imageList = this.createImageList();

    let classList = 'project';
    if (expanded) {
      classList = 'project expanded';
    }

    return (
      <li key={this.props.id} className={classList}>
        <Link to={this.props.url}>
          <div className="shapes">
            {shapeList}
            {imageList}
          </div>
          <h1>{this.props.name}</h1>
          <h2>{this.props.type}</h2>
        </Link>
      </li>
    );
  }

  createShapeList() {
    return this.props.shapes.map((shape) =>
      <Shape type={shape.type} location={shape.location} width={shape.width} height={shape.height} definition={shape.definition} rotation={shape.rotation} fill={shape.fill} id={shape.id} key={shape.id} />
    );
  }

  createImageList() {
    return this.props.images.map((image) =>
      <picture alt="" key={image.name + image.width} className={image.location}>
        <source src={"/img/" + image.name + ".webp"} srcSet={"/img/" + image.name + "@2x.webp 2x"} type="image/webp" width={image.width}/>
        <source src={"/img/" + image.name + ".jpg"} srcSet={"/img/" + image.name + "@2x.jpg 2x"} type="image/jpeg" width={image.width}/>
        <img alt="" src={"/img/" + image.name + ".jpg"} srcSet={"/img/" + image.name + "@2x.jpg 2x"} width={image.width}/>
      </picture>
    );
  }

  onClickHandler() {
    if (this.state.expanded) {
      this.setState({expanded: false});
      this.refs.shape.deflate();
      document.querySelector('#projects').classList.remove('hideAllProjects');
    } else {
      this.setState({expanded: true});
      this.refs.shape.expand();
      document.querySelector('#projects').classList.add('hideAllProjects');
    }
  }
}

export default Project;
