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

const StripeForm = ({submitStripe}) => {
    return <div style={{width: '75%',padding:'50px'}}>
        <form onSubmit={submitStripe}>
            <CardElement {...createOptions('16px', '20px')} />
            <br/>
            <br/>
            <Button type='submit' variant='contained'>Submit</Button>
        </form>
    </div>
}

const mapDispatch = (dispatch,{stripe}) => {
    return {
        submitStripe: async function (ev) {
            ev.preventDefault();
            stripe.createToken({name: "Doug"}).then(result => {
                dispatch({type:'SET_STRIPE_TOKEN',payload:{token:result.token}})
            });
        }
    }
}

export default injectStripe(connect(null,mapDispatch)(StripeForm))