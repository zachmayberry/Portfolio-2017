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

class SUHNetwork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cocoenIsLoaded: false,
      imageStatus: 'loading'
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
        <Header main={<div>Design. Build. Repeat.</div>} sub={<div>StartUp Health Network</div>} imgUrl="/img/startuphealthnetwork-top-screenshot" />

        <section className="container">
          <div className="grid-fifty">
            <h1 className="header__small">About</h1>
            <h2 className="header__large">Rethinking health-connection</h2>
            <p className="text__basic">I worked with StartUp Health to rethink and rebuild their network to help health-focused entrepreneurs, investors, and advisors have a platform to connect.</p>
          </div>

          <div className="grid-fifty">
            <h1 className="header__small">Details</h1>
            <ul className="list__detail">
              <li>UX Design & Front-end Development</li>
              <li>Sketch, Invision, Framer, Backbone.js</li>
              <li>Worked together 2012 - 2017</li>
            </ul>
          </div>
        </section>

        <br />

        <section className="container">
          <div className="screenshot__wrap">
            <div className={cocoenClass}>
              <img alt="" src="/img/suhnetwork-comparison-old.png" srcSet="/img/suhnetwork-comparison-old@2x.png 2x" />
              <img alt="" src="/img/suhnetwork-comparison-new.png" srcSet="/img/suhnetwork-comparison-new@2x.png 2x" />
            </div>
          </div>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">Before &amp; After</h1>
            <h2 className="header__large">Restructuring the data</h2>
            <p className="text__basic">The goal was to present the data in a variety of ways to better suit the current viewer of the profile. Each set of data is broken up into contextual themes differentiated by color.</p>
          </div>
        </section>

        <section className="container">
          <div className="screenshot__wrap screenshot__wrap--teal screenshot__wrap--scrollable">
            <div>
              <img alt="" src="/img/startuphealthnetwork-builder-screenshot.png" srcSet="/img/startuphealthnetwork-builder-screenshot@2x.png 2x" />
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
              <img alt="" src="/img/suhnetwork-slider-1.png" srcSet="/img/suhnetwork-slider-1@2x.png 2x" />
            </div>

            <div className="screenshot__wrap screenshot__wrap--blue">
              <img alt="" src="/img/suhnetwork-slider-2.png" srcSet="/img/suhnetwork-slider-2@2x.png 2x" />
            </div>

            <div className="screenshot__wrap screenshot__wrap--green">
              <img alt="" src="/img/suhnetwork-slider-3.png" srcSet="/img/suhnetwork-slider-3@2x.png 2x" onLoad={this.handleImageLoaded.bind(this)} />
            </div>
          </Slider>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">Customization</h1>
            <h2 className="header__large">Unique to each company</h2>
            <p className="text__basic">In an effort to encourage usage of the platform, we enabled entrepreneurs to create their own cover photos for featuring their product or team's unique culture.</p>
          </div>
        </section>

        <section className="container">
          <div className="screenshot__wrap">
            <img alt="" src="/img/suhnetwork-components-screenshot.png" srcSet="/img/suhnetwork-components-screenshot@2x.png 2x" />
          </div>

          <div className="screenshot__caption screenshot__caption--center">
            <h1 className="header__small">Components</h1>
            <h2 className="header__large">Consistent UI Components</h2>
            <p className="text__basic">The next step was to enable users to build custom views into their data that allowed them to present themselves better to each audience. For example: funding data for potential Investors.</p>
          </div>
        </section>

        <section className="container">
          <div className="grid-forty">
            <div className="screenshot__wrap screenshot__wrap--scrollable screenshot__wrap--mobile">
              <div>
                <img alt="" src="/img/suhnetwork-mobile-screenshot.png" srcSet="/img/suhnetwork-mobile-screenshot@2x.png 2x" />
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

export default SUHNetwork;
