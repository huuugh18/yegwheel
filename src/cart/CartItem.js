import React from 'react';
import { TableRow, TableCell, TextField } from '@material-ui/core'
import {toCatalogItem} from '../functions'
import {connect} from 'react-redux'

const QuantityCell = ({quantity, go}) => <TableCell>
  <TextField type="number" value={quantity} style={{width:60}} onChange={e=>go(e.target.value)} />
</TableCell>

const CartItem = ({name, quantity, price, rowTotal, go}) => {
  return <TableRow>
    <TableCell>{name}</TableCell>
    <QuantityCell {...{quantity, go}} />
    <TableCell>${price.toFixed(2)}</TableCell>
    <TableCell>${rowTotal.toFixed(2)}</TableCell>
  </TableRow> 
}

const mapState = (state, props) => {
  const {productCode, quantity} = props
  const {name, price} = toCatalogItem(productCode, state.catalog)
  const rowTotal = price*quantity
  return {
    name, quantity, price, rowTotal    
  }
}

const mapDispatch = (dispatch, props) => {
  const {productCode, quantity} = props
  const go = (newQuantity) => {
    const delta = newQuantity - quantity
    const action = {type: 'ADJUST_QUANTITY', payload:{productCode, delta}}
    dispatch(action)
  }
  return {go}
}

export default connect(mapState, mapDispatch)(CartItem)






