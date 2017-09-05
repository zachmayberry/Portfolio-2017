import React, { Component } from 'react';
import classnames from 'classnames';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/Slick.css';

import '../components/Screenshot.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

class Heap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageStatus: 'loading'
    };
  }

  render() {
    var slickSettings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true
    };

    return (
      <div>
        <Header main={<div>Organize Tasks Your Way</div>} sub={<div>Heap for Mac</div>} imgUrl="/img/heap-slider-2@2x" />

        <section className="container">
          <div className="grid-fifty">
            <h1 className="header__small">About</h1>
            <h2 className="header__large">Bringing it all together.</h2>
            <p className="text__basic">Heap aims to enable you to merge together the variety of project management systems out there to have one place to manage tasks assigned to you. Currently working to support Basecamp, Trello, Github Projects, and Asana.</p>
          </div>

          <div className="grid-fifty">
            <h1 className="header__small">Details</h1>
            <ul className="list__detail">
              <li>UX Design & Front-end Development</li>
              <li>Sketch, Invision, Electron, React, Meteor</li>
              <li>In Progress</li>
            </ul>
          </div>
        </section>

        <br />

        <section className="container">
          <div className="screenshot__wrap screenshot__wrap--green">
            <img alt="" src="/img/heap-slider-3.png" srcSet="/img/heap-slider-3@2x.png 2x" />
          </div>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">Features</h1>
            <h2 className="header__large">Organize Yourself</h2>
            <p className="text__basic">Each service can be integrated into your own <em>read-only</em> list. This enables you to organize your own tasks without touching the original tasks or lists in Basecamp, Trello, etc. No need to live by the organization styles of others.</p>
          </div>
        </section>

        <section className="container container__full">
          <Slider {...slickSettings}>
            <div className="screenshot__wrap screenshot__wrap--yellow">
              <img alt="" src="/img/heap-slider-1.png" srcSet="/img/heap-slider-1@2x.png 2x" />
            </div>

            <div className="screenshot__wrap screenshot__wrap--blue">
              <img alt="" src="/img/heap-slider-3.png" srcSet="/img/heap-slider-3@2x.png 2x" />
            </div>

            <div className="screenshot__wrap screenshot__wrap--green">
              <img alt="" src="/img/heap-slider-4.png" srcSet="/img/heap-slider-4@2x.png 2x" onLoad={this.handleImageLoaded.bind(this)} />
            </div>
          </Slider>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">Customization</h1>
            <h2 className="header__large">Defining the User's Journey</h2>
            <p className="text__basic">For the initial MVP, the product has been kept to a minimum number of screens a functionality to determine whether the overall concept is useful on a daily basis.</p>
          </div>
        </section>

        <section className="container">
          <div className="screenshot__wrap">
            <img alt="" src="/img/heap-components-screenshot.png" srcSet="/img/heap-components-screenshot@2x.png 2x" />
          </div>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">Design System</h1>
            <h2 className="header__large">Consistent UI Components</h2>
            <p className="text__basic">The next step was to build a design system that could scale to fill all needs of the overall user flow. Because this is an Electron desktop app, it's able to take advantage of beautiful modals for most interactions.</p>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  handleImageLoaded() {
    var that = this;
    setTimeout(function() {
      that.setState({ imageStatus: 'loaded' });
    }, 500);
  }
}

export default Heap;
