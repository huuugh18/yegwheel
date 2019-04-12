import {createStore} from 'redux'
import produce from 'immer'
import {addDelta} from './functions'


let defaultState = {
  auth: {
    connected: false
  },
  cart: {
    items: [
      {productCode:'blgmu',quantity:2}
    ]
  },
  checkout:{
    activeStep:0,
    token: null,
    orderComplete: false,
    nameFirst: 'Yegwheel',
    nameLast: '',
    email: 'something@yegwheel.com',
    phone: '1234567891',
    address: '',
    city: '',
    province: '',
    country:'',
    postalCode: '',
    comments: 'Hi there',
  }
}

const ADD_ITEM = 'ADD_ITEM'
const RESET_CART = 'RESET_CART'
const DELETE_ITEM = 'DELETE_ITEM'
const ADJUST_QUANTITY = 'ADJUST_QUANTITY'
const SET_FIRST_NAME = 'SET_FIRST_NAME'
const SET_LAST_NAME = 'SET_LAST_NAME'
const SET_ADDRESS = 'SET_ADDRESS'
const SET_EMAIL = 'SET_EMAIL'
const SET_PHONE = 'SET_PHONE'
const SET_CITY = 'SET_CITY'
const SET_PROVINCE = 'SET_PROVINCE'
const SET_COUNTRY = 'SET_COUNTRY'
const SET_POSTAL_CODE = 'SET_POSTAL_CODE'
const SET_CHECKOUT_STEP ='SET_CHECKOUT_STEP'
const SET_STRIPE_TOKEN = 'SET_STRIPE_TOKEN'
const SET_ORDER_COMPLETE = 'SET_ORDER_COMPLETE'
const SET_ORDER_ERROR = 'SET_ORDER_ERROR'
const SET_CONNECTED = 'SET_CONNECTED'

const setOrderError = (draft,payload) => {
  draft.checkout.orderError = payload.error
}

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

const setFirstName = (draft, payload) => {
  draft.checkout.firstName = payload.value
}
const setLastName = (draft, payload) => {
  draft.checkout.lastName = payload.value
}
const setEmail = (draft, payload) => {
  draft.checkout.email = payload.value
}
const setPhone = (draft, payload) => {
  draft.checkout.phone = payload.value
}
const setAddress = (draft, payload) => {
  draft.checkout.address = payload.value
}
const setCity = (draft, payload) => {
  draft.checkout.city = payload.value
}
const setProvince = (draft, payload) => {
  draft.checkout.province = payload.value
}
const setCountry = (draft, payload) => {
  draft.checkout.country = payload.value
}
const setPostalCode = (draft, payload) => {
  draft.checkout.postalCode = payload.value
}

const setConnected = (draft, payload)  => {
  const {value, accessToken, idToken, expiresAt} = payload
  draft.auth.connected = value
  draft.auth.accessToken =   accessToken
  draft.auth.idToken =   idToken
  draft.auth.expiresAt =  expiresAt
}

const reducer = (state=defaultState, action) =>  {
  const {type, payload} = action
  const nextState = produce(state, draft => {
    switch(type) {
      case ADD_ITEM:  addItem(draft, payload); break;
      case RESET_CART: resetCart(draft); break;
      case DELETE_ITEM: deleteItem(draft, payload); break;
      case ADJUST_QUANTITY: adjustQuantity(draft, payload); break;
      case SET_FIRST_NAME: setFirstName(draft, payload); break;
      case SET_LAST_NAME: setLastName(draft,payload); break;
      case SET_EMAIL: setEmail(draft, payload); break;
      case SET_PHONE: setPhone(draft, payload); break;
      case SET_ADDRESS: setAddress(draft,payload); break;
      case SET_CITY: setCity(draft,payload); break;
      case SET_PROVINCE: setProvince(draft,payload); break;
      case SET_COUNTRY: setCountry(draft,payload); break;
      case SET_POSTAL_CODE: setPostalCode(draft,payload); break;
      case SET_CHECKOUT_STEP: setCheckoutStep(draft, payload); break;
      case SET_STRIPE_TOKEN: setStripeToken(draft, payload); break;
      case SET_ORDER_COMPLETE: setOrderComplete(draft); break;
      case SET_ORDER_ERROR: setOrderError(draft,payload); break;
      case SET_CONNECTED: setConnected(draft, payload); break;
      default: break;
    }
  })
  return nextState
}



export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())