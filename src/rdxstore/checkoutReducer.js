import produce from 'immer'

// const defaultState = {
//   activeStep:0,
//   token: null,
//   orderComplete: false,
//   fullName: 'Sarah Hoffman',
//   email: 'sarah@gov.ab.ca',
//   phone: '780-555-1212',
//   address: '10123 Jasper Ave',
//   city: 'Edmonton',
//   province: 'Alberta',
//   country:'Canada',
//   postalCode: 'T5T 3T1',
//   comments: 'Some comments',
// }

// next up... wire the purchase in

const defaultState = {
  activeStep:0,
  token: null,
  orderComplete: false,
  fullName: '',
  email: '',
  phone: '',
  address: '',
  city: 'Edmonton',
  province: 'Alberta',
  country:'Canada',
  postalCode: '',
  comments: ''
}


const SET_FULL_NAME = 'SET_FULL_NAME'
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

const setOrderError = (draft,payload) => {
  draft.orderError = payload.error
}

const setOrderComplete = (draft) => {
  draft.orderComplete = true
}

const setStripeToken = (draft,payload) => {
  draft.token = payload.token
}

const setCheckoutStep = (draft, payload) => {
  draft.activeStep = payload.step
}
const setFullName = (draft, payload) => {
  draft.fullName = payload.value
}
const setEmail = (draft, payload) => {
  draft.email = payload.value
}
const setPhone = (draft, payload) => {
  draft.phone = payload.value
}
const setAddress = (draft, payload) => {
  draft.address = payload.value
}
const setCity = (draft, payload) => {
  draft.city = payload.value
}
const setProvince = (draft, payload) => {
  draft.province = payload.value
}
const setCountry = (draft, payload) => {
  draft.country = payload.value
}
const setPostalCode = (draft, payload) => {
  draft.postalCode = payload.value
}

const reducer = (state=defaultState, action) =>  {
  const {type, payload} = action
  const nextState = produce(state, draft => {
    switch(type) {
      case SET_FULL_NAME: setFullName(draft, payload); break;
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
      default: break;
    }
  })
  return nextState
}

export default reducer