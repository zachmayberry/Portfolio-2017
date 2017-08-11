import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import { Parallax, Background } from 'react-parallax';

class Header extends Component {
  render() {
    let parallax =
      <div style={{
        height: 200,
      }}></div>

    if (this.props.imgUrl) {
      parallax =
          <Parallax strength={300}>
            <Background>
              <img alt="" src={this.props.imgUrl +".png"} srcSet={this.props.imgUrl +"@2x.png 2x"}/>
              <div style={{
                 height: 800,
                }}></div>
            </Background>
          </Parallax>
    }

    return (
      <header>
        <div className="container">
          <Link to="/" id="back-to-home"><img alt="" src="/img/back-arrow.svg" /> Back</Link>
          <h1>{this.props.main}</h1>
          <h2>{this.props.sub}</h2>
        </div>
        {parallax}
      </header>
    );
  }
}

export default Header;
