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
    {/* <Button type='submit' variant='contained'>Submit Payment</Button> */}
    <Button onClick={submitStripe} variant='contained'>Submit Payment</Button>
  </form>
</div>

const mapDispatch = (dispatch,{stripe}) => {
  return {
    submitStripe: async function (ev) {
      ev.preventDefault();
      let createTokenResult = await stripe.createToken({name:"Doug"})
      let {token} = createTokenResult
      let {id} = token
      dispatch({type:'SET_STRIPE_TOKEN',payload:{token:id}})
    }
  }
}

export default injectStripe(connect(null,mapDispatch)(StripeForm))



