import React from 'react'
import { connect } from 'react-redux'
import { injectStripe } from 'react-stripe-elements'
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import * as SELECT from '../rdxstore/selectors'

const styles = theme => ({
  button: {
    marginTop: '24px',
    marginLeft: '8px',
  }
});

const StripeSubmitButton = (props) => {
  console.log(props)
  const {items, itemTotals, checkout, submitOrder, classes, canConfirm} = props
  return <Button className={classes.button} color='primary' variant='contained' disabled={!canConfirm} onClick={() => submitOrder(items, checkout, itemTotals)}> Order </Button>
}

const mapState = state => {
  const {checkout} = state
  return ({ 
    checkout,
    items: state.cart.items,
    itemTotals:SELECT.getItemTotals(state),
    canConfirm: SELECT.getCanConfirm(state) 
  })
}

const mapDispatch = (dispatch) => {
  return {
    submitOrder: (items, checkout, itemTotals) => dispatch({type:'SET_ORDER', items, checkout, itemTotals})    
  }
}

//  const {name, email, phone, items, total, comments, stripeToken} = action.payload


export default injectStripe(connect(mapState,mapDispatch)(withStyles(styles)(StripeSubmitButton)))

// almost done with checkout