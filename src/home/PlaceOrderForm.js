import React, { useState } from 'react';
import {connect} from 'react-redux'

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from '@material-ui/core'

const HomeDialogField = ({id, label, type, value, onChange, autoFocus, rows, multiline}) => <TextField className='home-dialog-form-field' {...{id, label, type, onChange, value, autoFocus, rows, multiline}}  />
const NameField = ({value, onChange}) => <HomeDialogField id='purchase-name' label='Name' type='text' {...{onChange, value}} autoFocus />
const EmailField = ({value, onChange}) => <HomeDialogField id='purchase-email' label='Email' type='email' {...{onChange, value}} />
const PhoneField = ({value, onChange}) => <HomeDialogField id='purchase-phone' label='Phone Number' type='number' {...{onChange, value}} />
const CommentField = ({value, onChange}) => <HomeDialogField id='purchase-comments' label='Comments' {...{onChange, value}} multiline rows={5} />

export const PurchaseForm = props => {
  const {addItem, productCode, dialogOpen, setDialog} = props
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')
  return (
    <Dialog open={dialogOpen} onClose={()=> setDialog(false)}>
      <DialogTitle>Purchase Inquiry</DialogTitle>
      <DialogContent>
        <DialogContentText>
            Please fill in your information below and we will get back to you as soon as we can.
        </DialogContentText>
        <NameField onChange={e => setName(e.target.value)} value={name} />
        <br/>
        <EmailField onChange={e => setEmail(e.target.value)} value={email}/>
        <br/>
        <PhoneField onChange={e => setPhone(e.target.value)} value={phone} />
        <br/>
        <CommentField onChange={e => setComment(e.target.value)} value={comment}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDialog(false)} color='secondary'> Cancel </Button>
        <Button onClick={() => {
          addItem(productCode, name, email, phone, comments)
          setDialog(false)
          }} color='primary'> Submit </Button>
      </DialogActions>
    </Dialog>
  )
}

const addStateProps = state => ({})
const addDispatchProps = dispatch => {
  return {
    addItem: (productCode, name, email, phone, comments) => dispatch({type:'ADD_ITEM', payload:{productCode, name, email, phone, comments}})
  }
}

export default connect(addStateProps, addDispatchProps)(PurchaseForm);



