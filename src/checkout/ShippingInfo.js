import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './checkout.css'

import { TextField, Button } from '@material-ui/core';

const ShippingForm = ({getNextPage,setFirstName ,setLastName ,setAddress ,setPhone , setEmail, setCity ,setProvince ,setPostalCode ,setCountry,setComments,
    nameFirst,nameLast,email,phone,address,city,province,country,postalCode,comments}) => {
    return <div>
                <div className='checkout-subheader'>Shipping Information</div>
                <div id='shipping-form-container'>
                    <TextField className='checkout-field' required id='firstName' name='firstName' label='First Name'  autoComplete='fname' onChange={setFirstName} value={nameFirst} />                     
                    <TextField className='checkout-field' required id='lastName' name='lastName' label='Last Name'  autoComplete='lname' onChange={setLastName} value={nameLast}  />                   
                    <br/>
                    <TextField className='checkout-field' required id='email' type='email' name='email' label='Email' autocomplete='email' onChange={setEmail} value={email}/>
                    <TextField className='checkout-field' required id='phone' name='phone' label='Phone Number' onChange={setPhone} value={phone}/>
                    <br/>
                    <TextField className='checkout-field' required id='address1' name='address1' label='Address'  autoComplete='billing address-line1' onChange={setAddress} value={address}/>
                    <br/>
                    <TextField className='checkout-field' required id='city' name='city' label='City'  autoComplete='billing address-level2' onChange={setCity} value={city}/>
                    <TextField className='checkout-field' required id='province' name='province' label='Province'  onChange={setProvince} value={province}/>
                    <br/>
                    <TextField className='checkout-field' required id='postalCode' name='postalCode' label='PostalCode'  onChange={setPostalCode} value={postalCode}/>
                    <TextField className='checkout-field' required id='country' name='country' label='Country'  onChange={setCountry} value={country}/>
                    <br/>
                    <TextField className='checkout-field' id='comments' name='comments' label='Comments' multiline={true} rows={5} onChange={setComments} value={comments}/>
                </div>
                <div className='checkout-button-container'>
                    <Button className={'checkout-nav-btn'} variant='contained' disabled={false} onClick={getNextPage}>
                        Next
                    </Button>
                </div>
                
        </div>
}

const mapState = (state) => {
    const {checkout:{nameFirst,nameLast,email,phone,address,city,province,country,postalCode,comments}} = state
    return {nameFirst,nameLast,email,phone,address,city,province,country,postalCode,comments}
}

const mapDispatch = (dispatch,{history}) => {
    return {
        getNextPage: () => {
            dispatch({type:'SET_CHECKOUT_STEP',payload:{step:1}})
            history.push('/checkout/payment')
        },
        setFirstName: event => dispatch({type:'SET_FIRST_NAME',payload:{value:event.target.value}}),
        setLastName: event => dispatch({type:'SET_LAST_NAME',payload:{value:event.target.value}}),
        setAddress: event => dispatch({type:'SET_ADDRESS',payload:{value:event.target.value}}),
        setEmail: event => dispatch({type:'SET_EMAIL',payload:{value:event.target.value}}),
        setPhone: event => dispatch({type:'SET_PHONE',payload:{value:event.target.value}}),
        setCity: event => dispatch({type:'SET_CITY',payload:{value:event.target.value}}),
        setProvince: event => dispatch({type:'SET_PROVINCE',payload:{value:event.target.value}}),
        setPostalCode: event => dispatch({type:'SET_POSTAL_CODE',payload:{value:event.target.value}}),
        setCountry: event => dispatch({type:'SET_COUNTRY',payload:{value:event.target.value}}),
        setComments: event => dispatch({type:'SET_COMMENTS',payload:{value:event.target.value}}),
    }
}

export default withRouter(connect(mapState,mapDispatch)(ShippingForm))