import { createSelector } from 'reselect'
import { toCatalogItem } from '../functions'

const getCatalog = state => state.catalog
const getItems = state => state.cart.items
const getCheckout = state => state.checkout

export const getAddress = createSelector(
  getCheckout,
  (checkout) => {
    const {address, city, province, country, postalCode} = checkout
    return ({address, city, province, country, postalCode})
  }
)
export const getName = createSelector(getCheckout,checkout => checkout.fullName)
export const getEmail = createSelector(getCheckout, checkout => checkout.email)
export const getPhone = createSelector(getCheckout, checkout => checkout.phone)

export const getBillingValid = createSelector(
  [getName, getEmail, getPhone],
  (name, email, phone) => name && email && phone
)

export const getCanConfirm = createSelector(
  [getBillingValid],
  (getBillingValid) => getBillingValid
)

export const getItemTotals = createSelector(
  [getCatalog, getItems],
  (catalog, items) => items.reduce(({qty, amt}, item) => {
    const {price} = toCatalogItem(item.productCode, catalog)
    qty += item.quantity
    amt += price * item.quantity
    return {amt, qty}
  }, {qty:0, amt:0})
)

export const getTotalAmount = createSelector(
  [getItemTotals],
  (totals) => totals.amt
)

export const getTotalQuantity = createSelector(
  [getItemTotals],
  (totals) => totals.qty
)

export const canCheckout = createSelector(
  getTotalQuantity,
  qty => qty > 0
) 

