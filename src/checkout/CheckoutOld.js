// import React from 'react';
// import {withRouter} from 'react-router-dom'
// import {connect} from 'react-redux'
// import './checkout.css'
// import {catalog} from '../data/defaultCatalog'
// import {toCatalogItem, withCommas} from '../functions'

// const Simple = ({name, value}) => <div className='simple'><div>{name}:</div><div>{value}</div></div>

// const CustName = ({value}) => <Simple name="Name" value={value} />
// const Email = ({value}) => <Simple name="Email" value={value} />
// const Phone = ({value}) => <Simple name="Phone" value={value} />
// const Comments = ({value}) => <Simple name="Comments" value={value} />

// const Customer = ({children}) => <div className='customer'>{children}</div>

// const Cart = ({children}) => <div className='cart'>{children}</div>
// const Container = ({children}) => <div className='checkout-container'>{children}</div>

// const canCheckout = (items, email, phone, name) => {
//   if(!items || !items.length) return false
//   if(!email && !phone) return false;
//   if(!name) return false;
//   return true
// }

// const CommaCell = ({value}) => <td align='right'>{withCommas(value)}</td>

// const CartItem = ({productCode, quantity}) => {
//   const catalogItem = toCatalogItem(productCode, catalog)
//   const {name, price} = catalogItem
//   return <tr className='cart-item'>
//     <td>{name}</td>
//     <td>{quantity}</td>
//     <CommaCell value={price} />
//     <CommaCell value={price*quantity} />
//   </tr>
// }
// const TotalItem = ({amount}) => {
//   return <tr className='cart-item'>
//     <td colSpan={3}>Total</td>
//     <CommaCell value={amount} />
//   </tr>
// }

// const Items = ({items}) => {
//   const total = items.reduce((accum, item) => accum + toCatalogItem(item.productCode, catalog).price, 0)
//   return (<div className='items-table'>
//     <table>
//       <tbody>
//         {items.map((item, i) => <CartItem key={'k'+i} {...item}/>)}
//         <TotalItem amount={total}/>
//       </tbody>
//     </table>
//   </div>)
// }


// const Component = props => {
//   const {name, email, phone, comments, placeOrder, items, history} = props

//   const yesCanCheckout = canCheckout(items)
//   console.log('canCheckout', yesCanCheckout)

//    return (
//       <Container>
//         <Cart>
//           <Customer {...{name, email, phone, comments}} >
//             <CustName value={name} />
//             <Email value={email} />
//             <Phone value={phone} />
//             {/* <Comments value={comments} /> */}
//           </Customer>
//           <Items items={items}  />
//           <div className='place-order-line'>
//             <button onClick={()=>history.push('/cart')}>Back to cart</button>
//             <button disabled={!canCheckout(items, email, phone, name)} onClick={() => placeOrder(name, email, phone, comments, items)}>Place Order</button>
//           </div>
//         </Cart>
//       </Container>
//     )
//   }

// const mapState = state => {
//   const {cart} = state
//   const {name, email, phone, comments, items} = cart
//   const itemCount = items.length
//   return {
//     name, email, phone, comments,
//     items,
//     itemCount 
//   }
// }

// const addItemsToComment = (comment, items) => `${comment}
// Ordered Items: ${items.map(({productCode, quantity}) => `${productCode}:${quantity}`).join(",")}`

// const mapDispatch = dispatch => ({
//   placeOrder: async function(name, email, phone, comments, items) {
//     comments = addItemsToComment(comments, items)
//     const fieldValues = {
//        name, email, phone, comments
//     }
//     dispatch({type:'RESET_CART'})
//     const response = await fetch('https://yegwheel2019as.azurewebsites.net/api/inquiry',{
//       method:'POST',
//       cache: 'no-cache',
//       headers: {
//         'Content-Type':'application/json'
//       },
//       body: JSON.stringify(fieldValues)
//     })
//     const json = await response.json()
//     const {id} = json
//     if(id) alert(`thank you for your request, the id of the request is ${id}; we will be in touch.`)
//     else alert(`Our apologies, we couldn't process your request, please try again later.`)
//   }
// })

// export default withRouter(connect(mapState, mapDispatch)(Component));