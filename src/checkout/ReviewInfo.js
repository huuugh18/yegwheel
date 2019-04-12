import React, { } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { Elements} from 'react-stripe-elements'

import './checkout.css'
import { toCatalogItem } from '../functions'
import {Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core'
import { catalog } from '../data/catalog';

import StripeSubmitOrder from './StripeSubmitOrderButton'

const styles = theme => ({
    button: {
        marginTop: '24px',
        marginLeft: '8px',
    },
});
  

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

const ReviewOrder = ({getPrevPage,items,total,token,classes}) => {
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
                    <Button className={classes.button}  disabled={false} onClick={getPrevPage}>
                        Back
                    </Button>
                    <Elements>
                        <StripeSubmitOrder token={token} total={total}/>
                    </Elements>

                </div>
                
        </div>
}

const mapState = state => {
    const {cart:{items},checkout:{token}} = state
    const total = items.reduce((accum, item) => accum + toCatalogItem(item.productCode, catalog).price, 0)
    return {items,total,token}
}

const mapDispatch = (dispatch,{history}) => {
    return {
        getPrevPage: () => {
            dispatch({type:'SET_CHECKOUT_STEP',payload:{step:1}})
            history.push('/checkout/payment')
        },
        
    }
}

export default withRouter(connect(mapState,mapDispatch)(withStyles(styles)(ReviewOrder)))