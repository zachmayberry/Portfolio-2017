import React, { Component } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/Slick.css';

import '../components/Screenshot.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

class SUHMarketing extends Component {
  constructor(props) {
    super(props);

    this.state = { imageStatus: 'loading' };
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
        <Header main={<div>Driving Academy Applications</div>} sub={<div>StartUp Health Marketing</div>} imgUrl="/img/suhmarketing-top-screenshot" />

        <section className="container">
          <div className="grid-fifty">
            <h1 className="header__small">About</h1>
            <h2 className="header__large">Communicating the message</h2>
            <p className="text__basic">As the business mindset changes, the marketing site must keep up and stay on message.</p>
          </div>

          <div className="grid-fifty">
            <h1 className="header__small">Details</h1>
            <ul className="list__detail">
              <li>UX Design & Front-end Development</li>
              <li>Worked together 2012 - 2017</li>
            </ul>
          </div>
        </section>

        <section className="container">
          <div className="screenshot__wrap screenshot__wrap--teal screenshot__wrap--scrollable">
            <div>
              <img alt="" src="/img/suhmarketing-top-screenshot.jpg" srcSet="/img/suhmarketing-top-screenshot@2x.jpg 2x" />
            </div>
          </div>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">Features</h1>
            <h2 className="header__large">Building a builder</h2>
            <p className="text__basic">The next step was to enable users to build custom views into their data that allowed them to present themselves better to each audience. For example: funding data for potential Investors.</p>
          </div>
        </section>

        <section className="container container__full">
          <Slider {...slickSettings}>
            <div className="screenshot__wrap screenshot__wrap--yellow">
              <img alt="" src="/img/suhmarketing-slider-1.jpg" srcSet="/img/suhmarketing-slider-1@2x.jpg 2x" />
            </div>

            <div className="screenshot__wrap screenshot__wrap--blue">
              <img alt="" src="/img/suhmarketing-slider-2.jpg" srcSet="/img/suhmarketing-slider-2@2x.jpg 2x" />
            </div>

            <div className="screenshot__wrap screenshot__wrap--green">
              <img alt="" src="/img/suhmarketing-slider-3.jpg" srcSet="/img/suhmarketing-slider-3@2x.jpg 2x" onLoad={this.handleImageLoaded.bind(this)} />
            </div>
          </Slider>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">Customization</h1>
            <h2 className="header__large">Unique to each company</h2>
            <p className="text__basic">The next step was to enable users to build custom views into their data that allowed them to present themselves better to each audience. For example: funding data for potential Investors.</p>
          </div>
        </section>

        <section className="container">
          <div className="grid-fifty">
            <div className="screenshot__wrap screenshot__wrap--scrollable">
              <div>
                <img alt="" src="/img/suhmarketing-mobile-screenshot.jpg" srcSet="/img/suhmarketing-mobile-screenshot@2x.jpg 2x" />
              </div>
            </div>
          </div>

          <div className="grid-fifty">
            <div className="screenshot__caption">
              <h1 className="header__small">Responsive</h1>
              <h2 className="header__large">Of course, it’s responsive</h2>
              <p className="text__basic">The next step was to enable users to build custom views into their data that allowed them to present themselves better to each audience. For example: funding data for potential Investors.</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }
}

export default SUHMarketing;
