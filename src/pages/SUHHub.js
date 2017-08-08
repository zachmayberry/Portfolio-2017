import React, { Component } from 'react';

import classnames from 'classnames';

import Cocoen from 'cocoen';
import 'cocoen/dist/css/cocoen.min.css';
import '../components/Cocoen.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/Slick.css';

import '../components/Screenshot.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

class SUHHub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cocoenIsLoaded: false
    };
  }

  componentDidMount() {
    var that = this;
    setTimeout(function() {
      var cocoenEl = document.querySelector('.cocoen');
      new Cocoen(cocoenEl);
      that.setState({ cocoenIsLoaded: true });
    }, 200);
  }

  render() {
    var cocoenClass = classnames('cocoen', {
      'cocoen__state--loaded': this.state.cocoenIsLoaded,
      'cocoen__state--unloaded': !this.state.cocoenIsLoaded
    });

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
        <Header main={<div>Designing a Learning &amp; Communication Platform</div>} sub={<div>StartUp Health Hub</div>} imgUrl="/img/suhhub-top-screenshot" />

        <section className="container">
          <div className="grid-fifty">
            <h1 className="header__small">About</h1>
            <h2 className="header__large">Tools for Teaching Entrepreneurs</h2>
            <p className="text__basic">I worked with StartUp Health to design their Hub to teach health-focused entrepreneurs, investors, and advisors the ins-and-outs of the health-tech industry.</p>
          </div>

          <div className="grid-fifty">
            <h1 className="header__small">Details</h1>
            <ul className="list__detail">
              <li>UX Design</li>
              <li>Worked together 2012 - 2017</li>
            </ul>
          </div>
        </section>

        <br />

        <section className="container">
          <div className="screenshot__wrap">
            <div className={cocoenClass}>
              <img alt="" src="/img/suhhub-comparison-overview.png" srcSet="/img/suhhub-comparison-overview@2x.png 2x" />
              <img alt="" src="/img/suhhub-comparison-detail.png" srcSet="/img/suhhub-comparison-detail@2x.png 2x" />
            </div>
          </div>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">Overview &amp; Detail</h1>
            <h2 className="header__large">Understanding Mindset</h2>
            <p className="text__basic">The goal of the main dashboard was to communicate both StartUp Health's mindset philosophy as well as allowing the entrepreneur to track their progress as they improved their own mindset.</p>
          </div>
        </section>

        <section className="container">
          <div className="screenshot__wrap screenshot__wrap--teal screenshot__wrap--scrollable">
            <img alt="" src="/img/suhhub-top-screenshot.png" srcSet="/img/suhhub-top-screenshot@2x.png 2x" />
          </div>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">Features</h1>
            <h2 className="header__large">Building a News Feed</h2>
            <p className="text__basic">The next step was to build a platform for entrepreneurs to keep up-to-date on upcoming events, updates to their network profiles, all while encouraging each other to become more involved in the community.</p>
          </div>
        </section>

        <section className="container container__full">
          <Slider {...slickSettings}>
            <div className="screenshot__wrap screenshot__wrap--yellow">
              <img alt="" src="/img/suhhub-slider-1.png" srcSet="/img/suhhub-slider-1@2x.png 2x" />
            </div>

            <div className="screenshot__wrap screenshot__wrap--blue">
              <img alt="" src="/img/suhhub-slider-2.png" srcSet="/img/suhhub-slider-2@2x.png 2x" />
            </div>

            <div className="screenshot__wrap screenshot__wrap--green">
              <img alt="" src="/img/suhhub-slider-3.png" srcSet="/img/suhhub-slider-3@2x.png 2x" />
            </div>
          </Slider>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">Supporting Features</h1>
            <h2 className="header__large">Network &amp; Resources</h2>
            <p className="text__basic">Finally, the Hub is only complete when it enables a pathway to discover and learn about other entrepreneurs, investors, and advisors in the community. Each has a series of steps that must be complete before access to given.</p>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default SUHHub;
