import React from 'react';
import {connect} from 'react-redux'
import {catalog} from '../data/catalog'
import {toCatalogItem} from '../functions'

import {TableRow, TableCell, IconButton} from '@material-ui/core'
import { RemoveCircleOutline, AddCircleOutline, HighlightOff } from '@material-ui/icons';

const noMargin = {margin:'0px'}
const inheritFont = {fontSize:'inherit'}

const CartItem = ({productCode, quantity, fnDelete, fnMore, fnLess}) => {
    const catalogItem = toCatalogItem(productCode, catalog)
    const {name,price} = catalogItem
    return <TableRow >
            <TableCell style={inheritFont}>
                <IconButton aria-label='Remove' onClick={fnDelete} style={noMargin}><HighlightOff/></IconButton>
                {name}
            </TableCell>
            <TableCell style={inheritFont}>
                <IconButton aria-label='Decrease' color='primary' onClick={fnLess} style={noMargin}><RemoveCircleOutline/></IconButton>
                {quantity}
                <IconButton color='primary' size='small' aria-label='Add' onClick={fnMore} style={noMargin}><AddCircleOutline/></IconButton>
            </TableCell>
            <TableCell style={inheritFont}>{`$${price}`}</TableCell>
            <TableCell style={inheritFont}>{`$${price*quantity}`}</TableCell>
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