import React from 'react';
import {connect} from 'react-redux'
import {catalog} from '../data/catalog'
import {toCatalogItem, withCommas} from '../functions'

const CommaCell = ({value}) => <td align='right'>{withCommas(value)}</td>

const CartItem = ({productCode, quantity, fnDelete, fnMore, fnLess}) => {
  const catalogItem = toCatalogItem(productCode, catalog)
  const {name, price} = catalogItem
  return <tr className='cart-item'>
    <td>{name}</td>
    <td>
      <div className='quantity'>
        <div>{quantity}</div>
        <div className='plusminus'>
          <div onClick={fnMore}>+</div>
          <div onClick={fnLess}>-</div>
        </div>
      </div>
    </td>
    <CommaCell value={price} />
    <CommaCell value={price*quantity} />
    <td onClick={fnDelete}>x</td>
  </tr>
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

export default connect(mapState, mapDispatch)(CartItem)