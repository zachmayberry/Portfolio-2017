import React, { Component } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/Slick.css';

import '../components/Screenshot.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

class FrescoiPhone extends Component {
  constructor(props) {
    super(props);

    this.state = { imageStatus: 'loading' };
  }

  render() {
    var slickSettings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true
    };

    return (
      <div>
        <Header main={<div>The World Needs Your Camera</div>} sub={<div>Fresco News for iPhone</div>} imgUrl="/img/frescoiphone-slider-1" />

        <section className="container">
          <div className="grid-fifty">
            <h1 className="header__small">About</h1>
            <h2 className="header__large">Being Part of the News</h2>
            <p className="text__basic">I worked directly with the designers to implement the interface detailed in their Zeplin files to produce a consistent experience across the product.</p>
          </div>

          <div className="grid-fifty">
            <h1 className="header__small">Details</h1>
            <ul className="list__detail">
              <li>Interface Builder</li>
              <li>Worked together 2015</li>
            </ul>
          </div>
        </section>

        <section className="container container__full">
          <Slider {...slickSettings}>
            <div className="screenshot__wrap screenshot__wrap--mobile">
              <img alt="" src="/img/frescoiphone-slider-1.jpg" />
            </div>

            <div className="screenshot__wrap screenshot__wrap--mobile">
              <img alt="" src="/img/frescoiphone-slider-2.jpg" />
            </div>

            <div className="screenshot__wrap screenshot__wrap--mobile">
              <img alt="" src="/img/frescoiphone-slider-3.jpg" />
            </div>

            <div className="screenshot__wrap screenshot__wrap--mobile">
              <img alt="" src="/img/frescoiphone-slider-4.jpg" />
            </div>

            <div className="screenshot__wrap screenshot__wrap--mobile">
              <img alt="" src="/img/frescoiphone-slider-5.jpg" />
            </div>

            <div className="screenshot__wrap screenshot__wrap--mobile">
              <img alt="" src="/img/frescoiphone-slider-6.jpg" onLoad={this.handleImageLoaded.bind(this)} />
            </div>
          </Slider>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">Interface</h1>
            <h2 className="header__large">Pixel Perfection</h2>
            <p className="text__basic">Every pixel was painstakingly cared after during the process of translating from the provided Zeplin assets to Xcode's native constraints in Interface Builder to support every shape and size of the iPhone.</p>
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

export default FrescoiPhone;
