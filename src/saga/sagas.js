import { all } from 'redux-saga/effects'
import { handle_GET_PRODUCTLIST } from './productList'
import { handle_SET_ORDER } from './order'
import { handle_REQUEST_STRIPE_TOKEN } from './stripe'
import { handle_ADD_TO_CART } from './addToCart'
import { handleAuthenticationCallback } from './auth'

export default function* rootSaga() {
  yield all([
    handle_GET_PRODUCTLIST(),
    handle_SET_ORDER(),
    handle_REQUEST_STRIPE_TOKEN(),
    handle_ADD_TO_CART(),
    handleAuthenticationCallback()
  ])
}

//https://stripe.com/docs/recipes/elements-react - handle server charge call
//response.ok ?  dispatch({type:'SET_ORDER_COMPLETE'}) : dispatch({type:'SET_ORDER_ERROR',payload:{error:response.error}})
