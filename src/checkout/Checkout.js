import React from 'react';
import {connect} from 'react-redux'
import './checkout.css'

const Simple = ({name, value}) => <div className='simple'><div>{name}:</div><div>{value}</div></div>

const CustName = ({value}) => <Simple name="Name" value={value} />
const Email = ({value}) => <Simple name="Email" value={value} />
const Phone = ({value}) => <Simple name="Phone" value={value} />
const Comments = ({value}) => <Simple name="Comments" value={value} />

const Items = ({count}) => <div className='items'> There are {count} items in your cart!</div>
const Customer = ({children}) => <div className='customer'>{children}</div>

const Cart = ({children}) => <div className='cart'>{children}</div>
const Container = ({children}) => <div className='store-container'>{children}</div>

const canCheckout = (items, email, phone) => {
  if(!items || !items.length) return false
  if(email || phone) return  false
  return true
}

const Component = props => {
  const {name, email, phone, comments, itemCount, placeOrder, items} = props
   return (
      <Container>
        <Cart>
          <Customer {...{name, email, phone, comments}} >
            <CustName value={name} />
            <Email value={email} />
            <Phone value={phone} />
            <Comments value={comments} />
          </Customer>
          <Items count={itemCount}  />
          <button disabled={!canCheckout(items)} onClick={() => placeOrder(name, email, phone, comments, items)}>Place Order</button>
        </Cart>
      </Container>
    )
  }

const mapState = state => {
  const {cart} = state
  const {name, email, phone, comments, items} = cart
  const itemCount = items.length
  return {
    name, email, phone, comments,
    items,
    itemCount 
  }
}

const addItemsToComment = (comment, items) => {
  const itemList = items.join(",")
  return `${comment}
Ordered Items: ${itemList}`
}

const mapDispatch = dispatch => ({
  placeOrder: async function(name, email, phone, comments, items) {
    comments = addItemsToComment(comments, items)
    const fieldValues = {
       name, email, phone, comments
    }
    dispatch({type:'RESET_CART'})
    const response = await fetch('https://yegwheel2019as.azurewebsites.net/api/inquiry',{
      method:'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(fieldValues)
    })
    const json = await response.json()
    const {id} = json
    if(id) alert(`thank you for your request, the id of the request is ${id}; we will be in touch.`)
    else alert(`Our apologies, we couldn't process your request, please try again later.`)
  }
})

export default connect(mapState, mapDispatch)(Component);