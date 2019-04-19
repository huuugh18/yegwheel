import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core'
import { Elements } from 'react-stripe-elements'

import '../checkout.css'
import Address from './Address'
import * as SELECT from '../../rdxstore/selectors'
import * as FUN from '../../functions'

import StripeSubmitOrder from '../StripeSubmitOrderButton'

const styles = theme => ({
  button: {
    marginTop: '24px',
    marginLeft: '8px',
  },
});

const SimpleRow = ({cells}) => <TableRow>
  <TableCell>{cells[0]}</TableCell>
  <TableCell>{cells[1]}</TableCell>
  <TableCell>{cells[2]}</TableCell>
  <TableCell>{cells[3]}</TableCell>
</TableRow>

const ToCartCells = (productCode, quantity, state) => {
  const {name, price} = FUN.toCatalogItem(productCode, state.catalog)
  return [name, quantity, `$${price}`, `$${price*quantity}`]
}

const columnHeadings = ["Product","Quantity", "Price", "Subtotal"]

const CartItem         = ({productCode, quantity, state}) => <SimpleRow cells={ToCartCells(productCode, quantity, state)} /> 
const SubmitButton     = ({token, total}) =>  <Elements><StripeSubmitOrder {...{token, total}} /></Elements>
const BackButton       = ({classes, getPrevPage}) => <Button className={classes.button} disabled={false} onClick={getPrevPage}>Back</Button>
const HeaderSection    = () => <TableHead><SimpleRow cells={columnHeadings} /></TableHead>
const FormContainer    = ({children}) => <div className='shipping-form-container'>{children}</div>
const ButtonsContainer = ({children}) => <div className='checkout-button-container'>{children}</div>
const TitleLine        = () => <div className='checkout-subheader'>Confirmation</div>
const TotalRow         = ({itemTotals}) => <SimpleRow cells={['','',"Total:",`$${itemTotals.amt}`]} />

const ReviewOrder = ({ getPrevPage, items, token, classes, state, itemTotals}) => (
  <div>
    <TitleLine />
    <Address />
    <FormContainer>
      <Table>
        <HeaderSection />                    
        <TableBody>
          {
            items.map( (item,i) => <CartItem key={'k'+i} {...item} state={state} />)
          }
          <TotalRow {...{itemTotals}} />
        </TableBody>
      </Table>
    </FormContainer>
    <ButtonsContainer>
      <BackButton {...{classes, getPrevPage}} />
      <SubmitButton {...{token, total: itemTotals.amt}}/>
    </ButtonsContainer>
  </div>
)

const mapState = state => {
  const {cart:{items},checkout:{token}} = state
  return {
    items, token, state, 
    itemTotals:SELECT.getItemTotals(state)
  }
}

const mapDispatch = (dispatch,{history}) => ({
  getPrevPage: () => {
    dispatch({type:'SET_CHECKOUT_STEP',payload:{step:1}})
    history.push('/checkout/payment')
  }
})

export default withRouter(connect(mapState,mapDispatch)(withStyles(styles)(ReviewOrder)))

