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
              <img alt="" src="/img/suhmarketing-top-screenshot.png" srcSet="/img/suhmarketing-top-screenshot@2x.png 2x" />
            </div>
          </div>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">Academy</h1>
            <h2 className="header__large">The Sum is Greater than...</h2>
            <p className="text__basic">The real challenge we faced involved communicating all that the Academy was into a single page without talking ourselves in circles. Clear calls-to-action following each section were key for increasing sign ups.</p>
          </div>
        </section>

        <section className="container container__full">
          <Slider {...slickSettings}>
            <div className="screenshot__wrap screenshot__wrap--yellow">
              <img alt="" src="/img/suhmarketing-slider-1.png" srcSet="/img/suhmarketing-slider-1@2x.png 2x" />
            </div>

            <div className="screenshot__wrap screenshot__wrap--blue">
              <img alt="" src="/img/suhmarketing-slider-2.png" srcSet="/img/suhmarketing-slider-2@2x.png 2x" />
            </div>

            <div className="screenshot__wrap screenshot__wrap--green">
              <img alt="" src="/img/suhmarketing-slider-3.png" srcSet="/img/suhmarketing-slider-3@2x.png 2x" onLoad={this.handleImageLoaded.bind(this)} />
            </div>
          </Slider>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">User Flow</h1>
            <h2 className="header__large">Sign Up &amp; Log In</h2>
            <p className="text__basic">Lots of care was put into developing a pain-free experience for new and returning users. Duplicate log ins plague many systems and a clear user flow generally goes a long way toward resolving that problem before it becomes another in a long line of support emails.</p>
          </div>
        </section>

        <section className="container">
          <div className="grid-forty">
            <div className="screenshot__wrap screenshot__wrap--scrollable">
              <div>
                <img alt="" src="/img/suhmarketing-mobile-screenshot.png" srcSet="/img/suhmarketing-mobile-screenshot@2x.png 2x" />
              </div>
            </div>
          </div>

          <div className="grid-sixty">
            <div className="screenshot__caption">
              <h1 className="header__small">Responsive</h1>
              <h2 className="header__large">Of course, it’s responsive</h2>
              <p className="text__basic">Great care is taken to develop not mobile-first (<a href="https://blog.prototypr.io/mobile-first-desktop-worst-f900909ae9e2">desktop-worst</a>), but to address each individually on their own terms. This can mean more work, but the end result of putting function first and allowing form to follow always leads to a better result.</p>
            </div>
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

export default SUHMarketing;
