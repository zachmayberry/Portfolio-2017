import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Home from './pages/Home';
import SUHNetwork from './pages/SUHNetwork';
import SUHMarketing from './pages/SUHMarketing';
import SUHHub from './pages/SUHHub';
import FrescoiPhone from './pages/FrescoiPhone';
import FrescoTV from './pages/FrescoTV';
import WeightWatchers from './pages/WeightWatchers';
import LehighValley from './pages/LehighValley';
import WeightWatchersSuperBowl from './pages/WeightWatchersSuperBowl';
import Heap from './pages/Heap';

function scrollToTop(scrollDuration) {
    var cosParameter = window.scrollY / 2,
        scrollCount = 0,
        oldTimestamp = performance.now();
    function step (newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
        if (scrollCount >= Math.PI) window.scrollTo(0, 0);
        if (window.scrollY === 0) return;
        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}

class ScrollToTopRoute extends Component {
  componentDidUpdate(prevProps) {
    setTimeout(function() {
      scrollToTop(500);
    }, 300);
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return <Route {...rest} render={props => (<Component {...props} />)} />;
  }
}

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <div>
      <ScrollToTopRoute exact path="/" component={Home}/>
      <ScrollToTopRoute path="/work/fresco/iphone" component={FrescoiPhone}/>
      <ScrollToTopRoute path="/work/fresco/tv" component={FrescoTV}/>
      <ScrollToTopRoute path="/work/suh/network" component={SUHNetwork}/>
      <ScrollToTopRoute path="/work/suh/marketing" component={SUHMarketing}/>
      <ScrollToTopRoute path="/work/suh/hub" component={SUHHub}/>
      <ScrollToTopRoute path="/work/ww/landingpage" component={WeightWatchers}/>
      <ScrollToTopRoute path="/work/ww/superbowl" component={WeightWatchersSuperBowl}/>
      <ScrollToTopRoute path="/work/lehighvalley/network" component={LehighValley}/>
      <ScrollToTopRoute path="/work/heap" component={Heap}/>
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
