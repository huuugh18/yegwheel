import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './cart.css'
import {catalog} from '../data/catalog'
import {toCatalogItem, withCommas} from '../functions'
import CartItem from './CartItem'
//import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core'
import {  TextField, Paper, Button } from '@material-ui/core'


const Customer = ({children}) => <div className='customer'>{children}</div>

const Cart = ({children}) => <Paper elevation={2} className='cart'>{children}</Paper>
const Container = ({children}) => <div className='cart-container'>{children}</div>

const canCheckout = (items, email, phone) => {
  if(!items || !items.length) return false
  if(email || phone) return  false
  return true
}

const CommaCell = ({value}) => <td align='right'>{withCommas(value)}</td>

const TotalItem = ({amount}) => {
  return <tr className='cart-item'>
    <td colSpan={3}>Total</td>
    <CommaCell value={amount} />
    <td />
  </tr>
}

const Items = ({items}) => {
  const total = items.reduce((accum, item) => {
    const {productCode, quantity} = item
    return accum + (toCatalogItem(productCode, catalog).price * quantity)
  }, 0)
  return (<div className='items-table'>
    <table>
      <tbody>
        {items.map((item, i) => <CartItem key={'k'+i} {...item}/>)}
        <TotalItem amount={total}/>
      </tbody>
    </table>
  </div>)
}

const HomeDialogField = ({id, label, type, value, onChange, autoFocus, rows, multiline}) => <TextField className='home-dialog-form-field' {...{id, label, type, onChange, value, autoFocus, rows, multiline}}  />
const NameField = ({value, onChange}) => <HomeDialogField id='purchase-name' label='Name' type='text' {...{onChange, value}} autoFocus />
const EmailField = ({value, onChange}) => <HomeDialogField id='purchase-email' label='Email' type='email' {...{onChange, value}} />
const PhoneField = ({value, onChange}) => <HomeDialogField id='purchase-phone' label='Phone Number' type='text' {...{onChange, value}} />

const Component = props => {
  const {name, email, phone, items, history, setName, setEmail, setPhone} = props
   return (
      <Container>
        <Cart>
          <Customer >
            <NameField onChange={e => setName(e.target.value)} value={name} />
            <EmailField onChange={e => setEmail(e.target.value)} value={email} />
            <PhoneField onChange={e => setPhone(e.target.value)} value={phone} />
          </Customer>
          <Items items={items}  />
          <div className='place-order-line'>
            <Button variant='contained' disabled={!canCheckout(items)} onClick={() => history.push('/checkout')}>Proceed to Checkout!</Button>
          </div>
        </Cart>
      </Container>
    )
  }

const mapState = state => {
  const {cart} = state
  const {name, email, phone, comments, items} = cart
  const itemCount = items.length
  return {
    name, email, phone, comments,
    items,
    itemCount 
  }
}

const mapDispatch = dispatch => ({
  setName:  value => dispatch({type: 'SET_NAME', payload: {value}}),
  setEmail: value => dispatch({type: 'SET_EMAIL', payload: {value}}),
  setPhone: value => dispatch({type: 'SET_PHONE', payload: {value}})
})

export default withRouter(connect(mapState, mapDispatch)(Component));