import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { Elements } from 'react-stripe-elements';
import { Button } from '@material-ui/core';
import './checkout.css'

import StripeForm from './StripeForm'

const styles = theme => ({
  button: {
    marginTop: '24px',
    marginLeft: '8px',
  },
});

const BackButton = ({getPrevPage, classes}) => (<Button className={classes.button} disabled={false} onClick={getPrevPage}>
    Back
  </Button>
)
const NextButton = ({getNextPage, classes}) => <Button className={classes.button} color='primary' variant='contained' disabled={false} onClick={getNextPage}>
    Next
</Button>

const PaymentInfo = ({getNextPage,getPrevPage,stripe,classes}) => {
  return <div>
    <div className='checkout-subheader'>Payment Information</div>
    <div className='shipping-form-container'>
        <Elements>
          <StripeForm stripe={stripe}/>
        </Elements>
    </div>
    <div className='checkout-button-container'>
      <BackButton {...{classes, getPrevPage}} />
      <NextButton {...{classes, getNextPage}} />
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
  }
}

export default withRouter(connect(null,mapDispatch)(withStyles(styles)(PaymentInfo)))