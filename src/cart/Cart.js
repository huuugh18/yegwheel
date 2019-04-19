import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './cart.css'
import {toCatalogItem} from '../functions'
import CartItem from './CartItem'
import { Button, Table, TableBody, TableHead, Paper } from '@material-ui/core'
import SimpleRow from './SimpleRow'



const Container = ({children}) => <div className='checkout-container'>{children}</div>
const FormHeader = () => <div className='checkoutHeader'>Cart</div>
const FormContainer = ({children}) => <div className='shipping-form-container'>{children}</div>

const canCheckout = (items) => {
  if(!items || !items.length) return false
  return true
}

const getTotal = (items, state) => {
  const total = items.reduce((accum, item) => {
    const {productCode, quantity} = item
    const {price} = toCatalogItem(productCode, state.catalog)
    const qty = accum.qty + quantity
    const amount = accum.amount + (price * quantity)
    return {qty, amount}
  }, {qty:0, amount:0})
  return total    
}

const columnHeadings = ["Product","Quantity", "Price", "Subtotal"]

const HeaderSection = () => <TableHead><SimpleRow cells={columnHeadings} /></TableHead>
const TotalRow = ({qty, amount}) => <SimpleRow cells={['','',`Total(${qty} items):`,`$${amount.toFixed(2)}`]} />
const ButtonsContainer = ({children}) => <div className='checkout-button-container'>{children}</div>

const Component = props => {
  const {items, history, state} = props
  const total = getTotal(items, state)
  return (
    <Container>
      <Paper elevation={3} className='checkout-stepper'>
        <FormHeader />
        <FormContainer>
          <Table>
            <HeaderSection />
            <TableBody>
              {
                items.map((item) => <CartItem {...item} />)
              }
              <TotalRow {...total} />
            </TableBody>
          </Table>
        </FormContainer>
        <ButtonsContainer><Button variant='contained' disabled={!canCheckout(items)} onClick={() => history.push('/checkout/billing')}>Proceed to Checkout</Button></ButtonsContainer>
      </Paper>
    </Container>
  )
}

const mapState = state => {
  const {cart:{items}} = state
  return { items, state }
}

export default withRouter(connect(mapState)(Component));
