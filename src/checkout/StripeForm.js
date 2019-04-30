import React from 'react'
import {connect} from 'react-redux'
import './checkout.css'
import {CardElement, injectStripe } from 'react-stripe-elements';
import { Button } from '@material-ui/core';

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding,
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

const StripeForm = ({submitStripe}) => <div style={{width: '75%',padding:'10px 50px'}}>
  <form onSubmit={submitStripe} style={{backgroundColor:'white', padding:'20px'}}>
    <div style={{marginBottom:10}}>Credit or debit card</div>
    <CardElement {...createOptions('16px', '20px')} />
    <br/>
    <br/>
    <Button onClick={submitStripe} variant='contained'>Submit Payment</Button>
  </form>
</div>

const mapDispatch = (dispatch,{stripe}) => {
  return {
    submitStripe: e => {
      e.preventDefault();
      dispatch({type:'REQUEST_STRIPE_TOKEN',payload:{stripe, name:'Henry Ford'}})
    }
  }
}

export default injectStripe(connect(null,mapDispatch)(StripeForm))



