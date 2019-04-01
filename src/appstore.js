import {createStore} from 'redux'
import produce from 'immer'
import {addDelta} from './functions'

let defaultState = {
  cart: {
    name: '',
    email: '',
    phone: '',
    comments: '',
    items: []
  }
}

const ADD_ITEM = 'ADD_ITEM'
const RESET_CART = 'RESET_CART'
const DELETE_ITEM = 'DELETE_ITEM'
const ADJUST_QUANTITY = 'ADJUST_QUANTITY'
const SET_NAME = 'SET_NAME'
const SET_EMAIL = 'SET_EMAIL'
const SET_PHONE = 'SET_PHONE'

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
      default: break;
    }
  })
  return nextState
}



export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())