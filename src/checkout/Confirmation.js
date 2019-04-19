import React, { } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles';

import './checkout.css'
import { toCatalogItem } from '../functions'
import { Elements} from 'react-stripe-elements'
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core'

import StripeSubmitOrder from './StripeSubmitOrderButton'

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
  const {name, price} = toCatalogItem(productCode, state.catalog)
  return [name, quantity, `$${price}`, `$${price*quantity}`]
}

const columnHeadings = ["Product","Quantity", "Price", "Subtotal"]

const CartItem = ({productCode, quantity, state}) => <SimpleRow cells={ToCartCells(productCode, quantity, state)} /> 
const SubmitButton = ({token, total}) => <Elements><StripeSubmitOrder {...{token, total}} /></Elements>
const BackButton = ({classes, getPrevPage}) => <Button className={classes.button} disabled={false} onClick={getPrevPage}>Back</Button>
const HeaderSection = () => <TableHead><SimpleRow cells={columnHeadings} /></TableHead>
const FormContainer = ({children}) => <div className='shipping-form-container'>{children}</div>
const ButtonsContainer = ({children}) => <div className='checkout-button-container'>{children}</div>
const TitleLine = () => <div className='checkout-subheader'>Confirmation</div>
const TotalRow = ({total}) => <SimpleRow cells={['','',"Total:",`$${total}`]} />

const ReviewOrder = ({getPrevPage,items,total,token,classes,state}) => (
  <div>
    <TitleLine />
    <FormContainer>
      <Table>
        <HeaderSection />                    
        <TableBody>
          {
            items.map( (item,i) => <CartItem key={'k'+i} {...item} state={state} />)
          }
          <TotalRow {...{total}} />
        </TableBody>
      </Table>
    </FormContainer>
    <ButtonsContainer>
      <BackButton {...{classes, getPrevPage}} />
      <SubmitButton {...{token, total}}/>
    </ButtonsContainer>
  </div>
)

const mapState = state => {
  const {catalog, cart:{items},checkout:{token}} = state
  const total = items.reduce((accum, item) => {
    const {productCode, quantity} = item
    const {price} = toCatalogItem(productCode, catalog)
    const amount = price * quantity
    return accum + amount
  }, 0)
  return {items,total,token, state}
}

const mapDispatch = (dispatch,{history}) => ({
  getPrevPage: () => {
    dispatch({type:'SET_CHECKOUT_STEP',payload:{step:1}})
    history.push('/checkout/payment')
  }
})

export default withRouter(connect(mapState,mapDispatch)(withStyles(styles)(ReviewOrder)))