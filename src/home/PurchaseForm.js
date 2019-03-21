import React, { useState } from 'react';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { TextField, Button } from '@material-ui/core'

export const PurchaseFormDialog = ({open,setDialog}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setComment] = useState('')
    return (
        <Dialog open={open} onClose={()=> setDialog(false)}>
                <DialogTitle>Purchase Inquiry</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill in your information below and we will get back to you as soon as we can.
                    </DialogContentText>
                    <TextField 
                        autoFocus
                        className='home-dialog-form-field'
                        id='purchase-name'
                        label='Name'
                        type='text'
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    <br/>
                    <TextField
                        id='purchase-email'
                        className='home-dialog-form-field'
                        label='Email'
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <br/>
                    <TextField
                        id='purchase-phone'
                        className='home-dialog-form-field'
                        label='Phone Number'
                        type='number'
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                    />
                    <br/>
                    <TextField
                        id='purchase-comments'
                        className='home-dialog-form-field'
                        label='Comments'
                        onChange={e => setComment(e.target.value)}
                        value={comment}
                        multiline
                        rows={5}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialog(false)} color='secondary'> Cancel </Button>
                    <Button onClick={() => setDialog(false)} color='primary'> Submit </Button>
                </DialogActions>
            </Dialog>
    )
}

export default PurchaseFormDialog
