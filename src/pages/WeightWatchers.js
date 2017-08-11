import React, { Component } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/Slick.css';

import '../components/Screenshot.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

class WeightWatchers extends Component {
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
        <Header main={<div>Driving Sign Ups</div>} sub={<div>Weight Watchers</div>} imgUrl="/img/ww-slider-1" />

        <section className="container">
          <div className="grid-fifty">
            <h1 className="header__small">About</h1>
            <h2 className="header__large">You've Come to the Right Place</h2>
            <p className="text__basic">I worked directly with Weight Watchers' design agency to produce a new reponsive homepage for their latest offers and products.</p>
          </div>

          <div className="grid-fifty">
            <h1 className="header__small">Details</h1>
            <ul className="list__detail">
              <li>Responsive Development</li>
              <li>Worked together 2015</li>
            </ul>
          </div>
        </section>

        <section className="container">
          <div className="screenshot__wrap screenshot__wrap--blue screenshot__wrap--scrollable">
            <div>
              <img alt="" src="/img/ww-slider-3.png" srcSet="/img/ww-slider-3@2x.png 2x" />
            </div>
          </div>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">Program Details</h1>
            <h2 className="header__large">What Can I Eat?</h2>
            <p className="text__basic">The main purpose of this redesign phase, was to give the user an idea of what the program would be like for them once they've started.</p>
          </div>
        </section>

        <section className="container container__full">
          <Slider {...slickSettings}>
            <div className="screenshot__wrap screenshot__wrap--scrollable">
              <div>
                <img alt="" src="/img/ww-slider-1.png" srcSet="/img/ww-slider-1@2x.png 2x" />
              </div>
            </div>

            <div className="screenshot__wrap screenshot__wrap--scrollable">
              <div>
                <img alt="" src="/img/ww-slider-2.png" srcSet="/img/ww-slider-2@2x.png 2x" />
              </div>
            </div>

            <div className="screenshot__wrap screenshot__wrap--scrollable">
              <div>
                <img alt="" src="/img/ww-slider-3.png" srcSet="/img/ww-slider-3@2x.png 2x" />
              </div>
            </div>

            <div className="screenshot__wrap screenshot__wrap--scrollable screenshot__wrap--mobile">
              <div>
                <img alt="" src="/img/ww-slider-4.png" srcSet="/img/ww-slider-4@2x.png 2x" />
              </div>
            </div>

            <div className="screenshot__wrap screenshot__wrap--scrollable screenshot__wrap--mobile">
              <div>
                <img alt="" src="/img/ww-slider-5.png" srcSet="/img/ww-slider-5@2x.png 2x" onLoad={this.handleImageLoaded.bind(this)} />
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
    var that = this;
    setTimeout(function() {
      that.setState({ imageStatus: 'loaded' });
    }, 500);
  }
}

export default WeightWatchers;
