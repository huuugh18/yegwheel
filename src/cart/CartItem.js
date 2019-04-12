import React from 'react';
import {connect} from 'react-redux'
import {catalog} from '../data/catalog'
import {toCatalogItem} from '../functions'

import {TableRow, TableCell, IconButton} from '@material-ui/core'
import { RemoveCircleOutline, AddCircleOutline, HighlightOff } from '@material-ui/icons';

const CartItem = ({productCode, quantity, fnDelete, fnMore, fnLess}) => {
    const catalogItem = toCatalogItem(productCode, catalog)
    const {name,price} = catalogItem
    return <TableRow >
            <TableCell>
                <IconButton aria-label='Remove' onClick={fnDelete}><HighlightOff/></IconButton>
                {name}
            </TableCell>
            <TableCell>
                <IconButton aria-label='Decrease' color='primary' onClick={fnLess}><RemoveCircleOutline/></IconButton>
                {quantity}
                <IconButton color='primary' size='small' aria-label='Add' onClick={fnMore}><AddCircleOutline/></IconButton>
            </TableCell>
            <TableCell>{`$${price}`}</TableCell>
            <TableCell>{`$${price*quantity}`}</TableCell>
    </TableRow>
}

const mapState = () => ({})

const mapDispatch = (dispatch, props) => {
  const {productCode} = props
  return ({
    fnDelete: () => {
      const action = {type: 'DELETE_ITEM', payload:{productCode}}
      dispatch(action)
    },
    fnMore: () => {
      const action = {type: 'ADJUST_QUANTITY', payload:{productCode, delta: 1}}
      dispatch(action)  
    },
    fnLess: () => {
      const action = {type: 'ADJUST_QUANTITY', payload:{productCode, delta: -1}}
      dispatch(action)
    }
  })
}



export default connect(mapState,mapDispatch)(CartItem)