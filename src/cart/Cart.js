import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './cart.css'
import CartItem from './CartItem'
import { Button, Table, TableBody, TableHead, Paper } from '@material-ui/core'
import SimpleRow from './SimpleRow'
import * as SELECT from '../rdxstore/selectors'


const Container = ({children}) => <div className='checkout-container'>{children}</div>
const FormHeader = () => <div className='checkoutHeader'>Cart</div>
const FormContainer = ({children}) => <div className='shipping-form-container'>{children}</div>

const columnHeadings = ["Product","Quantity", "Price", "Subtotal"]

const HeaderSection = () => <TableHead><SimpleRow cells={columnHeadings} /></TableHead>
const TotalRow = ({totals}) => {
  const {qty, amt} = totals
  return <SimpleRow cells={['','',`Total (${qty} items):`,`$${amt.toFixed(2)}`]} />
}
const ButtonsContainer = ({children}) => <div className='checkout-button-container'>{children}</div>

const Component = props => {
  const {items, history, canCheckout, totals} = props
  return (
    <Container>
      <Paper elevation={3} className='checkout-stepper'>
        <FormHeader />
        <FormContainer>
          <Table>
            <HeaderSection />
            <TableBody>
              {
                items.map((item,i) => <CartItem key={'key'+i} {...item} />)
              }
              <TotalRow {...{totals}} />
            </TableBody>
          </Table>
        </FormContainer>
        <ButtonsContainer><Button variant='contained' disabled={!canCheckout} onClick={() => history.push('/checkout/billing')}>Proceed to Checkout</Button></ButtonsContainer>
      </Paper>
    </Container>
  )
}

const mapState = state => {
  const {cart:{items}} = state
  return { 
    items, 
    canCheckout: SELECT.canCheckout(state),
    totals: SELECT.getItemTotals(state)
   }
}

export default withRouter(connect(mapState)(Component));
