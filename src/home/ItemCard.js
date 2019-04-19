import React from 'react'
import {connect} from 'react-redux'
import {toCatalogItem} from '../functions'
import PurchaseCard from './PurchaseCard'

const ItemCard = ({productCode, img, catalog}) => {
  const item = toCatalogItem(productCode, catalog)
  const {name, description, price} = item
  return <PurchaseCard {...{name, productCode, price, description:description}} img={img} />
}

const mapState = ({catalog}) => ({catalog})

export default connect(mapState)(ItemCard)
