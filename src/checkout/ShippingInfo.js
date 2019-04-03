import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './checkout.css'

import { TextField, Button } from '@material-ui/core';

const ShippingForm = ({getNextPage}) => {
    return <div>
                <div className='checkout-subheader'>Shipping Information</div>
                <div id='shipping-form-container'>
                    <TextField className='checkout-field' required id='firstName' name='firstName' label='First Name'  autoComplete='fname' />                    
                    <TextField className='checkout-field' required id='lastName' name='lastName' label='Last Name'  autoComplete='lname' />                    
                    <br/>
                    <TextField className='checkout-field' required id='address1' name='address1' label='Address'  autoComplete='billing address-line1'/>
                    <br/>
                    <TextField className='checkout-field' required id='city' name='city' label='City'  autoComplete='billing address-level2' />
                    <TextField className='checkout-field' required id='province' name='province' label='Province'  />
                    <br/>
                    <TextField className='checkout-field' required id='postalCode' name='postalCode' label='PostalCode'  />
                    <TextField className='checkout-field' required id='country' name='country' label='Country'  />
                </div>
                <div className='checkout-button-container'>
                    <Button variant='contained' disabled={false} onClick={getNextPage}>
                        Next
                    </Button>
                </div>
                
        </div>
}

const mapDispatch = (dispatch,{history}) => {
    return {
        getNextPage: () => {
            dispatch({type:'SET_CHECKOUT_STEP',payload:{step:1}})
            history.push('/checkout/payment')
        }
    }
}

export default withRouter(connect(null,mapDispatch)(ShippingForm))