import React, { } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './cart.css'
import {getTotal} from '../functions'
import CartItem from './CartItem'

import {Table, TableBody, TableCell, TableHead, TableRow, Button, Paper } from '@material-ui/core'

const canCheckout = (items) => {
    return !items ? false : true
}


const Component = props => {
    const {items, history, total} = props
    return (
        <div className='cart-container'>
            <Paper elevation={2} className='cart'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Subtotal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            items.map( (item,i) => <CartItem key={'k'+i} {...item} />)
                        }
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>Total:</TableCell>
                            <TableCell>${total}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className='place-order-line'>
                    <Button variant='contained' disabled={!canCheckout(items)} onClick={() => history.push('/checkout/shipping')}>Proceed to Checkout!</Button>
                </div>
            </Paper>
        </div>

    )
}


const mapState = state => {
    const {cart} = state
    const {items} = cart
    const total = getTotal(items)
    console.log('TOTAL:',total)
    return {
      items,
      total 
    }
  }

  export default withRouter(connect(mapState,null)(Component))