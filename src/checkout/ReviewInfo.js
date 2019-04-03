import React, { } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './checkout.css'
import {toCatalogItem, withCommas} from '../functions'

import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import { catalog } from '../data/catalog';

const CartItem = ({productCode, quantity}) => {
    const catalogItem = toCatalogItem(productCode, catalog)
    const {name,price} = catalogItem
    return <TableRow >
            <TableCell>{name}</TableCell>
            <TableCell>{quantity}</TableCell>
            <TableCell>{`$${price}`}</TableCell>
            <TableCell>{`$${price*quantity}`}</TableCell>
    </TableRow>
}

const ReviewOrder = ({submitOrder,getPrevPage,items,total}) => {
    return <div>
                <div className='checkout-subheader'>Review Order</div>
                <div id='shipping-form-container'>
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
                </div>
                <div className='checkout-button-container'>
                    <Button variant='contained' disabled={false} onClick={getPrevPage}>
                        Back
                    </Button>
                    <Button variant='contained' disabled={false} onClick={submitOrder}>
                        Order
                    </Button>
                </div>
                
        </div>
}

const mapState = state => {
    const {cart:{items}} = state
    const total = items.reduce((accum, item) => accum + toCatalogItem(item.productCode, catalog).price, 0)
    return {items,total}
}

const mapDispatch = (dispatch,{history}) => {
    return {
        getPrevPage: () => {
            dispatch({type:'SET_CHECKOUT_STEP',payload:{step:1}})
            history.push('/checkout/payment')
        },
        submitOrder: () => {
            console.log('ORDER SUBMITTED')
        }
    }
}

export default withRouter(connect(mapState,mapDispatch)(ReviewOrder))