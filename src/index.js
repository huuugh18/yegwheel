import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { Router } from "react-router-dom";
import { StripeProvider} from 'react-stripe-elements';

import * as serviceWorker from './serviceWorker';
import App from './App';
import rdxstore from './rdxstore/rdxstore'
import './index.css';
import history from './history'

ReactDOM.render(<Provider store={rdxstore}>
  <StripeProvider apiKey='pk_test_E504MzzvtPpryBrd0nAReUv500WRtY4eAf'>
    <Router history={history}>
      <App />
    </Router>
  </StripeProvider>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
