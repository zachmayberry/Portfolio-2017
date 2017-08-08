import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import Wrapper from './Wrapper';
import registerServiceWorker from './registerServiceWorker';
import SUHNetwork from './pages/SUHNetwork';
import SUHMarketing from './pages/SUHMarketing';
import SUHHub from './pages/SUHHub';
import FrescoiPhone from './pages/FrescoiPhone';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Wrapper}/>
      <Route path="/work/fresco/iphone" component={FrescoiPhone}/>
      <Route path="/work/suh/network" component={SUHNetwork}/>
      <Route path="/work/suh/marketing" component={SUHMarketing}/>
      <Route path="/work/suh/hub" component={SUHHub}/>
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
