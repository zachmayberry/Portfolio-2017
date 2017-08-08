import React, { Component } from 'react';
import './Header.css';

import { Parallax, Background } from 'react-parallax';

class Header extends Component {
  render() {
    let parallax =
      <div style={{
        height: 300,
      }}></div>

    if (this.props.imgUrl) {
      parallax =
          <Parallax strength={300}>
            <Background>
              <picture>
                <source src={this.props.imgUrl +".webp"} srcSet={this.props.imgUrl +"@2x.webp 2x"} type="image/webp"/>
                <source src={this.props.imgUrl +".jpg"} srcSet={this.props.imgUrl +"@2x.jpg 2x"} type="image/jpeg"/>
                <img alt="" src={this.props.imgUrl +".jpg"} srcSet={this.props.imgUrl +"@2x.jgg 2x"}/>
              </picture>
              <div style={{
                 height: 800,
                }}></div>
            </Background>
          </Parallax>
    }

    return (
      <header>
        <h1>{this.props.main}</h1>
        <h2>{this.props.sub}</h2>
        {parallax}
      </header>
    );
  }
}

export default Header;
