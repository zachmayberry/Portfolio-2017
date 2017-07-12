import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Projects from './components/Projects';

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default Wrapper;
