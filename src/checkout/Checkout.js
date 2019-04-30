import React from 'react'
import {withRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import './checkout.css'

import {Paper, Stepper, Step, StepLabel} from '@material-ui/core'
import BillingForm from './BillingForm'
import PaymentForm from './PaymentForm'
import Confirmation from './Confirmation/Confirmation'

const Checkout = ({activeStep}) => {
  return <div className='checkout-container'>
    <Paper elevation={3} className='checkout-stepper'>
      <div className='checkoutHeader'>Checkout</div>
      <Stepper activeStep={activeStep}>
        <Step><StepLabel>Billing Information</StepLabel></Step>
        <Step><StepLabel>Payment Method</StepLabel></Step>
        <Step><StepLabel>Confirmation</StepLabel></Step>
      </Stepper>
      <Route path={'/checkout/billing'} exact component={BillingForm}/>
      <Route path={'/checkout/payment'} exact component={PaymentForm}/>
      <Route path={'/checkout/confirmation'} exact component={Confirmation}/>
    </Paper>
  </div>
}

const mapState = state => {
    const activeStep = state.checkout.activeStep
    return {activeStep}
} 

export default withRouter(connect(mapState)(Checkout))