import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './checkout.css'
import {CardElement, injectStripe} from 'react-stripe-elements';

import { Button } from '@material-ui/core';

const PaymentInfo = ({getNextPage,getPrevPage,submitStripe}) => {
    return <div>
                <div className='checkout-subheader'>Payment Information</div>
                <div id='shipping-form-container'>
                    <CardElement />
                    <Button onClick={submitStripe} variant='contained'>Submit</Button>
                </div>
                <div className='checkout-button-container'>
                    <Button variant='contained' disabled={false} onClick={getPrevPage}>
                        Back
                    </Button>
                    <Button variant='contained' disabled={false} onClick={getNextPage}>
                        Next
                    </Button>
                </div>
                
        </div>
}

const mapDispatch = (dispatch,{history}) => {
    return {
        getNextPage: () => {
            history.push('/checkout/review')
            dispatch({type:'SET_CHECKOUT_STEP',payload:{step:2}})
        },
        getPrevPage: () => {
            history.push('/checkout/shipping')
            dispatch({type:'SET_CHECKOUT_STEP',payload:{step:0}})
        },
        submitStripe: () => {

        }
    }
}

export default withRouter(connect(null,mapDispatch)(injectStripe(PaymentInfo)))