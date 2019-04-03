import React from 'react'
import {withRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {Elements} from 'react-stripe-elements';

import './checkout.css'

import {Paper, Stepper, Step, StepLabel} from '@material-ui/core'
import ShippingInfo from './ShippingInfo'
import PaymentInfo from './PaymentInfo'
import ReviewInfo from './ReviewInfo'

const Checkout = ({activeStep}) => {
    return <div className='checkout-container'>
        <Paper elevation={3} className='checkout-stepper'>
            <div className='checkoutHeader'>Checkout</div>
            <Stepper activeStep={activeStep}>
                <Step><StepLabel>Shipping Information</StepLabel></Step>
                <Step><StepLabel>Payment Information</StepLabel></Step>
                <Step><StepLabel>Review Order</StepLabel></Step>
            </Stepper>
            <Route path={'/checkout/shipping'} exact component={ShippingInfo}/>
            <Elements>
                <Route path={'/checkout/payment'} exact component={PaymentInfo}/>
            </Elements>
            <Route path={'/checkout/review'} exact component={ReviewInfo}/>
        </Paper>
    </div>
    
}


const mapState = state => {
    const activeStep = state.checkout.activeStep
    return {activeStep}
} 

export default withRouter(connect(mapState)(Checkout))