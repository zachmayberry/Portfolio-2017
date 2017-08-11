import React, { Component } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/Slick.css';

import '../components/Screenshot.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

class WeightWatchersSuperBowl extends Component {
  constructor(props) {
    super(props);

    this.state = { imageStatus: 'loading' };
  }

  componentWillLoad() {

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
        <Header main={<div>Super Bowl XLIX</div>} sub={<div>Weight Watchers</div>} imgUrl="/img/wwsuperbowl-slider-1" />

        <section className="container">
          <div className="grid-fifty">
            <h1 className="header__small">About</h1>
            <h2 className="header__large">High-traffic Landing Page</h2>
            <p className="text__basic">Rapidly developed the responsive marketing materials for Weight Watchers' incredible Super Bowl spot.</p>
          </div>

          <div className="grid-fifty">
            <h1 className="header__small">Details</h1>
            <ul className="list__detail">
              <li>Responsive Development</li>
              <li>Worked together 2015</li>
            </ul>
          </div>
        </section>

        <section className="container container__full">
          <Slider {...slickSettings}>
            <div className="screenshot__wrap screenshot__wrap--scrollable">
              <div>
                <img alt="" src="/img/wwsuperbowl-slider-1.png" srcSet="/img/wwsuperbowl-slider-1@2x.png 2x" />
              </div>
            </div>

            <div className="screenshot__wrap screenshot__wrap--scrollable">
              <div>
                <img alt="" src="/img/wwsuperbowl-slider-2.png" srcSet="/img/wwsuperbowl-slider-2@2x.png 2x" />
              </div>
            </div>

            <div className="screenshot__wrap screenshot__wrap--scrollable screenshot__wrap--mobile">
              <div>
                <img alt="" src="/img/wwsuperbowl-slider-3.png" srcSet="/img/wwsuperbowl-slider-3@2x.png 2x" onLoad={this.handleImageLoaded.bind(this)} />
              </div>
            </div>
          </Slider>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">Responsive</h1>
            <h2 className="header__large">Hitting Every Breakpoint</h2>
            <p className="text__basic">While iterating quickly during a rushed schedule, we worked hard to perfectly translate the designs provided by their design agency to launch the new marketing site on time.</p>
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

export default WeightWatchersSuperBowl;
