import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'

import * as SELECT from '../../rdxstore/selectors'

const styles = () => ({
  button: {
    marginTop: '24px',
    marginLeft: '8px',
  }
});

const FinalizeOrderButton = (props) => {
  console.log(props)
  const {checkout, items, submitOrder, classes, canConfirm} = props
  return <Button className={classes.button} color='primary' variant='contained' disabled={!canConfirm} onClick={() => submitOrder(checkout, items)}> Order </Button>
}

const mapState = state => {
  const {checkout, cart:{items}} = state
  return { 
    checkout, items,
    canConfirm: SELECT.getCanConfirm(state) 
  }
}

const mapDispatch = (dispatch) => {
  return {
    submitOrder: (checkout, items) => dispatch({type:'SET_ORDER', checkout, items})    
  }
}

export default connect(mapState,mapDispatch)(withStyles(styles)(FinalizeOrderButton))
