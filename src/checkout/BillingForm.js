import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './checkout.css'
import * as SELECT from '../rdxstore/selectors'

import { TextField, Button } from '@material-ui/core';

const WF1 = props => <TextField className='checkout-field wide-text-field' required {...props} />

const FullNameField  = ({setFullName, fullName})     => <WF1 id='fullName' name='fullName' label='Full Name'  autoComplete='fname' onChange={setFullName} value={fullName} />
const AddressField   = ({setAddress, address})       => <WF1 id='address1' name='address1' label='Address'  autoComplete='billing address-line1' onChange={setAddress} value={address}/>

const CityField      = ({setCity, city})             => <TextField className='checkout-field' required id='city' name='city' label='City' autoComplete='billing address-level2' onChange={setCity} value={city}/>
const ProvField      = ({setProvince, province})     => <TextField className='checkout-field' required id='province' name='province' label='Province'  onChange={setProvince} value={province}/>
const EmailField     = ({setEmail, email})           => <TextField className='checkout-field' required id='email' type='email' name='email' label='Email' autoComplete='email' onChange={setEmail} value={email}/>
const PhoneField     = ({setPhone, phone})           => <TextField className='checkout-field' required id='phone' name='phone' label='Phone Number' onChange={setPhone} value={phone}/>
const PostalField    = ({setPostalCode, postalCode}) => <TextField className='checkout-field' required id='postalCode' name='postalCode' label='PostalCode'  onChange={setPostalCode} value={postalCode}/>
const CountryField   = ({setCountry, country})       => <TextField className='checkout-field' required id='country' name='country' label='Country'  onChange={setCountry} value={country}/>
//const CommentField   = ({setComments, comments})     => <WF1 id='comments' name='comments' label='Comments' multiline={true} rows={5} onChange={setComments} value={comments}/>
const NextButton     = ({getNextPage, isValid})               => <Button className={'checkout-nav-btn'} variant='contained' disabled={!isValid} onClick={getNextPage}>Next</Button>


const BillingForm = (props) => {
  const {setFullName, setAddress, setPhone, setEmail, setCity, setProvince, setPostalCode, setCountry, checkout, getNextPage, isValid} = props
  const {fullName, email, phone, address, city, province, country, postalCode} = checkout
  return (
    <div>
      <div className='checkout-subheader'>Billing Information</div>
      <div className='shipping-form-container'>
        <div>
          <FullNameField {...{setFullName, fullName}} />
          <br/>
          <EmailField {...{setEmail, email}} />
          <PhoneField {...{setPhone, phone}} />
          <br/>
          <AddressField {...{setAddress, address}} />
          <br/>
          <CityField {...{setCity,city}} />
          <ProvField {...{setProvince, province}} />
          <br/>
          <PostalField {...{setPostalCode, postalCode}} />
          <CountryField {...{setCountry, country}} />
        </div>
      </div>
      <div className='checkout-button-container'>
        <NextButton {...{getNextPage, isValid}} />
      </div>
    </div>
  )
}

const mapState = (state) => {
  const {checkout} = state
  return {
    checkout,
    isValid: SELECT.getBillingValid(state)
  }
}

const mapDispatch = (dispatch,{history}) => { 
  return {
    getNextPage: () => {
      dispatch({type:'SET_CHECKOUT_STEP',payload:{step:1}})
      history.push('/checkout/payment')
    },
    setFullName:   event => dispatch({type:'SET_FULL_NAME',   payload:{value:event.target.value}}),
    setAddress:    event => dispatch({type:'SET_ADDRESS',     payload:{value:event.target.value}}),
    setEmail:      event => dispatch({type:'SET_EMAIL',       payload:{value:event.target.value}}),
    setPhone:      event => dispatch({type:'SET_PHONE',       payload:{value:event.target.value}}),
    setCity:       event => dispatch({type:'SET_CITY',        payload:{value:event.target.value}}),
    setProvince:   event => dispatch({type:'SET_PROVINCE',    payload:{value:event.target.value}}),
    setPostalCode: event => dispatch({type:'SET_POSTAL_CODE', payload:{value:event.target.value}}),
    setCountry:    event => dispatch({type:'SET_COUNTRY',     payload:{value:event.target.value}}),
    setComments:   event => dispatch({type:'SET_COMMENTS',    payload:{value:event.target.value}}),
  }
}

export default withRouter(connect(mapState,mapDispatch)(BillingForm))