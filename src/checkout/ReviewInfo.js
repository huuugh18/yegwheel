import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './checkout.css'

import { TextField, Button } from '@material-ui/core';

const ReviewOrder = ({getNextPage,getPrevPage}) => {
    return <div>
                <div className='checkout-subheader'>Review Order</div>
                <div id='shipping-form-container'>
                    bunch of order stuff
                </div>
                <div className='checkout-button-container'>
                    <Button variant='contained' disabled={false} onClick={getPrevPage}>
                        Back
                    </Button>
                    <Button variant='contained' disabled={false} onClick={console.log('place order')}>
                        Order
                    </Button>
                </div>
                
        </div>
}

const mapDispatch = (dispatch,{history}) => {
    return {
        getPrevPage: () => {
            dispatch({type:'SET_CHECKOUT_STEP',payload:{step:1}})
            history.push('/checkout/payment')
        }
    }
}

export default withRouter(connect(null,mapDispatch)(ReviewOrder))