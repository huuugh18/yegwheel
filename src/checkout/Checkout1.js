import React, { useState } from 'react'
import {withRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import './checkout.css'
import {catalog} from '../data/catalog'
import {toCatalogItem, withCommas} from '../functions'

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
            <Route path={'/checkout/payment'} exact component={PaymentInfo}/>
            <Route path={'/checkout/review'} exact component={ReviewInfo}/>
        </Paper>
    </div>
    
}


const mapState = state => {
    const activeStep = state.checkout.activeStep

    return {activeStep}
} 

const mapDispatch = dispatch => ({
    setActiveStep: (step) => { dispatch({type:'SET_CHECKOUT_STEP',payload:{step}}) }
})

export default withRouter(connect(mapState, mapDispatch)(Checkout))