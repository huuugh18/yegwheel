import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
//import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/sagas'

import auth from './authReducer'
import cart from './cartReducer'
import checkout from './checkoutReducer'
import catalog from './catalogReducer'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  auth, cart, checkout, catalog
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);

//sagaMiddleware.run(testSaga)
sagaMiddleware.run(rootSaga)

export default store