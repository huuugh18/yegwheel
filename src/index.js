import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import appstore from './appstore'
import { BrowserRouter as Router } from "react-router-dom";
//import { StripeProvider} from 'react-stripe-elements';

ReactDOM.render(<Provider store={appstore}>
  <Router>
    <App />
  </Router>
</Provider>, document.getElementById('root'));
      // <StripeProvider apiKey='pk_test_upQ7P9IIf73Ucyo2zFwxluAM000mJP2HB6'>
      // </StripeProvider>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
