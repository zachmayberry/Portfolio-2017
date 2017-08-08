import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Projects from './components/Projects';

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header main={<div>I sit at the intersection of <span>design</span> and <span>code</span></div>} sub={<div><span>&amp;</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m looking to partner with companies for the long term</div>} />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default Wrapper;
