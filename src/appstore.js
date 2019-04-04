import {createStore} from 'redux'
import produce from 'immer'
import {addDelta} from './functions'

let defaultState = {
  cart: {
    name: 'Yegwheel',
    email: 'something@yegwheel.com',
    phone: '1234567891',
    comments: 'Hi there',
    items: [
      {productCode:'blgmu',quantity:2}
    ]
  },
  checkout:{
    activeStep:0,
    token: null,
    orderComplete: false,
  }
}

const ADD_ITEM = 'ADD_ITEM'
const RESET_CART = 'RESET_CART'
const DELETE_ITEM = 'DELETE_ITEM'
const ADJUST_QUANTITY = 'ADJUST_QUANTITY'
const SET_NAME = 'SET_NAME'
const SET_EMAIL = 'SET_EMAIL'
const SET_PHONE = 'SET_PHONE'
const SET_CHECKOUT_STEP ='SET_CHECKOUT_STEP'
const SET_STRIPE_TOKEN = 'SET_STRIPE_TOKEN'
const SET_ORDER_COMPLETE = 'SET_ORDER_COMPLETE'

const setOrderComplete = (draft) => {
  draft.checkout.orderComplete = true
}

const setStripeToken = (draft,payload) => {
  draft.checkout.token = payload.token
}

const setCheckoutStep = (draft, payload) => {
  draft.checkout.activeStep = payload.step
}

const addItem = (draft, payload) => {
  const {productCode, quantity} = payload
  const newItem = { productCode, quantity }
  draft.cart.items.push(newItem)
}

const resetCart = draft => draft.cart.items = []

const deleteItem =(draft, payload) => {
  const {productCode} = payload
  const index = draft.cart.items.findIndex(item => item && item.productCode === productCode)
  draft.cart.items.splice(index, 1);
}

const adjustQuantity = (draft, payload) => {
  const {productCode, delta} = payload
  const index = draft.cart.items.findIndex(item => item.productCode === productCode)
  const item = draft.cart.items[index]
  const newQuantity = addDelta(item.quantity, delta)
  draft.cart.items[index].quantity = newQuantity
}

const setName = (draft, payload) => {
  draft.cart.name = payload.value
}
const setEmail = (draft, payload) => {
  draft.cart.email = payload.value
}
const setPhone = (draft, payload) => {
  draft.cart.phone = payload.value
}

const reducer = (state=defaultState, action) =>  {
  const {type, payload} = action
  const nextState = produce(state, draft => {
    switch(type) {
      case ADD_ITEM:  addItem(draft, payload); break;
      case RESET_CART: resetCart(draft); break;
      case DELETE_ITEM: deleteItem(draft, payload); break;
      case ADJUST_QUANTITY: adjustQuantity(draft, payload); break;
      case SET_NAME: setName(draft, payload); break;
      case SET_EMAIL: setEmail(draft, payload); break;
      case SET_PHONE: setPhone(draft, payload); break;
      case SET_CHECKOUT_STEP: setCheckoutStep(draft, payload); break;
      case SET_STRIPE_TOKEN: setStripeToken(draft, payload); break;
      case SET_ORDER_COMPLETE: setOrderComplete(draft); break
      default: break;
    }
  })
  return nextState
}



export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())