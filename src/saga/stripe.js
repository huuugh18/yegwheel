/*
  This saga sends users card info to strip and gets a purchase token back from stripe
  The token will later be sent along with the cart details to the yegwheel server to actually take the payment from the user
  So the workflow is 
    1. Intercept action that requests card data be sent to stripe
    2. Send the card data to stripe, await result
    3. Create and submit an action that adds the received stripe token to the checkout data
*/
import {call, put, takeLatest} from 'redux-saga/effects'
import history from '../history'

function* requestStripeTokenSaga(action){
  console.log('using the requestStripeTokenSaga')
  try {
    yield put({type: "REQUEST_STRIPETOKEN_START"})
    const {name, stripe} = action.payload // can we get stripe from a require? 
  
    const {token:{id}} = yield stripe.createToken({name})  // can it be as simple as changing await to yield?
  
    yield put ({type:'SET_STRIPE_TOKEN',payload:{token:id}})
    yield put({type: "REQUEST_STRIPETOKEN_END"})
    yield call(history.push, '/checkout/confirmation')
    put({type:'SET_CHECKOUT_STEP',payload:{step:2}})
  }
  catch(err) {
    console.log('err in requestStripeTokenSaga, is ', err)
    yield put({type:'REQUEST_STRIPETOKEN_FAILED'})
  }
}

export function* handle_REQUEST_STRIPE_TOKEN() {
  yield takeLatest("REQUEST_STRIPE_TOKEN", requestStripeTokenSaga)  
}



