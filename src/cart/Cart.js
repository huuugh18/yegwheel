import React, { } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './cart.css'
import {getTotal} from '../functions'
import CartItem from './CartItem'
import Next from '@material-ui/icons/NavigateNext'
import {Table, TableBody, TableCell, TableHead, TableRow, Button, Paper } from '@material-ui/core'

const canCheckout = (items) => {
    return !items ? false : true
}

const inheritFont = {fontSize:'inherit',fontWeight:600}

const Component = props => {
    const {items, history, total} = props
    return (
        <div className='cart-container'>
            <Paper elevation={2} className='cart'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={inheritFont}>Product</TableCell>
                            <TableCell style={inheritFont}>Quantity</TableCell>
                            <TableCell style={inheritFont}>Price</TableCell>
                            <TableCell style={inheritFont}>Subtotal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            items.map( (item,i) => <CartItem key={'k'+i} {...item} />)
                        }
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell style={inheritFont}>Total:</TableCell>
                            <TableCell style={inheritFont}>${total}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className='place-order-line'>
                    <Button variant='contained' color='primary' disabled={!canCheckout(items)} onClick={() => history.push('/checkout/shipping')}>Proceed to Checkout  <Next style={{marginLeft:'8px'}}/></Button>
                </div>
            </Paper>
        </div>

    )
}


const mapState = state => {
    const {cart} = state
    const {items} = cart
    const total = getTotal(items)
    return {
      items,
      total 
    }
  }

  export default withRouter(connect(mapState,null)(Component))