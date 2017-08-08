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
              <img alt="" src={this.props.imgUrl +".jpg"} srcSet={this.props.imgUrl +"@2x.jpg 2x"}/>
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
